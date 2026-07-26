import { useState, useEffect } from 'react';

export interface ReleaseData {
  version: string;
  totalDownloads: number;
  assets: {
    arm64: string;
    arm7: string;
    x86_64: string;
    universal: string;
  };
}

export function useGitHubRelease() {
  const [releaseData, setReleaseData] = useState<ReleaseData>({
    version: 'v1.0.5',
    totalDownloads: 0,
    assets: {
      arm64: 'https://github.com/ITSPRANAV16/TaskFlow/releases/download/v1.0.5/app-arm64-v8a-release.apk',
      arm7: 'https://github.com/ITSPRANAV16/TaskFlow/releases/download/v1.0.5/app-armeabi-v7a-release.apk',
      x86_64: 'https://github.com/ITSPRANAV16/TaskFlow/releases/download/v1.0.5/app-x86_64-release.apk',
      universal: 'https://github.com/ITSPRANAV16/TaskFlow/releases/tag/v1.0.5'
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelease() {
      try {
        const res = await fetch('https://api.github.com/repos/ITSPRANAV16/TaskFlow/releases');
        if (res.ok) {
          const allReleases = await res.json();
          if (Array.isArray(allReleases) && allReleases.length > 0) {
            const latest = allReleases[0];
            const version = latest.tag_name;
            let downloads = 0;
            const newAssets = { ...releaseData.assets };

            // Calculate total downloads across all releases
            allReleases.forEach(release => {
              if (release.assets && Array.isArray(release.assets)) {
                release.assets.forEach(asset => {
                  downloads += asset.download_count || 0;
                });
              }
            });

            // Update assets from latest release
            if (latest.assets && Array.isArray(latest.assets)) {
              latest.assets.forEach(asset => {
                if (asset.name.includes('arm64-v8a')) newAssets.arm64 = asset.browser_download_url;
                else if (asset.name.includes('armeabi-v7a')) newAssets.arm7 = asset.browser_download_url;
                else if (asset.name.includes('x86_64')) newAssets.x86_64 = asset.browser_download_url;
              });
            }
            newAssets.universal = latest.html_url;

            setReleaseData({
              version,
              totalDownloads: downloads,
              assets: newAssets
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch GitHub release data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRelease();
  }, []);

  return { releaseData, loading };
}

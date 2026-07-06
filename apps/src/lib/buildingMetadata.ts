let cache: Record<string, any> | null = null;

export async function fetchBuildingMetadata() {
  if (cache) return cache;

  // Prefer local static JSON if available (fast, avoids API unreliability)
  try {
    // Dynamic import so bundler only includes the file if present
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mod = await import('./building-metadata.json');
    cache = mod?.default ?? mod;
    if (cache) return cache;
  } catch (e) {
    // ignore and fall back to API
  }

  try {
    const res = await fetch('/api/building-metadata');
    if (!res.ok) throw new Error('Failed to fetch building metadata');
    cache = await res.json();
    return cache;
  } catch (err) {
    console.error('fetchBuildingMetadata error', err);
    return {};
  }
}

export async function getBuildingCost(key: string) {
  const meta = await fetchBuildingMetadata();
  return meta?.[key]?.biaya_pembangunan ?? null;
}

let cache: Record<string, any> | null = null;

export async function fetchBuildingMetadata() {
  if (cache) return cache;

  // Try to load category metadata from API (which can access json folder)
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

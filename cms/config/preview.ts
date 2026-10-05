export function getPreviewPath(contentType: string) {
  const pathMap: Record<string, string> = {
    'api::landing.landing': '/',
  }

  return pathMap[contentType] ?? null
}

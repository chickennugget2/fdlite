

export function incrementiRestau(iRestau, restaux) {
  const next = (iRestau + 1) % restaux.length
  localStorage.setItem(`iRestau`, next)
  return next
}
export function resetiRestau() {
  localStorage.clear()
  return 0
}


export function getiRestau() {
  const fromLS = localStorage.getItem(`iRestau`)
  return fromLS ? parseInt(fromLS) : 0
}
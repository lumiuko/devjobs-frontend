function getSearchParams(object) {
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(object)) {
    if (value) {
      searchParams.set(key, value)
    }
  }

  return searchParams
}

export default getSearchParams

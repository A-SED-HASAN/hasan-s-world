export const currentUrl = (slash) => {
  const href = window.location.pathname
  return slash ? href : href.slice(1)
}

export const scroll = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

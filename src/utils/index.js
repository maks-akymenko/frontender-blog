export const isMainPath = location => (
  location.pathname === `${__PATH_PREFIX__}/` ||
  location.pathname === `${__PATH_PREFIX__}/about/` ||
  location.pathname === `${__PATH_PREFIX__}/contact/`
)

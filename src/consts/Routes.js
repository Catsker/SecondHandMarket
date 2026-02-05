export const ROUTES = {
  home: '/',
  about: '/about',
  allshops: '/allshops',
  merchant: '/merchant',
  favourites: '/favourites',
  cart: '/cart',
  profile: '/profile',
}

export const NAV_ROUTES = [
  {
    to: ROUTES.about,
    text: 'About us',
  },
  {
    to: ROUTES.allshops,
    text: 'All shops',
  },
  {
    to: ROUTES.merchant,
    text: 'Become a merchant',
  },
]

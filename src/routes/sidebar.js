/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/transactions',
    icon: 'TablesIcon',
    name: 'Tracking',
  },
  {
    path: '/information',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  // {
  //   path: '/recovery',
  //   icon: 'MoneyIcon',
  //   name: 'Presale & Recovery',
  // },
]

export default routes

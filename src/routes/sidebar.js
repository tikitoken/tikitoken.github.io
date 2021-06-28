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
    path: '/recovery',
    icon: 'CardsIcon',
    name: 'Recovery',
  },
  {
    path: '/tasks',
    icon: 'BellIcon',
    name: 'Grow Your Investment',
  },
  // {
  //   path: '/tikituesday',
  //   icon: 'TablesIcon',
  //   name: 'Tiki Tuesday',
  // },
]

export default routes

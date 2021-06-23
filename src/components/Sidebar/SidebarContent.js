import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="flex ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        <img className="mr-2 w-6 h-8" src="https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c77ebf3b808e1b80cdb0cb_Tiki03-p-500.png" /><span className="self-center">The TIKI Bar</span>
      </a>
      <ul className="mt-6">
        {routes.map((route) => {
          return (route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name === "Cards" ? "Recovery" : route.name}</span>
              </NavLink>
            </li>)
          )
          })}
      </ul>
    </div>
  )
}

export default SidebarContent

import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'

const Page404 = lazy(() => import('../pages/404'))

function Layout(props) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  const { holdings, paid, pending, recent, address, timeSincePayout, setTimeSincePayout, setHoldings, setPaid, setPending, setRecent, setAddress } = props

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header address={address} setAddress={setAddress} />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`${route.path}`}
                    render={(props) => <route.component {...props} address={address} setAddress={setAddress} holdings={holdings} setHoldings={setHoldings} paid={paid} setPaid={setPaid} pending={pending} setPending={setPending} recent={recent} setRecent={setRecent} timeSincePayout={timeSincePayout} setTimeSincePayout={setTimeSincePayout} />}
                  />
                ) : null
              })}
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout

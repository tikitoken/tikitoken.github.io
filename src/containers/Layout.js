import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom'
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
  let history = useHistory();

  const { bnbPrice, totalPaid, holdings, paid, pending, recent, address, timeSincePayout, setTimeSincePayout, setHoldings, setPaid, setPending, setRecent, setAddress } = props

  useEffect(() => {
    closeSidebar()
    if (location.pathname === '/') {
      history.push("/dashboard");
    }
  }, [location])

  console.log(totalPaid)

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header address={address} setAddress={setAddress} />
        <Main>
          {((totalPaid !== 0 && address === '') || (address !== '' && recent !== 1)) ? <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`${route.path}`}
                    render={(props) => <route.component {...props} bnbPrice={bnbPrice} totalPaid={totalPaid} address={address} setAddress={setAddress} holdings={holdings} setHoldings={setHoldings} paid={paid} setPaid={setPaid} pending={pending} setPending={setPending} recent={recent} setRecent={setRecent} timeSincePayout={timeSincePayout} setTimeSincePayout={setTimeSincePayout} />}
                  />
                ) : null
              })}
            </Switch>
          </Suspense> : 
          <div className="w-full h-full flex justify-center">
            <img src='https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c9ca23cfdaec309091e4b0_Logo---Animation--05.gif' className="w-1/4 h-1/3 mt-48 inline-block align-middle"/>
          </div>}
        </Main>
      </div>
    </div>
  )
}

export default Layout
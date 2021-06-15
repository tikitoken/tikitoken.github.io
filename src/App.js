import React, { useState, lazy, useEffect } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const ethers = require('ethers')

const Layout = lazy(() => import('./containers/Layout'))

function App() {

  const [address, setAddress] = useState('')
  const [dividends, setDividends] = useState(0)
  const [unclaimedDividends, setUnclaimedDividends] = useState(0)
  const [lastClaimTime, setLastClaimTime] = useState(0)
  const [claimAvailable, setClaimAvailable] = useState(false)
  const [refreshBool, setRefreshBool] = useState(true)

  const tokenContractAddress = ''
  const trackerContractAddress = ''

  const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/")

  const trackerContract = new ethers.Contract(trackerContractAddress, 'a', provider)

  const tokenContract = new ethers.Contract(tokenContractAddress, 'a', provider)

  const callContract = () => {
    const getStats = tokenContract.getAccountDividendsInfo(address).then((result) =>{
      setUnclaimedDividends(result[1])
      setLastClaimTime(result[2])
      setClaimAvailable(result[3])
      const getTotalClaimed = trackerContract.withdrawnDividendOf(address).then((result) =>{
        setDividends(parseInt(result._hex, 16))
        setTimeout(function(){ setRefreshBool(!refreshBool) }, 9000);
      })
    })
  }

  useEffect(() => {
    if (address.substring(0,2) === '0x' || address.substring(0,2) === '0X') {
      callContract(address)
    }
  }, [address, refreshBool])

  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* Place new routes over this */}
          <Route path="/app" render={(props) => (<Layout {...props} address={address} setAddress={setAddress} unclaimedDividends={unclaimedDividends} dividends={dividends} lastClaimTime={lastClaimTime} claimAvailable={claimAvailable} />)} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to={{pathname: "/app/dashboard", state: {address, dividends, unclaimedDividends, lastClaimTime, claimAvailable}}} />
        </Switch>
      </Router>
    </>
  )
}

export default App

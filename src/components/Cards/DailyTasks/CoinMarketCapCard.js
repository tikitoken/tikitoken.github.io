import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const CoinMarketCapCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="CoinMarketCap"
    logo={require('../../../assets/img/coinmarketcap.png')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      We are listed on CMC! 
      To help get more exposure and enhance market value:
      <br/>
      <br/>✅Use <a href="https://keeprefreshing.com" target="_blank" rel="noopener noreferrer">keeprefreshing.com</a> and set timer to 10 seconds. Open as many tabs as you can.
      <br/>✅Add Tiki Token to watchlist, and tell your friends to do the same.
      <br/>✅Vote 'Good' at the bottom of the page.
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://coinmarketcap.com/currencies/tiki-token/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TIKI on CoinMarketCap
      </a>
    </div>
  </DailyTaskCard>
)

export default CoinMarketCapCard

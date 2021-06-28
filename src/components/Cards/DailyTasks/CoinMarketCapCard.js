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
      Go to TIKI's CoinMarketCap page and click on the STAR to ADD TIKI to your watchlist!
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

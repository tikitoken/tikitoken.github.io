import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const CoinGeckoCard = () => (
  <DailyTaskCard
    title="CoinGecko"
    logo={require('../../../assets/img/logo_coingecko.png')}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Go to TIKI's CoinGecko page and let them know how amazing you think TIKI
      really is.
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://google.com"
      >
        TIKI on CoinGecko
      </a>
    </div>
  </DailyTaskCard>
)

export default CoinGeckoCard

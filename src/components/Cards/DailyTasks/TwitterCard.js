import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const TwitterCard = () => (
  <DailyTaskCard
    title="Twitter"
    logo={require('../../../assets/img/logo_twitter.svg')}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Using the following hashtags in your tweet(s) will increase their ranking,
      get them trending and attract the attention of potential new investors.
    </p>
    <p className="mb-4 text font-bold text-gray-600 dark:text-gray-300">
      #TIKIToken #TIKI1Dollar #TIKIBNB
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://google.com"
      >
        Compose a new tweet
      </a>
    </div>
  </DailyTaskCard>
)

export default TwitterCard

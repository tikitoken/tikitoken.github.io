import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import GoogleCard from '../components/Cards/DailyTasks/GoogleCard'
import YouTubeCard from '../components/Cards/DailyTasks/YouTubeCard'
import TwitterCard from '../components/Cards/DailyTasks/TwitterCard'
import CoinGeckoCard from '../components/Cards/DailyTasks/CoinGeckoCard'
import InstagramCard from '../components/Cards/DailyTasks/InstagramCard'

function DailyTasks() {
  return (
    <>
      <PageTitle className={'mb-0'}>Daily tasks to boost your income</PageTitle>
      <p className={'mt-0 mb-6 dark:text-gray-300'}>
        The tasks outlined below can significantly impact the (future) value of
        your investment.
        <br />
        As such, investors are highly encouraged to perform these tasks daily.
      </p>

      <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
        <GoogleCard />
        <YouTubeCard />
        <TwitterCard />
        <CoinGeckoCard />
        <InstagramCard />
      </div>
    </>
  )
}

export default DailyTasks

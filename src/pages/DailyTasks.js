import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import GoogleCard from '../components/Cards/DailyTasks/GoogleCard'
import YouTubeCard from '../components/Cards/DailyTasks/YouTubeCard'
import TwitterCard from '../components/Cards/DailyTasks/TwitterCard'
import CoinGeckoCard from '../components/Cards/DailyTasks/CoinGeckoCard'
import InstagramCard from '../components/Cards/DailyTasks/InstagramCard'
import { Card, CardBody } from '@windmill/react-ui'

function DailyTasks() {
  const [completedTasks, setCompletedTasks] = useState({
    google: false,
    youtube: false,
    twitter: false,
    coingecko: false,
    instagram: false,
  })

  const completedTasksAmt = Object.values(completedTasks).filter(
    (completed) => !!completed
  ).length

  return (
    <>
      <PageTitle className={'mb-0'}>Daily tasks to boost your income</PageTitle>
      <p className={'mt-0 mb-6 dark:text-gray-300'}>
        The tasks outlined below can significantly impact the (future) value of
        your investment.
        <br />
        As such, investors are highly encouraged to perform these tasks daily.
      </p>

      {completedTasksAmt > 0 && (
        <Card className="mb-4">
          <CardBody>
            <p className="m-0 dark:text-gray-300">
              You have completed {completedTasksAmt} task
              {completedTasksAmt > 1 ? 's' : ''} today!
            </p>
          </CardBody>
        </Card>
      )}

      <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
        <GoogleCard
          taskCompleted={completedTasks['google']}
          setTaskCompleted={(completed) =>
            setCompletedTasks((prev) => ({ ...prev, google: completed }))
          }
        />
        <YouTubeCard
          taskCompleted={completedTasks['youtube']}
          setTaskCompleted={(completed) =>
            setCompletedTasks((prev) => ({ ...prev, youtube: completed }))
          }
        />
        <TwitterCard
          taskCompleted={completedTasks['twitter']}
          setTaskCompleted={(completed) =>
            setCompletedTasks((prev) => ({ ...prev, twitter: completed }))
          }
        />
        <CoinGeckoCard
          taskCompleted={completedTasks['coingecko']}
          setTaskCompleted={(completed) =>
            setCompletedTasks((prev) => ({
              ...prev,
              coingecko: completed,
            }))
          }
        />
        <InstagramCard
          taskCompleted={completedTasks['google']}
          setTaskCompleted={(completed) =>
            setCompletedTasks((prev) => ({ ...prev, google: completed }))
          }
        />
      </div>
    </>
  )
}

export default DailyTasks

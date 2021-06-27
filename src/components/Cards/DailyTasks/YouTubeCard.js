import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const YouTubeCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="YouTube"
    logo={require('../../../assets/img/logo_youtube.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Searching for these terms on YouTube increases their ranking, causing more
      people to get them as suggested videos or search suggestions.
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://google.com"
      >
        Search YouTube for "TIKI Token"
      </a>
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://google.com"
      >
        Search YouTube for "TIKI auto bnb"
      </a>
    </div>
  </DailyTaskCard>
)

export default YouTubeCard

import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const GoogleCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="Google"
    logo={require('../../../assets/img/logo_google.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Searching for these terms on Google increases their ranking, causing more
      people to get them as suggestions.
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Search Google for "TIKI Token"
      </a>
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Search Google for "TIKI free bnb"
      </a>
    </div>

    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Of course, feel free to do any amount of additional searches for even more
      effect!
    </p>
  </DailyTaskCard>
)

export default GoogleCard

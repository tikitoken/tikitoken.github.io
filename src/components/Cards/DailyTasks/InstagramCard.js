import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const InstagramCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="Instagram"
    logo={require('../../../assets/img/logo_instagram.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Use these hashtags on your posts to increase TIKI's exposure on this
      platform. For example, post your stats!
    </p>

    <p className="mb-4 text font-bold text-gray-600 dark:text-gray-300">
      #TIKI #TIKIToken
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Post on Instagram
      </a>
    </div>
  </DailyTaskCard>
)

export default InstagramCard

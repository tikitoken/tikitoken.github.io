import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

const DailyTaskCard = ({
  logo,
  title,
  taskCompleted,
  setTaskCompleted,
  children,
  ...props
}) => (
  <Card
    className="flex flex-col lg:flex-row"
    style={{
      position: 'relative',
      height: 'auto',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
    {...props}
  >
    <div
      style={{
        flexBasis: '40%',
        minWidth: 100,
        padding: '0px',
        flexShrink: 1,
        flexGrow: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        className="object-contain"
        style={{ width: '100%', maxWidth: 80 }}
        src={logo}
        alt={`${title} logo`}
      />
    </div>

    <CardBody
      style={{ flex: 1, flexShrink: 0, minWidth: 300, marginBottom: 40 }}
    >
      <p className="mb-2 text-3xl font-semibold text-gray-600 dark:text-gray-300">
        {title}
      </p>

      {children}
    </CardBody>

    <div
      style={{
        position: 'absolute',
        bottom: 0,
        borderTop: '1px solid rgba(0,0,0,0.8)',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
      }}
    >
      <input
        value={taskCompleted}
        onChange={(e) => setTaskCompleted(e.target.checked)}
        type="checkbox"
        id={`${title}-task-done`}
        style={{ marginRight: 10 }}
      />
      <label
        htmlFor={`${title}-task-done`}
        className="text-gray-600 dark:text-gray-300"
      >
        Task completed for today
      </label>
    </div>
  </Card>
)

export default DailyTaskCard

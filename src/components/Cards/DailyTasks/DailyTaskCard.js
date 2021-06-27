import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

const DailyTaskCard = ({ logo, title, children, ...props }) => (
  <Card
    className="flex flex-col lg:flex-row"
    style={{
      height: 'auto',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
    {...props}
  >
    <div
      style={{
        flexBasis: '40%',
        minWidth: 200,
        padding: '40px',
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

    <CardBody style={{ flex: 1, flexShrink: 0, minWidth: 300 }}>
      <p className="mb-2 text-3xl font-semibold text-gray-600 dark:text-gray-300">
        {title}
      </p>

      {children}
    </CardBody>
  </Card>
)

export default DailyTaskCard

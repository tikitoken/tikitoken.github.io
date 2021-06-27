import React, { useEffect, useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'

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

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <p className="mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300"></p>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default DailyTasks

import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'

function Cards() {
  return (
    <>
      <PageTitle>How It Works</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <p className="mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300">1. Buying</p>
            <p className="text-gray-600 text-2xl dark:text-gray-400">
              You can buy $MOAI from PancakeSwap <a className="text-purple-500" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xC89ebd6D883c9e6137574422e27D7ec7Eb7ad697" target="_blank" rel="noopener noreferrer">HERE</a>, and when you buy tokens for the first time, you become eligible to receive automatic BNB rewards for holding
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4  text-3xl font-semibold">2. Harvesting</p>
            <p className="text-2xl">
            Every time someone buys or sells $MOAI, the protocol swaps 10% of the tokens they bought for BNB and adds it to the automatic rewards pool
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4  text-3xl font-semibold">3. Earning</p>
            <p className="text-2xl">
            Your earnings are calculated based on all the transactions that occured after you bought your tokens
            </p>
          </CardBody>
        </Card>
        
        
        <Card>
          <CardBody>
            <p className="mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300">4. Payouts</p>
            <p className="text-gray-600 text-2xl dark:text-gray-400">
              Every 6 hours, you are automatically paid BNB in proportion to the size of your holdings relative to the supply
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-2xl">5. Rolling Payouts</p>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
            Every time someone buys or sells, the contract is called. When this transaction is processed, the contract is also looking at the holders list and checking if anyone needs to be paid. If someone is awaiting payment, the contract will send them their BNB rewards during this transaction
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4 font-semibold text-2xl">6. Fully Automated</p>
            <p className="text-xl">
            This system is fully automated and adds minimal gas fees proportional to value transferred. The number of holders processed through each transaction is dynamic and based on transaction size. Holders will receive dividends from the queue based on their position in the array
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Cards

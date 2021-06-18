import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, HeartIcon, CoinsIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  Card,
  CardBody
} from '@windmill/react-ui'


export const lineLegends = [
  { title: 'BNB Paid Out', color: 'bg-green-400' },
]


const lineOptions = {
  data: {
    labels: ['1 Week', '2 Weeks', '3 Weeks', '4 Weeks', '5 Weeks', '6 Weeks'],
    datasets: [
      {
        label: 'Paid Out',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'green',
        borderColor: 'lime',
        data: [50, 50, 50, 50, 50, 50],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}

function Dashboard(props) {


  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  // pagination setup
  const resultsPerPage = 0
  const totalResults = response.length

  const { totalPaid, holdings, paid, pending, recent, address, timeSincePayout, setHoldings, setPaid, setPending, setRecent, setAddress, setTimeSincePayout } = props

  return (
    <div className="pb-10">
      <PageTitle className="text-3xl">TIKI Earnings Manager</PageTitle>

      <CTA address={address} holdings={holdings} />

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Your TIKI Holdings" value={`${holdings} TIKI`}>
          <RoundIcon
            icon={CoinsIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Paid To You" value={`${(paid / 1e18).toFixed(4)} BNB`}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending Payout" value={`${(pending / 1e18).toFixed(4)} BNB`}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Most Recent Payout" value={`${timeSincePayout}`}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-yellow-500 dark:text-yellow-100"
            bgColorClass="bg-yellow-100 dark:bg-yellow-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <Card>
        <CardBody className="flex flex-col text-center items-center">
          <p className="mb-4 mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">Total BNB Paid Out To All Holders Of TIKI</p><br/>
          <img className="w-32 h-32" src={require('../assets/img/bnb.png')} />
          <p className="text-green-400 dark:text-green-400 text-6xl text-center">{totalPaid}</p>
          <img className="w-32 h-32 mb-8 flex-row" src={require('../assets/img/bnb.png')} />
        </CardBody>
      </Card>
    </div>
  )
}

export default Dashboard

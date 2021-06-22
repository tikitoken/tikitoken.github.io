import React, { useState, useEffect } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'

import numberWithCommas from '../utils/numberWithCommas'


  import response from '../utils/demo/tableData'

function prettyDate2(time){
  var date = new Date(parseInt(time));
  var localeSpecificTime = date.toLocaleTimeString();
  return localeSpecificTime.replace(/:\d+ /, ' ');
}

function Tables({ address, highestBuyers, bnbHoldings, bnbPrice }) {
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(2)

  // setup data for every table
  // const [dataTable1, setDataTable1] = useState(highestBuyers(0, 10))
  // const [dataTable2, setDataTable2] = useState(highestBuyers(10, 20))

  // pagination setup
  const resultsPerPage = 10
  const totalResults = highestBuyers.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  return (
    <>
      <PageTitle>Tiki Tuesday Leaderboards</PageTitle>

      <CTA address={(address !== "" && bnbHoldings !== 0) ? `${address} | BNB In Your Wallet: ${bnbHoldings} ($${numberWithCommas((bnbHoldings*bnbPrice).toFixed(2))})` : address} />

      <SectionTitle>Biggest Buyers - <span className="text-yellow-300">20 BNB</span> Goes To <span className="text-green-400">Rank #1</span> Buyer At The End of Tuesday</SectionTitle>
      <TableContainer className="mb-8">
        {highestBuyers.length !== 0 ? <Table>
          <TableHeader>
            <tr>
              <TableCell>Transaction</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Rank</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {highestBuyers.map((buyer, i) => {
              if (Object.keys(buyer).length === 0) return null
              return (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold"><a href={`https://bscscan.com/tx/${buyer.hash}`} target="_blank" rel="noopener noreferrer">{`${buyer.hash.substring(0, 4)}...${buyer.hash.substring(buyer.hash.length -4, buyer.hash.length)}`}</a></p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{numberWithCommas((buyer.value/1e18).toFixed(0))} TIKI <span className="text-green-400 semibold">({`$${numberWithCommas((buyer.bnbValue*bnbPrice).toFixed(2))}`})</span></span>
                  </TableCell>
                  <TableCell>
                    <Badge type={i+1 === 1 ? 'success': 'warning'}># {i+1}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{new Date(buyer.timeStamp*1000).toLocaleDateString()}</span>
                  </TableCell>
                </TableRow>
              )
            }
          )}
          </TableBody>
        </Table> : <span className="text-center w-full text-yellow-300 text-2xl">Scanning Blockchain...</span>}
        {/* <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter> */}
      </TableContainer>
    </>
  )
}

export default Tables

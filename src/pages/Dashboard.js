import React, { useState, useEffect } from 'react'

import { ethers } from 'ethers'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import RoundIcon from '../components/RoundIcon'
import { CartIcon, MoneyIcon, PeopleIcon, HeartIcon, CoinsIcon } from '../icons'
import { Card, CardBody, Button } from '@windmill/react-ui'

import TimeDifference from '../utils/timeDifference'
import numberWithCommas from '../utils/numberWithCommas'

function Dashboard(props) {

  const { tikiPrice, tikiVolume, setTikiVolume, wallet, setWallet, getWallet, highestBuyers, bnbPrice, bnbHoldings, totalPaid, holdings, paid, lastPaid, address, nextPayoutProgress, nextPayoutValue, setHoldings, setPaid, setLastPaid, setAddress, setNextPayoutProgress, setNextPayoutValue } = props

  const [reinvestContract, setReinvestContract] = useState(null)
  const [tikiContract, setTikiContract] = useState(null)
  const [reinvested, setReinvested] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [reinvestAmount, setReinvestAmount] = useState((Number(bnbHoldings)-((2000000*15*1000000000)/1e18)) > 0 ? (Number(bnbHoldings)-((2000000*15*1000000000)/1e18)).toFixed(4) : '0')

  const reinvestInput = <><span>Reinvest </span><input onClick={e => e.stopPropagation()} type="text" className="w-1/3 text-black text-center" value={reinvestAmount} onChange={e => setReinvestAmount(isNaN(e.target.value) ? reinvestAmount : e.target.value)} /><span> BNB (click here to confirm)</span></>
  const payoutText = <><span className="text-yellow-300">{nextPayoutValue != 0 ? nextPayoutValue + ' BNB' : 'Processing'}</span>{Date.now()-lastPaid >= 3600000 ? ` | ${nextPayoutProgress}%` : ` | ${(60-((Date.now()-lastPaid)/60000)).toFixed(0)}m`}</>

  const earningsInDollars = tikiVolume == 0 ? (holdings/1000000000)*220000 : (holdings/1000000000)*(tikiVolume*0.11)
  const earningsInBnb = earningsInDollars/bnbPrice

  const compoundedTikiAfterNDays = (starting, days) => {
    let accumulatedTiki = Number(starting)
    for (let i = 0; i < days; i++) {
      accumulatedTiki = tikiVolume == 0 ? accumulatedTiki + (((accumulatedTiki/1000000000)*220000)/tikiPrice) : accumulatedTiki + (((accumulatedTiki/1000000000)*(tikiVolume*0.11))/tikiPrice)
    }
    return accumulatedTiki.toFixed(0)
  }

  return (
    <div className="pb-10">

      <PageTitle className="text-3xl">TIKI Earnings Manager</PageTitle>

      <CTA holdings={holdings} text={(address !== "" && ethers.utils.isAddress(address) && bnbHoldings !== 0) ? `${address} | BNB In Your Wallet: ${bnbHoldings} ($${numberWithCommas((bnbHoldings*bnbPrice).toFixed(2))})` : address} />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Your TIKI Holdings" value={`${numberWithCommas(holdings)} TIKI`}>
          <RoundIcon
            icon={CoinsIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        
        <Card>
          <CardBody className="flex items-center">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total BNB Paid</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200"><span className="text-yellow-300">{`${(paid / 1e18).toFixed(4)}`}</span><span className="italic font-light text-md text-green-400"> ~${numberWithCommas(((paid / 1e18)*bnbPrice).toFixed(2))}</span></p>
            </div>
          </CardBody>
        </Card>

        <InfoCard className="" title="Last Payout Time" value={`${lastPaid === 0 ? 'Never' : TimeDifference(Date.now(), lastPaid)}`}>
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-blue-500 dark:text-blue-100"
              bgColorClass="bg-blue-100 dark:bg-blue-500"
              className="mr-4"
            />
        </InfoCard>
        
        <Card>
          <CardBody className="flex items-center">
            <RoundIcon
              icon={CartIcon}
              iconColorClass="text-yellow-500 dark:text-yellow-100"
              bgColorClass="bg-yellow-100 dark:bg-yellow-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Payout Loading</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{payoutText}</p>
            </div>
          </CardBody>
        </Card>

      </div>
        <Card className="mt-4">
          <CardBody className="flex items-center">
            <Button disabled={nextPayoutValue == 0 ? true : false} className={`w-full h-full text-lg font-semibold`}
                onClick={() => {
                if (wallet !== null && tikiContract !== null) {
                  const encodedABI = tikiContract.interface.encodeFunctionData( 'claim', [])
                  wallet.getTransactionCount().then(nonce => {
                    const tx = {
                      chainId: 56,
                      nonce: ethers.utils.hexlify(nonce),
                      gasPrice: ethers.utils.hexlify(7*1000000000),
                      gasLimit: ethers.utils.hexlify(250000),
                      to: tikiContract.address,
                      value: ethers.utils.parseEther('0'),
                      data: encodedABI
                    }
      
                    wallet.sendTransaction(tx).then(confirmation => {
                      setClaimed(true)
                    })
                  })
                } else {
                  getWallet().then(wallet => {
                    setWallet(wallet[0])
                    setAddress(wallet[1])
                    setReinvestContract(wallet[2])
                    setTikiContract(wallet[3])
                  })
                }
              }}>{nextPayoutValue == 0 ? 'Payout Is Processing' : wallet !== null ? claimed ? 'Payout Claimed!' : 'Claim Payout' : 'Optional - Connect Wallet and Claim Manually NOW'}</Button>
          
          {/* <Button disabled={(tikiPrice === null) || (holdings == 0) || reinvested} className="ml-4 w-1/2 h-full text-lg font-bold" style={{backgroundColor: '#239470', boxShadow: '0px 0px 20px #057a55'}} onClick={
            () => {
              if (wallet !== null && reinvestContract !== null) {
                if (tikiPrice == 0) return
                const tokensOut = (((Number(reinvestAmount)*bnbPrice)/tikiPrice)*0.93)

                const encodedABI = reinvestContract.interface.encodeFunctionData( 'swapETHForExactTokens', [ethers.utils.parseEther(tokensOut.toFixed(0)), Date.now()+300000])

                wallet.getTransactionCount().then(nonce => {
                  const tx = {
                    chainId: 56,
                    nonce: ethers.utils.hexlify(nonce),
                    gasPrice: ethers.utils.hexlify(5*1000000000),
                    gasLimit: ethers.utils.hexlify(2000000),
                    to: reinvestContract.address,
                    value: ethers.utils.parseEther(reinvestAmount.toString()),
                    data: encodedABI
                  }

                  wallet.sendTransaction(tx).then(confirmation => {
                    setReinvested(true)
                  })

                })
              } else {
                getWallet().then(wallet => {
                  setWallet(wallet[0])
                  setAddress(wallet[1])
                  setReinvestContract(wallet[2])
                  setTikiContract(wallet[3])
                })
              }
            }}>
              <span className="w-full" style={{textShadow: '1px 1px 1px black'}}>
                  {holdings == 0 ? "You Do Not Own Enough TIKI To Reinvest" : wallet !== null ? reinvested ? `Reinvested ${reinvestAmount} BNB at Only 5% Buy Tax!` : reinvestInput : "Connect and Reinvest With ONLY 5% Buy Tax!"}
              </span>
          </Button> */}
          
          </CardBody>
        </Card>
        
      

      <div className="grid grid-cols-2 gap-4 mt-4">

        <Card className="col-span-2">
          <CardBody className="flex flex-col text-center items-center">
            <img className="w-32 h-32 mb-4 mt-4" src={require('../assets/img/bnb.png')} />
            <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">Total BNB Paid To TIKI Holders</p><br/>
            <p className="text-green-400 dark:text-green-400 text-4xl md:text-6xl text-center mb-8">{numberWithCommas(totalPaid)} <span className="text-yellow-300">BNB</span><br/> = ${numberWithCommas((bnbPrice*totalPaid).toFixed(0))}</p>
          </CardBody>
        </Card>

        <Card className="col-span-2">
          <CardBody className="flex flex-col text-center items-center">
            <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">Estimations are based on a default of the last 24h of trading volume<br/>Change the volume to predict earnings based on other volume figures<br/>Trading Volume = $ <input className="text-black" value={numberWithCommas(tikiVolume.toFixed(0))} onChange={e => isNaN(Number(parseFloat(e.target.value.replace(/,/g, '')))) ? tikiVolume : setTikiVolume(Number(parseFloat(e.target.value.replace(/,/g, ''))))} /></p>
          </CardBody>
        </Card>

        <Card className="col-span-2 lg:col-span-1">
          <CardBody className="flex flex-col text-center items-center">
            <img className="w-32 h-32 mb-4 mt-4" src={require('../assets/img/money.png')} />
            <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">Your {numberWithCommas(holdings)} TIKI Earns:</p><br/>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas(earningsInBnb.toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Day</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas((earningsInBnb*7).toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars*7).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Week</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas((earningsInBnb*30).toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars*30).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Month</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas((earningsInBnb*365).toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars*365).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Year</span>
            </div>
            <br/>
            <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">Dynamic estimations based on trading volume of ${numberWithCommas(tikiVolume.toFixed(0))}</p>
          </CardBody>
        </Card>
        <Card className="col-span-2 lg:col-span-1">
          <CardBody className="flex flex-col text-center items-center">
            <img className="w-32 h-32 mb-4 mt-4" src={require('../assets/img/money.png')} />
            <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">By Reinvesting Dividends Every Day, Your {numberWithCommas(holdings)} TIKI Becomes:</p><br/>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{holdings != 0 ? numberWithCommas(compoundedTikiAfterNDays(holdings, 7)) : '0'} TIKI</span> ({holdings != 0 ? (compoundedTikiAfterNDays(holdings, 7)/holdings).toFixed(2) : '0'}x Earnings)</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">In a Week</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{holdings != 0 ? numberWithCommas(compoundedTikiAfterNDays(holdings, 30)) : '0'} TIKI</span> ({holdings != 0 ? (compoundedTikiAfterNDays(holdings, 30)/holdings).toFixed(2) : '0'}x Earnings)</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">In a Month</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{holdings != 0 ? numberWithCommas(compoundedTikiAfterNDays(holdings, 182)) : '0'} TIKI</span> ({holdings != 0 ? (compoundedTikiAfterNDays(holdings, 182)/holdings).toFixed(2) : '0'}x Earnings)</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">In 6 Months</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{holdings != 0 ? numberWithCommas(compoundedTikiAfterNDays(holdings, 365)) : '0'} TIKI</span> ({holdings != 0 ? (compoundedTikiAfterNDays(holdings, 365)/holdings).toFixed(2) : '0'}x Earnings)</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">In 1 Year</span>
            </div>
            <br/>
            <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">Estimations are based on current $TIKI price (${tikiPrice.toFixed(4)})</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}


export default Dashboard

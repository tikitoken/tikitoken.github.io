import React, { useState, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ethers } from 'ethers'
import pcsRouter from './web3/pcsRouter'

// import {
//   Button,
//   Modal, ModalHeader, ModalBody, ModalFooter
// } from '@windmill/react-ui'

import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
const Layout = lazy(() => import('./containers/Layout'))

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/")

const apiKey = '7ZZ4WKZZIB8B71XYFV8Z1I1WD7B44GZCUJ'

let timer

const tikiContractAddress = '0x9b76D1B12Ff738c113200EB043350022EBf12Ff0'
const tikiDecimals = 18
const tikiAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"bool","name":"earlyParticipant","type":"bool"},{"indexed":false,"internalType":"uint256","name":"numberOfBuyers","type":"uint256"}],"name":"FixedSaleBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"participants","type":"address[]"}],"name":"FixedSaleEarlyParticipantsAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"LiquidityWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[],"name":"BNBRewardsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"addFixedSaleEarlyParticipants","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bounceFixedSaleWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"dividendTokenBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendTracker","outputs":[{"internalType":"contract TIKIDividendTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeMultipleAccountsFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fixedSaleBuyers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fixedSaleEarlyParticipantBuysThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fixedSaleEarlyParticipantDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fixedSaleEarlyParticipants","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fixedSaleStartTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountDividendsInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountDividendsInfoAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClaimWait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTradingIsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSellTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfFixedSaleBuys","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellFeeIncreaseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingEnabledTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newLiquidityWallet","type":"address"}],"name":"updateLiquidityWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]

const tikiContract = new ethers.Contract(tikiContractAddress, tikiAbi, provider)
const pcsRouterContract = new ethers.Contract(pcsRouter.address, pcsRouter.abi, provider)

const bnb = {
  address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  decimals: 18,
}
const busd = {
  address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  decimals: 18,
}

const reinvestContractAddress = '0x2FD8385d94853E40FAe5E94b4E5033a836E71776'

async function getChunksAndMergeThenReturnHighest(chunks, currBlock, hoursPerChunk) {
  let chunkData = []
  const chunksArray = Array.from(Array(chunks).keys())
  const chunkIterator = chunksArray[Symbol.iterator]();
  for (const chunk of chunkIterator) {
    const startBlock = currBlock-Math.floor((((chunk+1)*hoursPerChunk)*60*60)/3)
    const endBlock = currBlock-Math.floor(((chunk*hoursPerChunk)*60*60)/3)
    // console.log(`Start Block: ${startBlock} | End Block: ${endBlock}`)
    const currChunkRes = await fetch(`https://api.bscscan.com/api?module=account&action=tokentx&address=0xc21e7663a8ca376d0fb90025698ae32d57256fce&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`)
    const currChunk = await currChunkRes.json()
    chunkData.push(currChunk.result)
  }
  chunkData = chunkData.flat()
  const highest = chunkData.sort(function(a, b) {return a.value - b.value;}).slice(-20);
  let cleanedHighest = []
  for (const buyer of highest) {
    let tx;
    try {
      tx = await provider.getTransaction(buyer.hash)
      buyer.bnbValue = tx.value/1e18
      cleanedHighest.push(buyer)
    } catch (e) {
      continue
    }
  }

  return cleanedHighest.filter(buyer => buyer.bnbValue !== 0).slice(0,9)
}

async function getAmountsOut(quoteAmount, path) {
  return await pcsRouterContract.functions['getAmountsOut'](
    quoteAmount,
    path,
    { gasLimit: 1000000000000 }
  )
}

async function getTikiPrice() {
  const functionResponse = await getAmountsOut(`${1 * Math.pow(10, tikiDecimals)}`, [tikiContractAddress, bnb.address, busd.address])
  const priceInUsd = Number(functionResponse.amounts[2].toString()) / Math.pow(10, busd.decimals)
  // console.log('tiki', priceInUsd)
  return priceInUsd
}

async function getBnbPrice() {
  const functionResponse = await getAmountsOut(`${1 * Math.pow(10, bnb.decimals)}`, [bnb.address, busd.address])
  const priceInUsd = Number(functionResponse.amounts[1].toString()) / Math.pow(10, busd.decimals)
  // console.log('bnb', priceInUsd)
  return priceInUsd
}

async function getTikiVolume() {
  const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tiki-token&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=false&include_last_updated_at=false')
  const resolved = await res.json()
  const volume = resolved['tiki-token'].usd_24h_vol
  return volume
}

async function getMetamaskWallet() {
  let metamask
  try {
    metamask = new ethers.providers.Web3Provider(window.ethereum, 56);
  } catch (e) {
    console.log('wrong chain')
    return null
  }
  // Prompt user for account connections
  await metamask.send("eth_requestAccounts", []);
  return metamask.getSigner();
  // metamask.getSigner().getAddress
}

async function getWallet() {

  const wallet = await getMetamaskWallet()
  if (wallet === null) return

  const reinvestContract = new ethers.Contract(reinvestContractAddress, [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "Enable", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "TakeFees", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "feesPercent", "type": "uint256" } ], "name": "UpdateFeesPercent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "feesWallet", "type": "address" } ], "name": "UpdateFeesWallet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "minimumBalance", "type": "uint256" } ], "name": "UpdateMinimumBalance", "type": "event" }, { "inputs": [], "name": "TIKI", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" } ], "name": "enable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "enabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feesPercent", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feesWallet", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "swapETHForExactTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [ { "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "newPercent", "type": "uint256" } ], "name": "updateFeesPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newWallet", "type": "address" } ], "name": "updateFeesWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "newMinimumBalance", "type": "uint256" } ], "name": "updateMinimumBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ], wallet)

  const tikiContract = new ethers.Contract(tikiContractAddress, tikiAbi, wallet)

  const walletAddr = await wallet.getAddress()

  return [wallet, walletAddr, reinvestContract, tikiContract]

}

function App() {
  const [wallet, setWallet] = useState(null)
  const [totalPaid, setTotalPaid] = useState(0)
  const [bnbHoldings, setBnbHoldings] = useState(0)
  const [bnbPrice, setBnbPrice] = useState(0)
  const [tikiPrice, setTikiPrice] = useState(0)
  const [tikiVolume, setTikiVolume] = useState(0)

  const [highestBuyers, setHighestBuyers] = useState([])

  const [holdings, setHoldings] = useState(0)
  const [paid, setPaid] = useState(0)
  const [lastPaid, setLastPaid] = useState(0)
  const [nextPayoutProgress, setNextPayoutProgress] = useState(0)
  const [nextPayoutValue, setNextPayoutValue] = useState(0)

  const [refreshAddressData, setRefreshAddressData] = useState(true)
  const [refreshTimeData, setRefreshTimeData] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(true)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  const [address, setAddress] = useState(
    localStorage.getItem('address') || ''
  )

  useEffect(() => {
    getTikiPrice().then(setTikiPrice)
    getBnbPrice().then(setBnbPrice)
    getTikiVolume().then(setTikiVolume)
  }, [])

  useEffect(() => {

    if (ethers.utils.isAddress(address)) {
      if (localStorage.getItem('address') !== address) localStorage.setItem('address', address)
      callContract(address)
    }
  }, [address, refreshAddressData])

  useEffect(() => {
    tikiContract.getTotalDividendsDistributed().then(total => {
      setTotalPaid((total/1e18).toFixed(0))
      setTimeout(function(){ setRefreshTimeData(!refreshTimeData) }, 5000);
    })
  }, [refreshTimeData])

  // getAccountDividendsInfo returns []:
  // address Address
  // int256 index,
  // int256 iterationsUntilProcessed,
  // uint256 withdrawableDividends,
  // uint256 totalDividends,
  // uint256 lastClaimTime,
  // uint256 nextClaimTime,
  // uint256 secondsUntilAutoClaimAvailable

  const callContract = () => {
    tikiContract.getNumberOfDividendTokenHolders().then(holders => {
      tikiContract.balanceOf(address).then(balance => {
        setHoldings((balance / 1e18).toFixed(0))
          tikiContract.getAccountDividendsInfo(address).then(result => {
            provider.getBalance(address).then(balance => {
              setBnbHoldings((balance/1e18).toFixed(4))
              setPaid( parseInt(result[4]._hex, 16) - parseInt(result[3]._hex, 16) )
              setLastPaid(parseInt(result[5]._hex, 16)*1000)
              setNextPayoutProgress((100-((parseInt(result[2]._hex, 16)/parseInt(holders._hex, 16))*100)).toFixed(0))
              setNextPayoutValue( (parseInt(result[3]._hex, 16)/1e18).toFixed(4) )
              window.clearTimeout(timer);
              timer = window.setTimeout(function(){ setRefreshAddressData(!refreshAddressData) }, 9000);
            })
          })
        })
      })
    }

  return (
    <>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="text-center text-4xl -mt-4">Instant Payout Feature</ModalHeader>
        <ModalBody className="text-center text-2xl">
          If you <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0" target="_blank" rel="noopener noreferrer"><span className="semibold text-green-400">BUY more TIKI (click here)</span></a>, your payout is <span className="text-red-400">INSTANTLY</span> sent to you!
        </ModalBody>
        <ModalFooter className="-mt-2">
          <div className="hidden sm:block w-full text-center mb-4">
            <Button className="w-3/4" onClick={closeModal}>
              Got It
            </Button>
          </div>
        </ModalFooter>
      </Modal> */}

      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/" render={(props) => (<Layout {...props} tikiPrice={tikiPrice} address={address} setAddress={setAddress} holdings={holdings} setHoldings={setHoldings} paid={paid} setPaid={setPaid} lastPaid={lastPaid} setLastPaid={setLastPaid} nextPayoutProgress={nextPayoutProgress} setNextPayoutProgress={setNextPayoutProgress} totalPaid={totalPaid} nextPayoutValue={nextPayoutValue} setNextPayoutValue={setNextPayoutValue} bnbHoldings={bnbHoldings} bnbPrice={bnbPrice} highestBuyers={highestBuyers} wallet={wallet} getWallet={getWallet} setWallet={setWallet} tikiVolume={tikiVolume} setTikiVolume={setTikiVolume} />)} />
        </Switch>
      </Router>
    </>
  )

}

export default App

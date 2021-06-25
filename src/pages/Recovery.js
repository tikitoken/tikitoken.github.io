import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'

const recoveryTokenContractAddress = '0x0e20a67e1052abc9cc1b6b65cb311b5957168ba0'

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

function Recovery() {

  const [contract, setContract] = useState(null)
  const [withdrawable, setWithdrawable] = useState(null)
  const [withdrawn, setWithdrawn] = useState(null)
  const [balance, setBalance] = useState(null)

  useEffect(() => {

    getMetamaskWallet().then(w => {
      if (w === null) return
      const contract = new ethers.Contract(recoveryTokenContractAddress, [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" } ], "name": "DividendWithdrawn", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" } ], "name": "DividendsDistributed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" } ], "name": "accumulativeDividendOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeDividends", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" } ], "name": "dividendOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" } ], "name": "setBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDividendsDistributed", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDividendsToDistribute", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawDividend", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" } ], "name": "withdrawableDividendOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" } ], "name": "withdrawnDividendOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ], w)
      w.getAddress().then(address => {
        contract.balanceOf(address).then(balance => {
          setContract(contract)
          setBalance(parseInt(balance._hex, 16)/1e18)
        })
        contract.withdrawableDividendOf(address).then(withdrawable => {
          setWithdrawable(parseInt(withdrawable._hex, 16)/1e18)
        })
        contract.withdrawnDividendOf(address).then(withdrawn => {
          setWithdrawn(parseInt(withdrawn._hex, 16)/1e18)
        })
      })
    })
  }, [])

  return (
    <>
      <PageTitle>TIKI Recovery Program for MOAI Lossholders</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <p className="mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300">Claimable Balance:</p>
            <p className="text-gray-600 text-2xl dark:text-gray-300 text-center">
              Your currently claimable BNB balance from the recovery protocol is:<br/><br/><span className="text-yellow-300 font-bold">{withdrawable !== null ? withdrawable + ' BNB' : 'CONNECT YOUR WALLET'}</span><br/><br/>Click <button onClick={contract !== null ? () => contract.withdrawDividend() : null} className="text-purple-500" >HERE</button> to claim your pending balance.
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4  text-3xl font-semibold">Remaining Balance:</p>
            <p className="text-2xl text-center">
              You have claimed <span className="text-yellow-300 font-bold">{withdrawn !== null ? withdrawn + ' BNB' : 'CONNECT YOUR WALLET'}</span> from the recovery protocol. Your total amount to be paid from the recovery protocol is <span className="text-yellow-300 font-bold">{balance !== null ? balance + ' BNB' : 'CONNECT YOUR WALLET'}</span>. Please continue to check here as the claimable balance grows to meet your full loss.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Recovery

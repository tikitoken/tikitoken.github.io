import React, { useEffect } from 'react'

import { ethers } from 'ethers'

function CTA({ text, holdings, address }) {

  const addrFilledColorConditional = (text !== undefined && text !== '' && (text.substring(0, 2) === '0x')) ? 'bg-green-600' : 'bg-purple-600'

  return (
    <div className="hidden lg:block">
    <span
      className={`flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 ${addrFilledColorConditional} rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple`}
    >
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>{(text !== undefined && text !== '' && (text.substring(0, 2) === '0x')) ? holdings < 10000 ? text + ' - YOU NEED TO HOLD MORE THAN 10K TIKI TO RECEIVE DIVIDENDS' : text : 'Please enter your address above'}</span>
      </div>
      <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0" target="_blank" rel="noopener noreferrer">
        Buy TIKI <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }}></span>
      </a>
    </span>
    </div>
  )
}

export default CTA

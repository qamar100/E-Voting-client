import React from 'react'
import { ConnectButton } from "thirdweb/react";
import { client ,chain } from '@/lib/thirdweb';
const ConnectWallet = () => {
  return (
    <div className='fixed top-6 right-6'>
          <ConnectButton client={client} chain={chain} connectButton={{
              style: {
                  backgroundColor: "rbg(17 24 39 ) var(--tw-bg-opacity)",
              }
          }}>
              
      </ConnectButton>
    </div>
  )
}

export default ConnectWallet

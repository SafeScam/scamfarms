import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { useQuery } from '@apollo/client'
import { honeycombClient } from '../../apollo/clients'
//import  getACPoolData  from '../../constants/ACClient'
import { GET_POOLS } from '../../apollo/queries'
//import { GET_POOLS_AC } from '../../apollo/queries'

import useSushi from '../../hooks/useSushi'
import useTokens from '../../hooks/useTokens'

import { getFarms } from '../../sushi/utils'

import Context from './context'

const Farms: React.FC = ({ children }) => {
  const [unharvested] = useState(0)
  const [farms, setFarms] = useState([])
  const { data, loading } = useQuery(GET_POOLS, {
      client: honeycombClient
  })
//  const { data, loading } = getACPoolData(GET_POOLS_AC)
  
  const { tokenAddresses } = useTokens()

  const { status } = useWallet()
  const sushi = useSushi()
  
  useEffect(() => {
    async function fetchFarms () {
      await Promise.all(data.pools.map(async (pool: any) => {
        const token0Exists = tokenAddresses.includes(pool.pair.token0.id)
        const token1Exists = tokenAddresses.includes(pool.pair.token1.id)

        await sushi.contracts.addPool({
          poolAddress: pool.id,
          lpAddress: pool.pair.id,
          token0Symbol: pool.pair.token0.symbol,
          token1Symbol: "XDAI",//pool.pair.token1.symbol,
          earnTokenAddress: "0x5f1F81de1D21b97a5d0D5d62d89BDE9DdEc27325",//pool.rewardToken.id,
          earnToken: "AC", //pool.rewardToken.symbol,
          rewards: new BigNumber(pool.rewards),
          staked: new BigNumber(pool.staked),
          verified: token0Exists && token1Exists
        })
      }))

      setFarms(getFarms(sushi))
    }

    if (status === 'connected' && !loading && tokenAddresses.length) {
      fetchFarms()
    }
  }, [status, sushi, loading, data, tokenAddresses])
  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms

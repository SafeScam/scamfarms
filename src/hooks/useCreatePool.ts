import { useCallback } from 'react'

import { useWallet } from 'use-wallet'

import useSushi from './useSushi'
import { createPool, getFactoryContract } from '../sushi/utils'

const useCreatePool = () => {
  const { account } = useWallet()
  const sushi = useSushi()
  const factoryContract = getFactoryContract(sushi)
  const routerAddress = "0x3BF6aDB5F2b24A1E6A15c3CbD98f8c0d87787177"

  const onCreate = useCallback(async (pairAddress: string, routerAddress: string) => {
    const txHash = await createPool(factoryContract, account, pairAddress, routerAddress)
    console.log(txHash)
    return txHash
  }, [account, factoryContract])

  return { onCreate }
}

export default useCreatePool

//import { useQuery } from 'ACClient'
import { GET_POOLS_AC } from '../apollo/queries'

const dstr = '{"pools":{"id":"AC-WXDAI UNI-V2 LP","pair":{"id":"1","token0":{"id":"0x133535562378Bf3Ce76DCC6b7065D8176bd3daD9","symbol":"XDAI"},"token1":{"id":"0x5f1F81de1D21b97a5d0D5d62d89BDE9DdEc27325","symbol":"AC"}},"rewards":"1","staked":"1","rewardToken":{"id":"0xF04942970C98fdda8dddB54f92C25A4EA0Dc9d11","symbol":"rewardToken"}}}'
const loading = 1

interface tokes {
    id: string
    token0?: string
    token1?: string
}

interface sym {
    id: string
    symbol: string
}

interface Ps {
    pls: object
}

interface dat {
    pools: Ps
    id: number
    pair: [tokes, tokes]
    rewards: number
    staked: number
    rewardToken: sym
}

const data = JSON.parse(dstr)

const getACPoolData = (x: number) => { 
    if (GET_POOLS_AC === x)
//        dat:data = JSON.parse(dstr)
        return {data, loading}
} 

export default getACPoolData
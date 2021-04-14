import React from 'react';
import BigNumber from 'bignumber.js/bignumber'
//import roseFlower from '../../assets/img/rose_flower.svg'
//import agave from '../../assets/img/agave.svg'
//import birch from '../../assets/img/birch.svg'
//import blueFlower from '../../assets/img/blue_flower.svg'
//import blueGreenTree from '../../assets/img/blue_green_tree.svg'
//import greenFlower from '../../assets/img/green_flower.svg'
//import carnationFlower from '../../assets/img/carnation_flower.svg'
import creamFlower from '../../assets/img/cream_flower.svg'
//import elderberryTree from '../../assets/img/elderberry_tree.svg'
//import evergladesPalm from '../../assets/img/everglades_palm.svg'
//import giantRedwood from '../../assets/img/giant_redwood.svg'
//import lilyValley from '../../assets/img/lily_valley.svg'
//import lunaria from '../../assets/img/lunaria.svg'
//import lychee from '../../assets/img/lychee.svg'
//import orchid from '../../assets/img/orchid.svg'
//import silverbell from '../../assets/img/silverbell.svg'
//import strongbark from '../../assets/img/strongbark.svg'
//import ursinia from '../../assets/img/ursinia.svg'
import yellowSunflower from '../../assets/img/sunflower.svg'
//import whitebeam from '../../assets/img/whitebeam.svg'
//import winterbloom from '../../assets/img/winterbloom.svg'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  sushi: {
  //  100: '0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9',
      100: '0x5f1F81de1D21b97a5d0D5d62d89BDE9DdEc27325',

  
  },
  weth: {
    100: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  },
  factory: {
   // 100: '0xE29DCD715D11455194D7d74c622F3c42C8a37040'  1hive factory
   //   100: '0xdDf1153597F33b63c6F23c9a5dBd178f2575A638' AC v1 Factory
        100:      '0xF04942970C98fdda8dddB54f92C25A4EA0Dc9d11'  // AC v2 factory
  }
}

/*
 * UNI-V2 LP Address on xDai
 * ==========================================
 * HNY/WXDAI  0x4505b262dc053998c10685dc5f9098af8ae5c8ad
 * HNY/STAKE  0x298c7326a6e4a6108b88520f285c7dc89403347d
 * HNY/WETH   0x89e2f342b411032a580fefa17f96da6a5bef4112
*/

export const knownPools = {
  '0xf1E1B04CADC657D4B4108BBe348a2dEd433CDEB3': {
    name: 'AC / WXDAI',
    icon: <img src={creamFlower} alt="" />
  },
  '0x8520fc4c282342f8e746b881b9b60c14f96a0fab': {
    name: 'Dai Daisies',
    icon: <img src={creamFlower} alt="" />
  },
  '0xa6c55971f21cc1c35ea617f47980d669a0c09cf3': {
    name: 'STAKE Sunflower',
    icon: <img src={yellowSunflower} alt="" />
  }
}

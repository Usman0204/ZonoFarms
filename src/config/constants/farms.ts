import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ZONO',
    lpAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    tokenSymbol: 'PUDD',
    tokenAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ZONO-BNB LP',
    lpAddresses: {
      97: '0xD43A29b53ab45d736bBFdc873780Db65b7c85F97',
      56: '0xD43A29b53ab45d736bBFdc873780Db65b7c85F97',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xAAAd85A8f29499eB53880BA76488C5d24114De1c',
      56: '0xAAAd85A8f29499eB53880BA76488C5d24114De1c',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ZONO-BUSD LP',
    lpAddresses: {
      97: '0x3f2AA533e0363398d2647638308FCD152a0AdFee',
      56: '0x3f2AA533e0363398d2647638308FCD152a0AdFee',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms

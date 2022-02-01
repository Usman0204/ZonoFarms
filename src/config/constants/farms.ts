import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ZONO',
    lpAddresses: {
      97: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
      56: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
      56: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ZONO-BNB LP',
    lpAddresses: {
      97: '0x362783c55308ebd57e01b8bd332010321291e02d',
      56: '0x362783c55308ebd57e01b8bd332010321291e02d',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
      56: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x45D11635b4701FDD9A5236971B419C6A291ADd45',
      56: '0x45D11635b4701FDD9A5236971B419C6A291ADd45',
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
      97: '0x40f2d5a2c56ccfdd6a6f3effb3bcacabe8160e8a',
      56: '0x40f2d5a2c56ccfdd6a6f3effb3bcacabe8160e8a',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
      56: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms

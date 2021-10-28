import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ZONO',
    lpAddresses: {
      97: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
      56: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
      56: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ZONO-BNB LP',
    lpAddresses: {
      97: '0x47cffBD7C6DB12DA79D35F23869A0c7963E793a6',
      56: '0x47cffBD7C6DB12DA79D35F23869A0c7963E793a6',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
      56: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
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
      97: '0x492D3d4Ae4c52BE56eE9E0CB2A745C0Fd1bD7154',
      56: '0x492D3d4Ae4c52BE56eE9E0CB2A745C0Fd1bD7154',
    },
    tokenSymbol: 'ZONO',
    tokenAddresses: {
      97: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
      56: '0x8d08dcb48d59216ae5d0515aa6622c9beb42b76b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms

import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://zonoswap.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://zonoswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
 
  {
    label: 'NFTs (soon)',
    icon: 'NftIcon',
    href: '',
  },
   {
    label: 'Smart Contract Audit',
    icon: 'TicketIcon',
    href: 'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_ZONOSwap.pdf',
  },
    {
    label: 'KYC',
    icon: 'IfoIcon',
    href: 'https://github.com/solidproof/kyc-certificates/blob/main/KYC_Certificate_Zono_Swap.png',
  },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
//  },
    {
      label: 'More',
      icon: 'MoreIcon',
      items: [
        
        {
          label: 'Github',
          href: 'https://github.com/Zonoswap/',
        },
        {
          label: 'Docs',
          href: 'https://zonoswap.gitbook.io/zonoswap/',
        },
        {
          label: 'Blog',
          href: 'https://medium.com/@zonoswap',
        },
      ],
    
  },

  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config

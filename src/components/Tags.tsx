import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'

const CoreTag = (props) => (
  <Tag variant="secondary" style={{backgroundColor:'#201854'}} outline startIcon={<VerifiedIcon />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    Community
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag }

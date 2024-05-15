import { ChainId } from '@pancakeswap/chains'
import { supportedChainId } from '@pancakeswap/farms'

export const SUPPORT_ONLY_BSC = [ChainId.BSC]
export const SUPPORT_FARMS = supportedChainId
export const LIQUID_STAKING_SUPPORTED_CHAINS = [ChainId.BSC, ChainId.BSC_TESTNET]
export const FIXED_STAKING_SUPPORTED_CHAINS = [ChainId.BSC]

export const V3_MIGRATION_SUPPORTED_CHAINS = [ChainId.BSC]
export const V2_BCAKE_MIGRATION_SUPPORTED_CHAINS = [ChainId.BSC]

export const SUPPORT_CAKE_STAKING = [ChainId.BSC, ChainId.BSC_TESTNET]

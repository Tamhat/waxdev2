import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | WaxDex',
  defaultTitle: 'WaxDex',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@WaxDex',
    site: '@WaxDex',
  },
  openGraph: {
    title: "WaxDex - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: '/hero.jpg' }],
  },
}

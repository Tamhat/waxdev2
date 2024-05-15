import { useTranslation } from '@pancakeswap/localization'
import { Box, PageSection, useMatchBreakpoints } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { styled } from 'styled-components'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ApexExchangePart from './components/ApexExchangePart'
import OurTopPartners from './components/OurTopPartners'
import SkoofyPart from './components/SkoofyPart'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px', padding: '0px 16px' }
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  return (
    <Box style={{ width: isMobile ? '100vw' : 'calc(100vw - 8px)', overflow: 'hidden', boxSizing: 'border-box' }}>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%', overflow: 'visible', padding: '16px' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledHeroSection>


      <ApexExchangePart />

       <OurTopPartners/>

       <SkoofyPart/>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="transparent"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </Box>
  )
}

export default Home

/* eslint-disable react/no-unescaped-entities */
import { Flex, Text } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

export const Container = styled(Flex)`
  display: grid;
  max-width: 650px;
  margin: 50px auto;
  padding: 0px 16px;

  h1 {
    font-size: 2.25rem;
    font-width: bold;
  }

  h3 {
    margin: 1em 0px 0.5em;
    font-weight: bold;
  }

  p {
    opacity: 0.94;
    margin-bottom: 1em;
    line-height: 24px;
  }

  li {
    margin: 0.5em 0px 0px 1em;
    color: ${({ theme }) => theme.colors.text};
  }
`

const TermsOfService = () => {
  return (
    <Container>
      <Text as="h1">WaxDex Terms of Service</Text>
    </Container>
  )
}

TermsOfService.chains = []

export default TermsOfService

import { useTranslation } from '@pancakeswap/localization'
import { Text, Link, Flex, InfoFilledIcon } from '@pancakeswap/uikit'
import floor from 'lodash/floor'

export default function WithdrawalMessage({ lockPeriod }: { lockPeriod: number }) {
  const { t } = useTranslation()

  return (
    <Flex mt="8px">
      <InfoFilledIcon
        style={{
          alignSelf: 'baseline',
          marginTop: '4px',
          marginRight: '8px',
        }}
        color="textSubtle"
        mr="4px"
      />
      <Text fontSize="14px" color="textSubtle">
        {t(
          'Funds will not be available for withdrawal for the first %days% days, and subsequently an early withdrawal fee will be applied if amount is unstaked before locked period is up. ',
          { days: floor(lockPeriod / 3) },
        )}
      </Text>
    </Flex>
  )
}

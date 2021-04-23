import React from 'react'
import aclogo from '../../assets/img/scamLogo.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={aclogo} height={190} alt="ac logo" />}
        title="Our Dev Can't Rug"
        subtitle="Stake SCAM/BNB LP tokens to earn SCAM"
      />

      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="Chart & Trade" href="https://poocoin.app/tokens/0x00aa85e010204068b7cc2235800b2d8036bdbf2e" variant="default" />
        <Spacer size="sm" />
        <Button text="Provide Liquidity on Pancakeswap" href="https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x00aa85e010204068b7cc2235800b2d8036bdbf2e" variant="default" />
      </div>
      <Spacer size="md" />

      <Container>
        <Balances />
      </Container>
    </Page>
  )
}

export default Home

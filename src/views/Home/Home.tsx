import React from 'react'
import aclogo from '../../assets/img/mmorelightlogo.png'
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
        title="Earn AC"
        subtitle="Stake AC/WXDAI LP tokens to earn AC"
      />

      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="Chart & Trade" href="https://info.honeyswap.org/pair/0x3f64689678c80fc395626ef8d86c3230eca561bf" variant="default" />
        <Spacer size="sm" />
        <Button text="Provide Liquidity on Honeyswap" href="https://app.honeyswap.org/#/add/0x5f1f81de1d21b97a5d0d5d62d89bde9ddec27325/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" variant="default" />
      </div>
      <Spacer size="md" />

      <Container>
        <Balances />
      </Container>
    </Page>
  )
}

export default Home

import React from 'react'
import { GU, Link as AragonLink, textStyle } from '@1hive/1hive-ui'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledDiv>
    <div>
      <StyledHeader>
        Community
      </StyledHeader>
      <Link href="https://discord.gg/7nYgSTu5TY" external>
        Discord
      </Link>
      <Link href="" external>
        Graph
      </Link>
      <Link href="https://twitter.com/SafeSCAMFinance" external>
        Twitter
      </Link>
      <Link href="https://t.me/scambsc" external>
        Telegram
      </Link>
      <Link href="#" external>
        Forum
      </Link>
    </div>
    <StyledDivMargin >
      <StyledHeader>
        Documentation
      </StyledHeader>
      <Link href="https://discord.gg/euMJeYc8" external>
        SCAM SHACK DISCORD
      </Link>
      <Link href="#" external>
      SCAM Pool
      </Link>
      <Link href="" external>
        FAQs
      </Link>
    </StyledDivMargin>
    </StyledDiv>
  )
}

const Link = styled(AragonLink)`
  display: block;
  margin-bottom: ${1.5 * GU}px;
  text-align: left;
  text-decoration: none;
  color: #808587;
`

const StyledHeader = styled.h5`
  ${textStyle('body1')};
  margin-bottom: ${1.5 * GU}px;
`

const StyledDiv = styled.div`
  display: flex;
`

const StyledDivMargin = styled.div`
  margin-left: 25px;
`

export default Nav

import React from 'react'
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import styled from '../theme/styled'

import { AuthStore } from '../stores/AuthStore'

import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps<{}> {
  className?: string
  authStore?: AuthStore,
}

export const NavBar = inject('authStore')(observer((props: IProps) => {
  function handleLogout(e : React.MouseEvent<any>) {
    authStore!.logout()
    history.push('/')
  }
  const { className, authStore, history } = props
  const { isAuthenticated } = authStore!
  return (
    <Container className={className}>
      <Nav>
        <MainLinks>
          <Link to="/" className="frontpage">Frontpage</Link>
          <Link to="/files">Files</Link>
        </MainLinks>
        { isAuthenticated ?
        <Link to="#" role="button" onClick={handleLogout}>Logout</Link> :
        <Link to="/login">Login</Link>
        }
      </Nav>
    </Container>
  )
}))

const Container = styled.div`
  background: ${({ theme }) => theme.color.primaryDark};
  box-shadow: 0 0 2px 2px rgba(0,0,0,0.18);
  padding: 1rem;
`
const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
const Link = styled(NavLink)`
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: 0.2s all;
  &:hover {
    text-decoration: underline;
  }
  &.frontpage {
    font-family: ${({ theme }) => theme.font.header};
    font-weight: 600;
  }
`
const MainLinks = styled.div`
  display: flex;
  ${Link} {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

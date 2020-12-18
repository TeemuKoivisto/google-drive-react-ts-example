import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import styled from '../theme/styled'

import { AuthStore } from '../stores/AuthStore'
import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps<{}> {
  className?: string
  authStore?: AuthStore,
}

export const FilesPage = inject('authStore')(observer((props: IProps) => {
  const { className, history, location, authStore } = props
  useEffect(() => {
    if (authStore!.isAuthenticated) {
      history.push(location.pathname)
    }
  }, [])
  // function handleLogout(e : React.MouseEvent<any>) {
  //   authStore!.logout()
  //   history.push('/')
  // }
  return (
    <div>
      <h1>Files page</h1>
    </div>
  )
}))

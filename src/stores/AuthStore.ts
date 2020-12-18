import { action, computed, runInAction, observable } from 'mobx'
import * as oAuthApi from '../google-api/oauth.api'

import { persist } from './persist'

export interface IUser {
  id: number
  name: string
  email: string
}

export interface ILoginCredentials {
  email: string
  password: string
}

export interface ILoginResponse {
  user: IUser
  jwt: IJwt
}
export interface IJwt {
  expires: number
  token: string
}

const EMPTY_JWT = {
  expires: -1,
  token: ''
}

export class AuthStore {
  @observable user?: IUser = undefined
  @observable jwt: IJwt = EMPTY_JWT
  resetAllStores: () => void

  constructor(resetFn: () => void) {
    this.resetAllStores = resetFn
    persist(() => this.user, (val: any) => this.user = val, 'auth.user')
    persist(() => this.jwt, (val: any) => this.jwt = val, 'auth.jwt')
  }

  @computed get isAuthenticated() {
    return this.user !== undefined && this.jwt.token.length !== 0 && this.jwt.expires > Date.now()
  }

  @action reset() {
    this.user = undefined
    this.jwt = EMPTY_JWT
  }

  @action login = async () => {
    const result = await oAuthApi.login()
    runInAction(() => {
      // if (result) {
      //   this.user = result.user
      //   this.jwt = result.jwt
      // }
    })
    return result
  }

  @action logout = () => {
    this.resetAllStores()
  }
}

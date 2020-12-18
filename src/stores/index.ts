import { AuthStore } from './AuthStore'
import { FileStore } from './FileStore'

export class Stores {
  authStore: AuthStore
  fileStore: FileStore

  constructor() {
    this.authStore = new AuthStore(this.reset)
    this.fileStore = new FileStore()
  }

  reset = () => {
    this.authStore.reset()
    this.fileStore.reset()
  }
}

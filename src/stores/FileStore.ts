import { action, computed, runInAction, observable } from 'mobx'
import * as driveApi from '../google-api/drive.api'

export class FileStore {

  @action reset = () => {}

  @action getFiles = async () => {
    const result = await driveApi.getFiles()
    runInAction(() => {
      if (result) {
        console.log(result)
      }
    })
    return result
  }
}

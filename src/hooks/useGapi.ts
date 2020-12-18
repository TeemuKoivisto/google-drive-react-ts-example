import { useEffect } from 'react'

const {
  REACT_APP_GOOGLE_DRIVE_API_KEY,
  REACT_APP_GOOGLE_DRIVE_CLIENT_ID
} = process.env
const AUTH_SCOPE = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly'
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'

interface Props {
  clientId: string
  authScope: string
  discoveryDoc: string
}

function useGapi(props: Props) {
  async function initClient() {
    await gapi.client.init({
      // apiKey: REACT_APP_GOOGLE_DRIVE_API_KEY,
      clientId: REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
      discoveryDocs: [DISCOVERY_DOC],
      scope: AUTH_SCOPE
    })
  }
  useEffect(() => {
    const gapiScript = document.createElement('script')
    gapiScript.src='https://apis.google.com/js/api.js'
    gapiScript.async = true
    window.document.body.appendChild(gapiScript)
    gapiScript.addEventListener('load', () => {
      gapi.load('client:auth2', initClient)
    })
  }, [])
}

export default useGapi

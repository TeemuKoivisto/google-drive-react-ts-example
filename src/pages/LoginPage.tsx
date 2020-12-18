import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import styled from '../theme/styled'

import { AuthStore } from '../stores/AuthStore'
import { RouteComponentProps } from 'react-router'

const {
  REACT_APP_GOOGLE_DRIVE_API_KEY,
  REACT_APP_GOOGLE_DRIVE_CLIENT_ID
} = process.env
const AUTH_SCOPE = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly'
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'

interface IProps extends RouteComponentProps<{}> {
  className?: string
  authStore?: AuthStore,
}

export const LoginPage = inject('authStore')(observer((props: IProps) => {
  const { className, history, location, authStore } = props
  useEffect(() => {
  }, [])
  function onScriptLoad() {
    gapi.load('client:auth2', initClient)
  }
  async function initClient() {
    await gapi.client.init({
      // apiKey: REACT_APP_GOOGLE_DRIVE_API_KEY,
      clientId: REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
      discoveryDocs: [DISCOVERY_DOC],
      scope: AUTH_SCOPE
    })
    await gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': 'nextPageToken, files(id, name)'
    }).then(res => console.log(res))
  
    // gapi.client.drive.files.list({
    //   'pageSize': 10,
    //   'fields': "nextPageToken, files(id, name)"
    // })
    // const result = await gapi.drive.files
    //   .list({
    //     pageSize: 30,
    //     fields: 'nextPageToken, files(id, name, mimeType, parents)',
    //     q: `'${directoryId === '' ? 'root' : directoryId}' in parents and trashed = false`,
    //     pageToken: nextPageToken,
    //   })
  }
  // function initClient() {
  //   gapi.client.init({
  //     // apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES
  //   }).then(function () {
  //     // Listen for sign-in state changes.
  //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

  //     // Handle the initial sign-in state.
  //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //     authorizeButton.onclick = handleAuthClick;
  //     signoutButton.onclick = handleSignoutClick;
  //   }, function(error) {
  //     appendPre(JSON.stringify(error, null, 2));
  //   });
  // }
  // handleGoogleDriveClick() {
  //   try {
  //     gapi.load('client:auth2', () => {
  //       gapi.client
  //         .init({
  //           apiKey: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY,
  //           clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
  //           discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  //           scope: 'https://www.googleapis.com/auth/drive',
  //         })
  //         .then(() => {
  //           persistField('authenticatedSyncService', 'Google Drive');

  //           gapi.auth2.getAuthInstance().signIn({
  //             ux_mode: 'redirect',
  //             redirect_uri: window.location.origin,
  //           });
  //         });
  //     });
  //   } catch (error) {
  //     alert(
  //       `The Google Drive API client isn't available - you might be blocking it with an ad blocker`
  //     );
  //     return;
  //   }
  // }

  // function initAuth() {
  //   const { clientId } = this.props

  //   await gapi.client.init({ client_id: clientId, scope: AUTH_SCOPE, immediate: false })

  //   gapi.auth.getAuthInstance().isSignedIn.listen(this.updateSignInStatus)

  //   this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
  // }
  return (
    <div>
      <h1>Login page</h1>
    </div>
  )
}))

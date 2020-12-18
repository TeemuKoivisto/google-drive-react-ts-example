import React, { useState } from 'react'

import useGapi from '../hooks/useGapi'

const {
  REACT_APP_GOOGLE_DRIVE_API_KEY,
  REACT_APP_GOOGLE_DRIVE_CLIENT_ID = ''
} = process.env

export function FrontPage() {
  useGapi({
    clientId: REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
    authScope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly',
    discoveryDoc: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
  })
  const [files, setFiles] = useState<gapi.client.drive.File[]>([])
  async function handleList() {
    const resp = await gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': 'nextPageToken, files(id, name)'
    })
    if (resp && resp.result.files) {
      setFiles(resp.result.files)
    }
    console.log(resp)
  }
  return (
    <div>
      <h1>Front page</h1>
      <button onClick={handleList}>List</button>
      { files.map(f =>
        <div key={f.id}>{f.id} : {f.name}</div>
      )}
    </div>
  )
}
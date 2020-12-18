# React Google Drive example

Pre-requisites:

1) Create new project from Google developers console
2) Enable OAuth2 authorization, store the credentials (client id, API key)
3) Add Javascript script origins from clicking the client id from the x for **Authorised JavaScript origins** and **Authorised redirect URIs** eg localhost:7000
4) Enable Google Drive UI, set a host eg S3 static address

The app:

1) Add client id (and API key to .env)
2) Add Oauth2 log in button
3) Login with the payload x
4) Consent to the permissions (you need to verify the URL to remove the unverified thingy)
5) List the files in the drive with request x:
6) Download a file with a request x:
7) Save a new file with x:
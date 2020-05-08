# Authentication
<br/>

RemoteLock uses OAuth 2.0 to authenticate users in applications installed in
mobile devices or running in external servers. The supported OAuth flows:

* **Authorization Code Grant** - [RFC 6749-Section 4.1](http://tools.ietf.org/html/rfc6749#section-4.1)

  The RemoteLock user credentials are only accepted in RemoteLock sign in page,
  which generates an Authorization Code for an access token request.

  The access token for this flow gives access to the user resources that signed in using
  your Application.

* **Client Credentials Grant** - [RFC 6749-Section 4.4](http://tools.ietf.org/html/rfc6749#section-4.4)

  Only the Application ID and Secret are used to authorize access to the API.

  The access token for this flow **only** allows access to resources associated with the
  application's account.

Once a user is authorized, **every** API request **must** include a valid access token.

**Before proceeding:** pick the OAuth flow that is suitable for your business and skip the flows
that do not apply to your account in this guide.

The following OAuth 2.0 endpoints are available under `https://connect.remotelock.com/`.
These are needed for OAuth2 client library you'll be using:

        GET       /oauth/authorize
        POST      /oauth/token

### Choose an OAuth2 client library for your language

To simplify integration with RemoteLock it is **strongly recommended** to use one of
the open source OAuth2 client libraries available in your language. The
library will handle many details described in this documentation.

Since OAuth2 is an open protocol a quick Google search will give you at least a
couple options. Here are some examples:

- **iOS:** https://github.com/OAuthSwift/OAuthSwift
- **Android:** https://github.com/wuman/android-oauth-client
- **Ruby:** https://github.com/intridea/oauth2

### Setup a new Application

1. Send an email to [sales@remotelock.com](mailto:sales@remotelock.com)
requesting API Access for your account.
2. Once API access is enabled for your account, go to [the developer portal](https://developer.remotelock.com)
and sign in to manage your OAuth Applications.

### 1. Authorization Code Grant - [RFC 6749-Section 4.1](http://tools.ietf.org/html/rfc6749#section-4.1)

### 1.1. Generating the initial Authorization Code

Whenever you need access to a user's account for the first time, the application
should load the **Authorize URL** in a browser or webview. The user will enter
the credentials and the server will redirect to the **Callback URL** so that the
application can extract the **authorization code** and then generate an access token.

Example:

Let your Application settings be:

    Application ID: abc
    Secret: xyz
    Callback URL: http://your.server/oauth_callback

The **Authorize URL** should be:

    https://connect.remotelock.com/oauth/authorize?client_id=a1b2c3&response_type=code&redirect_uri=http://your.server/oauth_callback

Your app should load the above URL in a browser and the user will enter credentials
on it. Once the authentication succeeds, the server will redirect the request to:

    http://your.server/oauth_callback?code=123

where **123** is the **Authorization Code** that is valid for **10 minutes**, which
is enough time to your application request the token for the first time. Your
application must be able to handle this URL in order to capture this code so that
it can obtain the OAuth Token.

### 1.2. Generating an OAuth Token

* Make the following POST request to obtain Access and Refresh tokens:

      POST /oauth/token
      Host: connect.remotelock.com
      Content-Type: application/x-www-form-urlencoded

      code=123&
      client_id=abc&
      client_secret=xyz&
      redirect_uri=http://your.server/oauth_callback&
      grant_type=authorization_code

* The response will be a JSON such as:

      {
        "access_token": "1/4cc3ss-t0k3n",
        "expires_in": 7200,
        "token_type": "Bearer",
        "refresh_token": "1/r3fR3sH-t0k3n"
      }

### 1.3. Refresh Token

Each access token expires in 7200 seconds (2 hours). The access token JSON
response contains a **refresh_token** that can be used to issue a new
**access_token** without asking for user authentication again.

* In order to get a new access token, make the following POST request:

      POST /oauth/token
      Host: connect.remotelock.com
      Content-Type: application/x-www-form-urlencoded

      client_id=abc&
      client_secret=123&
      refresh_token=1/r3fR3sH-t0k3n&
      grant_type=refresh_token

* The response will be a JSON such as:

      {
        "access_token": "1/N3w-4cc3ss-T0k3n",
        "expires_in": 7200,
        "refresh_token": "1/n3w-r3fR3sH-t0k3n"
        "token_type": "Bearer"
      }


Your application should store both Access Token and Refresh Token so that it
can access the user account when the user is offline or the application is
running in background.

Whenever an Access Token expires and you use the Refresh Token to request a new
Access Token, the response includes a new Refresh Token, meaning the previous
one became invalid, and then your application should store the new Access Token
and Refresh Token replacing the previous (expired) ones.

Here is an example of this flow:

1. Customer authorizes and you get the initial Access Token A as well as a
   Refresh Token X
2. You access customer data using Access Token A
3. After 2 hours the Access Token A expires, but you need to access customer
   data and you notice that Access Token A is expired
4. You make a request to issue a new Access Token based on the Refresh Token
   X and you get a new Access Token B and a new Refresh Token Y. At this point,
   the Refresh Token X becomes invalid since it was just used
5. Repeat from step 2 replacing A with B and X with Y

_The user can revoke the authorization to your app at anytime, so the Refresh Token
will become invalid and your app will need to ask for user authorization again._

### 2. Client Credentials Grant - [RFC 6749-Section 4.4](http://tools.ietf.org/html/rfc6749#section-4.4)

In this flow, only your account resources are available via API. For this reason, the only
credentials required are the Application ID and Secret.

Let your Application settings be:

    Application ID: abc
    Secret: xyz

### 2.1. Generating an OAuth Token

* Make the following POST request to obtain Access and Refresh tokens:

      POST /oauth/token
      Host: connect.remotelock.com
      Content-Type: application/x-www-form-urlencoded

      client_id=abc&
      client_secret=xyz&
      grant_type=client_credentials

* The response will be a JSON such as:

      {
        "access_token": "1/4cc3ss-t0k3n",
        "expires_in": 7200,
        "token_type": "Bearer",
      }

Notice that this flow does not include a Refresh Token, meaning that this same request must
be done when the access token expires.

### Making requests with an OAuth Token

Just make a GET request using a valid access token. Example:

    GET /locations
    Host: api.remotelock.com
    Accept: application/vnd.lockstate.v1+json
    Authorization: Bearer 1/4cc3ss-t0k3n

### Revoking an OAuth Access Token

Send the following POST request to immediately revoke a token:

    POST /oauth/revoke
    Host: connect.remotelock.com
    Content-Type: application/x-www-form-urlencoded

    client_id=abc&
    client_secret=xyz&
    token=1/4cc3ss-t0k3n

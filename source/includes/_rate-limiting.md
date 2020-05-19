# Rate Limiting

Currently, each **account** is limited to **120 requests/minute**.

Each API response includes rate limiting related headers such as:

    X-RateLimit-Limit: 120
    X-RateLimit-Remaining: 15
    X-RateLimit-Reset: 1452626187

| Header                | Description   |
| --------------------- | ------------- |
| X-RateLimit-Limit     | The maximum number of requests that the account is allowed to make per minute. |
| X-RateLimit-Remaining | The number of requests remaining in current rate limit window. |
| X-RateLimit-Reset     | UTC epoch seconds in which the current rate limit window will reset |

<br/>

Whenever the account has exceeded the rate limit, the request will be responded with status **429** (Too Many Requests)
and the body will contain following JSON:

    {
      message: "Your account has exceeded the rate limit. Check the X-RateLimit-* headers."
    }

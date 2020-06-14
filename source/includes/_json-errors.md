## Errors

There are 2 types of error responses:

- resource errors
- general errors

### Resource errors

Resource errors are used to indicate an error happened for a resource you're
trying to work with. For example: if an invalid configuration option is passed
when updating a lock, the response will be a resource error.

Here's the example response when an error happens:

<div class="center-column"></div>

```json
{
  "attributes": {
    "name": "",
    "age": 10
  },
  "errors": [{
    "attribute": "name",
    "messages": ["is empty"],
    "full_messages": ["name is empty"]
  }]
}
```

In case an error is not related to a particular attribute, the errors
`attribute` value will be `null`.

<div class="center-column"></div>

```json
{
  "attributes": {
    "name": "",
    "age": 10
  },
  "errors": [{
    "attribute": null,
    "messages": ["Subuser creation limit reached, please upgrade your account."],
    "full_messages": ["Subuser creation limit reached, please upgrade your account."]
  }]
}
```

### General errors

General errors are used to describe application-wide errors. For example:
the response contains general error if you try creating a lock but the account
doesn't have a paid subscription.

Here's the example response:

<div class="center-column"></div>

```json
{
  "message": "Please create a subscription",
  "type": "billing_subscription_required"
}
```

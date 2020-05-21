# Access Exceptions



## Get all access exceptions


### Request


#### Endpoint

`GET /access_exceptions`

```plaintext
GET /access_exceptions

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: created_at and name, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_exception",
      "attributes": {
        "name": "Nesciunt quia est eius.",
        "dates": [
          {
            "start_date": "2016-11-24",
            "end_date": "2016-11-25"
          },
          {
            "start_date": "2015-12-25",
            "end_date": "2015-12-25"
          }
        ],
        "created_at": "2020-05-21T13:29:44Z",
        "updated_at": "2020-05-21T13:29:44Z"
      },
      "id": "4d4817cf-676a-4593-bc4f-4e09479ad390",
      "links": {
        "self": "http://api.remotelock.dev/access_exceptions/4d4817cf-676a-4593-bc4f-4e09479ad390"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 1,
    "total_pages": 1
  }
}
```


## Get an access exception


### Request


#### Endpoint

`GET /access_exceptions/:id`

```plaintext
GET /access_exceptions/dc0f3080-84b5-4051-a419-db717847e7da

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_exception",
    "attributes": {
      "name": "Ut sit omnis sit.",
      "dates": [
        {
          "start_date": "2016-11-24",
          "end_date": "2016-11-25"
        },
        {
          "start_date": "2015-12-25",
          "end_date": "2015-12-25"
        }
      ],
      "created_at": "2020-05-21T13:29:44Z",
      "updated_at": "2020-05-21T13:29:44Z"
    },
    "id": "dc0f3080-84b5-4051-a419-db717847e7da",
    "links": {
      "self": "http://api.remotelock.dev/access_exceptions/dc0f3080-84b5-4051-a419-db717847e7da"
    }
  }
}
```


## Create an access exception


### Request


#### Endpoint

`POST /access_exceptions`

```plaintext
POST /access_exceptions

```

#### Parameters


```json
{"attributes":{"name":"Thanks Giving and Christmas","dates":[{"start_date":"2016-11-24","end_date":"2016-11-25"},{"start_date":"2015-12-25","end_date":"2015-12-25"}]}}
```

| Name | Description |
|:-----|:------------|
| attributes[name] *required* | Access exception name |
| attributes[dates] *required* | [{ "start_date": "2016-01-01", "end_date": "2016-01-01" }, ...] |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "access_exception",
    "attributes": {
      "name": "Thanks Giving and Christmas",
      "dates": [
        {
          "start_date": "2016-11-24",
          "end_date": "2016-11-25"
        },
        {
          "start_date": "2015-12-25",
          "end_date": "2015-12-25"
        }
      ],
      "created_at": "2020-05-21T13:29:44Z",
      "updated_at": "2020-05-21T13:29:44Z"
    },
    "id": "6c0defae-a8fe-43d7-b4be-eda506660832",
    "links": {
      "self": "http://api.remotelock.dev/access_exceptions/6c0defae-a8fe-43d7-b4be-eda506660832"
    }
  }
}
```


## Update an access exception


### Request


#### Endpoint

`PUT /access_exceptions/:id`

```plaintext
PUT /access_exceptions/adc24d08-941a-40cd-bc0e-84601d282029

```

#### Parameters


```json
{"attributes":{"name":"Thanks Giving","dates":[{"start_date":"2016-11-24","end_date":"2016-11-25"}]}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Access exception name |
| attributes[dates] *required* | [{ "start_date": "2016-01-01", "end_date": "2016-01-01" }, ...] |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_exception",
    "attributes": {
      "name": "Thanks Giving",
      "dates": [
        {
          "start_date": "2016-11-24",
          "end_date": "2016-11-25"
        }
      ],
      "created_at": "2020-05-21T13:29:45Z",
      "updated_at": "2020-05-21T13:29:45Z"
    },
    "id": "adc24d08-941a-40cd-bc0e-84601d282029",
    "links": {
      "self": "http://api.remotelock.dev/access_exceptions/adc24d08-941a-40cd-bc0e-84601d282029"
    }
  }
}
```


## Delete an access exception


### Request


#### Endpoint

`DELETE /access_exceptions/:id`

```plaintext
DELETE /access_exceptions/584dec40-5994-40d1-8d78-19eb806f833d

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Access Persons



## Get access persons

        Returns all access person types (homogeneous).

        **Status**

        Statuses for `access_guest` type:

          - `upcoming` - initial status when start time has not met yet
          - `current` - initial status when start time has already met
          - `expired` - when end time has already met
          - `deactivated` - when a user manually deactivates it. See new endpoint below

        <br/>
        Statuses for `access_user` type:

          - `current` - initial status
          - `deactivated` - when a user manually deactivates it. See new endpoint below

        This endpoint returns only current and upcoming by default.
        See next example to fetch `expired` and `deactivated` access persons.


### Request


#### Endpoint

`GET /access_persons`

```plaintext
GET /access_persons

```

#### Parameters



| Name | Description |
|:-----|:------------|
| [type]  | Filter by type(s). Supported types: access_user and access_guest |
| sort  | Sortable attributes: created_at, updated_at, name, department, starts_at, and ends_at, default: created_at ascending |
| attributes[status]  | Status: current, upcoming, deactivated or expired. Default: current and upcoming. Supports array query |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_user",
      "attributes": {
        "name": "Ivonne Pouros",
        "email": "rex@keelingkautzer.io",
        "phone": null,
        "pin": "1146",
        "card_number": null,
        "department": null,
        "status": "current",
        "guest_source": null,
        "created_at": "2020-05-21T13:30:17Z",
        "updated_at": "2020-05-21T13:30:17Z"
      },
      "id": "1f67d68e-eb46-4b42-b954-36b698b1d1e9",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/1f67d68e-eb46-4b42-b954-36b698b1d1e9"
      }
    },
    {
      "type": "access_guest",
      "attributes": {
        "name": "Gavin Schimmel",
        "email": "jerrell@spinka.io",
        "phone": null,
        "pin": "1147",
        "card_number": null,
        "department": null,
        "status": "upcoming",
        "guest_source": null,
        "created_at": "2020-05-21T13:30:17Z",
        "updated_at": "2020-05-21T13:30:17Z",
        "starts_at": "2020-05-23T00:00:00",
        "ends_at": "2020-06-13T13:30:17"
      },
      "id": "6d2eebde-e7f1-4414-ac09-3f800e0e3798",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/6d2eebde-e7f1-4414-ac09-3f800e0e3798"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get access persons filtered by status


### Request


#### Endpoint

`GET /access_persons`

```plaintext
GET /access_persons?attributes[status][]=deactivated&amp;attributes[status][]=expired

```

#### Parameters

```json
attributes: {&quot;status&quot;=&gt;[&quot;deactivated&quot;, &quot;expired&quot;]}
```


| Name | Description |
|:-----|:------------|
| [type]  | Filter by type(s). Supported types: access_user and access_guest |
| sort  | Sortable attributes: created_at, updated_at, name, department, starts_at, and ends_at, default: created_at ascending |
| attributes[status]  | Status: current, upcoming, deactivated or expired. Default: current and upcoming. Supports array query |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_user",
      "attributes": {
        "name": "Porter Windler",
        "email": "valery.herzog@gislason.org",
        "phone": null,
        "pin": "1148",
        "card_number": null,
        "department": null,
        "status": "deactivated",
        "guest_source": null,
        "created_at": "2020-05-21T13:30:17Z",
        "updated_at": "2020-05-21T13:30:17Z"
      },
      "id": "e0027b08-e7d2-40cc-b747-a0e9d34ce753",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/e0027b08-e7d2-40cc-b747-a0e9d34ce753"
      },
      "meta": {
        "restricted_actions": [
          "update"
        ]
      }
    },
    {
      "type": "access_guest",
      "attributes": {
        "name": "Chassidy Blick",
        "email": "lynnette@bins.info",
        "phone": null,
        "pin": "1150",
        "card_number": null,
        "department": null,
        "status": "expired",
        "guest_source": null,
        "created_at": "2020-05-21T13:30:17Z",
        "updated_at": "2020-05-21T13:30:17Z",
        "starts_at": "2020-05-18T13:30:17",
        "ends_at": "2020-05-20T13:30:17"
      },
      "id": "00025d3b-4810-42c9-8164-748c76c0ab7d",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/00025d3b-4810-42c9-8164-748c76c0ab7d"
      },
      "meta": {
        "restricted_actions": [
          "update"
        ]
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get an access person


### Request


#### Endpoint

`GET /access_persons/:id`

```plaintext
GET /access_persons/b93e90e5-0fda-470f-9ae8-563d5649f0bf

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_user",
    "attributes": {
      "name": "Tommie Weimann",
      "email": "buddy@feeney.info",
      "phone": null,
      "pin": "1161",
      "card_number": null,
      "department": null,
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-21T13:30:20Z",
      "updated_at": "2020-05-21T13:30:20Z"
    },
    "id": "b93e90e5-0fda-470f-9ae8-563d5649f0bf",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/b93e90e5-0fda-470f-9ae8-563d5649f0bf"
    }
  }
}
```


## Create an access user

'Access user' is a permanent access person type. The only difference from 'access guest' is it doesn't accept 'starts_at' and 'ends_at' parameters.

### Request


#### Endpoint

`POST /access_persons`

```plaintext
POST /access_persons

```

#### Parameters


```json
{"type":"access_user","attributes":{"name":"Ann Smith","email":"ann.smith@example.com","department":"Human Resources","pin":"1234","card_number":"23456"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | access_user |
| attributes[name] *required* | Name |
| attributes[email]  | Email |
| attributes[pin]  | Access person pin (pin, generate_pin or card_number are required) |
| attributes[card_number]  | Card number (pin, generate_pin or card_number are required) |
| attributes[smart_card_id]  | Smart Card |
| attributes[unikey_credential_email]  | UniKey Credential Email |
| attributes[phone]  | Phone Number credential. Format: E.123 international notation |
| attributes[generate_pin]  | When true, a random pin is generated (pin, generate_pin or card_number are required). Default: false |
| attributes[department]  | Department name |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "access_user",
    "attributes": {
      "name": "Ann Smith",
      "email": "ann.smith@example.com",
      "phone": null,
      "pin": "1234",
      "card_number": "23456",
      "department": "Human Resources",
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-21T13:30:21Z",
      "updated_at": "2020-05-21T13:30:21Z"
    },
    "id": "a0a1e10a-530f-4c57-b349-fd102c56e412",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/a0a1e10a-530f-4c57-b349-fd102c56e412"
    }
  }
}
```


## Create an access guest

'Access guest' is a temporary access person type. It has all the same features as 'access user', with the addition of 'starts_at' and 'ends_at' parameters that enable additional access limiting.

### Request


#### Endpoint

`POST /access_persons`

```plaintext
POST /access_persons

```

#### Parameters


```json
{"type":"access_guest","attributes":{"starts_at":"2020-01-02T16:04:00","ends_at":"2020-01-30T16:04:00","name":"Ann Smith","pin":"1234"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | access_guest |
| attributes[name] *required* | Name |
| attributes[email]  | Email |
| attributes[pin]  | Access person pin (pin, generate_pin or card_number are required) |
| attributes[card_number]  | Card number (pin, generate_pin or card_number are required) |
| attributes[smart_card_id]  | Smart Card |
| attributes[unikey_credential_email]  | UniKey Credential Email |
| attributes[phone]  | Phone Number credential. Format: E.123 international notation |
| attributes[generate_pin]  | When true, a random pin is generated (pin, generate_pin or card_number are required). Default: false |
| attributes[starts_at] *required* | Starts at ISO 8601 timestamp without time zone |
| attributes[ends_at] *required* | Ends at ISO 8601 timestamp without time zone |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "access_guest",
    "attributes": {
      "name": "Ann Smith",
      "email": null,
      "phone": null,
      "pin": "1234",
      "card_number": null,
      "department": null,
      "status": "expired",
      "guest_source": null,
      "created_at": "2020-05-21T13:30:21Z",
      "updated_at": "2020-05-21T13:30:21Z",
      "starts_at": "2020-01-02T16:04:00",
      "ends_at": "2020-01-30T16:04:00"
    },
    "id": "9803eff1-b407-41cb-8b5e-696b130671eb",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/9803eff1-b407-41cb-8b5e-696b130671eb"
    },
    "meta": {
      "restricted_actions": [
        "update"
      ]
    }
  }
}
```


## Update an access user


### Request


#### Endpoint

`PUT /access_persons/:id`

```plaintext
PUT /access_persons/fcef9488-4fd1-4de8-a2fc-e8068a162de4

```

#### Parameters


```json
{"attributes":{"name":"House Owner","pin":"2345"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[email]  | Email |
| attributes[pin]  | Access person pin (pin, generate_pin or card_number are required) |
| attributes[card_number]  | Card number (pin, generate_pin or card_number are required) |
| attributes[smart_card_id]  | Smart Card |
| attributes[unikey_credential_email]  | UniKey Credential Email |
| attributes[phone]  | Phone Number credential. Format: E.123 international notation |
| attributes[generate_pin]  | When true, a random pin is generated (pin, generate_pin or card_number are required). Default: false |
| attributes[department]  | Department name |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_user",
    "attributes": {
      "name": "House Owner",
      "email": "clayton.bartell@roob.name",
      "phone": null,
      "pin": "2345",
      "card_number": null,
      "department": null,
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-21T13:30:25Z",
      "updated_at": "2020-05-21T13:30:25Z"
    },
    "id": "fcef9488-4fd1-4de8-a2fc-e8068a162de4",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/fcef9488-4fd1-4de8-a2fc-e8068a162de4"
    }
  }
}
```


## Update an access guest


### Request


#### Endpoint

`PUT /access_persons/:id`

```plaintext
PUT /access_persons/ae326c7a-695a-4a58-ac2f-c3d3725e73c1

```

#### Parameters


```json
{"attributes":{"name":"Cleaning Crew","ends_at":"2020-06-01T00:00:00Z"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[email]  | Email |
| attributes[pin]  | Access person pin (pin, generate_pin or card_number are required) |
| attributes[card_number]  | Card number (pin, generate_pin or card_number are required) |
| attributes[smart_card_id]  | Smart Card |
| attributes[unikey_credential_email]  | UniKey Credential Email |
| attributes[phone]  | Phone Number credential. Format: E.123 international notation |
| attributes[generate_pin]  | When true, a random pin is generated (pin, generate_pin or card_number are required). Default: false |
| attributes[starts_at]  | Starts at ISO 8601 timestamp without time zone |
| attributes[ends_at]  | Ends at ISO 8601 timestamp without time zone |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_guest",
    "attributes": {
      "name": "Cleaning Crew",
      "email": "lawrence@donnelly.net",
      "phone": null,
      "pin": "1186",
      "card_number": null,
      "department": null,
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-21T13:30:26Z",
      "updated_at": "2020-05-21T13:30:26Z",
      "starts_at": "2020-05-22T00:00:00",
      "ends_at": "2020-06-01T00:00:00"
    },
    "id": "ae326c7a-695a-4a58-ac2f-c3d3725e73c1",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/ae326c7a-695a-4a58-ac2f-c3d3725e73c1"
    }
  }
}
```


## Deactivates an access person

        We recommend using this endpoint rather than `DELETE /access_persons/:id`
        because it allows you to fetch `deactivated` and `expired` access persons.


### Request


#### Endpoint

`PUT /access_persons/:id/deactivate`

```plaintext
PUT /access_persons/a0b1facb-b643-48ea-a578-5a931f89a47b/deactivate

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_user",
    "attributes": {
      "name": "Dr. Fidel Herzog",
      "email": "bao.bahringer@kshlerinmedhurst.info",
      "phone": null,
      "pin": "1187",
      "card_number": null,
      "department": null,
      "status": "deactivated",
      "guest_source": null,
      "created_at": "2020-05-21T13:30:26Z",
      "updated_at": "2020-05-21T13:30:26Z"
    },
    "id": "a0b1facb-b643-48ea-a578-5a931f89a47b",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/a0b1facb-b643-48ea-a578-5a931f89a47b"
    },
    "meta": {
      "restricted_actions": [
        "update"
      ]
    }
  }
}
```


## Delete an access person


### Request


#### Endpoint

`DELETE /access_persons/:id`

```plaintext
DELETE /access_persons/97bae828-04da-4df2-be7d-b5dd44aa58d4

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## Schedule sending access instructions email in days


### Request


#### Endpoint

`POST /access_persons/:id/email/notify`

```plaintext
POST /access_persons/4c4e3714-252d-45a1-84fb-23ce606099b0/email/notify

```

#### Parameters


```json
{"attributes":{"days_before":1}}
```

| Name | Description |
|:-----|:------------|
| attributes[days_before]  | Schedule sending email a number of days beforeguest start time. Default: sends the email immediately. |
| attributes[time_frames]  | Attributes time frames |

### Response


```plaintext

200 OK
```



## Get all of an access person&#39;s accesses


### Request


#### Endpoint

`GET /access_persons/:access_person_id/accesses`

```plaintext
GET /access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d/accesses

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 1,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 1,
        "devices_failed_sync_count": 0,
        "accessible_type": "lock",
        "created_at": "2020-05-21T13:30:28Z",
        "updated_at": "2020-05-21T13:30:28Z",
        "access_person_id": "a4324df4-3b85-4f09-b832-0831a98bc64d",
        "access_person_type": "access_user",
        "accessible_id": "1ce275e0-41b6-44a0-86f7-97af81736dbd"
      },
      "id": "107e58c8-cc18-4725-b04c-115b28650bba",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d/accesses/107e58c8-cc18-4725-b04c-115b28650bba",
        "access_person": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d",
        "accessible": "http://api.remotelock.dev/devices/1ce275e0-41b6-44a0-86f7-97af81736dbd"
      }
    },
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "acs_door",
        "created_at": "2020-05-21T13:30:29Z",
        "updated_at": "2020-05-21T13:30:29Z",
        "access_person_id": "a4324df4-3b85-4f09-b832-0831a98bc64d",
        "access_person_type": "access_user",
        "accessible_id": "05990d8a-9c98-4ab3-a9dd-d6f15b720200"
      },
      "id": "76f41e22-ba1a-4ed4-ab08-719127a571d2",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d/accesses/76f41e22-ba1a-4ed4-ab08-719127a571d2",
        "access_person": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d",
        "accessible": "http://api.remotelock.dev/devices/05990d8a-9c98-4ab3-a9dd-d6f15b720200"
      }
    },
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "door_group",
        "created_at": "2020-05-21T13:30:29Z",
        "updated_at": "2020-05-21T13:30:29Z",
        "access_person_id": "a4324df4-3b85-4f09-b832-0831a98bc64d",
        "access_person_type": "access_user",
        "accessible_id": "fc2c66c8-6189-4bb3-9d6f-a74816dd9d54"
      },
      "id": "537c036b-d7a9-4783-95aa-f32493429847",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d/accesses/537c036b-d7a9-4783-95aa-f32493429847",
        "access_person": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d",
        "accessible": "http://api.remotelock.dev/groups/fc2c66c8-6189-4bb3-9d6f-a74816dd9d54"
      }
    },
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "location",
        "created_at": "2020-05-21T13:30:29Z",
        "updated_at": "2020-05-21T13:30:29Z",
        "access_person_id": "a4324df4-3b85-4f09-b832-0831a98bc64d",
        "access_person_type": "access_user",
        "accessible_id": "272b4801-51c8-424e-812f-c6c6e21e345b"
      },
      "id": "5e44808b-91d5-4526-8399-5c43b96247a5",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d/accesses/5e44808b-91d5-4526-8399-5c43b96247a5",
        "access_person": "http://api.remotelock.dev/access_persons/a4324df4-3b85-4f09-b832-0831a98bc64d",
        "accessible": "http://api.remotelock.dev/locations/272b4801-51c8-424e-812f-c6c6e21e345b"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 4,
    "total_pages": 1
  }
}
```


## Get an access person&#39;s access


### Request


#### Endpoint

`GET /access_persons/:access_person_id/accesses/:id`

```plaintext
GET /access_persons/e3bca325-adfb-42b7-b331-f0086a56ebd8/accesses/63490a90-05de-4e40-b210-ab46cd396075

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_person_access",
    "attributes": {
      "guest_start_time": null,
      "guest_end_time": null,
      "devices_count": 1,
      "devices_synced_count": 0,
      "devices_pending_sync_count": 1,
      "devices_failed_sync_count": 0,
      "accessible_type": "lock",
      "created_at": "2020-05-21T13:30:29Z",
      "updated_at": "2020-05-21T13:30:29Z",
      "access_person_id": "e3bca325-adfb-42b7-b331-f0086a56ebd8",
      "access_person_type": "access_user",
      "accessible_id": "898b872f-e4a8-47e1-acb2-38573f81332b"
    },
    "id": "63490a90-05de-4e40-b210-ab46cd396075",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/e3bca325-adfb-42b7-b331-f0086a56ebd8/accesses/63490a90-05de-4e40-b210-ab46cd396075",
      "access_person": "http://api.remotelock.dev/access_persons/e3bca325-adfb-42b7-b331-f0086a56ebd8",
      "accessible": "http://api.remotelock.dev/devices/898b872f-e4a8-47e1-acb2-38573f81332b"
    }
  }
}
```


## Grant an access person access

Accessible can be one of: acs_door, acs_elevator_floor, lock, zwave_lock, schlage_home_lock, door_group or location

### Request


#### Endpoint

`POST /access_persons/:access_person_id/accesses`

```plaintext
POST /access_persons/cca4c046-5d35-4df9-a34e-927772e338f3/accesses

```

#### Parameters


```json
{"attributes":{"accessible_id":"f7c80db5-871d-4a16-a915-0aa6ee11627b","accessible_type":"lock","guest_start_time":"14:00","access_schedule_id":"b4b3ec1d-e58b-4b39-a45a-74fdaf6fb8b6"}}
```

| Name | Description |
|:-----|:------------|
| attributes[accessible_type] *required* | Accessible type: acs_door, acs_elevator_floor, lock, zwave_lock, schlage_home_lock, door_group or location |
| attributes[accessible_id] *required* | Accessible id |
| attributes[access_schedule_id]  | Access schedule id |
| attributes[guest_start_time]  | Access Guest start time override, ISO 8601 24 hour time format |
| attributes[guest_end_time]  | Access Guest end time override, ISO 8601 24 hour time format |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "access_person_access",
    "attributes": {
      "guest_start_time": "14:00:00",
      "guest_end_time": null,
      "devices_count": 0,
      "devices_synced_count": 0,
      "devices_pending_sync_count": 0,
      "devices_failed_sync_count": 0,
      "accessible_type": "lock",
      "created_at": "2020-05-21T13:30:33Z",
      "updated_at": "2020-05-21T13:30:33Z",
      "access_schedule_id": "b4b3ec1d-e58b-4b39-a45a-74fdaf6fb8b6",
      "access_person_id": "cca4c046-5d35-4df9-a34e-927772e338f3",
      "access_person_type": "access_guest",
      "accessible_id": "f7c80db5-871d-4a16-a915-0aa6ee11627b"
    },
    "id": "7fdae995-da00-4932-bd2c-2cefed1bf4ce",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/cca4c046-5d35-4df9-a34e-927772e338f3/accesses/7fdae995-da00-4932-bd2c-2cefed1bf4ce",
      "access_schedule": "http://api.remotelock.dev/schedules/b4b3ec1d-e58b-4b39-a45a-74fdaf6fb8b6",
      "access_person": "http://api.remotelock.dev/access_persons/cca4c046-5d35-4df9-a34e-927772e338f3",
      "accessible": "http://api.remotelock.dev/devices/f7c80db5-871d-4a16-a915-0aa6ee11627b"
    }
  }
}
```


## Update an access person&#39;s access

Only updating the access schedule is supported. To change the accessible, revoke the access and grant a new one.

### Request


#### Endpoint

`PUT /access_persons/:access_person_id/accesses/:id`

```plaintext
PUT /access_persons/c3e2cd23-a934-4f31-b5e7-101b0720b2db/accesses/865f7959-2a19-4000-9b49-dcce857d3b81

```

#### Parameters


```json
{"attributes":{"access_schedule_id":"6003fa2c-7bdd-4026-92c5-97b6c166a8ee"}}
```

| Name | Description |
|:-----|:------------|
| attributes[access_schedule_id]  | Access schedule id |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_person_access",
    "attributes": {
      "guest_start_time": null,
      "guest_end_time": null,
      "devices_count": 1,
      "devices_synced_count": 0,
      "devices_pending_sync_count": 1,
      "devices_failed_sync_count": 0,
      "accessible_type": "lock",
      "created_at": "2020-05-21T13:30:35Z",
      "updated_at": "2020-05-21T13:30:35Z",
      "access_schedule_id": "6003fa2c-7bdd-4026-92c5-97b6c166a8ee",
      "access_person_id": "c3e2cd23-a934-4f31-b5e7-101b0720b2db",
      "access_person_type": "access_user",
      "accessible_id": "f81e9485-3d4a-467b-8a46-2a0d7aa48f0e"
    },
    "id": "865f7959-2a19-4000-9b49-dcce857d3b81",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/c3e2cd23-a934-4f31-b5e7-101b0720b2db/accesses/865f7959-2a19-4000-9b49-dcce857d3b81",
      "access_schedule": "http://api.remotelock.dev/schedules/6003fa2c-7bdd-4026-92c5-97b6c166a8ee",
      "access_person": "http://api.remotelock.dev/access_persons/c3e2cd23-a934-4f31-b5e7-101b0720b2db",
      "accessible": "http://api.remotelock.dev/devices/f81e9485-3d4a-467b-8a46-2a0d7aa48f0e"
    }
  }
}
```


## Revoke an access person&#39;s access


### Request


#### Endpoint

`DELETE /access_persons/:access_person_id/accesses/:id`

```plaintext
DELETE /access_persons/20999412-1dbb-40f8-b315-20c86e9997c0/accesses/5e112989-1172-40dc-aae7-e2be5fb94e6c

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Accounts



## Get current account


### Request


#### Endpoint

`GET /account`

```plaintext
GET /account

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "account",
    "attributes": {
      "name": "Christy Bernhard",
      "created_at": "2020-05-21T13:30:38Z",
      "updated_at": "2020-05-21T13:30:38Z",
      "default_guest_start_time": "16:00:00",
      "default_guest_end_time": "11:00:00",
      "rental_guest_time_override": false,
      "primary_owner_id": "2a095d29-c3ec-42e3-a36b-d4161d52c94e",
      "owner_role_id": "1e9c8fba-67c0-4806-a572-de4f939fbeaa"
    },
    "id": "6afa877b-b3be-467e-8022-4bcf014ac0a6",
    "links": {
      "self": "http://api.remotelock.dev/account",
      "primary_owner": "http://api.remotelock.dev/user",
      "owner_role": "http://api.remotelock.dev/roles/1e9c8fba-67c0-4806-a572-de4f939fbeaa"
    }
  }
}
```


## Update current account


### Request


#### Endpoint

`PUT /account`

```plaintext
PUT /account

```

#### Parameters


```json
{"attributes":{"default_guest_start_time":"15:30:00","default_guest_end_time":"02:15:00","primary_use":"coworking"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Account Name |
| attributes[default_guest_start_time]  | Default Access Guest start time, ISO 8601 24 hour time format, default: "11:00:00" |
| attributes[default_guest_end_time]  | Default Access Guest end time, ISO 8601 24 hour time format, default: "23:00:00" |
| attributes[generated_pin_digits]  | Generated PIN digits |
| attributes[billing_plan_id]  | Billing Plan id |
| attributes[primary_use]  | Primary Use |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "account",
    "attributes": {
      "name": "Tawanna Bauch",
      "created_at": "2020-05-21T13:30:39Z",
      "updated_at": "2020-05-21T13:30:39Z",
      "default_guest_start_time": "15:30:00",
      "default_guest_end_time": "02:15:00",
      "rental_guest_time_override": false,
      "primary_owner_id": "87582cf6-95cb-4d43-bfde-1e38b0a4db58",
      "owner_role_id": "8468cd3a-2fa7-4822-8383-e5a289a4a66d"
    },
    "id": "18a633a1-2fea-49a0-bb21-925e0cf3d0a2",
    "links": {
      "self": "http://api.remotelock.dev/account",
      "primary_owner": "http://api.remotelock.dev/user",
      "owner_role": "http://api.remotelock.dev/roles/8468cd3a-2fa7-4822-8383-e5a289a4a66d"
    }
  }
}
```


# ACS Elevators



## Search elevators


### Request


#### Endpoint

`GET /acs/elevators/search`

```plaintext
GET /acs/elevators/search?term=tower

```

#### Parameters

```json
term: tower
```


None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "acs_elevator",
      "attributes": {
        "name": "Tower A",
        "state": "locked",
        "connected": true,
        "created_at": "2020-05-21T13:30:52Z",
        "updated_at": "2020-05-21T13:30:52Z",
        "location_id": "ee46eaa6-88ec-4c94-b219-54059417939a"
      },
      "id": "0bfff177-9159-4bdf-826d-fe1ebcdf7078",
      "links": {
        "self": "http://api.remotelock.dev/devices/0bfff177-9159-4bdf-826d-fe1ebcdf7078",
        "location": "http://api.remotelock.dev/locations/ee46eaa6-88ec-4c94-b219-54059417939a"
      }
    },
    {
      "type": "acs_elevator",
      "attributes": {
        "name": "Tower B",
        "state": "locked",
        "connected": true,
        "created_at": "2020-05-21T13:30:52Z",
        "updated_at": "2020-05-21T13:30:52Z",
        "location_id": "38019b2e-db87-4bd5-86a0-988ccdf6e4d5"
      },
      "id": "fe61fe68-c0ff-4d22-9697-2446b60c4c4e",
      "links": {
        "self": "http://api.remotelock.dev/devices/fe61fe68-c0ff-4d22-9697-2446b60c4c4e",
        "location": "http://api.remotelock.dev/locations/38019b2e-db87-4bd5-86a0-988ccdf6e4d5"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


# Devices



## Register an OpenEdge RG/BG/CG (formerly 5i/3i/7i) lock


### Request


#### Endpoint

`POST /devices`

```plaintext
POST /devices

```

#### Parameters


```json
{"attributes":{"name":"Home Lock","location_id":"dcbb3d93-4e7b-4465-9cc0-005ae4c0aea1","serial_number":"AC000W000213429"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name] *required* | Name |
| attributes[serial_number] *required* | Serial number |
| attributes[model_id]  | Model |
| attributes[location_id] *required* | Location |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "lock",
    "attributes": {
      "name": "Home Lock",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 2,
      "connected": false,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-21T13:32:14Z",
      "serial_number": "AC000W000213429",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "locked",
      "power_level": 5,
      "created_at": "2020-05-21T13:32:14Z",
      "updated_at": "2020-05-21T13:32:14Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "599e67b9-1533-4cd1-98d2-fc780142e176",
      "location_id": "dcbb3d93-4e7b-4465-9cc0-005ae4c0aea1"
    },
    "id": "fa2779c1-0b89-47f6-b322-15980ec65f66",
    "links": {
      "self": "http://api.remotelock.dev/devices/fa2779c1-0b89-47f6-b322-15980ec65f66",
      "model": "http://api.remotelock.dev/models/599e67b9-1533-4cd1-98d2-fc780142e176",
      "location": "http://api.remotelock.dev/locations/dcbb3d93-4e7b-4465-9cc0-005ae4c0aea1"
    }
  }
}
```


#### Fields

| Name       | Description         |
|:-----------|:--------------------|
| heartbeat_interval | Number of seconds between connections. |
| connected | Is the device connected at this moment? |
| alive | Is the device "heartbeating" regularly? |
| signal_quality | Wi-Fi signal quality, values 0 to 4 |
| power_level | Battery power level (percentage) |
| wake_wifi | When the lock is synced with the cloud. |
| auto_lock | Automatically lock after an unlock event. |
| auto_lock_timeout | Number of seconds before relocking. |
| connected_at | Time of last successful connection. |
## Update a lock

Your settings changes might be lost if you make this request before the
lock wakes up for the first time - which means you should wait until
`connected_at` has a timestamp before making this request. This is
because we request the current lock settings whenever it's registered.


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/855b6d6f-ea33-497c-9216-ae136e228c8a

```

#### Parameters


```json
{"attributes":{"name":"Backdoor Lock","location_id":"db7dcc8c-6e5f-4f4e-9158-40c9ffd3fad8","default_guest_start_time":"11:15:00","power_source":"alkaline_battery","local_pins":["1234"]}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[serial_number]  | Device serial number |
| attributes[programming_code]  | Programming code |
| attributes[heartbeat_interval]  | Heartbeat interval |
| attributes[wake_wifi]  |         Controls what events cause the lock to sync with the cloud. Can be
        `user_action` or `heartbeat_interval`. Additionally, model LS-5i
        supports `user_action_except_manual`, which excludes interaction with
        the knob.
 |
| attributes[muted]  | Muted |
| attributes[auto_lock]  | Auto-lock |
| attributes[auto_lock_timeout]  | Auto-lock timeout |
| attributes[auto_lock_schedule_id]  | Auto-lock Schedule |
| attributes[lock_action_schedule_id]  | Lock Action Schedule |
| attributes[location_id]  | Location |
| attributes[default_guest_start_time]  | Default Access Guest start time, ISO 8601 24 hour time format |
| attributes[default_guest_end_time]  | Default Access Guest end time, ISO 8601 24 hour time format |
| attributes[power_source]  |         One of `hardwire`, `alkaline_battery`, or `lithium_battery`.
        This affects the battery level percentage as well as "low battery" notifications.
 |
| attributes[local_pins]  |         Array of PINs programmed via the device keypad.
        This is a "set" operation. Only PIN removal is supported.
 |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "lock",
    "attributes": {
      "name": "Backdoor Lock",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 0,
      "connected": false,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-21T13:27:17Z",
      "serial_number": "AC000W007411957",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "unlocked",
      "power_level": 15,
      "created_at": "2020-05-21T13:32:17Z",
      "updated_at": "2020-05-21T13:32:17Z",
      "default_guest_start_time": "11:15:00",
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "870a78b0-8b18-469d-b7f5-af2811cf3bf2",
      "location_id": "db7dcc8c-6e5f-4f4e-9158-40c9ffd3fad8"
    },
    "id": "855b6d6f-ea33-497c-9216-ae136e228c8a",
    "links": {
      "self": "http://api.remotelock.dev/devices/855b6d6f-ea33-497c-9216-ae136e228c8a",
      "model": "http://api.remotelock.dev/models/870a78b0-8b18-469d-b7f5-af2811cf3bf2",
      "location": "http://api.remotelock.dev/locations/db7dcc8c-6e5f-4f4e-9158-40c9ffd3fad8"
    }
  }
}
```


## Lock a lock


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/85591db3-eccd-4bd7-893b-ccbf24e322d5/lock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "lock",
    "attributes": {
      "name": "LS-6i - AC000W005839564",
      "heartbeat_interval": 0,
      "wifi_level": 0,
      "signal_quality": 0,
      "connected": false,
      "alive": false,
      "power_source": "hardwire",
      "connected_at": null,
      "serial_number": "AC000W005839564",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 0,
      "programming_code": null,
      "state": "locked",
      "power_level": 0,
      "created_at": "2020-05-21T13:32:18Z",
      "updated_at": "2020-05-21T13:32:18Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": null,
      "model_id": "f41cecd2-df62-410a-bf1f-0f37bc879ea2",
      "location_id": "0b287d3a-4cc3-48a4-a960-5f97fc78d879"
    },
    "id": "85591db3-eccd-4bd7-893b-ccbf24e322d5",
    "links": {
      "self": "http://api.remotelock.dev/devices/85591db3-eccd-4bd7-893b-ccbf24e322d5",
      "model": "http://api.remotelock.dev/models/f41cecd2-df62-410a-bf1f-0f37bc879ea2",
      "location": "http://api.remotelock.dev/locations/0b287d3a-4cc3-48a4-a960-5f97fc78d879"
    }
  }
}
```


## Unlock a lock


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/372596c7-791d-452a-bae7-d47a6cd38afd/unlock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "lock",
    "attributes": {
      "name": "LS-6i - AC000W004644467",
      "heartbeat_interval": 0,
      "wifi_level": 0,
      "signal_quality": 0,
      "connected": false,
      "alive": false,
      "power_source": "hardwire",
      "connected_at": null,
      "serial_number": "AC000W004644467",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 0,
      "programming_code": null,
      "state": "unlocked",
      "power_level": 0,
      "created_at": "2020-05-21T13:32:19Z",
      "updated_at": "2020-05-21T13:32:19Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": null,
      "model_id": "eb118bb9-aa15-46d7-8aa4-934991fea57f",
      "location_id": "a5c204ce-a282-4ad4-9cee-9b86821bbad0"
    },
    "id": "372596c7-791d-452a-bae7-d47a6cd38afd",
    "links": {
      "self": "http://api.remotelock.dev/devices/372596c7-791d-452a-bae7-d47a6cd38afd",
      "model": "http://api.remotelock.dev/models/eb118bb9-aa15-46d7-8aa4-934991fea57f",
      "location": "http://api.remotelock.dev/locations/a5c204ce-a282-4ad4-9cee-9b86821bbad0"
    }
  }
}
```


## Access person accesses of a lock


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/aaaf816a-8eb6-47f5-ae8c-d1b634ac764d/access_person_accesses?attributes[access_person_type]=access_user

```

#### Parameters

```json
attributes: {&quot;access_person_type&quot;=&gt;&quot;access_user&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[access_person_type]  | Filter by type(s). Supported types: access_user and access_guest |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "location",
        "created_at": "2020-05-21T13:32:20Z",
        "updated_at": "2020-05-21T13:32:20Z",
        "access_person_id": "cd88cf86-69a5-4897-be04-55e10e44f2de",
        "access_person_type": "access_user",
        "accessible_id": "17ce28af-8ddc-4ed1-a6cc-7be2b342f3cd"
      },
      "id": "8ee009a4-0c6a-47a1-93f2-c3e2dd6e8704",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/cd88cf86-69a5-4897-be04-55e10e44f2de/accesses/8ee009a4-0c6a-47a1-93f2-c3e2dd6e8704",
        "access_person": "http://api.remotelock.dev/access_persons/cd88cf86-69a5-4897-be04-55e10e44f2de",
        "accessible": "http://api.remotelock.dev/locations/17ce28af-8ddc-4ed1-a6cc-7be2b342f3cd"
      }
    },
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "lock",
        "created_at": "2020-05-21T13:32:20Z",
        "updated_at": "2020-05-21T13:32:20Z",
        "access_person_id": "b716ab5b-b40c-4ef0-aae9-695450000350",
        "access_person_type": "access_user",
        "accessible_id": "aaaf816a-8eb6-47f5-ae8c-d1b634ac764d"
      },
      "id": "29ff8c26-cbc6-4e00-b6e2-25b3015e41a3",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/b716ab5b-b40c-4ef0-aae9-695450000350/accesses/29ff8c26-cbc6-4e00-b6e2-25b3015e41a3",
        "access_person": "http://api.remotelock.dev/access_persons/b716ab5b-b40c-4ef0-aae9-695450000350",
        "accessible": "http://api.remotelock.dev/devices/aaaf816a-8eb6-47f5-ae8c-d1b634ac764d"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Update a Schlage Home lock


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/570f7a22-8c1f-4869-9aaa-4b7e70b1f416

```

#### Parameters


```json
{"attributes":{"name":"East door","location_id":"ef660fa0-bdb2-44a5-9af0-3c016a87ef71"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[location_id]  | Location ID |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "schlage_home_lock",
    "attributes": {
      "name": "East door",
      "state": "locked",
      "alive": true,
      "connected": true,
      "connected_at": "2020-05-21T13:25:22Z",
      "power_level": 90,
      "created_at": "2020-05-21T13:32:22Z",
      "updated_at": "2020-05-21T13:32:22Z",
      "serial_number": "3100003251782951",
      "location_id": "ef660fa0-bdb2-44a5-9af0-3c016a87ef71",
      "model_id": "50bb14a2-905e-4a31-9b19-756acb569dd6"
    },
    "id": "570f7a22-8c1f-4869-9aaa-4b7e70b1f416",
    "links": {
      "self": "http://api.remotelock.dev/devices/570f7a22-8c1f-4869-9aaa-4b7e70b1f416",
      "location": "http://api.remotelock.dev/locations/ef660fa0-bdb2-44a5-9af0-3c016a87ef71",
      "model": "http://api.remotelock.dev/models/50bb14a2-905e-4a31-9b19-756acb569dd6"
    }
  }
}
```


## Lock a Schlage Home lock


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/0f5047ec-17c6-403c-a5cb-ec22fe06216e/lock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "schlage_home_lock",
    "attributes": {
      "name": "bedroom",
      "state": "locked",
      "alive": true,
      "connected": true,
      "connected_at": "2020-05-21T13:26:22Z",
      "power_level": 90,
      "created_at": "2020-05-21T13:32:22Z",
      "updated_at": "2020-05-21T13:32:22Z",
      "serial_number": "3100003251782951",
      "location_id": "3c7701ef-1152-497d-afa7-1f355b5aadfc",
      "model_id": "de0daddc-57ae-40a5-9bcb-92546c931990"
    },
    "id": "0f5047ec-17c6-403c-a5cb-ec22fe06216e",
    "links": {
      "self": "http://api.remotelock.dev/devices/0f5047ec-17c6-403c-a5cb-ec22fe06216e",
      "location": "http://api.remotelock.dev/locations/3c7701ef-1152-497d-afa7-1f355b5aadfc",
      "model": "http://api.remotelock.dev/models/de0daddc-57ae-40a5-9bcb-92546c931990"
    }
  }
}
```


## Unlock a Schlage Home lock


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/b001d9bc-0765-48f3-b42d-d6458cffdc76/unlock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "schlage_home_lock",
    "attributes": {
      "name": "kitchen",
      "state": "locked",
      "alive": true,
      "connected": true,
      "connected_at": "2020-05-21T13:26:23Z",
      "power_level": 90,
      "created_at": "2020-05-21T13:32:23Z",
      "updated_at": "2020-05-21T13:32:23Z",
      "serial_number": "3100003251782951",
      "location_id": "20dea9b3-cf61-405a-9193-2da3818c3b07",
      "model_id": "c9374305-5ee6-423e-bc9a-1c422a1a17db"
    },
    "id": "b001d9bc-0765-48f3-b42d-d6458cffdc76",
    "links": {
      "self": "http://api.remotelock.dev/devices/b001d9bc-0765-48f3-b42d-d6458cffdc76",
      "location": "http://api.remotelock.dev/locations/20dea9b3-cf61-405a-9193-2da3818c3b07",
      "model": "http://api.remotelock.dev/models/c9374305-5ee6-423e-bc9a-1c422a1a17db"
    }
  }
}
```


## Access person accesses of a Schlage Home lock


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/8f49f320-fcbc-4ec6-9dec-802fd1cc58cc/access_person_accesses?attributes[access_person_type]=access_user

```

#### Parameters

```json
attributes: {&quot;access_person_type&quot;=&gt;&quot;access_user&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[access_person_type]  | Filter by type(s). Supported types: access_user and access_guest |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "location",
        "created_at": "2020-05-21T13:32:23Z",
        "updated_at": "2020-05-21T13:32:23Z",
        "access_person_id": "b9057641-1c62-4251-9c66-73d559e8dda2",
        "access_person_type": "access_user",
        "accessible_id": "9a3e8a9b-5c6c-4cee-a7dd-25297022a595"
      },
      "id": "4c61fd30-5502-45b4-b9d4-e58a416e5161",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/b9057641-1c62-4251-9c66-73d559e8dda2/accesses/4c61fd30-5502-45b4-b9d4-e58a416e5161",
        "access_person": "http://api.remotelock.dev/access_persons/b9057641-1c62-4251-9c66-73d559e8dda2",
        "accessible": "http://api.remotelock.dev/locations/9a3e8a9b-5c6c-4cee-a7dd-25297022a595"
      }
    },
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "schlage_home_lock",
        "created_at": "2020-05-21T13:32:23Z",
        "updated_at": "2020-05-21T13:32:23Z",
        "access_person_id": "7c9d1f87-dbcb-41b9-9db2-cf4acbbf7834",
        "access_person_type": "access_user",
        "accessible_id": "8f49f320-fcbc-4ec6-9dec-802fd1cc58cc"
      },
      "id": "9125b018-e5af-4a92-a7a5-7d3ae73168bc",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/7c9d1f87-dbcb-41b9-9db2-cf4acbbf7834/accesses/9125b018-e5af-4a92-a7a5-7d3ae73168bc",
        "access_person": "http://api.remotelock.dev/access_persons/7c9d1f87-dbcb-41b9-9db2-cf4acbbf7834",
        "accessible": "http://api.remotelock.dev/devices/8f49f320-fcbc-4ec6-9dec-802fd1cc58cc"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Update a ZWave lock


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/3f71086b-acd4-428a-a6da-71fa175ed871

```

#### Parameters


```json
{"attributes":{"name":"East door"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "zwave_lock",
    "attributes": {
      "name": "East door",
      "state": "locked",
      "connected": false,
      "power_level": 0,
      "protocol": "",
      "created_at": "2020-05-21T13:32:24Z",
      "updated_at": "2020-05-21T13:32:24Z",
      "location_id": "8b8c5b89-38a4-4fb6-8581-7f88eb0cea71",
      "model_id": "58d2748a-fc74-48a9-901c-de591962df78"
    },
    "id": "3f71086b-acd4-428a-a6da-71fa175ed871",
    "links": {
      "self": "http://api.remotelock.dev/devices/3f71086b-acd4-428a-a6da-71fa175ed871",
      "location": "http://api.remotelock.dev/locations/8b8c5b89-38a4-4fb6-8581-7f88eb0cea71",
      "model": "http://api.remotelock.dev/models/58d2748a-fc74-48a9-901c-de591962df78"
    }
  }
}
```


## Lock a ZWave lock


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/b658c447-9069-4f94-bc97-b02ab68bce2a/lock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "zwave_lock",
    "attributes": {
      "name": "KIC",
      "state": "locked",
      "connected": false,
      "power_level": 0,
      "protocol": "",
      "created_at": "2020-05-21T13:32:25Z",
      "updated_at": "2020-05-21T13:32:25Z",
      "location_id": "a559a35a-48b1-4fcc-a101-1076f46d091f",
      "model_id": "30927df3-11dc-4e18-b76f-5eeb2059c8dc"
    },
    "id": "b658c447-9069-4f94-bc97-b02ab68bce2a",
    "links": {
      "self": "http://api.remotelock.dev/devices/b658c447-9069-4f94-bc97-b02ab68bce2a",
      "location": "http://api.remotelock.dev/locations/a559a35a-48b1-4fcc-a101-1076f46d091f",
      "model": "http://api.remotelock.dev/models/30927df3-11dc-4e18-b76f-5eeb2059c8dc"
    }
  }
}
```


## Unlock a ZWave lock


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/ae5f108e-88d7-4fd3-9964-d80dca8b9048/unlock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "zwave_lock",
    "attributes": {
      "name": "PQO",
      "state": "unlocked",
      "connected": false,
      "power_level": 0,
      "protocol": "",
      "created_at": "2020-05-21T13:32:25Z",
      "updated_at": "2020-05-21T13:32:25Z",
      "location_id": "c6a1547a-d923-453a-8449-729d9fed8bc8",
      "model_id": "a7a448f6-591a-4ac9-97fa-b00c580d0896"
    },
    "id": "ae5f108e-88d7-4fd3-9964-d80dca8b9048",
    "links": {
      "self": "http://api.remotelock.dev/devices/ae5f108e-88d7-4fd3-9964-d80dca8b9048",
      "location": "http://api.remotelock.dev/locations/c6a1547a-d923-453a-8449-729d9fed8bc8",
      "model": "http://api.remotelock.dev/models/a7a448f6-591a-4ac9-97fa-b00c580d0896"
    }
  }
}
```


## Access person accesses of a ZWave lock


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/c75d465b-ec26-48e2-9ba5-b904a0af7b90/access_person_accesses?attributes[access_person_type]=access_user

```

#### Parameters

```json
attributes: {&quot;access_person_type&quot;=&gt;&quot;access_user&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[access_person_type]  | Filter by type(s). Supported types: access_user and access_guest |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "location",
        "created_at": "2020-05-21T13:32:25Z",
        "updated_at": "2020-05-21T13:32:25Z",
        "access_person_id": "70b70ee7-2d52-4d85-87e4-d4ce3f0104f6",
        "access_person_type": "access_user",
        "accessible_id": "53fc879a-1582-4883-ab14-ed79ffe2c68c"
      },
      "id": "d933ceb8-fa6d-4903-96b8-7edd6e8de87f",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/70b70ee7-2d52-4d85-87e4-d4ce3f0104f6/accesses/d933ceb8-fa6d-4903-96b8-7edd6e8de87f",
        "access_person": "http://api.remotelock.dev/access_persons/70b70ee7-2d52-4d85-87e4-d4ce3f0104f6",
        "accessible": "http://api.remotelock.dev/locations/53fc879a-1582-4883-ab14-ed79ffe2c68c"
      }
    },
    {
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "zwave_lock",
        "created_at": "2020-05-21T13:32:26Z",
        "updated_at": "2020-05-21T13:32:26Z",
        "access_person_id": "dc0f103b-e960-4030-b067-a181e02a1280",
        "access_person_type": "access_user",
        "accessible_id": "c75d465b-ec26-48e2-9ba5-b904a0af7b90"
      },
      "id": "38731439-df62-4319-93cb-f55cdbb17b82",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/dc0f103b-e960-4030-b067-a181e02a1280/accesses/38731439-df62-4319-93cb-f55cdbb17b82",
        "access_person": "http://api.remotelock.dev/access_persons/dc0f103b-e960-4030-b067-a181e02a1280",
        "accessible": "http://api.remotelock.dev/devices/c75d465b-ec26-48e2-9ba5-b904a0af7b90"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get all devices

Returns all device types (homogeneous).

### Request


#### Endpoint

`GET /devices`

```plaintext
GET /devices

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: created_at and name, default: created_at ascending |
| [type]  | Filter by type(s). Supported types: acs_door, lock, zwave_lock, resort_lock, and schlage_home_lock |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "lock",
      "attributes": {
        "name": "LS-6i - AC000W002703369",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 2,
        "connected": false,
        "alive": true,
        "power_source": "alkaline_battery",
        "connected_at": "2020-05-21T13:30:27Z",
        "serial_number": "AC000W002703369",
        "wake_wifi": "user_action",
        "muted": false,
        "auto_lock": true,
        "auto_lock_timeout": 20,
        "programming_code": "123456",
        "state": "unlocked",
        "power_level": 5,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "default_guest_start_time": null,
        "default_guest_end_time": null,
        "local_pins": [
          "1234"
        ],
        "model_id": "e2ab9b9e-a6ed-436a-9db6-59fdf6d4f206",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "lock_action_schedule_id": "161dbe8e-0d5d-4352-afdf-4ef5fe35d59f"
      },
      "id": "7012e43d-f076-445f-bb89-e7cf06dd8b03",
      "links": {
        "self": "http://api.remotelock.dev/devices/7012e43d-f076-445f-bb89-e7cf06dd8b03",
        "model": "http://api.remotelock.dev/models/e2ab9b9e-a6ed-436a-9db6-59fdf6d4f206",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "lock_action_schedule": "http://api.remotelock.dev/schedules/161dbe8e-0d5d-4352-afdf-4ef5fe35d59f"
      }
    },
    {
      "type": "thermostat",
      "attributes": {
        "name": "LS-60i - 001DC9A0YG63",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 1,
        "connected": false,
        "alive": true,
        "power_source": "hardwire",
        "connected_at": "2020-05-21T13:30:27Z",
        "serial_number": "001DC9A0YG63",
        "current_mode": "cool",
        "target_mode": "auto",
        "fan_mode": "auto",
        "hold": false,
        "temperature": 77.0,
        "target_temperature": 75.5,
        "unit": "F",
        "humidity": 45,
        "energy_saver": true,
        "scheduled_target_temperature": 80.0,
        "desired_target_temperature": 75.5,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "model_id": "11b7c616-86e4-4d06-90ca-0e9e7e4ca776",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "thermostat_schedule_id": "27dc0cbb-3f9c-4fb3-a464-a850c679c0b4"
      },
      "id": "f6a3afdd-f244-4823-b1e4-a9fc050aec4e",
      "links": {
        "self": "http://api.remotelock.dev/devices/f6a3afdd-f244-4823-b1e4-a9fc050aec4e",
        "model": "http://api.remotelock.dev/models/11b7c616-86e4-4d06-90ca-0e9e7e4ca776",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "thermostat_schedule": "http://api.remotelock.dev/schedules/27dc0cbb-3f9c-4fb3-a464-a850c679c0b4"
      },
      "meta": {
        "restricted_actions": [
          "replace"
        ]
      }
    },
    {
      "type": "lock",
      "attributes": {
        "name": "LS-DB500i - 20F85E00RF3R",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 2,
        "connected": true,
        "alive": true,
        "power_source": "alkaline_battery",
        "connected_at": "2020-05-21T13:32:27Z",
        "serial_number": "20F85E00RF3R",
        "wake_wifi": "user_action",
        "muted": false,
        "auto_lock": true,
        "auto_lock_timeout": 20,
        "programming_code": "123456",
        "state": "unlocked",
        "power_level": 15,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "default_guest_start_time": null,
        "default_guest_end_time": null,
        "local_pins": [
          "1234"
        ],
        "model_id": "9caf1234-28f3-4814-8045-1fc3b6fcda39",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8"
      },
      "id": "8ad971b7-e079-449a-b5c2-0581da02647c",
      "links": {
        "self": "http://api.remotelock.dev/devices/8ad971b7-e079-449a-b5c2-0581da02647c",
        "model": "http://api.remotelock.dev/models/9caf1234-28f3-4814-8045-1fc3b6fcda39",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8"
      },
      "meta": {
        "restricted_actions": [
          "replace"
        ]
      }
    },
    {
      "type": "resort_lock",
      "attributes": {
        "name": "RL-4000 - MI8CFN510B4FBE01",
        "default_guest_start_time": null,
        "default_guest_end_time": null,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "serial_number": "MI8CFN510B4FBE01",
        "model_id": "1cd373f4-13be-4978-9e84-de77e8a83c12",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8"
      },
      "id": "eac9ad2f-c702-43cb-9822-c559c6acef67",
      "links": {
        "self": "http://api.remotelock.dev/devices/eac9ad2f-c702-43cb-9822-c559c6acef67",
        "model": "http://api.remotelock.dev/models/1cd373f4-13be-4978-9e84-de77e8a83c12",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8"
      }
    },
    {
      "type": "power_plug",
      "attributes": {
        "name": "LS-P50i - 20F85EA3Y0HS",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 3,
        "connected": false,
        "alive": true,
        "power_source": "hardwire",
        "connected_at": "2020-05-21T13:28:27Z",
        "serial_number": "20F85EA3Y0HS",
        "on": true,
        "voltage": 120.0,
        "power": 4.5,
        "power_factor": 0.57,
        "current": 0.06,
        "frequency": 59.95,
        "total_power": 8.75,
        "occupied": true,
        "model_id": "1364c59e-d27c-44af-9136-b05c8cbd14fd",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "power_plug_schedule_id": "1f1a8aa9-6942-4d7a-ae3c-69d7fa8432c5"
      },
      "id": "0c9d0a80-94a4-44dc-90a8-0401ea848a9f",
      "links": {
        "self": "http://api.remotelock.dev/devices/0c9d0a80-94a4-44dc-90a8-0401ea848a9f",
        "model": "http://api.remotelock.dev/models/1364c59e-d27c-44af-9136-b05c8cbd14fd",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "power_plug_schedule": "http://api.remotelock.dev/schedules/1f1a8aa9-6942-4d7a-ae3c-69d7fa8432c5"
      },
      "meta": {
        "restricted_actions": [
          "replace"
        ]
      }
    },
    {
      "type": "acs_door",
      "attributes": {
        "name": "Home, Health & Games",
        "state": "locked",
        "connected": true,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "model_id": "ca0c1f49-ccd6-4063-aed8-1be0b9e8fd37",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8"
      },
      "id": "25d0a495-2000-4c66-a143-4ee8a3e14fdb",
      "links": {
        "self": "http://api.remotelock.dev/devices/25d0a495-2000-4c66-a143-4ee8a3e14fdb",
        "model": "http://api.remotelock.dev/models/ca0c1f49-ccd6-4063-aed8-1be0b9e8fd37",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8"
      }
    },
    {
      "type": "zwave_lock",
      "attributes": {
        "name": "DTD",
        "state": "locked",
        "connected": true,
        "power_level": 50,
        "protocol": "",
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "model_id": "6e8e27d6-5176-45af-bf1a-1a4e77136c6c"
      },
      "id": "1287d85f-c5b4-4f3c-93d3-6ce1ee33e940",
      "links": {
        "self": "http://api.remotelock.dev/devices/1287d85f-c5b4-4f3c-93d3-6ce1ee33e940",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "model": "http://api.remotelock.dev/models/6e8e27d6-5176-45af-bf1a-1a4e77136c6c"
      }
    },
    {
      "type": "igloo_lock",
      "attributes": {
        "name": "pantry",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "model_id": "428f4dbf-0fad-45d5-86b1-7115e485944d"
      },
      "id": "7e5bd5ff-55f2-4457-8ca4-1fa7c390712a",
      "links": {
        "self": "http://api.remotelock.dev/devices/7e5bd5ff-55f2-4457-8ca4-1fa7c390712a",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "model": "http://api.remotelock.dev/models/428f4dbf-0fad-45d5-86b1-7115e485944d"
      }
    },
    {
      "type": "schlage_home_lock",
      "attributes": {
        "name": "ensuite bathroom",
        "state": "locked",
        "alive": true,
        "connected": true,
        "connected_at": "2020-05-21T13:32:27Z",
        "power_level": 90,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "serial_number": "3100003251782951",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "model_id": "1f2d5c55-5725-4f2c-bb67-7104adc8747b"
      },
      "id": "b89a2759-5fee-4ee1-80c3-7e77e3b0703c",
      "links": {
        "self": "http://api.remotelock.dev/devices/b89a2759-5fee-4ee1-80c3-7e77e3b0703c",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "model": "http://api.remotelock.dev/models/1f2d5c55-5725-4f2c-bb67-7104adc8747b"
      }
    },
    {
      "type": "acs_elevator_floor",
      "attributes": {
        "name": "Movies",
        "state": "locked",
        "number": 17,
        "created_at": "2020-05-21T13:32:27Z",
        "updated_at": "2020-05-21T13:32:27Z",
        "connected": true,
        "model_id": "9adbc134-41de-4771-9d4b-ed4c94b0725a",
        "location_id": "aeba462a-828e-4634-9467-1ab47a16eac8",
        "elevator_id": "9439c4c0-6cf5-43cd-9806-b6dec5a9e757"
      },
      "id": "b98b9f0e-36a4-4101-9048-16719176779f",
      "links": {
        "self": "http://api.remotelock.dev/devices/b98b9f0e-36a4-4101-9048-16719176779f",
        "model": "http://api.remotelock.dev/models/9adbc134-41de-4771-9d4b-ed4c94b0725a",
        "location": "http://api.remotelock.dev/locations/aeba462a-828e-4634-9467-1ab47a16eac8",
        "elevator": "http://api.remotelock.dev/devices/9439c4c0-6cf5-43cd-9806-b6dec5a9e757"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 10,
    "total_pages": 1
  }
}
```


## Get a device


### Request


#### Endpoint

`GET /devices/:id`

```plaintext
GET /devices/2a15142a-0c8c-417f-9a9d-2b862ee6350b

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "lock",
    "attributes": {
      "name": "LS-6i - AC000W006051385",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 3,
      "connected": false,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-21T13:29:34Z",
      "serial_number": "AC000W006051385",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "unlocked",
      "power_level": 50,
      "created_at": "2020-05-21T13:32:34Z",
      "updated_at": "2020-05-21T13:32:34Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "dfb4860a-7adb-4032-84fb-1364c73acba0",
      "location_id": "96d7f488-7d6f-4704-9ec1-c145e6228208",
      "lock_action_schedule_id": "c2428b8a-9a4e-4f31-84fb-4d79265dac5a"
    },
    "id": "2a15142a-0c8c-417f-9a9d-2b862ee6350b",
    "links": {
      "self": "http://api.remotelock.dev/devices/2a15142a-0c8c-417f-9a9d-2b862ee6350b",
      "model": "http://api.remotelock.dev/models/dfb4860a-7adb-4032-84fb-1364c73acba0",
      "location": "http://api.remotelock.dev/locations/96d7f488-7d6f-4704-9ec1-c145e6228208",
      "lock_action_schedule": "http://api.remotelock.dev/schedules/c2428b8a-9a4e-4f31-84fb-4d79265dac5a"
    }
  }
}
```


## Temporarily unlock a Device

Temporarily unlocks a lock. Supported device API types: acs_door.

### Request


#### Endpoint

`PUT /devices/:id/temporary_unlock`

```plaintext
PUT /devices/6bdd003c-03cc-4ca1-ae35-7eb24b4a5e56/temporary_unlock

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "acs_door",
    "attributes": {
      "name": "Movies & Industrial",
      "state": "unlocked",
      "connected": true,
      "created_at": "2020-05-21T13:32:34Z",
      "updated_at": "2020-05-21T13:32:34Z",
      "model_id": "4ee36c29-a73f-4694-832e-009a17027431",
      "location_id": "05e2dd82-2110-4bd4-ab5d-c216125fbff2"
    },
    "id": "6bdd003c-03cc-4ca1-ae35-7eb24b4a5e56",
    "links": {
      "self": "http://api.remotelock.dev/devices/6bdd003c-03cc-4ca1-ae35-7eb24b4a5e56",
      "model": "http://api.remotelock.dev/models/4ee36c29-a73f-4694-832e-009a17027431",
      "location": "http://api.remotelock.dev/locations/05e2dd82-2110-4bd4-ab5d-c216125fbff2"
    }
  }
}
```


## Replace the device


### Request


#### Endpoint

`PUT /devices/:id/replace`

```plaintext
PUT /devices/7216bf0f-67ec-4a87-aedc-2575a01618f8/replace

```

#### Parameters


```json
{"attributes":{"serial_number":"20F85E123456"}}
```

| Name | Description |
|:-----|:------------|
| attributes[serial_number] *required* | New serial number |
| attributes[model_id]  | New model of same type as the current device |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "lock",
    "attributes": {
      "name": "LS-6i - AC000W004495342",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 4,
      "connected": true,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-21T13:27:35Z",
      "serial_number": "20F85E123456",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "unlocked",
      "power_level": 5,
      "created_at": "2020-05-21T13:32:35Z",
      "updated_at": "2020-05-21T13:32:35Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "f824fd44-aa9e-4fc2-a13d-d62371769665",
      "location_id": "6446b689-80a0-4fa7-8937-ae91f2f842da",
      "lock_action_schedule_id": "5e763858-a907-48f5-8aff-80bb6f247bb2"
    },
    "id": "7216bf0f-67ec-4a87-aedc-2575a01618f8",
    "links": {
      "self": "http://api.remotelock.dev/devices/7216bf0f-67ec-4a87-aedc-2575a01618f8",
      "model": "http://api.remotelock.dev/models/f824fd44-aa9e-4fc2-a13d-d62371769665",
      "location": "http://api.remotelock.dev/locations/6446b689-80a0-4fa7-8937-ae91f2f842da",
      "lock_action_schedule": "http://api.remotelock.dev/schedules/5e763858-a907-48f5-8aff-80bb6f247bb2"
    },
    "meta": {
      "restricted_actions": [
        "replace"
      ]
    }
  }
}
```


## Deregister a device


### Request


#### Endpoint

`DELETE /devices/:id`

```plaintext
DELETE /devices/4edf92df-f048-4eda-afe5-c85b7bd597b8

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## Register a ResortLock


### Request


#### Endpoint

`POST /devices`

```plaintext
POST /devices

```

#### Parameters


```json
{"attributes":{"name":"My Resort Lock","serial_number":"AB57EF010F4FBE01","location_id":"11ee6a29-16c4-41c1-9778-69514bdc5c59","model_id":"a0dc7da4-ec06-4cca-af84-56968dd42635","default_guest_start_time":"11:30:00","default_guest_end_time":"14:15:00"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name] *required* | Name |
| attributes[serial_number] *required* | Device serial number |
| attributes[location_id] *required* | Location |
| attributes[model_id]  | Model |
| attributes[default_guest_start_time]  | Default Access Guest start time, ISO 8601 24 hour time format |
| attributes[default_guest_end_time]  | Default Access Guest end time, ISO 8601 24 hour time format |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "resort_lock",
    "attributes": {
      "name": "My Resort Lock",
      "default_guest_start_time": "11:30:00",
      "default_guest_end_time": "14:15:00",
      "created_at": "2020-05-21T13:34:37Z",
      "updated_at": "2020-05-21T13:34:37Z",
      "serial_number": "AB57EF010F4FBE01",
      "model_id": "a0dc7da4-ec06-4cca-af84-56968dd42635",
      "location_id": "11ee6a29-16c4-41c1-9778-69514bdc5c59"
    },
    "id": "c4ea948b-03fa-4a5f-8c57-703536fa8025",
    "links": {
      "self": "http://api.remotelock.dev/devices/c4ea948b-03fa-4a5f-8c57-703536fa8025",
      "model": "http://api.remotelock.dev/models/a0dc7da4-ec06-4cca-af84-56968dd42635",
      "location": "http://api.remotelock.dev/locations/11ee6a29-16c4-41c1-9778-69514bdc5c59"
    }
  }
}
```


## Update a ResortLock


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/96e783c8-2aef-45d1-b8ff-d59a6dc6b4ed

```

#### Parameters


```json
{"attributes":{"name":"Backdoor Resort Lock","default_guest_start_time":"10:00:00"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[location_id]  | Location |
| attributes[serial_number]  | Device serial number |
| attributes[default_guest_start_time]  | Default Access Guest start time, ISO 8601 24 hour time format |
| attributes[default_guest_end_time]  | Default Access Guest end time, ISO 8601 24 hour time format |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "resort_lock",
    "attributes": {
      "name": "Backdoor Resort Lock",
      "default_guest_start_time": "10:00:00",
      "default_guest_end_time": null,
      "created_at": "2020-05-21T13:34:39Z",
      "updated_at": "2020-05-21T13:34:39Z",
      "serial_number": "CCR30H4G0B4FBE01",
      "model_id": "c3dac129-6bfc-41b0-b84f-289e608fc5e3",
      "location_id": "ef9847a1-bb69-4864-ac55-39047f46ffac"
    },
    "id": "96e783c8-2aef-45d1-b8ff-d59a6dc6b4ed",
    "links": {
      "self": "http://api.remotelock.dev/devices/96e783c8-2aef-45d1-b8ff-d59a6dc6b4ed",
      "model": "http://api.remotelock.dev/models/c3dac129-6bfc-41b0-b84f-289e608fc5e3",
      "location": "http://api.remotelock.dev/locations/ef9847a1-bb69-4864-ac55-39047f46ffac"
    }
  }
}
```


# Events



## Get all events


### Request


#### Endpoint

`GET /events`

```plaintext
GET /events

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: created_at and occurred_at, default: occurred_at descending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_person_sync_failed_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T09:15:39Z",
        "created_at": "2020-05-21T13:32:39Z",
        "updated_at": "2020-05-21T13:32:39Z",
        "associated_resource_name": null,
        "status_info": "timeout",
        "publisher_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "publisher_type": "lock",
        "associated_resource_id": "b034377c-3500-4210-876a-0fe458e29cf2",
        "associated_resource_type": "access_user"
      },
      "id": "bd662bfd-0522-46e5-9d8b-2a160eb04da3",
      "links": {
        "self": "http://api.remotelock.dev/events/bd662bfd-0522-46e5-9d8b-2a160eb04da3",
        "publisher": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "associated_resource": "http://api.remotelock.dev/access_persons/b034377c-3500-4210-876a-0fe458e29cf2"
      }
    },
    {
      "type": "access_person_synced_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T05:56:39Z",
        "created_at": "2020-05-21T13:32:39Z",
        "updated_at": "2020-05-21T13:32:39Z",
        "associated_resource_name": null,
        "publisher_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "publisher_type": "lock",
        "associated_resource_id": "5e2b9ba5-3c16-4adc-aa00-59c29855d05e",
        "associated_resource_type": "access_user"
      },
      "id": "f61b487f-b6a3-4913-a426-7f8752f117a3",
      "links": {
        "self": "http://api.remotelock.dev/events/f61b487f-b6a3-4913-a426-7f8752f117a3",
        "publisher": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "associated_resource": "http://api.remotelock.dev/access_persons/5e2b9ba5-3c16-4adc-aa00-59c29855d05e"
      }
    },
    {
      "type": "access_guest_late_sync_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T05:35:39Z",
        "created_at": "2020-05-21T13:32:39Z",
        "updated_at": "2020-05-21T13:32:39Z",
        "associated_resource_name": null,
        "publisher_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "publisher_type": "lock",
        "associated_resource_id": "3549504f-9d6c-4086-9595-efe9c5b8d3ed",
        "associated_resource_type": "access_guest"
      },
      "id": "045547ac-3d47-4cec-a456-c8c8613e2318",
      "links": {
        "self": "http://api.remotelock.dev/events/045547ac-3d47-4cec-a456-c8c8613e2318",
        "publisher": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "associated_resource": "http://api.remotelock.dev/access_persons/3549504f-9d6c-4086-9595-efe9c5b8d3ed"
      }
    },
    {
      "type": "access_person_used_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T05:29:38Z",
        "created_at": "2020-05-21T13:32:38Z",
        "updated_at": "2020-05-21T13:32:38Z",
        "associated_resource_name": null,
        "status_info": null,
        "method": null,
        "card": null,
        "pin": null,
        "smart_card_serial_number": null,
        "publisher_id": "d9ae28da-dc40-44cf-bc4e-8d9b3961cb96",
        "publisher_type": "access_user",
        "associated_resource_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "associated_resource_type": "lock"
      },
      "id": "99d4ef87-2e2e-4a03-aa95-2e432ae67af4",
      "links": {
        "self": "http://api.remotelock.dev/events/99d4ef87-2e2e-4a03-aa95-2e432ae67af4",
        "publisher": "http://api.remotelock.dev/access_persons/d9ae28da-dc40-44cf-bc4e-8d9b3961cb96",
        "associated_resource": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a"
      }
    },
    {
      "type": "connectivity_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T02:31:39Z",
        "created_at": "2020-05-21T13:32:39Z",
        "updated_at": "2020-05-21T13:32:39Z",
        "connected_at": "2020-05-18T00:04:39Z",
        "publisher_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "publisher_type": "lock"
      },
      "id": "975978ce-23d9-46c0-8505-6134f2c50904",
      "links": {
        "self": "http://api.remotelock.dev/events/975978ce-23d9-46c0-8505-6134f2c50904",
        "publisher": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a"
      }
    },
    {
      "type": "power_level_low_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T00:59:39Z",
        "created_at": "2020-05-21T13:32:39Z",
        "updated_at": "2020-05-21T13:32:39Z",
        "power_level": 11,
        "publisher_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "publisher_type": "lock"
      },
      "id": "c121eece-696d-4449-b9ed-036cb05c1aea",
      "links": {
        "self": "http://api.remotelock.dev/events/c121eece-696d-4449-b9ed-036cb05c1aea",
        "publisher": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a"
      }
    },
    {
      "type": "access_person_used_event",
      "attributes": {
        "source": "user",
        "status": "failed",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T00:30:39Z",
        "created_at": "2020-05-21T13:32:39Z",
        "updated_at": "2020-05-21T13:32:39Z",
        "associated_resource_name": null,
        "status_info": null,
        "method": null,
        "card": null,
        "pin": null,
        "smart_card_serial_number": null,
        "publisher_id": "62dd258b-5bd0-490d-a988-a6d82655f265",
        "publisher_type": "access_guest",
        "associated_resource_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "associated_resource_type": "lock"
      },
      "id": "fbabafcb-ce1a-48f9-a1eb-988e3f9f6b94",
      "links": {
        "self": "http://api.remotelock.dev/events/fbabafcb-ce1a-48f9-a1eb-988e3f9f6b94",
        "publisher": "http://api.remotelock.dev/access_persons/62dd258b-5bd0-490d-a988-a6d82655f265",
        "associated_resource": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a"
      }
    },
    {
      "type": "unlocked_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-21T00:28:38Z",
        "created_at": "2020-05-21T13:32:38Z",
        "updated_at": "2020-05-21T13:32:38Z",
        "associated_resource_name": null,
        "status_info": null,
        "method": "pin",
        "card": null,
        "pin": "1234",
        "smart_card_serial_number": null,
        "publisher_id": "c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "publisher_type": "lock",
        "associated_resource_id": "78415940-ec81-469d-a6f2-10edb8cda339",
        "associated_resource_type": "access_user"
      },
      "id": "13fb88cd-c83a-4dd3-84c7-e760c049fef4",
      "links": {
        "self": "http://api.remotelock.dev/events/13fb88cd-c83a-4dd3-84c7-e760c049fef4",
        "publisher": "http://api.remotelock.dev/devices/c7bb0b07-fccd-46da-8d77-efc85de4bf8a",
        "associated_resource": "http://api.remotelock.dev/access_persons/78415940-ec81-469d-a6f2-10edb8cda339"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 8,
    "total_pages": 1
  }
}
```


#### Fields

| Name       | Description         |
|:-----------|:--------------------|
| type | access_person_used, acs_door_opened, acs_door_closed, acs_door_held_open, access_person_synced, access_person_sync_failed, access_guest_late_sync, reset, unlocked, locked, access_denied, jammed, connectivity, power_level_low, battery_replaced, temperature_changed, humidity_changed, relay_enabled, relay_disabled or unlockedlocked |
| source | user, network or device |
| status | succeeded and failed |
| associated_resource_name | If associated_resource is deleted, this field is populated with associated_resource name |
## Get an event


### Request


#### Endpoint

`GET /events/:id`

```plaintext
GET /events/773ed5e8-55dc-4344-a835-c01c4ae33ce1

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "unlocked_event",
    "attributes": {
      "source": "user",
      "status": "succeeded",
      "time_zone": "America/Denver",
      "occurred_at": "2020-05-20T21:29:42Z",
      "created_at": "2020-05-21T13:32:43Z",
      "updated_at": "2020-05-21T13:32:43Z",
      "associated_resource_name": null,
      "status_info": null,
      "method": "pin",
      "card": null,
      "pin": "1234",
      "smart_card_serial_number": null,
      "publisher_id": "711b45ca-d1fb-4613-8767-d8894fedb849",
      "publisher_type": "lock",
      "associated_resource_id": "da64edff-9e97-431d-ac03-e50e0c97ae2a",
      "associated_resource_type": "access_user"
    },
    "id": "773ed5e8-55dc-4344-a835-c01c4ae33ce1",
    "links": {
      "self": "http://api.remotelock.dev/events/773ed5e8-55dc-4344-a835-c01c4ae33ce1",
      "publisher": "http://api.remotelock.dev/devices/711b45ca-d1fb-4613-8767-d8894fedb849",
      "associated_resource": "http://api.remotelock.dev/access_persons/da64edff-9e97-431d-ac03-e50e0c97ae2a"
    }
  }
}
```


#### Fields

| Name       | Description         |
|:-----------|:--------------------|
| type | access_person_used, acs_door_opened, acs_door_closed, acs_door_held_open, access_person_synced, access_person_sync_failed, access_guest_late_sync, reset, unlocked, locked, access_denied, jammed, connectivity, power_level_low, battery_replaced, temperature_changed, humidity_changed, relay_enabled, relay_disabled or unlockedlocked |
| source | user, network or device |
| status | succeeded and failed |
| associated_resource_name | If associated_resource is deleted, this field is populated with associated_resource name |
# Groups



## Get all groups

Returns all group types (homogeneous).

### Request


#### Endpoint

`GET /groups`

```plaintext
GET /groups

```

#### Parameters



| Name | Description |
|:-----|:------------|
| [type]  | Filter by type(s). Supported types: door_group |
| sort  | Sortable attributes: created_at and name, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "door_group",
      "attributes": {
        "name": "Indoor Locks",
        "created_at": "2020-05-21T13:32:48Z",
        "updated_at": "2020-05-21T13:32:48Z"
      },
      "id": "2bede3fe-032b-45a9-9258-4d1bd879dfcb",
      "links": {
        "self": "http://api.remotelock.dev/groups/2bede3fe-032b-45a9-9258-4d1bd879dfcb"
      }
    },
    {
      "type": "door_group",
      "attributes": {
        "name": "Music",
        "created_at": "2020-05-21T13:32:48Z",
        "updated_at": "2020-05-21T13:32:48Z"
      },
      "id": "83b4ef6f-18cf-4978-8dc8-7f44b60e7117",
      "links": {
        "self": "http://api.remotelock.dev/groups/83b4ef6f-18cf-4978-8dc8-7f44b60e7117"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get a group


### Request


#### Endpoint

`GET /groups/:id`

```plaintext
GET /groups/90dd70ce-96d9-4921-a8a4-0d65c7931f2b

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "door_group",
    "attributes": {
      "name": "Indoor Locks",
      "created_at": "2020-05-21T13:32:50Z",
      "updated_at": "2020-05-21T13:32:50Z"
    },
    "id": "90dd70ce-96d9-4921-a8a4-0d65c7931f2b",
    "links": {
      "self": "http://api.remotelock.dev/groups/90dd70ce-96d9-4921-a8a4-0d65c7931f2b"
    }
  }
}
```


## Create a door group


### Request


#### Endpoint

`POST /groups`

```plaintext
POST /groups

```

#### Parameters


```json
{"type":"door_group","attributes":{"name":"Warehouse doors"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | door_group |
| attributes[name] *required* | Door group name |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "door_group",
    "attributes": {
      "name": "Warehouse doors",
      "created_at": "2020-05-21T13:32:51Z",
      "updated_at": "2020-05-21T13:32:51Z"
    },
    "id": "dade54ab-0678-48dc-94d7-eea0f419cabb",
    "links": {
      "self": "http://api.remotelock.dev/groups/dade54ab-0678-48dc-94d7-eea0f419cabb"
    }
  }
}
```


## Update a group


### Request


#### Endpoint

`PUT /groups/:id`

```plaintext
PUT /groups/6bec9406-4c7f-4e68-a238-49befa393ef2

```

#### Parameters


```json
{"attributes":{"name":"Inner doors"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Group name |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "door_group",
    "attributes": {
      "name": "Inner doors",
      "created_at": "2020-05-21T13:32:51Z",
      "updated_at": "2020-05-21T13:32:51Z"
    },
    "id": "6bec9406-4c7f-4e68-a238-49befa393ef2",
    "links": {
      "self": "http://api.remotelock.dev/groups/6bec9406-4c7f-4e68-a238-49befa393ef2"
    }
  }
}
```


## Delete a group


### Request


#### Endpoint

`DELETE /groups/:id`

```plaintext
DELETE /groups/a3fbc4be-3e98-443a-9470-65d6eec8c03a

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## Get all doors in a door group


### Request


#### Endpoint

`GET /groups/:group_id/doors`

```plaintext
GET /groups/18596e74-d743-43f0-b46c-9d12d7999b64/doors?attributes[door_type]=lock

```

#### Parameters

```json
attributes: {&quot;door_type&quot;=&gt;&quot;lock&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[door_type]  | Filter by type(s). Supported types: acs_door, acs_elevator_floor, lock, zwave_lock, and schlage_home_lock |
| sort  | Sortable attributes: created_at, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "door_group_door",
      "attributes": {
        "created_at": "2020-05-21T13:32:52Z",
        "updated_at": "2020-05-21T13:32:52Z",
        "door_id": "86350e29-e8ab-46b2-89ab-8b52a46ab2f7",
        "door_type": "lock",
        "door_group_id": "18596e74-d743-43f0-b46c-9d12d7999b64"
      },
      "id": "d64b6642-e2f6-4d58-a18d-5951033618be",
      "links": {
        "self": "http://api.remotelock.dev/groups/18596e74-d743-43f0-b46c-9d12d7999b64/doors/d64b6642-e2f6-4d58-a18d-5951033618be",
        "door": "http://api.remotelock.dev/devices/86350e29-e8ab-46b2-89ab-8b52a46ab2f7",
        "door_group": "http://api.remotelock.dev/groups/18596e74-d743-43f0-b46c-9d12d7999b64"
      }
    },
    {
      "type": "door_group_door",
      "attributes": {
        "created_at": "2020-05-21T13:32:52Z",
        "updated_at": "2020-05-21T13:32:52Z",
        "door_id": "05c2120d-a619-419a-b880-82c198776993",
        "door_type": "lock",
        "door_group_id": "18596e74-d743-43f0-b46c-9d12d7999b64"
      },
      "id": "a80b4c56-1811-4c3e-8df2-920714ed39f0",
      "links": {
        "self": "http://api.remotelock.dev/groups/18596e74-d743-43f0-b46c-9d12d7999b64/doors/a80b4c56-1811-4c3e-8df2-920714ed39f0",
        "door": "http://api.remotelock.dev/devices/05c2120d-a619-419a-b880-82c198776993",
        "door_group": "http://api.remotelock.dev/groups/18596e74-d743-43f0-b46c-9d12d7999b64"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get doors filtered by type


### Request


#### Endpoint

`GET /groups/:group_id/doors`

```plaintext
GET /groups/7fb41f8b-30bb-404e-b722-72dad64bb271/doors?attributes[door_type]=schlage_home_lock

```

#### Parameters

```json
attributes: {&quot;door_type&quot;=&gt;&quot;schlage_home_lock&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[door_type]  | Filter by type(s). Supported types: acs_door, acs_elevator_floor, lock, zwave_lock, and schlage_home_lock |
| sort  | Sortable attributes: created_at, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "door_group_door",
      "attributes": {
        "created_at": "2020-05-21T13:32:52Z",
        "updated_at": "2020-05-21T13:32:52Z",
        "door_id": "f8c7d65b-9b00-4955-a38b-7b0f768a7878",
        "door_type": "schlage_home_lock",
        "door_group_id": "7fb41f8b-30bb-404e-b722-72dad64bb271"
      },
      "id": "cc180813-72f3-4989-bc93-2ff968d5723b",
      "links": {
        "self": "http://api.remotelock.dev/groups/7fb41f8b-30bb-404e-b722-72dad64bb271/doors/cc180813-72f3-4989-bc93-2ff968d5723b",
        "door": "http://api.remotelock.dev/devices/f8c7d65b-9b00-4955-a38b-7b0f768a7878",
        "door_group": "http://api.remotelock.dev/groups/7fb41f8b-30bb-404e-b722-72dad64bb271"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 1,
    "total_pages": 1
  }
}
```


## Get a door in a door group


### Request


#### Endpoint

`GET /groups/:group_id/doors/:id`

```plaintext
GET /groups/146d534b-ce6d-485b-bf6f-14b10a573263/doors/48b6ea78-a334-43ad-b241-cdc1f2d2370a

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "door_group_door",
    "attributes": {
      "created_at": "2020-05-21T13:32:53Z",
      "updated_at": "2020-05-21T13:32:53Z",
      "door_id": "01c433b8-1cb7-4a74-9b61-920270871571",
      "door_type": "lock",
      "door_group_id": "146d534b-ce6d-485b-bf6f-14b10a573263"
    },
    "id": "48b6ea78-a334-43ad-b241-cdc1f2d2370a",
    "links": {
      "self": "http://api.remotelock.dev/groups/146d534b-ce6d-485b-bf6f-14b10a573263/doors/48b6ea78-a334-43ad-b241-cdc1f2d2370a",
      "door": "http://api.remotelock.dev/devices/01c433b8-1cb7-4a74-9b61-920270871571",
      "door_group": "http://api.remotelock.dev/groups/146d534b-ce6d-485b-bf6f-14b10a573263"
    }
  }
}
```


## Add a door to a door group


### Request


#### Endpoint

`POST /groups/:group_id/doors`

```plaintext
POST /groups/ce7bca99-1a10-4610-8064-27617ae43427/doors

```

#### Parameters


```json
{"attributes":{"door_id":"ceedbd83-8cab-4d19-84ba-1c5cf5acd399","door_type":"lock"}}
```

| Name | Description |
|:-----|:------------|
| attributes[door_id] *required* | Door id |
| attributes[door_type] *required* | Door type: acs_door, acs_elevator_floor, lock, zwave_lock or schlage_home_lock |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "door_group_door",
    "attributes": {
      "created_at": "2020-05-21T13:32:53Z",
      "updated_at": "2020-05-21T13:32:53Z",
      "door_id": "ceedbd83-8cab-4d19-84ba-1c5cf5acd399",
      "door_type": "lock",
      "door_group_id": "ce7bca99-1a10-4610-8064-27617ae43427"
    },
    "id": "87470022-7e75-4bfb-b103-7100bc3e7d30",
    "links": {
      "self": "http://api.remotelock.dev/groups/ce7bca99-1a10-4610-8064-27617ae43427/doors/87470022-7e75-4bfb-b103-7100bc3e7d30",
      "door": "http://api.remotelock.dev/devices/ceedbd83-8cab-4d19-84ba-1c5cf5acd399",
      "door_group": "http://api.remotelock.dev/groups/ce7bca99-1a10-4610-8064-27617ae43427"
    }
  }
}
```


## Remove a door from a door group


### Request


#### Endpoint

`DELETE /groups/:group_id/doors/:id`

```plaintext
DELETE /groups/20da367f-340d-4374-8f52-019cbcf744b6/doors/355b91e2-a722-46f4-a9b9-6dbf87962c18

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Locations



## Get all locations


### Request


#### Endpoint

`GET /locations`

```plaintext
GET /locations

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: created_at and name, default: name ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "location",
      "attributes": {
        "name": "Innovative even-keeled circuit",
        "phone": null,
        "address": "509 Jerde Views",
        "address2": null,
        "city": null,
        "state": null,
        "postal_code": null,
        "country": null,
        "time_zone": "America/Denver",
        "created_at": "2020-05-21T13:34:05Z",
        "updated_at": "2020-05-21T13:34:05Z"
      },
      "id": "b9525e5b-30f6-4204-9bf2-2491237e6615",
      "links": {
        "self": "http://api.remotelock.dev/locations/b9525e5b-30f6-4204-9bf2-2491237e6615"
      }
    },
    {
      "type": "location",
      "attributes": {
        "name": "RemoteLock Headquarters",
        "phone": "(877) 254-5625",
        "address": "1325 S. Colorado Blvd",
        "address2": "Suite B400",
        "city": "Denver",
        "state": "CO",
        "postal_code": "80222",
        "country": "US",
        "time_zone": "America/Denver",
        "created_at": "2020-05-21T13:34:05Z",
        "updated_at": "2020-05-21T13:34:05Z"
      },
      "id": "81876377-7045-4c83-b624-bf7ec0db3633",
      "links": {
        "self": "http://api.remotelock.dev/locations/81876377-7045-4c83-b624-bf7ec0db3633"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get a location


### Request


#### Endpoint

`GET /locations/:id`

```plaintext
GET /locations/7486380d-682c-4b27-8521-3b81d5bc9091

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "location",
    "attributes": {
      "name": "RemoteLock Headquarters",
      "phone": "(877) 254-5625",
      "address": "1325 S. Colorado Blvd",
      "address2": "Suite B400",
      "city": "Denver",
      "state": "CO",
      "postal_code": "80222",
      "country": "US",
      "time_zone": "America/Denver",
      "created_at": "2020-05-21T13:34:06Z",
      "updated_at": "2020-05-21T13:34:06Z"
    },
    "id": "7486380d-682c-4b27-8521-3b81d5bc9091",
    "links": {
      "self": "http://api.remotelock.dev/locations/7486380d-682c-4b27-8521-3b81d5bc9091"
    }
  }
}
```


## Create a location


### Request


#### Endpoint

`POST /locations`

```plaintext
POST /locations

```

#### Parameters


```json
{"attributes":{"name":"RemoteLock HQ","phone":"(877) 254-5625","address":"1325 S. Colorado Blvd","address2":"Suite B400","city":"Denver","state":"CO","postal_code":"80222","country":"US","time_zone":"America/Denver"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name] *required* | Attributes name |
| attributes[phone]  | Attributes phone |
| attributes[address]  | Attributes address |
| attributes[address_2]  | Attributes address 2 |
| attributes[city]  | Attributes city |
| attributes[state]  | Attributes state |
| attributes[postal_code]  | Attributes postal code |
| attributes[country]  | https://en.wikipedia.org/wiki/ISO_3166-1 |
| attributes[time_zone] *required* | https://en.wikipedia.org/wiki/List_of_tz_database_time_zones |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "location",
    "attributes": {
      "name": "RemoteLock HQ",
      "phone": "(877) 254-5625",
      "address": "1325 S. Colorado Blvd",
      "address2": "Suite B400",
      "city": "Denver",
      "state": "CO",
      "postal_code": "80222",
      "country": "US",
      "time_zone": "America/Denver",
      "created_at": "2020-05-21T13:34:06Z",
      "updated_at": "2020-05-21T13:34:06Z"
    },
    "id": "5d63afb0-dbe3-49c0-9642-9b6c832e0c9d",
    "links": {
      "self": "http://api.remotelock.dev/locations/5d63afb0-dbe3-49c0-9642-9b6c832e0c9d"
    }
  }
}
```


## Update a location


### Request


#### Endpoint

`PUT /locations/:id`

```plaintext
PUT /locations/ec87223e-a1af-437c-a277-7ecf71799bd9

```

#### Parameters


```json
{"attributes":{"name":"RemoteLock HQ"}}
```

None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "location",
    "attributes": {
      "name": "RemoteLock HQ",
      "phone": "(877) 254-5625",
      "address": "1325 S. Colorado Blvd",
      "address2": "Suite B400",
      "city": "Denver",
      "state": "CO",
      "postal_code": "80222",
      "country": "US",
      "time_zone": "America/Denver",
      "created_at": "2020-05-21T13:34:07Z",
      "updated_at": "2020-05-21T13:34:07Z"
    },
    "id": "ec87223e-a1af-437c-a277-7ecf71799bd9",
    "links": {
      "self": "http://api.remotelock.dev/locations/ec87223e-a1af-437c-a277-7ecf71799bd9"
    }
  }
}
```


## Delete a location


### Request


#### Endpoint

`DELETE /locations/:id`

```plaintext
DELETE /locations/c326331e-7c9f-4dcb-b647-cbaffa096d03

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Models



## Get all models


### Request


#### Endpoint

`GET /models`

```plaintext
GET /models

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: number, default: none |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "model",
      "attributes": {
        "name": "RL-4000",
        "number": "RL-4000",
        "type": "resort_lock",
        "capabilities": {
          "connected": false,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": false,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "eb0f5809-cdf6-4f69-add3-90674a49565a",
      "links": {
        "self": "http://api.remotelock.dev/models/eb0f5809-cdf6-4f69-add3-90674a49565a"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "ZWaveLock",
        "number": "ZWaveLock",
        "type": "zwave_lock",
        "capabilities": {
          "connected": true,
          "guest_deferrable": true,
          "phone_credential": false,
          "pin_credential": true,
          "prox_card_credential": false,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "172523be-2a7e-4f3d-9562-cb752396577f",
      "links": {
        "self": "http://api.remotelock.dev/models/172523be-2a7e-4f3d-9562-cb752396577f"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-P50i",
        "number": "LS-P50i",
        "type": "power_plug",
        "capabilities": {
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "power_sources": [
            "hardwire"
          ],
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false
        }
      },
      "id": "1960d7cc-189e-4eed-93d7-4d1883bd699a",
      "links": {
        "self": "http://api.remotelock.dev/models/1960d7cc-189e-4eed-93d7-4d1883bd699a"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "BG (LS-3i)",
        "number": "LS-3i",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": true,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": true,
          "smart_card_credential": false,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval"
          ]
        }
      },
      "id": "e3069911-53c8-4438-a7c8-385db596e396",
      "links": {
        "self": "http://api.remotelock.dev/models/e3069911-53c8-4438-a7c8-385db596e396"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "OpenEdge Series",
        "number": "OEMAIN",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": true,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": true,
          "smart_card_credential": true,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval"
          ]
        }
      },
      "id": "85fd5cfd-a46b-48cf-9e1f-8134737d8868",
      "links": {
        "self": "http://api.remotelock.dev/models/85fd5cfd-a46b-48cf-9e1f-8134737d8868"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-P100mi",
        "number": "LS-P100mi",
        "type": "power_plug",
        "capabilities": {
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "power_sources": [
            "hardwire"
          ],
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false
        }
      },
      "id": "1884c9b9-02fd-4906-91a0-d6634c42aa80",
      "links": {
        "self": "http://api.remotelock.dev/models/1884c9b9-02fd-4906-91a0-d6634c42aa80"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "RG (LS-5i)",
        "number": "LS-5i",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": true,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": true,
          "smart_card_credential": false,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval",
            "user_action_except_manual"
          ]
        }
      },
      "id": "304da03d-675b-4a59-a3cd-bedd7b8f847b",
      "links": {
        "self": "http://api.remotelock.dev/models/304da03d-675b-4a59-a3cd-bedd7b8f847b"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-DB500i",
        "number": "LS-DB500i",
        "type": "lock",
        "capabilities": {
          "access_exception": false,
          "auto_lock_enable": false,
          "auto_lock_schedule": false,
          "auto_lock_timeouts": [

          ],
          "connected": true,
          "guest_deferrable": true,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "local_pins": true,
          "lock_action_schedule": false,
          "mute": false,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [

          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false,
          "smart_card_credential": false,
          "wake_wifi": [

          ]
        }
      },
      "id": "a31fa267-7ea9-4f58-87f6-06d76930b08a",
      "links": {
        "self": "http://api.remotelock.dev/models/a31fa267-7ea9-4f58-87f6-06d76930b08a"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-L500i",
        "number": "LS-L500i",
        "type": "lock",
        "capabilities": {
          "access_exception": false,
          "auto_lock_enable": false,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [

          ],
          "connected": true,
          "guest_deferrable": true,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "local_pins": true,
          "lock_action_schedule": false,
          "mute": false,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [

          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false,
          "smart_card_credential": false,
          "wake_wifi": [

          ]
        }
      },
      "id": "e80adb6a-2b66-442f-8843-2822d44353b0",
      "links": {
        "self": "http://api.remotelock.dev/models/e80adb6a-2b66-442f-8843-2822d44353b0"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "E06",
        "number": "WEST-E06",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": true,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": true,
          "smart_card_credential": false,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval",
            "user_action_except_manual"
          ]
        }
      },
      "id": "6ebad466-5438-477c-8426-79163c2ae157",
      "links": {
        "self": "http://api.remotelock.dev/models/6ebad466-5438-477c-8426-79163c2ae157"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "MercuryElevator",
        "number": "MercuryElevator",
        "type": "acs_elevator",
        "capabilities": {
          "access_exception": true,
          "connected": true,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": true,
          "prox_card_credential": true,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "25e7cf9d-43aa-44f7-9563-f3f4a97b0da5",
      "links": {
        "self": "http://api.remotelock.dev/models/25e7cf9d-43aa-44f7-9563-f3f4a97b0da5"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "MercuryElevatorFloor",
        "number": "MercuryElevatorFloor",
        "type": "acs_elevator_floor",
        "capabilities": {
          "access_exception": true,
          "connected": true,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": true,
          "prox_card_credential": true,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "514e4f3b-0ced-4a90-aa63-42b727cb27b8",
      "links": {
        "self": "http://api.remotelock.dev/models/514e4f3b-0ced-4a90-aa63-42b727cb27b8"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "CG (LS-7i)",
        "number": "LS-7i",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": true,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": true,
          "smart_card_credential": false,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval"
          ]
        }
      },
      "id": "fbaa2c97-5965-42cf-a701-fc54b34870e2",
      "links": {
        "self": "http://api.remotelock.dev/models/fbaa2c97-5965-42cf-a701-fc54b34870e2"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "Mercury",
        "number": "Mercury",
        "type": "acs_door",
        "capabilities": {
          "access_exception": true,
          "connected": true,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": true,
          "prox_card_credential": true,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "848fcd22-7963-4913-b64b-7ace802a7864",
      "links": {
        "self": "http://api.remotelock.dev/models/848fcd22-7963-4913-b64b-7ace802a7864"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-90i",
        "number": "LS-90i",
        "type": "thermostat",
        "capabilities": {
          "connected": true,
          "fan_modes": [
            "on",
            "auto",
            "auto_circulate"
          ],
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "modes": [
            "heat",
            "cool",
            "auto",
            "off"
          ],
          "power_sources": [
            "hardwire"
          ],
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false
        }
      },
      "id": "b30de2e2-99f9-43ff-a1e4-8bc9aafef26f",
      "links": {
        "self": "http://api.remotelock.dev/models/b30de2e2-99f9-43ff-a1e4-8bc9aafef26f"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "Schlage Encode Lock",
        "number": "SchlageEncode",
        "type": "schlage_home_lock",
        "capabilities": {
          "connected": true,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": true,
          "prox_card_credential": false,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "692aa897-3832-454a-b363-a2bf5c0f27f4",
      "links": {
        "self": "http://api.remotelock.dev/models/692aa897-3832-454a-b363-a2bf5c0f27f4"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "RL-2000",
        "number": "RL-2000",
        "type": "resort_lock",
        "capabilities": {
          "connected": false,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": false,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "4c1d49df-6439-4d77-baf3-f407b72ddaa0",
      "links": {
        "self": "http://api.remotelock.dev/models/4c1d49df-6439-4d77-baf3-f407b72ddaa0"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "August",
        "number": "August",
        "type": "lock",
        "capabilities": {
          "access_exception": false,
          "auto_lock_enable": false,
          "auto_lock_schedule": false,
          "auto_lock_timeouts": [

          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [

          ],
          "local_pins": true,
          "lock_action_schedule": false,
          "mute": false,
          "phone_credential": true,
          "pin_credential": true,
          "power_sources": [

          ],
          "programming_code": false,
          "prox_card_credential": false,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false,
          "wake_wifi": [

          ]
        }
      },
      "id": "f0a992b6-ebf3-4051-9e02-386801de8eb3",
      "links": {
        "self": "http://api.remotelock.dev/models/f0a992b6-ebf3-4051-9e02-386801de8eb3"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-8i",
        "number": "LS-8i",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": false,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": false,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": false,
          "prox_card_credential": false,
          "registrable": false,
          "replaceable": true,
          "smart_card_credential": true,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval"
          ]
        }
      },
      "id": "bd1cb825-d9d5-4052-9e31-8e49699cdaca",
      "links": {
        "self": "http://api.remotelock.dev/models/bd1cb825-d9d5-4052-9e31-8e49699cdaca"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-60i",
        "number": "LS-60i",
        "type": "thermostat",
        "capabilities": {
          "connected": true,
          "fan_modes": [
            "on",
            "auto"
          ],
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "modes": [
            "heat",
            "cool",
            "off"
          ],
          "power_sources": [
            "battery",
            "hardwire"
          ],
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false
        }
      },
      "id": "fc573053-e726-4df3-b55b-be8dac1ef40c",
      "links": {
        "self": "http://api.remotelock.dev/models/fc573053-e726-4df3-b55b-be8dac1ef40c"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "IglooLock",
        "number": "IglooLock",
        "type": "igloo_lock",
        "capabilities": {
          "connected": true,
          "guest_deferrable": false,
          "phone_credential": false,
          "pin_credential": false,
          "prox_card_credential": false,
          "registrable": false,
          "replaceable": false,
          "smart_card_credential": false
        }
      },
      "id": "58e2d5a5-1e77-4aec-b13e-5dea403db2cd",
      "links": {
        "self": "http://api.remotelock.dev/models/58e2d5a5-1e77-4aec-b13e-5dea403db2cd"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-6i",
        "number": "LS-6i",
        "type": "lock",
        "capabilities": {
          "access_exception": true,
          "auto_lock_enable": true,
          "auto_lock_schedule": true,
          "auto_lock_timeouts": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            300,
            900,
            1200,
            1800,
            3600,
            7200,
            14400,
            28800,
            43200
          ],
          "local_pins": true,
          "lock_action_schedule": true,
          "mute": true,
          "phone_credential": false,
          "pin_credential": true,
          "power_sources": [
            "alkaline_battery",
            "lithium_battery"
          ],
          "programming_code": true,
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": true,
          "smart_card_credential": false,
          "wake_wifi": [
            "user_action",
            "heartbeat_interval"
          ]
        }
      },
      "id": "92f93170-e117-4315-ad0b-91533871f33c",
      "links": {
        "self": "http://api.remotelock.dev/models/92f93170-e117-4315-ad0b-91533871f33c"
      }
    },
    {
      "type": "model",
      "attributes": {
        "name": "LS-P100i",
        "number": "LS-P100i",
        "type": "power_plug",
        "capabilities": {
          "connected": true,
          "guest_deferrable": false,
          "heartbeat_intervals": [
            0,
            10,
            60,
            300,
            600,
            900,
            1200,
            1800,
            3600,
            7200,
            10800,
            14400
          ],
          "power_sources": [
            "hardwire"
          ],
          "prox_card_credential": false,
          "registrable": true,
          "replaceable": false
        }
      },
      "id": "01c148b1-c144-476f-885f-2b92b5ea9dcb",
      "links": {
        "self": "http://api.remotelock.dev/models/01c148b1-c144-476f-885f-2b92b5ea9dcb"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 23,
    "total_pages": 1
  }
}
```


## Get a model


### Request


#### Endpoint

`GET /models/:id`

```plaintext
GET /models/d0e32d9a-38eb-4402-b21a-8aaef0119e8a

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "model",
    "attributes": {
      "name": "RL-4000",
      "number": "RL-4000",
      "type": "resort_lock",
      "capabilities": {
        "connected": false,
        "guest_deferrable": false,
        "phone_credential": false,
        "pin_credential": false,
        "prox_card_credential": false,
        "registrable": true,
        "replaceable": false,
        "smart_card_credential": false
      }
    },
    "id": "d0e32d9a-38eb-4402-b21a-8aaef0119e8a",
    "links": {
      "self": "http://api.remotelock.dev/models/d0e32d9a-38eb-4402-b21a-8aaef0119e8a"
    }
  }
}
```


# Notification Subscribers



## Get all notification subscribers

Returns all notification subscriber types (homogeneous).

### Request


#### Endpoint

`GET /notification_subscribers`

```plaintext
GET /notification_subscribers

```

#### Parameters



| Name | Description |
|:-----|:------------|
| [type]  | Filter by type(s). Supported types: email_notification_subscriber, text_notification_subscriber, and webhook_notification_subscriber |
| sort  | Sortable attributes: created_at and name, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "text_notification_subscriber",
      "attributes": {
        "name": "Noel Harris",
        "phone": "976-733-8858 x85425",
        "carrier": "att",
        "active": true,
        "created_at": "2020-05-21T13:34:21Z",
        "updated_at": "2020-05-21T13:34:21Z"
      },
      "id": "606fcd8c-aab9-448f-9c6e-451b4543ce65",
      "links": {
        "self": "http://api.remotelock.dev/notification_subscribers/606fcd8c-aab9-448f-9c6e-451b4543ce65"
      }
    },
    {
      "type": "webhook_notification_subscriber",
      "attributes": {
        "name": "Winifred Toy",
        "url": "https://www.google.com",
        "content_type": "form",
        "secret": "a9651c77e1e265b8594df01ecfd1e2ff",
        "active": true,
        "created_at": "2020-05-21T13:34:21Z",
        "updated_at": "2020-05-21T13:34:21Z"
      },
      "id": "5423490f-9464-4428-80e3-cfc4c961c4a7",
      "links": {
        "self": "http://api.remotelock.dev/notification_subscribers/5423490f-9464-4428-80e3-cfc4c961c4a7"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get a notification subscriber


### Request


#### Endpoint

`GET /notification_subscribers/:id`

```plaintext
GET /notification_subscribers/5fe7b45f-a820-447d-bc22-90cbd22efb37

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "text_notification_subscriber",
    "attributes": {
      "name": "Tyree Gleason V",
      "phone": "790-914-9202 x300",
      "carrier": "boost",
      "active": true,
      "created_at": "2020-05-21T13:34:22Z",
      "updated_at": "2020-05-21T13:34:22Z"
    },
    "id": "5fe7b45f-a820-447d-bc22-90cbd22efb37",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/5fe7b45f-a820-447d-bc22-90cbd22efb37"
    }
  }
}
```


## Update a notification subscriber

Parameters accepted: all used for create

### Request


#### Endpoint

`PUT /notification_subscribers/:id`

```plaintext
PUT /notification_subscribers/1ea0c841-5cc9-4158-b578-fc29ae3bf073

```

#### Parameters


```json
{"attributes":{"active":false}}
```

None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "text_notification_subscriber",
    "attributes": {
      "name": "Carol McLaughlin",
      "phone": "552.744.2622",
      "carrier": "cricket",
      "active": false,
      "created_at": "2020-05-21T13:34:22Z",
      "updated_at": "2020-05-21T13:34:22Z"
    },
    "id": "1ea0c841-5cc9-4158-b578-fc29ae3bf073",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/1ea0c841-5cc9-4158-b578-fc29ae3bf073"
    }
  }
}
```


## Delete a notification subscriber


### Request


#### Endpoint

`DELETE /notification_subscribers/:id`

```plaintext
DELETE /notification_subscribers/a8f2e92f-c2cd-44ca-8454-2aeac62ab9fd

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## Create an email notification subscriber


### Request


#### Endpoint

`POST /notification_subscribers`

```plaintext
POST /notification_subscribers

```

#### Parameters


```json
{"type":"email_notification_subscriber","attributes":{"active":true,"name":"Rob Goff","email":"rob@lockstate.com"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | email_notification_subscriber |
| attributes[active]  | Whether the subscriber is active or not. The subscriber will not receive notifications if set to false. Default: true |
| attributes[name] *required* | Name |
| attributes[email] *required* | Email |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "email_notification_subscriber",
    "attributes": {
      "name": "Rob Goff",
      "email": "rob@lockstate.com",
      "active": true,
      "created_at": "2020-05-21T13:34:23Z",
      "updated_at": "2020-05-21T13:34:23Z"
    },
    "id": "43a35d9f-8c0b-4ead-9ec9-305bb498e896",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/43a35d9f-8c0b-4ead-9ec9-305bb498e896"
    }
  }
}
```


## Create a text notification subscriber


### Request


#### Endpoint

`POST /notification_subscribers`

```plaintext
POST /notification_subscribers

```

#### Parameters


```json
{"type":"text_notification_subscriber","attributes":{"active":true,"name":"Rob Goff","phone":"303-317-3422","carrier":"att"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | text_notification_subscriber |
| attributes[active]  | Whether the subscriber is active or not. The subscriber will not receive notifications if set to false. Default: true |
| attributes[name] *required* | Name |
| attributes[phone] *required* | Phone Number |
| attributes[carrier] *required* | Carrier |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "text_notification_subscriber",
    "attributes": {
      "name": "Rob Goff",
      "phone": "303-317-3422",
      "carrier": "att",
      "active": true,
      "created_at": "2020-05-21T13:34:23Z",
      "updated_at": "2020-05-21T13:34:23Z"
    },
    "id": "afe6b972-6ca2-44a7-b7eb-38fbf47d31ae",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/afe6b972-6ca2-44a7-b7eb-38fbf47d31ae"
    }
  }
}
```


## Create a webhook notification subscriber

        Webhooks are HTTP callbacks that you can create to receive events as
        they happen to avoid polling from the events API endpoint.

        **Webhook endpoint requirements**

        1. Must be secured with HTTPS
        2. Validate request from us using the `X-Secret` header provided when
           webhook was created
        3. Process the request within
           3 seconds,
           otherwise the request will timeout and our server will schedule it
           for retry. To avoid exceeding this deadline, we recommend processing
           webhook requests outside of the request/response lifecycle
        4. Always respond with 200 range status code, otherwise our server will
           schedule the request for retry

        **Retry logic**

        Whenever your webhook endpoint responds with a non-200 range status
        code or exceeds the deadline, our server will timeout the request and
        schedule for retry.

        Our server will retry failed requests according to the mapping below:

        - 1st retry => Delayed by 1 minute
        - 2nd retry => Delayed by 1 hour + 0-60 minutes
        - 3rd retry => Delayed by 12 hours + 0-120 minutes
        - 4th retry => Delayed by 1 day + 0-180 minutes
        - 5th retry => Delayed by 2 days + 0-240 minutes
        - 6th retry => Delayed by 3 days + 0-300 minutes

        Most of the time, this is enough to fix an issue on the webhook target server.

        **Webhook deactivation**

        If any message cannot be acknowledged by the webhook endpoint after the
        retries, our server will automatically deactivate the webhook. When this
        happens, we send an email notifying about the deactivated webhook.

        **Recover missed data**

        The best way to recover data from a deactivated webhook is to fetch
        from the `/events` endpoint. A sort by `created_at` is available for
        that endpoint and your application can use data from the last received
        messages via webhook to find the stop point.

        A webhook payload has a similar structure to the response of events
        endpoint.
        The important difference is that the root JSON key, `data`, is a single
        object on a webhook payload, whereas `data` is an array of objects on
        the events response.

        Make sure the webhook handler is decoupled enough so that it's easy to
        use for a data recover scenario from `/events`.


### Request


#### Endpoint

`POST /notification_subscribers`

```plaintext
POST /notification_subscribers

```

#### Parameters


```json
{"type":"webhook_notification_subscriber","attributes":{"active":true,"name":"Rob's webhook","url":"https://google.com","content_type":"form","secret":"5f7c5b9ccedea8832a46cfca516da134"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | webhook_notification_subscriber |
| attributes[active]  | Whether the subscriber is active or not. The subscriber will not receive notifications if set to false. Default: true |
| attributes[name] *required* | Name |
| attributes[url] *required* | Secure (HTTPS) URL |
| attributes[content_type] *required* | Content-Type ("form" or "json"). Default is "form". |
| attributes[secret]  | "X-Secret" request header to verify it came from us |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "webhook_notification_subscriber",
    "attributes": {
      "name": "Rob's webhook",
      "url": "https://google.com",
      "content_type": "form",
      "secret": "5f7c5b9ccedea8832a46cfca516da134",
      "active": true,
      "created_at": "2020-05-21T13:34:24Z",
      "updated_at": "2020-05-21T13:34:24Z"
    },
    "id": "febd2fdb-6421-43a2-b4b9-ac67f460043d",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/febd2fdb-6421-43a2-b4b9-ac67f460043d"
    }
  }
}
```


# Notification Subscriptions



## Get all notification subscriptions


### Request


#### Endpoint

`GET /notification_subscriptions`

```plaintext
GET /notification_subscriptions

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: created_at, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "notification_subscription",
      "attributes": {
        "events": [
          {
            "event_type": "access_person_used"
          }
        ],
        "created_at": "2020-05-21T13:34:24Z",
        "updated_at": "2020-05-21T13:34:24Z",
        "subscriber_id": "9e111637-3466-4364-9b90-e77afd8db10c",
        "subscriber_type": "text_notification_subscriber",
        "publisher_id": "ff6f2312-fec2-45c8-bfa7-b0a5c7722f7c",
        "publisher_type": "account"
      },
      "id": "0f229b94-e4c1-49d6-be68-c0e47b0fd6d5",
      "links": {
        "self": "http://api.remotelock.dev/notification_subscriptions/0f229b94-e4c1-49d6-be68-c0e47b0fd6d5",
        "subscriber": "http://api.remotelock.dev/notification_subscribers/9e111637-3466-4364-9b90-e77afd8db10c",
        "publisher": "http://api.remotelock.dev/accounts/ff6f2312-fec2-45c8-bfa7-b0a5c7722f7c"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 1,
    "total_pages": 1
  }
}
```


## Get a notification subscription


### Request


#### Endpoint

`GET /notification_subscriptions/:id`

```plaintext
GET /notification_subscriptions/31b0b78d-195a-4687-85ef-45e122226fc3

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "notification_subscription",
    "attributes": {
      "events": [
        {
          "event_type": "access_person_used"
        }
      ],
      "created_at": "2020-05-21T13:34:24Z",
      "updated_at": "2020-05-21T13:34:24Z",
      "subscriber_id": "6a351aff-30dc-44e9-a64a-00b3ac565e69",
      "subscriber_type": "text_notification_subscriber",
      "publisher_id": "2fda3986-edb3-4d0e-be76-c208cf483437",
      "publisher_type": "account"
    },
    "id": "31b0b78d-195a-4687-85ef-45e122226fc3",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscriptions/31b0b78d-195a-4687-85ef-45e122226fc3",
      "subscriber": "http://api.remotelock.dev/notification_subscribers/6a351aff-30dc-44e9-a64a-00b3ac565e69",
      "publisher": "http://api.remotelock.dev/accounts/2fda3986-edb3-4d0e-be76-c208cf483437"
    }
  }
}
```


## Create a notification subscription

Notification Subscription is the combination of a Publisher, a Subscriber and the events to listen.

The event types contained in events must be compatible with the publisher type. Accounts and
Locations can be combined with any event_type, but the others only work with their compatible
event [JSON Schemas](http://json-schema.org):

* Access Person

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "access_person_used"
            ]
          },
          "first_access": {
            "type": "boolean"
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* ACS/Door

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "acs_door_opened",
              "acs_door_closed",
              "acs_door_held_open",
              "access_person_synced",
              "access_person_sync_failed",
              "access_guest_late_sync",
              "reset",
              "unlocked",
              "locked",
              "access_denied",
              "jammed"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* Lock

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "connectivity",
              "power_level_low",
              "battery_replaced",
              "access_person_synced",
              "access_person_sync_failed",
              "access_guest_late_sync",
              "reset",
              "unlocked",
              "locked",
              "access_denied",
              "jammed"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* Thermostat

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "connectivity",
              "power_level_low",
              "temperature_changed",
              "humidity_changed"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* Power Plug

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "connectivity",
              "relay_enabled",
              "relay_disabled"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* ACS/Controller

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "connectivity"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* ZWave Lock

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "connectivity",
              "power_level_low",
              "access_person_synced",
              "access_person_sync_failed",
              "access_guest_late_sync",
              "reset",
              "unlocked",
              "locked",
              "access_denied",
              "jammed"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* Schlage Home/Lock

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "connectivity",
              "power_level_low",
              "access_person_synced",
              "access_person_sync_failed",
              "access_guest_late_sync",
              "reset",
              "unlocked",
              "locked",
              "access_denied",
              "jammed"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* ACS/Elevator

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "unlocked",
              "locked",
              "access_denied",
              "jammed"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 

* ACS/Elevator Floor

      {
        "type": "object",
        "properties": {
          "event_type": {
            "enum": [
              "access_person_synced",
              "access_person_sync_failed",
              "access_guest_late_sync",
              "reset",
              "unlockedlocked"
            ]
          }
        },
        "required": [
          "event_type"
        ],
        "additionalProperties": false
      } 




### Request


#### Endpoint

`POST /notification_subscriptions`

```plaintext
POST /notification_subscriptions

```

#### Parameters


```json
{"attributes":{"events":[{"event_type":"access_person_used"},{"event_type":"acs_door_opened"},{"event_type":"acs_door_closed"},{"event_type":"acs_door_held_open"},{"event_type":"access_person_synced"},{"event_type":"access_person_sync_failed"},{"event_type":"access_guest_late_sync"},{"event_type":"reset"},{"event_type":"unlocked"},{"event_type":"locked"},{"event_type":"access_denied"},{"event_type":"jammed"},{"event_type":"connectivity"},{"event_type":"power_level_low"},{"event_type":"battery_replaced"},{"event_type":"temperature_changed"},{"event_type":"humidity_changed"},{"event_type":"relay_enabled"},{"event_type":"relay_disabled"},{"event_type":"unlockedlocked"}],"publisher_type":"account","publisher_id":"be873d97-057f-40bc-a58a-a368eed45e92","subscriber_type":"text_notification_subscriber","subscriber_id":"778e6507-2844-4864-b1a8-40c5eb667813"}}
```

| Name | Description |
|:-----|:------------|
| attributes[events] *required* | [{ "event_type": "a supported event type" }, ...] |
| attributes[publisher_type] *required* | Publisher type: account, location, access_user, access_guest, lock, thermostat, power_plug, acs_door, acs_controller, acs_elevator, acs_elevator_floor, zwave_lock or schlage_home_lock |
| attributes[publisher_id] *required* | Publisher id |
| attributes[subscriber_type] *required* | Subscriber type: text_notification_subscriber, email_notification_subscriber or webhook_notification_subscriber |
| attributes[subscriber_id] *required* | Subscriber id |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "notification_subscription",
    "attributes": {
      "events": [
        {
          "event_type": "access_person_used"
        },
        {
          "event_type": "acs_door_opened"
        },
        {
          "event_type": "acs_door_closed"
        },
        {
          "event_type": "acs_door_held_open"
        },
        {
          "event_type": "access_person_synced"
        },
        {
          "event_type": "access_person_sync_failed"
        },
        {
          "event_type": "access_guest_late_sync"
        },
        {
          "event_type": "reset"
        },
        {
          "event_type": "unlocked"
        },
        {
          "event_type": "locked"
        },
        {
          "event_type": "access_denied"
        },
        {
          "event_type": "jammed"
        },
        {
          "event_type": "connectivity"
        },
        {
          "event_type": "power_level_low"
        },
        {
          "event_type": "battery_replaced"
        },
        {
          "event_type": "temperature_changed"
        },
        {
          "event_type": "humidity_changed"
        },
        {
          "event_type": "relay_enabled"
        },
        {
          "event_type": "relay_disabled"
        },
        {
          "event_type": "unlockedlocked"
        }
      ],
      "created_at": "2020-05-21T13:34:25Z",
      "updated_at": "2020-05-21T13:34:25Z",
      "subscriber_id": "778e6507-2844-4864-b1a8-40c5eb667813",
      "subscriber_type": "text_notification_subscriber",
      "publisher_id": "be873d97-057f-40bc-a58a-a368eed45e92",
      "publisher_type": "account"
    },
    "id": "d6068cd0-12bf-477d-a4b5-7dc0aab4c251",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscriptions/d6068cd0-12bf-477d-a4b5-7dc0aab4c251",
      "subscriber": "http://api.remotelock.dev/notification_subscribers/778e6507-2844-4864-b1a8-40c5eb667813",
      "publisher": "http://api.remotelock.dev/account"
    }
  }
}
```


## Update a notification subscription


### Request


#### Endpoint

`PUT /notification_subscriptions/:id`

```plaintext
PUT /notification_subscriptions/0e1186ac-6b2a-4b81-98ec-6c0873d0958c

```

#### Parameters


```json
{"attributes":{"events":[{"event_type":"access_person_used"},{"event_type":"acs_door_held_open"}]}}
```

| Name | Description |
|:-----|:------------|
| attributes[events]  | [{ "event_type": "a supported event type" }, ...] |
| attributes[publisher_type]  | Publisher type: account, location, access_user, access_guest, lock, thermostat, power_plug, acs_door, acs_controller, acs_elevator, acs_elevator_floor, zwave_lock or schlage_home_lock |
| attributes[publisher_id]  | Publisher id |
| attributes[subscriber_type]  | Subscriber type: text_notification_subscriber, email_notification_subscriber or webhook_notification_subscriber |
| attributes[subscriber_id]  | Subscriber id |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "notification_subscription",
    "attributes": {
      "events": [
        {
          "event_type": "access_person_used"
        },
        {
          "event_type": "acs_door_held_open"
        }
      ],
      "created_at": "2020-05-21T13:34:26Z",
      "updated_at": "2020-05-21T13:34:26Z",
      "subscriber_id": "a6fd825c-7887-4d8f-b4f2-d246e08f7d53",
      "subscriber_type": "text_notification_subscriber",
      "publisher_id": "74cd6a6f-4f63-4059-ac80-ff85bc931b47",
      "publisher_type": "account"
    },
    "id": "0e1186ac-6b2a-4b81-98ec-6c0873d0958c",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscriptions/0e1186ac-6b2a-4b81-98ec-6c0873d0958c",
      "subscriber": "http://api.remotelock.dev/notification_subscribers/a6fd825c-7887-4d8f-b4f2-d246e08f7d53",
      "publisher": "http://api.remotelock.dev/accounts/74cd6a6f-4f63-4059-ac80-ff85bc931b47"
    }
  }
}
```


## Delete a notification subscription


### Request


#### Endpoint

`DELETE /notification_subscriptions/:id`

```plaintext
DELETE /notification_subscriptions/3ced97ba-bc33-491a-8572-21b92176882f

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Notifications



## Get all notifications


### Request


#### Endpoint

`GET /notifications`

```plaintext
GET /notifications

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "notification",
      "attributes": {
        "created_at": "2020-05-21T13:34:26Z",
        "updated_at": "2020-05-21T13:34:26Z",
        "subscriber_id": "4fba299b-0b30-417f-83f7-4b6bbe040317",
        "subscriber_type": "text_notification_subscriber",
        "publisher_id": "7b4487f3-1117-470b-83f1-5cadf7ab82a1",
        "publisher_type": "lock",
        "event_id": "b3b61a49-5380-40f2-809f-b4f62336907c",
        "event_type": "unlocked_event"
      },
      "id": "3613bc13-bf66-415c-8982-2c35a1a07f20",
      "links": {
        "self": "http://api.remotelock.dev/notifications/3613bc13-bf66-415c-8982-2c35a1a07f20",
        "subscriber": "http://api.remotelock.dev/notification_subscribers/4fba299b-0b30-417f-83f7-4b6bbe040317",
        "publisher": "http://api.remotelock.dev/devices/7b4487f3-1117-470b-83f1-5cadf7ab82a1",
        "event": "http://api.remotelock.dev/events/b3b61a49-5380-40f2-809f-b4f62336907c"
      }
    },
    {
      "type": "notification",
      "attributes": {
        "created_at": "2020-05-21T13:34:26Z",
        "updated_at": "2020-05-21T13:34:26Z",
        "subscriber_id": "3cf1f238-92d1-4b22-9f2e-31b19759e9e8",
        "subscriber_type": "email_notification_subscriber",
        "publisher_id": "7b4487f3-1117-470b-83f1-5cadf7ab82a1",
        "publisher_type": "lock",
        "event_id": "b3b61a49-5380-40f2-809f-b4f62336907c",
        "event_type": "unlocked_event"
      },
      "id": "c2bbb90b-3f7d-4a08-a1eb-7a44871ac26c",
      "links": {
        "self": "http://api.remotelock.dev/notifications/c2bbb90b-3f7d-4a08-a1eb-7a44871ac26c",
        "subscriber": "http://api.remotelock.dev/notification_subscribers/3cf1f238-92d1-4b22-9f2e-31b19759e9e8",
        "publisher": "http://api.remotelock.dev/devices/7b4487f3-1117-470b-83f1-5cadf7ab82a1",
        "event": "http://api.remotelock.dev/events/b3b61a49-5380-40f2-809f-b4f62336907c"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


# Resort Lock Guests



## Get all resort lock guests


### Request


#### Endpoint

`GET /resort_lock_guests`

```plaintext
GET /resort_lock_guests

```

#### Parameters



| Name | Description |
|:-----|:------------|
| sort  | Sortable attributes: created_at, name, starts_at, and ends_at, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "resort_lock_guest",
      "attributes": {
        "name": "John Doe",
        "email": "john.doe@email.com",
        "pin": "1234567890",
        "starts_at": "2020-01-02T16:00:00",
        "ends_at": "2020-03-02T16:00:00",
        "one_time_access": false,
        "guest_source": null,
        "created_at": "2020-05-21T13:34:31Z",
        "updated_at": "2020-05-21T13:34:31Z",
        "resort_lock_id": "fe41e146-3e08-4a3c-9eaf-92716eb86fcd"
      },
      "id": "b7829358-48d6-4b2d-8135-45c4b6eb9113",
      "links": {
        "self": "http://api.remotelock.dev/resort_lock_guests/b7829358-48d6-4b2d-8135-45c4b6eb9113",
        "resort_lock": "http://api.remotelock.dev/devices/fe41e146-3e08-4a3c-9eaf-92716eb86fcd"
      }
    },
    {
      "type": "resort_lock_guest",
      "attributes": {
        "name": "Lorita Heathcote",
        "email": "stevie.gutmann@haag.info",
        "pin": "1174403329",
        "starts_at": "2020-05-21T13:00:00",
        "ends_at": "2020-05-23T13:00:00",
        "one_time_access": false,
        "guest_source": null,
        "created_at": "2020-05-21T13:34:31Z",
        "updated_at": "2020-05-21T13:34:31Z",
        "resort_lock_id": "fe41e146-3e08-4a3c-9eaf-92716eb86fcd"
      },
      "id": "af02992c-691e-4753-8638-58747f6c7ca3",
      "links": {
        "self": "http://api.remotelock.dev/resort_lock_guests/af02992c-691e-4753-8638-58747f6c7ca3",
        "resort_lock": "http://api.remotelock.dev/devices/fe41e146-3e08-4a3c-9eaf-92716eb86fcd"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get a resort lock guest


### Request


#### Endpoint

`GET /resort_lock_guests/:id`

```plaintext
GET /resort_lock_guests/433c12a5-4894-456c-b3ba-bf33bcf0d506

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "resort_lock_guest",
    "attributes": {
      "name": "John Doe",
      "email": "john.doe@email.com",
      "pin": "1234567890",
      "starts_at": "2020-01-02T16:00:00",
      "ends_at": "2020-03-02T16:00:00",
      "one_time_access": false,
      "guest_source": null,
      "created_at": "2020-05-21T13:34:32Z",
      "updated_at": "2020-05-21T13:34:32Z",
      "resort_lock_id": "d1915a76-1a43-468f-bc8a-428cf169e077"
    },
    "id": "433c12a5-4894-456c-b3ba-bf33bcf0d506",
    "links": {
      "self": "http://api.remotelock.dev/resort_lock_guests/433c12a5-4894-456c-b3ba-bf33bcf0d506",
      "resort_lock": "http://api.remotelock.dev/devices/d1915a76-1a43-468f-bc8a-428cf169e077"
    }
  }
}
```


## Create a resort lock guest

'Resort lock guest' has temporary location access limited by 'starts_at' and 'ends_at' parameters.

### Request


#### Endpoint

`POST /resort_lock_guests`

```plaintext
POST /resort_lock_guests

```

#### Parameters


```json
{"attributes":{"resort_lock_id":"a9952651-3815-4a0b-8b4d-3342c43d8f9e","name":"Ann Smith","starts_at":"2020-01-02T13:00:00","ends_at":"2021-01-02T16:00:00","email":"abel_beer@wunsch.org"}}
```

| Name | Description |
|:-----|:------------|
| attributes[resort_lock_id] *required* | Resort Lock |
| attributes[name] *required* | Name |
| attributes[starts_at] *required* |           Starts at ISO 8601 timestamp without time zone.
          Only hours are supported (minutes and seconds will be converted to zeros).
 |
| attributes[ends_at] *required* |           Ends at ISO 8601 timestamp without time zone.
          Only hours are supported (minutes and seconds will be converted to zeros).
 |
| attributes[email]  | Email |
| attributes[one_time_access]  | This PIN is only valid for a *single* entry between `starts_at` and
`ends_at`. Default is `false`.
 |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "resort_lock_guest",
    "attributes": {
      "name": "Ann Smith",
      "email": "abel_beer@wunsch.org",
      "pin": "411733896548",
      "starts_at": "2020-01-02T13:00:00",
      "ends_at": "2021-01-02T16:00:00",
      "one_time_access": false,
      "guest_source": null,
      "created_at": "2020-05-21T13:34:33Z",
      "updated_at": "2020-05-21T13:34:33Z",
      "resort_lock_id": "a9952651-3815-4a0b-8b4d-3342c43d8f9e"
    },
    "id": "9d7ec677-be8d-42ed-816f-50f2b5a923a5",
    "links": {
      "self": "http://api.remotelock.dev/resort_lock_guests/9d7ec677-be8d-42ed-816f-50f2b5a923a5",
      "resort_lock": "http://api.remotelock.dev/devices/a9952651-3815-4a0b-8b4d-3342c43d8f9e"
    }
  }
}
```


## Update a resort lock guest


### Request


#### Endpoint

`PUT /resort_lock_guests/:id`

```plaintext
PUT /resort_lock_guests/7f6edc0a-dc57-4ea9-9a80-9ecd89fa0ee7

```

#### Parameters


```json
{"attributes":{"name":"Jonatan Doery"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[email]  | Email |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "resort_lock_guest",
    "attributes": {
      "name": "Jonatan Doery",
      "email": "john.doe@email.com",
      "pin": "1234567890",
      "starts_at": "2020-01-02T16:00:00",
      "ends_at": "2020-03-02T16:00:00",
      "one_time_access": false,
      "guest_source": null,
      "created_at": "2020-05-21T13:34:34Z",
      "updated_at": "2020-05-21T13:34:34Z",
      "resort_lock_id": "647797b4-43bc-4615-989c-3ebc5c6be9d6"
    },
    "id": "7f6edc0a-dc57-4ea9-9a80-9ecd89fa0ee7",
    "links": {
      "self": "http://api.remotelock.dev/resort_lock_guests/7f6edc0a-dc57-4ea9-9a80-9ecd89fa0ee7",
      "resort_lock": "http://api.remotelock.dev/devices/647797b4-43bc-4615-989c-3ebc5c6be9d6"
    }
  }
}
```


## Delete a resort lock guest


### Request


#### Endpoint

`DELETE /resort_lock_guests/:id`

```plaintext
DELETE /resort_lock_guests/18679f29-f4b2-4a57-b8b1-ba455b82fe8b

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## Send access instructions email to resort lock guest


### Request


#### Endpoint

`POST /resort_lock_guests/:id/email/notify`

```plaintext
POST /resort_lock_guests/8a92a918-d869-4e6b-aea0-700d3519ea7e/email/notify

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```



## Preview resort lock guest access instructions email


### Request


#### Endpoint

`GET /resort_lock_guests/:id/email/preview`

```plaintext
GET /resort_lock_guests/0948f449-d064-4efb-9538-8c60c7534f8f/email/preview

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_instruction_guest_email_template",
    "attributes": {
      "subject": "Access instructions",
      "body": "<p>Dear John Doe,</p>\n\n<p>Here is your access code for your upcoming stay with us. Our property is equipped with a keyless entry door lock for your convenience.</p>\n\n<p>Access Code: 123-456-7890</p>\n\n<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" id=\"access-instructions\">\n  \n    <tr>\n      <td colspan=\"3\" width=\"100%\" align=\"left\" valign=\"top\">\n        Automated secondary capacity\n        (923 Douglas Knoll)\n      </td>\n    </tr>\n\n    \n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td colspan=\"2\" width=\"97%\" align=\"left\" valign=\"top\">\n          <b>RL-4000 - QBIMOILW0B4FBE01</b>\n        </td>\n      </tr>\n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"94%\" align=\"left\" valign=\"top\">\n          \n            Access times:\n            January 2, 2020  4:00 PM to March 2, 2020  4:00 PM\n            <br/>\n          \n          Access instruction:\n          <p><strong>Lock Instructions:</strong><br>\nThere are two methods to opening the lock on your vacation rental. One is to simply enter the 10 (or 12 if provided) digit Access Code above, followed by the &#39;#&#39; key. The other is to create your own shorter code for use during your stay.</p>\n\n<p>Method 1: Use Default Access Code Enter the following on the lock’s keypad: Access Code, # (Door will unlock)</p>\n\n<p>Method 2: Create Your Own Code (Can be 3 – 5 Digits)<br>\nStep 1: Hold the * key until green light is solid (About 2 seconds), then release.<br>\nStep 2: While green light is lit, enter Access Code, #, Your Own Code, #<br>\nNow you have programmed your own code into the lock. Next step is to unlock the door using the code you just created.<br>\nStep 3: Enter Your Code, # (Door will unlock)</p>\n\n        </td>\n      </tr>\n    \n  \n</table>\n\n<p>If you have any questions, please feel free to call us at (Phone not provided) or email at <a href=\"mailto:fredricka.cruickshank@graham.io\">fredricka.cruickshank@graham.io</a>.</p>\n\n<p>Regards,</p>\n\n<p>Fannie Jacobs</p>\n",
      "from_name": "Fannie Jacobs",
      "reply_to": "fredricka.cruickshank@graham.io",
      "cc": null,
      "bcc": null
    },
    "links": {
      "self": "http://api.remotelock.dev/access_instruction_guest_email_template/preview"
    }
  }
}
```


# Schedules



## Get all schedule types (homogeneous)


### Request


#### Endpoint

`GET /schedules`

```plaintext
GET /schedules

```

#### Parameters



| Name | Description |
|:-----|:------------|
| [type]  | Filter by type(s). Supported types: auto_lock_schedule, lock_action_schedule, access_schedule, power_plug_schedule, and thermostat_schedule |
| sort  | Sortable attributes: created_at and name, default: created_at ascending |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "access_schedule",
      "attributes": {
        "name": "Magnam facere quasi quo.",
        "mon": [
          {
            "start_time": "09:00",
            "end_time": "17:00"
          }
        ],
        "tue": [
          {
            "start_time": "09:00",
            "end_time": "17:00"
          }
        ],
        "wed": [
          {
            "start_time": "09:00",
            "end_time": "17:00"
          }
        ],
        "thu": [
          {
            "start_time": "09:00",
            "end_time": "17:00"
          }
        ],
        "fri": [
          {
            "start_time": "09:00",
            "end_time": "15:00"
          }
        ],
        "sat": [
          {
            "start_time": "09:00",
            "end_time": "15:00"
          }
        ],
        "sun": [
          {
            "start_time": "09:00",
            "end_time": "15:00"
          }
        ],
        "created_at": "2020-05-21T13:34:42Z",
        "updated_at": "2020-05-21T13:34:42Z"
      },
      "id": "130e15c3-166a-4299-98ae-51b0a2de27d6",
      "links": {
        "self": "http://api.remotelock.dev/schedules/130e15c3-166a-4299-98ae-51b0a2de27d6"
      }
    },
    {
      "type": "auto_lock_schedule",
      "attributes": {
        "name": "Vel saepe et nesciunt.",
        "mon": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "17:00",
            "enable": true
          }
        ],
        "tue": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "17:00",
            "enable": true
          }
        ],
        "wed": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "17:00",
            "enable": true
          }
        ],
        "thu": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "17:00",
            "enable": true
          }
        ],
        "fri": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "15:00",
            "enable": true
          }
        ],
        "sat": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "15:00",
            "enable": true
          }
        ],
        "sun": [
          {
            "time": "09:00",
            "enable": false
          },
          {
            "time": "15:00",
            "enable": true
          }
        ],
        "created_at": "2020-05-21T13:34:42Z",
        "updated_at": "2020-05-21T13:34:42Z"
      },
      "id": "8cf790b9-9d14-42d5-be2a-d0f10b54cdbb",
      "links": {
        "self": "http://api.remotelock.dev/schedules/8cf790b9-9d14-42d5-be2a-d0f10b54cdbb"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 2,
    "total_pages": 1
  }
}
```


## Get a schedule


### Request


#### Endpoint

`GET /schedules/:id`

```plaintext
GET /schedules/9e1b415c-ed35-4f12-a44d-8c46cef2617c

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_schedule",
    "attributes": {
      "name": "Ut unde itaque quod.",
      "mon": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "tue": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "wed": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "thu": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "fri": [
        {
          "start_time": "09:00",
          "end_time": "15:00"
        }
      ],
      "sat": [
        {
          "start_time": "09:00",
          "end_time": "15:00"
        }
      ],
      "sun": [
        {
          "start_time": "09:00",
          "end_time": "15:00"
        }
      ],
      "created_at": "2020-05-21T13:34:42Z",
      "updated_at": "2020-05-21T13:34:42Z"
    },
    "id": "9e1b415c-ed35-4f12-a44d-8c46cef2617c",
    "links": {
      "self": "http://api.remotelock.dev/schedules/9e1b415c-ed35-4f12-a44d-8c46cef2617c"
    }
  }
}
```


## Update a schedule

Parameters accepted: all used for create

### Request


#### Endpoint

`PUT /schedules/:id`

```plaintext
PUT /schedules/b6e7e503-1172-404d-a891-9d3414446a2c

```

#### Parameters


```json
{"attributes":{"name":"New schedule name"}}
```

None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "access_schedule",
    "attributes": {
      "name": "New schedule name",
      "mon": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "tue": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "wed": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "thu": [
        {
          "start_time": "09:00",
          "end_time": "17:00"
        }
      ],
      "fri": [
        {
          "start_time": "09:00",
          "end_time": "15:00"
        }
      ],
      "sat": [
        {
          "start_time": "09:00",
          "end_time": "15:00"
        }
      ],
      "sun": [
        {
          "start_time": "09:00",
          "end_time": "15:00"
        }
      ],
      "created_at": "2020-05-21T13:34:43Z",
      "updated_at": "2020-05-21T13:34:43Z"
    },
    "id": "b6e7e503-1172-404d-a891-9d3414446a2c",
    "links": {
      "self": "http://api.remotelock.dev/schedules/b6e7e503-1172-404d-a891-9d3414446a2c"
    }
  }
}
```


## Delete a schedule


### Request


#### Endpoint

`DELETE /schedules/:id`

```plaintext
DELETE /schedules/e1899d0f-507d-45fc-83f0-ea1f7a76a4b0

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## Create an access schedule


### Request


#### Endpoint

`POST /schedules`

```plaintext
POST /schedules

```

#### Parameters


```json
{"type":"access_schedule","attributes":{"name":"Work access schedule","mon":[{"start_time":"08:00","end_time":"12:00"},{"start_time":"13:00","end_time":"18:00"}],"wed":[{"start_time":"08:00","end_time":"12:00"},{"start_time":"13:00","end_time":"18:00"}],"fri":[{"start_time":"08:00","end_time":"12:00"},{"start_time":"13:00","end_time":"18:00"}],"access_exception_id":"6f2bc6fc-3bdf-44bc-b086-c1a34121f3a7"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | access_schedule |
| attributes[name] *required* | Schedule name |
| attributes[mon]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[tue]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[wed]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[thu]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[fri]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[sat]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[sun]  | [{ "start_time": "08:00", "end_time": "12:00" }, ...] or [] |
| attributes[access_exception_id]  | Access Exception |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "access_schedule",
    "attributes": {
      "name": "Work access schedule",
      "mon": [
        {
          "start_time": "08:00",
          "end_time": "12:00"
        },
        {
          "start_time": "13:00",
          "end_time": "18:00"
        }
      ],
      "tue": [

      ],
      "wed": [
        {
          "start_time": "08:00",
          "end_time": "12:00"
        },
        {
          "start_time": "13:00",
          "end_time": "18:00"
        }
      ],
      "thu": [

      ],
      "fri": [
        {
          "start_time": "08:00",
          "end_time": "12:00"
        },
        {
          "start_time": "13:00",
          "end_time": "18:00"
        }
      ],
      "sat": [

      ],
      "sun": [

      ],
      "created_at": "2020-05-21T13:34:44Z",
      "updated_at": "2020-05-21T13:34:44Z",
      "access_exception_id": "6f2bc6fc-3bdf-44bc-b086-c1a34121f3a7"
    },
    "id": "c00fe35b-3437-47ab-b791-aec0c8972680",
    "links": {
      "self": "http://api.remotelock.dev/schedules/c00fe35b-3437-47ab-b791-aec0c8972680",
      "access_exception": "http://api.remotelock.dev/access_exceptions/6f2bc6fc-3bdf-44bc-b086-c1a34121f3a7"
    }
  }
}
```


## Create an auto lock schedule


### Request


#### Endpoint

`POST /schedules`

```plaintext
POST /schedules

```

#### Parameters


```json
{"type":"auto_lock_schedule","attributes":{"name":"Switch auto-lock mode in working period","mon":[{"time":"08:00","enable":false},{"time":"18:00","enable":true}],"wed":[{"time":"08:00","enable":false},{"time":"18:00","enable":true}],"fri":[{"time":"08:00","enable":false},{"time":"18:00","enable":true}]}}
```

| Name | Description |
|:-----|:------------|
| type *required* | auto_lock_schedule |
| attributes[name] *required* | Schedule name |
| attributes[mon]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |
| attributes[tue]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |
| attributes[wed]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |
| attributes[thu]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |
| attributes[fri]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |
| attributes[sat]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |
| attributes[sun]  | [{ "time": "08:00", enable: false }, { "time": "18:00", enable: true }, ...] or [] |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "auto_lock_schedule",
    "attributes": {
      "name": "Switch auto-lock mode in working period",
      "mon": [
        {
          "time": "08:00",
          "enable": false
        },
        {
          "time": "18:00",
          "enable": true
        }
      ],
      "tue": [

      ],
      "wed": [
        {
          "time": "08:00",
          "enable": false
        },
        {
          "time": "18:00",
          "enable": true
        }
      ],
      "thu": [

      ],
      "fri": [
        {
          "time": "08:00",
          "enable": false
        },
        {
          "time": "18:00",
          "enable": true
        }
      ],
      "sat": [

      ],
      "sun": [

      ],
      "created_at": "2020-05-21T13:34:44Z",
      "updated_at": "2020-05-21T13:34:44Z"
    },
    "id": "0edcfc2e-3ce3-4b81-a19c-6ff55feef4b7",
    "links": {
      "self": "http://api.remotelock.dev/schedules/0edcfc2e-3ce3-4b81-a19c-6ff55feef4b7"
    }
  }
}
```


## Create a lock action schedule


### Request


#### Endpoint

`POST /schedules`

```plaintext
POST /schedules

```

#### Parameters


```json
{"type":"lock_action_schedule","attributes":{"name":"Automatically unlock and lock","mon":[{"time":"08:00","action":"unlock"},{"time":"18:00","action":"lock"}],"wed":[{"time":"08:00","action":"unlock"},{"time":"18:00","action":"lock"}],"fri":[{"time":"08:00","action":"unlock"},{"time":"18:00","action":"lock"}]}}
```

| Name | Description |
|:-----|:------------|
| type *required* | lock_action_schedule |
| attributes[name] *required* | Schedule name |
| attributes[mon]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |
| attributes[tue]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |
| attributes[wed]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |
| attributes[thu]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |
| attributes[fri]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |
| attributes[sat]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |
| attributes[sun]  | [{ "time": "08:00", action: "unlock" }, { "time": "18:00", action: "lock" }, ...] or [] |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "lock_action_schedule",
    "attributes": {
      "name": "Automatically unlock and lock",
      "mon": [
        {
          "time": "08:00",
          "action": "unlock"
        },
        {
          "time": "18:00",
          "action": "lock"
        }
      ],
      "tue": [

      ],
      "wed": [
        {
          "time": "08:00",
          "action": "unlock"
        },
        {
          "time": "18:00",
          "action": "lock"
        }
      ],
      "thu": [

      ],
      "fri": [
        {
          "time": "08:00",
          "action": "unlock"
        },
        {
          "time": "18:00",
          "action": "lock"
        }
      ],
      "sat": [

      ],
      "sun": [

      ],
      "created_at": "2020-05-21T13:34:44Z",
      "updated_at": "2020-05-21T13:34:44Z"
    },
    "id": "afdb5c03-b4a6-4249-bd4d-7fb585f9f580",
    "links": {
      "self": "http://api.remotelock.dev/schedules/afdb5c03-b4a6-4249-bd4d-7fb585f9f580"
    }
  }
}
```


## Create a power plug schedule


### Request


#### Endpoint

`POST /schedules`

```plaintext
POST /schedules

```

#### Parameters


```json
{"type":"power_plug_schedule","attributes":{"name":"Automatically turn on and off","mon":[{"time":"08:00","action":"on"},{"time":"18:00","action":"off"}],"wed":[{"time":"08:00","action":"on"},{"time":"18:00","action":"off"}],"fri":[{"time":"08:00","action":"on"},{"time":"18:00","action":"off"}]}}
```

| Name | Description |
|:-----|:------------|
| type *required* | power_plug_schedule |
| attributes[name] *required* | Schedule name |
| attributes[mon]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |
| attributes[tue]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |
| attributes[wed]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |
| attributes[thu]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |
| attributes[fri]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |
| attributes[sat]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |
| attributes[sun]  | [{ "time": "08:00", action: "on" }, { "time": "18:00", action: "off" }, ...] or [] |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "power_plug_schedule",
    "attributes": {
      "name": "Automatically turn on and off",
      "mon": [
        {
          "time": "08:00",
          "action": "on"
        },
        {
          "time": "18:00",
          "action": "off"
        }
      ],
      "tue": [

      ],
      "wed": [
        {
          "time": "08:00",
          "action": "on"
        },
        {
          "time": "18:00",
          "action": "off"
        }
      ],
      "thu": [

      ],
      "fri": [
        {
          "time": "08:00",
          "action": "on"
        },
        {
          "time": "18:00",
          "action": "off"
        }
      ],
      "sat": [

      ],
      "sun": [

      ],
      "created_at": "2020-05-21T13:34:45Z",
      "updated_at": "2020-05-21T13:34:45Z"
    },
    "id": "5515a4e9-dc95-4c16-a8bb-d242894b3281",
    "links": {
      "self": "http://api.remotelock.dev/schedules/5515a4e9-dc95-4c16-a8bb-d242894b3281"
    }
  }
}
```


## Create a thermostat schedule


### Request


#### Endpoint

`POST /schedules`

```plaintext
POST /schedules

```

#### Parameters


```json
{"type":"thermostat_schedule","attributes":{"name":"Changes thermostat cool/heat temperatures","mon":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}],"tue":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}],"wed":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}],"thu":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}],"fri":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}],"sat":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}],"sun":[{"time":"08:00","cool":60,"heat":70},{"time":"18:00","cool":40,"heat":80}]}}
```

| Name | Description |
|:-----|:------------|
| type *required* | thermostat_schedule |
| attributes[name] *required* | Schedule name |
| attributes[mon]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |
| attributes[tue]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |
| attributes[wed]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |
| attributes[thu]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |
| attributes[fri]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |
| attributes[sat]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |
| attributes[sun]  | [{ "time": "08:00", "cool": 40, "heat": 80 }, ...] |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "thermostat_schedule",
    "attributes": {
      "name": "Changes thermostat cool/heat temperatures",
      "mon": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "tue": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "wed": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "thu": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "fri": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "sat": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "sun": [
        {
          "time": "08:00",
          "cool": 60,
          "heat": 70
        },
        {
          "time": "18:00",
          "cool": 40,
          "heat": 80
        }
      ],
      "created_at": "2020-05-21T13:34:45Z",
      "updated_at": "2020-05-21T13:34:45Z"
    },
    "id": "9e5edf4f-7ddc-42f7-873c-7351377c1886",
    "links": {
      "self": "http://api.remotelock.dev/schedules/9e5edf4f-7ddc-42f7-873c-7351377c1886"
    }
  }
}
```


# Users



## Get signed in user


### Request


#### Endpoint

`GET /user`

```plaintext
GET /user

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "Nolan Welch IV",
      "email": "dario@connellyswaniawski.io",
      "handle": "dario",
      "created_at": "2020-05-21T13:35:59Z",
      "updated_at": "2020-05-21T13:35:59Z",
      "primary_account_id": "38190329-ef54-4b82-8e7a-a436c473ef11",
      "default_account_id": "38190329-ef54-4b82-8e7a-a436c473ef11"
    },
    "id": "9e6311ba-3522-4bfb-9a14-9f4d0419f2ef",
    "links": {
      "self": "http://api.remotelock.dev/user",
      "primary_account": "http://api.remotelock.dev/account",
      "default_account": "http://api.remotelock.dev/account"
    }
  }
}
```



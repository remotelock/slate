# Fetching Relationships



## * Get all access persons accesses with associations


### Request


#### Endpoint

`GET /access_persons/:access_person_id/accesses`

```plaintext
GET /access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d/accesses?include=accessible%2Caccess_schedule

```

#### Parameters

```json
include: accessible,access_schedule
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
      "type": "access_person_access",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "devices_count": 0,
        "devices_synced_count": 0,
        "devices_pending_sync_count": 0,
        "devices_failed_sync_count": 0,
        "accessible_type": "location",
        "created_at": "2020-05-08T22:06:06Z",
        "updated_at": "2020-05-08T22:06:06Z",
        "accessible_name": "Office",
        "access_schedule_name": null,
        "access_person_id": "c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d",
        "access_person_type": "access_guest",
        "accessible_id": "3880d22a-b809-4a48-9f65-dfc7103d1ce6"
      },
      "id": "2c11ce72-9d2f-4b09-92ac-3d6b9449d3c3",
      "relationships": {
        "accessible": {
          "type": "location",
          "attributes": {
            "name": "Office",
            "phone": null,
            "address": "939 Corwin Tunnel",
            "address2": null,
            "city": null,
            "state": null,
            "postal_code": null,
            "country": null,
            "time_zone": "America/Denver",
            "created_at": "2020-05-08T22:06:05Z",
            "updated_at": "2020-05-08T22:06:05Z"
          },
          "id": "3880d22a-b809-4a48-9f65-dfc7103d1ce6",
          "links": {
            "self": "http://api.remotelock.dev/locations/3880d22a-b809-4a48-9f65-dfc7103d1ce6"
          }
        }
      },
      "links": {
        "self": "http://api.remotelock.dev/access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d/accesses/2c11ce72-9d2f-4b09-92ac-3d6b9449d3c3",
        "access_person": "http://api.remotelock.dev/access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d",
        "accessible": "http://api.remotelock.dev/locations/3880d22a-b809-4a48-9f65-dfc7103d1ce6"
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
        "created_at": "2020-05-08T22:06:06Z",
        "updated_at": "2020-05-08T22:06:06Z",
        "accessible_name": "External Doors",
        "access_schedule_name": null,
        "access_person_id": "c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d",
        "access_person_type": "access_guest",
        "accessible_id": "c82a6e16-4399-4cd2-902e-bbf49b970cd5"
      },
      "id": "cea7130e-0999-415d-bacb-9445bc33e2ae",
      "relationships": {
        "accessible": {
          "type": "door_group",
          "attributes": {
            "name": "External Doors",
            "created_at": "2020-05-08T22:06:06Z",
            "updated_at": "2020-05-08T22:06:06Z"
          },
          "id": "c82a6e16-4399-4cd2-902e-bbf49b970cd5",
          "links": {
            "self": "http://api.remotelock.dev/groups/c82a6e16-4399-4cd2-902e-bbf49b970cd5"
          }
        }
      },
      "links": {
        "self": "http://api.remotelock.dev/access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d/accesses/cea7130e-0999-415d-bacb-9445bc33e2ae",
        "access_person": "http://api.remotelock.dev/access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d",
        "accessible": "http://api.remotelock.dev/groups/c82a6e16-4399-4cd2-902e-bbf49b970cd5"
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
        "created_at": "2020-05-08T22:06:06Z",
        "updated_at": "2020-05-08T22:06:06Z",
        "accessible_name": "Front Door",
        "access_schedule_name": "Mon-Fri 9-5",
        "access_schedule_id": "f6cd5063-0c04-4239-a700-86781240d5bb",
        "access_person_id": "c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d",
        "access_person_type": "access_guest",
        "accessible_id": "e5b6c07a-a80f-42d9-885a-334bc47488b3"
      },
      "id": "46ca8596-9e52-481a-97aa-770818554d1c",
      "relationships": {
        "access_schedule": {
          "type": "access_schedule",
          "attributes": {
            "name": "Mon-Fri 9-5",
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
            "created_at": "2020-05-08T22:06:06Z",
            "updated_at": "2020-05-08T22:06:06Z"
          },
          "id": "f6cd5063-0c04-4239-a700-86781240d5bb",
          "links": {
            "self": "http://api.remotelock.dev/schedules/f6cd5063-0c04-4239-a700-86781240d5bb"
          }
        },
        "accessible": {
          "type": "lock",
          "attributes": {
            "name": "Front Door",
            "heartbeat_interval": 1200,
            "wifi_level": 0,
            "signal_quality": 3,
            "connected": true,
            "alive": true,
            "power_source": "alkaline_battery",
            "connected_at": "2020-05-08T22:02:06Z",
            "firmware_version": "3.03.170717.3",
            "serial_number": "AC000W007103370",
            "wake_wifi": "user_action",
            "muted": false,
            "auto_lock": true,
            "auto_lock_timeout": 20,
            "programming_code": "123456",
            "state": "locked",
            "power_level": 5,
            "created_at": "2020-05-08T22:06:05Z",
            "updated_at": "2020-05-08T22:06:05Z",
            "default_guest_start_time": null,
            "default_guest_end_time": null,
            "local_pins": [
              "1234"
            ],
            "pending_state": "lock",
            "power_rating": "critical",
            "model_id": "24dcd45a-4839-434e-8997-cce6483c071c",
            "location_id": "3880d22a-b809-4a48-9f65-dfc7103d1ce6"
          },
          "id": "e5b6c07a-a80f-42d9-885a-334bc47488b3",
          "links": {
            "self": "http://api.remotelock.dev/devices/e5b6c07a-a80f-42d9-885a-334bc47488b3",
            "model": "http://api.remotelock.dev/models/24dcd45a-4839-434e-8997-cce6483c071c",
            "location": "http://api.remotelock.dev/locations/3880d22a-b809-4a48-9f65-dfc7103d1ce6"
          }
        }
      },
      "links": {
        "self": "http://api.remotelock.dev/access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d/accesses/46ca8596-9e52-481a-97aa-770818554d1c",
        "access_schedule": "http://api.remotelock.dev/schedules/f6cd5063-0c04-4239-a700-86781240d5bb",
        "access_person": "http://api.remotelock.dev/access_persons/c127151b-fbf3-4fbf-b4d3-6f89fa2c2c4d",
        "accessible": "http://api.remotelock.dev/devices/e5b6c07a-a80f-42d9-885a-334bc47488b3"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 3,
    "total_pages": 1
  }
}
```


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
        "name": "Ut officia omnis quis.",
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
        "created_at": "2020-05-08T22:06:42Z",
        "updated_at": "2020-05-08T22:06:42Z"
      },
      "id": "ae3dc0c4-39d2-4795-9d39-31ff903d30c5",
      "links": {
        "self": "http://api.remotelock.dev/access_exceptions/ae3dc0c4-39d2-4795-9d39-31ff903d30c5"
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
GET /access_exceptions/90447208-88e4-448f-842c-ec96d912de21

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
      "name": "At animi omnis eos.",
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
      "created_at": "2020-05-08T22:06:42Z",
      "updated_at": "2020-05-08T22:06:42Z"
    },
    "id": "90447208-88e4-448f-842c-ec96d912de21",
    "links": {
      "self": "http://api.remotelock.dev/access_exceptions/90447208-88e4-448f-842c-ec96d912de21"
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
      "created_at": "2020-05-08T22:06:43Z",
      "updated_at": "2020-05-08T22:06:43Z"
    },
    "id": "80191532-983b-4b3c-a712-d078ca44869e",
    "links": {
      "self": "http://api.remotelock.dev/access_exceptions/80191532-983b-4b3c-a712-d078ca44869e"
    }
  }
}
```


## Update an access exception


### Request


#### Endpoint

`PUT /access_exceptions/:id`

```plaintext
PUT /access_exceptions/e4721d12-d47c-4e89-b2e5-9caa5c5b3010

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
      "created_at": "2020-05-08T22:06:43Z",
      "updated_at": "2020-05-08T22:06:43Z"
    },
    "id": "e4721d12-d47c-4e89-b2e5-9caa5c5b3010",
    "links": {
      "self": "http://api.remotelock.dev/access_exceptions/e4721d12-d47c-4e89-b2e5-9caa5c5b3010"
    }
  }
}
```


## Delete an access exception


### Request


#### Endpoint

`DELETE /access_exceptions/:id`

```plaintext
DELETE /access_exceptions/c109f081-ee6e-4522-a08b-62bc058a73f2

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Access Notifications



## * Delete an access notification


### Request


#### Endpoint

`DELETE /access_notifications/:id`

```plaintext
DELETE /access_notifications/dbc7e082-895a-46a8-9b29-45b3e61f0be6

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Get access notifications that are sent by email


### Request


#### Endpoint

`GET /access_notifications/emails`

```plaintext
GET /access_notifications/emails

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
      "type": "access_notification",
      "attributes": {
        "status": "pending",
        "time_frame": "P1D",
        "deliver_at": "2020-05-18T04:07:04Z",
        "delivered_at": null,
        "created_at": "2020-05-08T22:07:04Z",
        "notifiable_id": "66ba64a8-0113-404a-97f0-9f4e37485d32",
        "notifiable_type": "access_guest"
      },
      "id": "21a502d7-8194-4f92-97a5-9bf5434417ba",
      "links": {
        "self": "http://api.remotelock.dev/access_notifications/21a502d7-8194-4f92-97a5-9bf5434417ba",
        "notifiable": "http://api.remotelock.dev/access_persons/66ba64a8-0113-404a-97f0-9f4e37485d32"
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


## * Get access notification


### Request


#### Endpoint

`GET /access_notifications/:id`

```plaintext
GET /access_notifications/e34f280f-84b7-4766-a420-1895c8861d01

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
    "type": "access_notification",
    "attributes": {
      "status": "pending",
      "time_frame": "P1D",
      "deliver_at": "2020-05-18T04:07:04Z",
      "delivered_at": null,
      "created_at": "2020-05-08T22:07:04Z",
      "notifiable_id": "4d6ce9fe-6034-434f-b61f-17da6ecf515c",
      "notifiable_type": "access_guest"
    },
    "id": "e34f280f-84b7-4766-a420-1895c8861d01",
    "links": {
      "self": "http://api.remotelock.dev/access_notifications/e34f280f-84b7-4766-a420-1895c8861d01",
      "notifiable": "http://api.remotelock.dev/access_persons/4d6ce9fe-6034-434f-b61f-17da6ecf515c"
    }
  }
}
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
        "name": "Keenan Funk",
        "email": "quinton.donnelly@moriette.info",
        "phone": null,
        "pin": "1146",
        "card_number": null,
        "department": null,
        "status": "current",
        "guest_source": null,
        "created_at": "2020-05-08T22:07:19Z",
        "updated_at": "2020-05-08T22:07:19Z"
      },
      "id": "747831b5-cf3e-490a-b78e-283a72bc1a6d",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/747831b5-cf3e-490a-b78e-283a72bc1a6d"
      }
    },
    {
      "type": "access_guest",
      "attributes": {
        "name": "Dr. Young Kirlin",
        "email": "steven@cain.name",
        "phone": null,
        "pin": "1147",
        "card_number": null,
        "department": null,
        "status": "upcoming",
        "guest_source": null,
        "created_at": "2020-05-08T22:07:19Z",
        "updated_at": "2020-05-08T22:07:19Z",
        "starts_at": "2020-05-19T00:00:00",
        "ends_at": "2020-05-29T22:07:19"
      },
      "id": "5886978a-a8f5-4a0a-8a42-aba335e4900f",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/5886978a-a8f5-4a0a-8a42-aba335e4900f"
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
        "name": "Ivan Leuschke",
        "email": "felton@waters.info",
        "phone": null,
        "pin": "1148",
        "card_number": null,
        "department": null,
        "status": "deactivated",
        "guest_source": null,
        "created_at": "2020-05-08T22:07:19Z",
        "updated_at": "2020-05-08T22:07:19Z"
      },
      "id": "ed53bfa1-df18-4007-b25c-bd6cbf86c9ac",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/ed53bfa1-df18-4007-b25c-bd6cbf86c9ac"
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
        "name": "Rolanda Thiel",
        "email": "leon_considine@graham.biz",
        "phone": null,
        "pin": "1150",
        "card_number": null,
        "department": null,
        "status": "expired",
        "guest_source": null,
        "created_at": "2020-05-08T22:07:19Z",
        "updated_at": "2020-05-08T22:07:19Z",
        "starts_at": "2020-05-05T22:07:19",
        "ends_at": "2020-05-07T22:07:19"
      },
      "id": "b447e131-96e7-4f02-94fb-aa31869f114c",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/b447e131-96e7-4f02-94fb-aa31869f114c"
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
GET /access_persons/d6e4910b-d991-48e9-ab44-d422d226c8f1

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
      "name": "Raleigh Runolfsdottir PhD",
      "email": "kristin@schaefer.com",
      "phone": null,
      "pin": "1161",
      "card_number": null,
      "department": null,
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-08T22:07:23Z",
      "updated_at": "2020-05-08T22:07:23Z"
    },
    "id": "d6e4910b-d991-48e9-ab44-d422d226c8f1",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/d6e4910b-d991-48e9-ab44-d422d226c8f1"
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
      "created_at": "2020-05-08T22:07:24Z",
      "updated_at": "2020-05-08T22:07:24Z"
    },
    "id": "b9f631db-f608-45ed-b864-edbe5d1247dd",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/b9f631db-f608-45ed-b864-edbe5d1247dd"
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
      "created_at": "2020-05-08T22:07:24Z",
      "updated_at": "2020-05-08T22:07:24Z",
      "starts_at": "2020-01-02T16:04:00",
      "ends_at": "2020-01-30T16:04:00"
    },
    "id": "bb56d061-2c09-4738-8eee-943d2b5c52f6",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/bb56d061-2c09-4738-8eee-943d2b5c52f6"
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
PUT /access_persons/847d722b-fdab-43b2-b03e-344a3c675d68

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
      "email": "lon.parisian@gislason.org",
      "phone": null,
      "pin": "2345",
      "card_number": null,
      "department": null,
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-08T22:07:30Z",
      "updated_at": "2020-05-08T22:07:30Z"
    },
    "id": "847d722b-fdab-43b2-b03e-344a3c675d68",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/847d722b-fdab-43b2-b03e-344a3c675d68"
    }
  }
}
```


## Update an access guest


### Request


#### Endpoint

`PUT /access_persons/:id`

```plaintext
PUT /access_persons/446d32d8-f26f-4063-8268-d06e19d3d449

```

#### Parameters


```json
{"attributes":{"name":"Cleaning Crew","ends_at":"2020-05-19T00:00:00Z"}}
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
      "email": "sanford.prohaska@roberts.com",
      "phone": null,
      "pin": "1186",
      "card_number": null,
      "department": null,
      "status": "current",
      "guest_source": null,
      "created_at": "2020-05-08T22:07:30Z",
      "updated_at": "2020-05-08T22:07:30Z",
      "starts_at": "2020-05-09T00:00:00",
      "ends_at": "2020-05-19T00:00:00"
    },
    "id": "446d32d8-f26f-4063-8268-d06e19d3d449",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/446d32d8-f26f-4063-8268-d06e19d3d449"
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
PUT /access_persons/59fcdb31-aa9f-4457-a31d-a62fc4cf460e/deactivate

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
      "name": "Guy O'Hara",
      "email": "josiah@ko.net",
      "phone": null,
      "pin": "1187",
      "card_number": null,
      "department": null,
      "status": "deactivated",
      "guest_source": null,
      "created_at": "2020-05-08T22:07:31Z",
      "updated_at": "2020-05-08T22:07:31Z"
    },
    "id": "59fcdb31-aa9f-4457-a31d-a62fc4cf460e",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/59fcdb31-aa9f-4457-a31d-a62fc4cf460e"
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
DELETE /access_persons/8ec1e832-f8e8-42d0-a63e-0456b160c32f

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
POST /access_persons/c1ca04ce-edbd-4f91-81a4-1e2fa1224058/email/notify

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



## * Preview access guest access instructions email


### Request


#### Endpoint

`GET /access_persons/:id/email/preview`

```plaintext
GET /access_persons/53765c33-e90c-48cf-b474-05e68fb6c75b/email/preview

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
      "body": "<p>Dear Joe Doe,</p>\n\n<p>Here is your access code for your upcoming stay with us. Our property is equipped with a keyless entry door lock for your convenience.</p>\n\n<p>Access Code: 1196</p>\n\n<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" id=\"access-instructions\">\n  \n    <tr>\n      <td colspan=\"3\" width=\"100%\" align=\"left\" valign=\"top\">\n        Diverse optimizing superstructure\n        (39478 Deetta Extension)\n      </td>\n    </tr>\n\n    \n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td colspan=\"2\" width=\"97%\" align=\"left\" valign=\"top\">\n          <b>LS-6i - AC000W007935962</b>\n        </td>\n      </tr>\n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"94%\" align=\"left\" valign=\"top\">\n          \n            Access times:\n            May 14, 2020 12:00 AM to May 29, 2020 10:07 PM\n            <br/>\n          \n          Access instruction:\n          <p>To unlock the door, enter the above access code followed by the &quot;#&quot; key. To lock the door, press the &quot;*&quot; key twice or press the &quot;Lock&quot; button from the inside.</p>\n\n        </td>\n      </tr>\n    \n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td colspan=\"2\" width=\"97%\" align=\"left\" valign=\"top\">\n          <b>LS-6i - AC000W009684213</b>\n        </td>\n      </tr>\n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"94%\" align=\"left\" valign=\"top\">\n          \n            Access times:\n            May 14, 2020 12:00 AM to May 29, 2020 10:07 PM\n            <br/>\n          \n          Access instruction:\n          <p>To unlock the door, enter the above access code followed by the &quot;#&quot; key. To lock the door, press the &quot;*&quot; key twice or press the &quot;Lock&quot; button from the inside.</p>\n\n        </td>\n      </tr>\n    \n  \n</table>\n\n<p>If you have any questions, please feel free to call us at (Phone not provided) or email at <a href=\"mailto:ambrose_littel@bogan.co\">ambrose_littel@bogan.co</a>.</p>\n\n<p>Regards,</p>\n\n<p>Terrell Friesen</p>\n",
      "from_name": "Terrell Friesen",
      "reply_to": "ambrose_littel@bogan.co",
      "cc": null,
      "bcc": null
    },
    "links": {
      "self": "http://api.remotelock.dev/access_instruction_guest_email_template/preview"
    }
  }
}
```


## Get all of an access person&#39;s accesses


### Request


#### Endpoint

`GET /access_persons/:access_person_id/accesses`

```plaintext
GET /access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d/accesses

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
        "created_at": "2020-05-08T22:07:34Z",
        "updated_at": "2020-05-08T22:07:34Z",
        "access_person_id": "6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "access_person_type": "access_user",
        "accessible_id": "4da067e1-4101-4ccd-80d0-a61726e99c61"
      },
      "id": "1f2fa5dd-a70a-41c6-97c2-f6c0ff79187e",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d/accesses/1f2fa5dd-a70a-41c6-97c2-f6c0ff79187e",
        "access_person": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "accessible": "http://api.remotelock.dev/devices/4da067e1-4101-4ccd-80d0-a61726e99c61"
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
        "created_at": "2020-05-08T22:07:34Z",
        "updated_at": "2020-05-08T22:07:34Z",
        "access_person_id": "6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "access_person_type": "access_user",
        "accessible_id": "0a1f169d-24ba-4b8d-87e6-9004e826205a"
      },
      "id": "b97ece3c-ab75-4e6d-8efc-011625811e4f",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d/accesses/b97ece3c-ab75-4e6d-8efc-011625811e4f",
        "access_person": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "accessible": "http://api.remotelock.dev/devices/0a1f169d-24ba-4b8d-87e6-9004e826205a"
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
        "created_at": "2020-05-08T22:07:34Z",
        "updated_at": "2020-05-08T22:07:34Z",
        "access_person_id": "6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "access_person_type": "access_user",
        "accessible_id": "7e2624e4-f6ca-4a1d-aa76-e1e949596393"
      },
      "id": "35fd8a4b-14fb-41ed-bfb3-73432a116a30",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d/accesses/35fd8a4b-14fb-41ed-bfb3-73432a116a30",
        "access_person": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "accessible": "http://api.remotelock.dev/groups/7e2624e4-f6ca-4a1d-aa76-e1e949596393"
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
        "created_at": "2020-05-08T22:07:34Z",
        "updated_at": "2020-05-08T22:07:34Z",
        "access_person_id": "6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "access_person_type": "access_user",
        "accessible_id": "3c9a89e5-7c2b-4b59-a844-758fc692f3bd"
      },
      "id": "97f46c08-8133-4784-ade2-f79eb9672774",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d/accesses/97f46c08-8133-4784-ade2-f79eb9672774",
        "access_person": "http://api.remotelock.dev/access_persons/6d9a91f1-0d20-4b93-ac04-331b1790094d",
        "accessible": "http://api.remotelock.dev/locations/3c9a89e5-7c2b-4b59-a844-758fc692f3bd"
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
GET /access_persons/4dcb4c0a-4cf6-4bf8-b030-22ae456aac2e/accesses/3ec33013-9311-4641-a648-812e8561b784

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
      "created_at": "2020-05-08T22:07:35Z",
      "updated_at": "2020-05-08T22:07:35Z",
      "access_person_id": "4dcb4c0a-4cf6-4bf8-b030-22ae456aac2e",
      "access_person_type": "access_user",
      "accessible_id": "40caef2c-09b7-4a80-8edc-9056fb2cb67b"
    },
    "id": "3ec33013-9311-4641-a648-812e8561b784",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/4dcb4c0a-4cf6-4bf8-b030-22ae456aac2e/accesses/3ec33013-9311-4641-a648-812e8561b784",
      "access_person": "http://api.remotelock.dev/access_persons/4dcb4c0a-4cf6-4bf8-b030-22ae456aac2e",
      "accessible": "http://api.remotelock.dev/devices/40caef2c-09b7-4a80-8edc-9056fb2cb67b"
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
POST /access_persons/d4972c03-779a-40de-8223-59145c3bc2b1/accesses

```

#### Parameters


```json
{"attributes":{"accessible_id":"289dd0a2-95be-4df1-bf9c-4fc92d83ec5f","accessible_type":"lock","guest_start_time":"14:00","access_schedule_id":"aa580ae2-b1b5-4a06-9402-14579c804716"}}
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
      "created_at": "2020-05-08T22:07:40Z",
      "updated_at": "2020-05-08T22:07:40Z",
      "access_schedule_id": "aa580ae2-b1b5-4a06-9402-14579c804716",
      "access_person_id": "d4972c03-779a-40de-8223-59145c3bc2b1",
      "access_person_type": "access_guest",
      "accessible_id": "289dd0a2-95be-4df1-bf9c-4fc92d83ec5f"
    },
    "id": "24350824-6a19-4cde-91ad-f7578def3e7b",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/d4972c03-779a-40de-8223-59145c3bc2b1/accesses/24350824-6a19-4cde-91ad-f7578def3e7b",
      "access_schedule": "http://api.remotelock.dev/schedules/aa580ae2-b1b5-4a06-9402-14579c804716",
      "access_person": "http://api.remotelock.dev/access_persons/d4972c03-779a-40de-8223-59145c3bc2b1",
      "accessible": "http://api.remotelock.dev/devices/289dd0a2-95be-4df1-bf9c-4fc92d83ec5f"
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
PUT /access_persons/a4b18391-a284-4225-ae2f-1fd5191ca8eb/accesses/139d41c7-8a38-4a85-83b7-4bf1806ec59e

```

#### Parameters


```json
{"attributes":{"access_schedule_id":"69d4793a-5328-4388-8e0f-ecfaaf5f8a19"}}
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
      "created_at": "2020-05-08T22:07:42Z",
      "updated_at": "2020-05-08T22:07:42Z",
      "access_schedule_id": "69d4793a-5328-4388-8e0f-ecfaaf5f8a19",
      "access_person_id": "a4b18391-a284-4225-ae2f-1fd5191ca8eb",
      "access_person_type": "access_user",
      "accessible_id": "cca8a8ca-f6e8-4fa0-9451-0936d3a6b1ba"
    },
    "id": "139d41c7-8a38-4a85-83b7-4bf1806ec59e",
    "links": {
      "self": "http://api.remotelock.dev/access_persons/a4b18391-a284-4225-ae2f-1fd5191ca8eb/accesses/139d41c7-8a38-4a85-83b7-4bf1806ec59e",
      "access_schedule": "http://api.remotelock.dev/schedules/69d4793a-5328-4388-8e0f-ecfaaf5f8a19",
      "access_person": "http://api.remotelock.dev/access_persons/a4b18391-a284-4225-ae2f-1fd5191ca8eb",
      "accessible": "http://api.remotelock.dev/devices/cca8a8ca-f6e8-4fa0-9451-0936d3a6b1ba"
    }
  }
}
```


## Revoke an access person&#39;s access


### Request


#### Endpoint

`DELETE /access_persons/:access_person_id/accesses/:id`

```plaintext
DELETE /access_persons/35a444c4-eaed-4118-99d9-2db31a9f564d/accesses/870c93c3-3c41-47be-bab5-c7c487959396

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
      "name": "Marquita Rodriguez II",
      "created_at": "2020-05-08T22:07:45Z",
      "updated_at": "2020-05-08T22:07:45Z",
      "default_guest_start_time": "16:00:00",
      "default_guest_end_time": "11:00:00",
      "rental_guest_time_override": false,
      "primary_owner_id": "1d297ed9-dd5e-454a-8d22-e4d3d49dd86f",
      "owner_role_id": "ebc6da7f-a83b-4268-93ae-b820d4c2808a"
    },
    "id": "737e29f6-3d7f-45e8-bc14-a7105716aae3",
    "links": {
      "self": "http://api.remotelock.dev/account",
      "primary_owner": "http://api.remotelock.dev/user",
      "owner_role": "http://api.remotelock.dev/roles/ebc6da7f-a83b-4268-93ae-b820d4c2808a"
    }
  }
}
```


## * Get current account


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
      "name": "Dr. Keenan Hermiston",
      "created_at": "2020-05-08T22:07:45Z",
      "updated_at": "2020-05-08T22:07:45Z",
      "default_guest_start_time": "16:00:00",
      "default_guest_end_time": "11:00:00",
      "rental_guest_time_override": false,
      "generated_pin_digits": 4,
      "web_dashboard_type": "simple",
      "two_factor_authentication_required": false,
      "features": {
        "smart_card_credential": false,
        "phone_credential": false,
        "pin_credential": false,
        "connected_devices": false,
        "prox_card_credential": false,
        "registered_device_types": [

        ],
        "unikey_credential": false,
        "airbnb_rental_integration": true,
        "escapia_rental_integration": true,
        "guesty_rental_integration": true,
        "home_away_rental_integration": true,
        "v12_rental_integration": true,
        "email_notification": true,
        "webhook_notification": true,
        "text_notification": true,
        "resort_lock_device_type": true,
        "zwave_lock_device_type": true,
        "power_plug_device_type": true,
        "lock_device_type": true,
        "acs_elevator_device_type": true,
        "acs_elevator_floor_device_type": true,
        "acs_door_device_type": true,
        "thermostat_device_type": true,
        "schlage_home_lock_device_type": true,
        "igloo_lock_device_type": true,
        "access_instruction": false,
        "any_notification_event_type": true,
        "access_person_used_notification_event_type": true,
        "acs_door_opened_notification_event_type": true,
        "acs_door_closed_notification_event_type": true,
        "acs_door_held_open_notification_event_type": true,
        "access_person_synced_notification_event_type": true,
        "reset_notification_event_type": true,
        "unlocked_notification_event_type": true,
        "locked_notification_event_type": true,
        "access_denied_notification_event_type": true,
        "jammed_notification_event_type": true,
        "battery_replaced_notification_event_type": true,
        "temperature_changed_notification_event_type": true,
        "humidity_changed_notification_event_type": true,
        "relay_enabled_notification_event_type": true,
        "relay_disabled_notification_event_type": true,
        "unlockedlocked_notification_event_type": true,
        "api_access": false,
        "august_device_integration": false,
        "common_door": false,
        "custom_role": false,
        "standard_role": false,
        "group": false,
        "location_accessible": false,
        "mercury_device_integration": false,
        "mobile_credential": false,
        "non_access_device": false,
        "rental_integration": false,
        "ical_integration": false,
        "reporting": false,
        "schedule": false,
        "tenant_module": false,
        "shared_device_recipient_role": false,
        "vera_device_integration": false,
        "igloo_device_integration": false,
        "oauth_integration": true,
        "schlage_home_device_integration": false,
        "access_guest_late_sync_notification_event_type": true,
        "access_person_sync_failed_notification_event_type": true,
        "connectivity_notification_event_type": true,
        "power_level_low_notification_event_type": true,
        "owner_role": true
      },
      "conceal_secrets": false,
      "primary_use": "office",
      "billing_status": "paid",
      "billing_warning": false,
      "billing_plan_id": "e24de8f8-b26b-4413-a215-be2b8c0f83aa",
      "primary_owner_id": "e7d342a1-42a9-4965-b591-d0c18f699efd",
      "owner_role_id": "c7e01a3b-0970-47c6-8e48-72a7d67c7270"
    },
    "id": "94e20a79-ad51-429a-9a34-04a1be1b9cf1",
    "links": {
      "self": "http://api.remotelock.dev/account",
      "billing_plan": "http://api.remotelock.dev/billing/plans/e24de8f8-b26b-4413-a215-be2b8c0f83aa",
      "primary_owner": "http://api.remotelock.dev/user",
      "owner_role": "http://api.remotelock.dev/roles/c7e01a3b-0970-47c6-8e48-72a7d67c7270"
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
      "name": "Lucas Funk Sr.",
      "created_at": "2020-05-08T22:07:46Z",
      "updated_at": "2020-05-08T22:07:46Z",
      "default_guest_start_time": "15:30:00",
      "default_guest_end_time": "02:15:00",
      "rental_guest_time_override": false,
      "primary_owner_id": "9ff4145a-87ed-4cb8-9520-6a6a13163a44",
      "owner_role_id": "a0816cf7-5b25-4224-8bdc-d57b47b1b20d"
    },
    "id": "b0f51e40-1033-4cb7-9cc6-08b57ebd48f4",
    "links": {
      "self": "http://api.remotelock.dev/account",
      "primary_owner": "http://api.remotelock.dev/user",
      "owner_role": "http://api.remotelock.dev/roles/a0816cf7-5b25-4224-8bdc-d57b47b1b20d"
    }
  }
}
```


## * Update current account


### Request


#### Endpoint

`PUT /account`

```plaintext
PUT /account

```

#### Parameters


```json
{"attributes":{"default_guest_start_time":"15:30:00","default_guest_end_time":"02:15:00","generated_pin_digits":6,"billing_plan_id":"8b6ea383-0bc4-4d7e-b45c-8f427774de02","primary_use":"coworking"}}
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
      "name": "Takako Sanford DVM",
      "created_at": "2020-05-08T22:07:46Z",
      "updated_at": "2020-05-08T22:07:46Z",
      "default_guest_start_time": "15:30:00",
      "default_guest_end_time": "02:15:00",
      "rental_guest_time_override": false,
      "generated_pin_digits": 6,
      "web_dashboard_type": "simple",
      "two_factor_authentication_required": false,
      "features": {
        "smart_card_credential": false,
        "phone_credential": false,
        "pin_credential": false,
        "connected_devices": false,
        "prox_card_credential": false,
        "registered_device_types": [

        ],
        "unikey_credential": false,
        "airbnb_rental_integration": true,
        "escapia_rental_integration": true,
        "guesty_rental_integration": true,
        "home_away_rental_integration": true,
        "v12_rental_integration": true,
        "email_notification": true,
        "webhook_notification": true,
        "text_notification": true,
        "resort_lock_device_type": true,
        "zwave_lock_device_type": true,
        "power_plug_device_type": true,
        "lock_device_type": true,
        "acs_elevator_device_type": true,
        "acs_elevator_floor_device_type": true,
        "acs_door_device_type": true,
        "thermostat_device_type": true,
        "schlage_home_lock_device_type": true,
        "igloo_lock_device_type": true,
        "access_instruction": true,
        "any_notification_event_type": true,
        "access_person_used_notification_event_type": true,
        "acs_door_opened_notification_event_type": true,
        "acs_door_closed_notification_event_type": true,
        "acs_door_held_open_notification_event_type": true,
        "access_person_synced_notification_event_type": true,
        "reset_notification_event_type": true,
        "unlocked_notification_event_type": true,
        "locked_notification_event_type": true,
        "access_denied_notification_event_type": true,
        "jammed_notification_event_type": true,
        "battery_replaced_notification_event_type": true,
        "temperature_changed_notification_event_type": true,
        "humidity_changed_notification_event_type": true,
        "relay_enabled_notification_event_type": true,
        "relay_disabled_notification_event_type": true,
        "unlockedlocked_notification_event_type": true,
        "api_access": true,
        "august_device_integration": true,
        "common_door": true,
        "custom_role": true,
        "standard_role": true,
        "group": true,
        "location_accessible": true,
        "mercury_device_integration": true,
        "mobile_credential": true,
        "non_access_device": true,
        "rental_integration": true,
        "ical_integration": true,
        "reporting": true,
        "schedule": true,
        "tenant_module": true,
        "shared_device_recipient_role": true,
        "vera_device_integration": true,
        "igloo_device_integration": true,
        "oauth_integration": true,
        "schlage_home_device_integration": true,
        "access_guest_late_sync_notification_event_type": true,
        "access_person_sync_failed_notification_event_type": true,
        "connectivity_notification_event_type": true,
        "power_level_low_notification_event_type": true,
        "owner_role": true
      },
      "conceal_secrets": false,
      "primary_use": "coworking",
      "billing_status": "paid",
      "billing_warning": false,
      "billing_plan_id": "8b6ea383-0bc4-4d7e-b45c-8f427774de02",
      "primary_owner_id": "ea157d1e-b407-4c7d-84fe-a1eddb8e2708",
      "owner_role_id": "40954030-9b93-445b-89d7-41cf89729125"
    },
    "id": "ead22a85-c85f-4517-a325-e3e0a02038d9",
    "links": {
      "self": "http://api.remotelock.dev/account",
      "billing_plan": "http://api.remotelock.dev/billing/plans/8b6ea383-0bc4-4d7e-b45c-8f427774de02",
      "primary_owner": "http://api.remotelock.dev/user",
      "owner_role": "http://api.remotelock.dev/roles/40954030-9b93-445b-89d7-41cf89729125"
    }
  }
}
```


## * Delete current account


### Request


#### Endpoint

`DELETE /account`

```plaintext
DELETE /account

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Cannot delete account


### Request


#### Endpoint

`DELETE /account`

```plaintext
DELETE /account

```

#### Parameters



None known.

### Response


```plaintext

422 Unprocessable Entity
```

```json
{
  "errors": [
    {
      "attribute": null,
      "messages": [
        "Billing subscription must be cancelled before deleting the account."
      ],
      "full_messages": [
        "Billing subscription must be cancelled before deleting the account."
      ]
    }
  ]
}
```


## * Get all accounts


### Request


#### Endpoint

`GET /accounts`

```plaintext
GET /accounts

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
      "type": "account",
      "attributes": {
        "name": "Johnnie Kautzer",
        "created_at": "2020-05-08T22:07:52Z",
        "updated_at": "2020-05-08T22:07:52Z",
        "default_guest_start_time": "16:00:00",
        "default_guest_end_time": "11:00:00",
        "rental_guest_time_override": false,
        "generated_pin_digits": 4,
        "web_dashboard_type": "simple",
        "two_factor_authentication_required": false,
        "features": {
          "smart_card_credential": false,
          "phone_credential": false,
          "pin_credential": false,
          "connected_devices": false,
          "prox_card_credential": false,
          "registered_device_types": [

          ],
          "unikey_credential": false,
          "airbnb_rental_integration": true,
          "escapia_rental_integration": true,
          "guesty_rental_integration": true,
          "home_away_rental_integration": true,
          "v12_rental_integration": true,
          "email_notification": true,
          "webhook_notification": true,
          "text_notification": true,
          "resort_lock_device_type": true,
          "zwave_lock_device_type": true,
          "power_plug_device_type": true,
          "lock_device_type": true,
          "acs_elevator_device_type": true,
          "acs_elevator_floor_device_type": true,
          "acs_door_device_type": true,
          "thermostat_device_type": true,
          "schlage_home_lock_device_type": true,
          "igloo_lock_device_type": true,
          "access_instruction": false,
          "any_notification_event_type": true,
          "access_person_used_notification_event_type": true,
          "acs_door_opened_notification_event_type": true,
          "acs_door_closed_notification_event_type": true,
          "acs_door_held_open_notification_event_type": true,
          "access_person_synced_notification_event_type": true,
          "reset_notification_event_type": true,
          "unlocked_notification_event_type": true,
          "locked_notification_event_type": true,
          "access_denied_notification_event_type": true,
          "jammed_notification_event_type": true,
          "battery_replaced_notification_event_type": true,
          "temperature_changed_notification_event_type": true,
          "humidity_changed_notification_event_type": true,
          "relay_enabled_notification_event_type": true,
          "relay_disabled_notification_event_type": true,
          "unlockedlocked_notification_event_type": true,
          "api_access": false,
          "august_device_integration": false,
          "common_door": false,
          "custom_role": false,
          "standard_role": false,
          "group": false,
          "location_accessible": false,
          "mercury_device_integration": false,
          "mobile_credential": false,
          "non_access_device": false,
          "rental_integration": false,
          "ical_integration": false,
          "reporting": false,
          "schedule": false,
          "tenant_module": false,
          "shared_device_recipient_role": false,
          "vera_device_integration": false,
          "igloo_device_integration": false,
          "oauth_integration": true,
          "schlage_home_device_integration": false,
          "access_guest_late_sync_notification_event_type": true,
          "access_person_sync_failed_notification_event_type": true,
          "connectivity_notification_event_type": true,
          "power_level_low_notification_event_type": true,
          "owner_role": true
        },
        "conceal_secrets": false,
        "primary_use": "office",
        "billing_status": "none",
        "billing_warning": false,
        "billing_plan_id": "09448dfd-6320-44dd-90e5-ecca632226ad",
        "primary_owner_id": "8a1f8b8e-975b-43cf-a844-5597e13ed6dd",
        "owner_role_id": "91238e4e-6cb9-4631-855b-28f4248ba622"
      },
      "id": "eaa29bdb-77a4-4a58-b088-728cc80488eb",
      "links": {
        "self": "http://api.remotelock.dev/accounts/eaa29bdb-77a4-4a58-b088-728cc80488eb",
        "billing_plan": "http://api.remotelock.dev/billing/plans/09448dfd-6320-44dd-90e5-ecca632226ad",
        "primary_owner": "http://api.remotelock.dev/users/8a1f8b8e-975b-43cf-a844-5597e13ed6dd",
        "owner_role": "http://api.remotelock.dev/roles/91238e4e-6cb9-4631-855b-28f4248ba622"
      }
    },
    {
      "type": "account",
      "attributes": {
        "name": "Wm Batz",
        "created_at": "2020-05-08T22:07:52Z",
        "updated_at": "2020-05-08T22:07:52Z",
        "default_guest_start_time": "16:00:00",
        "default_guest_end_time": "11:00:00",
        "rental_guest_time_override": false,
        "generated_pin_digits": 4,
        "web_dashboard_type": "simple",
        "two_factor_authentication_required": false,
        "features": {
          "smart_card_credential": false,
          "phone_credential": false,
          "pin_credential": false,
          "connected_devices": false,
          "prox_card_credential": false,
          "registered_device_types": [

          ],
          "unikey_credential": false,
          "airbnb_rental_integration": true,
          "escapia_rental_integration": true,
          "guesty_rental_integration": true,
          "home_away_rental_integration": true,
          "v12_rental_integration": true,
          "email_notification": true,
          "webhook_notification": true,
          "text_notification": true,
          "resort_lock_device_type": true,
          "zwave_lock_device_type": true,
          "power_plug_device_type": true,
          "lock_device_type": true,
          "acs_elevator_device_type": true,
          "acs_elevator_floor_device_type": true,
          "acs_door_device_type": true,
          "thermostat_device_type": true,
          "schlage_home_lock_device_type": true,
          "igloo_lock_device_type": true,
          "access_instruction": false,
          "any_notification_event_type": true,
          "access_person_used_notification_event_type": true,
          "acs_door_opened_notification_event_type": true,
          "acs_door_closed_notification_event_type": true,
          "acs_door_held_open_notification_event_type": true,
          "access_person_synced_notification_event_type": true,
          "reset_notification_event_type": true,
          "unlocked_notification_event_type": true,
          "locked_notification_event_type": true,
          "access_denied_notification_event_type": true,
          "jammed_notification_event_type": true,
          "battery_replaced_notification_event_type": true,
          "temperature_changed_notification_event_type": true,
          "humidity_changed_notification_event_type": true,
          "relay_enabled_notification_event_type": true,
          "relay_disabled_notification_event_type": true,
          "unlockedlocked_notification_event_type": true,
          "api_access": false,
          "august_device_integration": false,
          "common_door": false,
          "custom_role": false,
          "standard_role": false,
          "group": false,
          "location_accessible": false,
          "mercury_device_integration": false,
          "mobile_credential": false,
          "non_access_device": false,
          "rental_integration": false,
          "ical_integration": false,
          "reporting": false,
          "schedule": false,
          "tenant_module": false,
          "shared_device_recipient_role": false,
          "vera_device_integration": false,
          "igloo_device_integration": false,
          "oauth_integration": true,
          "schlage_home_device_integration": false,
          "access_guest_late_sync_notification_event_type": true,
          "access_person_sync_failed_notification_event_type": true,
          "connectivity_notification_event_type": true,
          "power_level_low_notification_event_type": true,
          "owner_role": true
        },
        "conceal_secrets": false,
        "primary_use": "office",
        "billing_status": "paid",
        "billing_warning": false,
        "billing_plan_id": "09448dfd-6320-44dd-90e5-ecca632226ad",
        "primary_owner_id": "860da749-98a2-47ab-a870-2f0d2e46f808",
        "owner_role_id": "a0e1677b-f56d-4ea8-9ad5-5a2683ef94ba"
      },
      "id": "1064a56a-f62e-4857-b138-03802e0bbecd",
      "links": {
        "self": "http://api.remotelock.dev/account",
        "billing_plan": "http://api.remotelock.dev/billing/plans/09448dfd-6320-44dd-90e5-ecca632226ad",
        "primary_owner": "http://api.remotelock.dev/user",
        "owner_role": "http://api.remotelock.dev/roles/a0e1677b-f56d-4ea8-9ad5-5a2683ef94ba"
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


## * Switch account


### Request


#### Endpoint

`PUT /account/switch`

```plaintext
PUT /account/switch

```

#### Parameters


```json
{"attributes":{"account_id":"9d0920fd-f230-4d5c-9c26-35cd7637250d"}}
```

| Name | Description |
|:-----|:------------|
| attributes[account_id] *required* | Attributes account |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "account",
    "attributes": {
      "name": "Giovanni Gleason",
      "created_at": "2020-05-08T22:07:53Z",
      "updated_at": "2020-05-08T22:07:53Z",
      "default_guest_start_time": "16:00:00",
      "default_guest_end_time": "11:00:00",
      "rental_guest_time_override": false,
      "generated_pin_digits": 4,
      "web_dashboard_type": "simple",
      "two_factor_authentication_required": false,
      "features": {
        "smart_card_credential": false,
        "phone_credential": false,
        "pin_credential": false,
        "connected_devices": false,
        "prox_card_credential": false,
        "registered_device_types": [

        ],
        "unikey_credential": false,
        "airbnb_rental_integration": true,
        "escapia_rental_integration": true,
        "guesty_rental_integration": true,
        "home_away_rental_integration": true,
        "v12_rental_integration": true,
        "email_notification": true,
        "webhook_notification": true,
        "text_notification": true,
        "resort_lock_device_type": true,
        "zwave_lock_device_type": true,
        "power_plug_device_type": true,
        "lock_device_type": true,
        "acs_elevator_device_type": true,
        "acs_elevator_floor_device_type": true,
        "acs_door_device_type": true,
        "thermostat_device_type": true,
        "schlage_home_lock_device_type": true,
        "igloo_lock_device_type": true,
        "access_instruction": false,
        "any_notification_event_type": true,
        "access_person_used_notification_event_type": true,
        "acs_door_opened_notification_event_type": true,
        "acs_door_closed_notification_event_type": true,
        "acs_door_held_open_notification_event_type": true,
        "access_person_synced_notification_event_type": true,
        "reset_notification_event_type": true,
        "unlocked_notification_event_type": true,
        "locked_notification_event_type": true,
        "access_denied_notification_event_type": true,
        "jammed_notification_event_type": true,
        "battery_replaced_notification_event_type": true,
        "temperature_changed_notification_event_type": true,
        "humidity_changed_notification_event_type": true,
        "relay_enabled_notification_event_type": true,
        "relay_disabled_notification_event_type": true,
        "unlockedlocked_notification_event_type": true,
        "api_access": false,
        "august_device_integration": false,
        "common_door": false,
        "custom_role": false,
        "standard_role": false,
        "group": false,
        "location_accessible": false,
        "mercury_device_integration": false,
        "mobile_credential": false,
        "non_access_device": false,
        "rental_integration": false,
        "ical_integration": false,
        "reporting": false,
        "schedule": false,
        "tenant_module": false,
        "shared_device_recipient_role": false,
        "vera_device_integration": false,
        "igloo_device_integration": false,
        "oauth_integration": true,
        "schlage_home_device_integration": false,
        "access_guest_late_sync_notification_event_type": true,
        "access_person_sync_failed_notification_event_type": true,
        "connectivity_notification_event_type": true,
        "power_level_low_notification_event_type": true,
        "owner_role": true
      },
      "conceal_secrets": false,
      "primary_use": "office",
      "billing_status": "none",
      "billing_warning": false,
      "billing_plan_id": "f166c75b-5db8-4237-9930-deb53f286b30",
      "primary_owner_id": "98f1ec48-6c56-4861-8305-b9adcc1d5c51",
      "owner_role_id": "a215267c-1cad-4be3-a7fa-4d7ac5ceceb7"
    },
    "id": "9d0920fd-f230-4d5c-9c26-35cd7637250d",
    "links": {
      "self": "http://api.remotelock.dev/accounts/9d0920fd-f230-4d5c-9c26-35cd7637250d",
      "billing_plan": "http://api.remotelock.dev/billing/plans/f166c75b-5db8-4237-9930-deb53f286b30",
      "primary_owner": "http://api.remotelock.dev/users/98f1ec48-6c56-4861-8305-b9adcc1d5c51",
      "owner_role": "http://api.remotelock.dev/roles/a215267c-1cad-4be3-a7fa-4d7ac5ceceb7"
    }
  }
}
```


## * Returns a random available access PIN


### Request


#### Endpoint

`GET /account/random_available_access_pin`

```plaintext
GET /account/random_available_access_pin

```

#### Parameters



None known.

### Response


```plaintext

200 OK
```

```json
{
  "pin": "5428"
}
```


# ACS Elevators



## * Get all ACS elevators


### Request


#### Endpoint

`GET /acs/elevators`

```plaintext
GET /acs/elevators

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
      "type": "acs_elevator",
      "attributes": {
        "name": "Games & Home",
        "state": "locked",
        "connected": true,
        "created_at": "2020-05-08T22:08:01Z",
        "updated_at": "2020-05-08T22:08:01Z",
        "location_id": "7ddf384b-def0-4874-9875-5e2a79239034"
      },
      "id": "aabfb4ed-58a7-48cf-b61c-0b6ecf367300",
      "links": {
        "self": "http://api.remotelock.dev/devices/aabfb4ed-58a7-48cf-b61c-0b6ecf367300",
        "location": "http://api.remotelock.dev/locations/7ddf384b-def0-4874-9875-5e2a79239034"
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
        "created_at": "2020-05-08T22:08:01Z",
        "updated_at": "2020-05-08T22:08:01Z",
        "location_id": "3afcddff-f00e-46ca-8dce-832c837c2fae"
      },
      "id": "82b5c50c-d9cd-4f8b-8439-de5d84d8fbcc",
      "links": {
        "self": "http://api.remotelock.dev/devices/82b5c50c-d9cd-4f8b-8439-de5d84d8fbcc",
        "location": "http://api.remotelock.dev/locations/3afcddff-f00e-46ca-8dce-832c837c2fae"
      }
    },
    {
      "type": "acs_elevator",
      "attributes": {
        "name": "Tower B",
        "state": "locked",
        "connected": true,
        "created_at": "2020-05-08T22:08:01Z",
        "updated_at": "2020-05-08T22:08:01Z",
        "location_id": "cbbf5b83-6e00-4781-af1e-8ffa7203ec65"
      },
      "id": "910c2c0e-8f9d-4a6f-a40b-d3222a4b707e",
      "links": {
        "self": "http://api.remotelock.dev/devices/910c2c0e-8f9d-4a6f-a40b-d3222a4b707e",
        "location": "http://api.remotelock.dev/locations/cbbf5b83-6e00-4781-af1e-8ffa7203ec65"
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


## * Get ACS elevator


### Request


#### Endpoint

`GET /acs/elevators/:id`

```plaintext
GET /acs/elevators/385dd449-6cd5-413b-b5cc-1d6d171b0f39

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
    "type": "acs_elevator",
    "attributes": {
      "name": "Health & Garden",
      "state": "locked",
      "connected": true,
      "created_at": "2020-05-08T22:08:02Z",
      "updated_at": "2020-05-08T22:08:02Z",
      "location_id": "c238c0ee-3f23-4fae-b70b-d0dd0e16aa44"
    },
    "id": "385dd449-6cd5-413b-b5cc-1d6d171b0f39",
    "links": {
      "self": "http://api.remotelock.dev/devices/385dd449-6cd5-413b-b5cc-1d6d171b0f39",
      "location": "http://api.remotelock.dev/locations/c238c0ee-3f23-4fae-b70b-d0dd0e16aa44"
    }
  }
}
```


# Billing



## * Get all billing cards


### Request


#### Endpoint

`GET /billing/cards`

```plaintext
GET /billing/cards

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
      "type": "billing_card",
      "attributes": {
        "last_4_digits": "1234",
        "expiration_month": 5,
        "expiration_year": 2023,
        "default": false,
        "created_at": "2020-05-08T22:08:23Z",
        "updated_at": "2020-05-08T22:08:23Z"
      },
      "id": "5d8c7526-e41d-4410-9869-86e438f0537f",
      "links": {
        "self": "http://api.remotelock.dev/billing/cards/5d8c7526-e41d-4410-9869-86e438f0537f"
      }
    },
    {
      "type": "billing_card",
      "attributes": {
        "last_4_digits": "1234",
        "expiration_month": 5,
        "expiration_year": 2024,
        "default": false,
        "created_at": "2020-05-08T22:08:23Z",
        "updated_at": "2020-05-08T22:08:23Z"
      },
      "id": "bbffa8de-26c0-4b0e-8d3a-ab242741d795",
      "links": {
        "self": "http://api.remotelock.dev/billing/cards/bbffa8de-26c0-4b0e-8d3a-ab242741d795"
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


## * Create a billing card

Created billing card is automatically made "default".

### Request


#### Endpoint

`POST /billing/cards`

```plaintext
POST /billing/cards

```

#### Parameters


```json
{"attributes":{"number":"4012888888881881","expiration_month":"7","expiration_year":"2020","security_code":"123"}}
```

| Name | Description |
|:-----|:------------|
| attributes[number] *required* | Card number |
| attributes[expiration_month] *required* | Card expiration month |
| attributes[expiration_year] *required* | Card expiration year |
| attributes[security_code] *required* | Card verification code |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "billing_card",
    "attributes": {
      "last_4_digits": "1881",
      "expiration_month": 7,
      "expiration_year": 2020,
      "default": true,
      "created_at": "2020-05-08T22:08:24Z",
      "updated_at": "2020-05-08T22:08:24Z"
    },
    "id": "b5e7cbe1-1363-41c7-abba-d262670aa8a6",
    "links": {
      "self": "http://api.remotelock.dev/billing/cards/b5e7cbe1-1363-41c7-abba-d262670aa8a6"
    }
  }
}
```


## * Make a billing card &quot;default&quot;


### Request


#### Endpoint

`PUT /billing/cards/:id`

```plaintext
PUT /billing/cards/816865ff-5d25-4ec4-a29c-4b39ea1a637d

```

#### Parameters


```json
{"attributes":{"default":true}}
```

| Name | Description |
|:-----|:------------|
| attributes[default] *required* | Sets billing card to default and automatically un-sets "default" attribute from the currently default card. Can only be set to "true". |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "billing_card",
    "attributes": {
      "last_4_digits": "1881",
      "expiration_month": 4,
      "expiration_year": 2020,
      "default": true,
      "created_at": "2020-05-08T22:08:28Z",
      "updated_at": "2020-05-08T22:08:28Z"
    },
    "id": "816865ff-5d25-4ec4-a29c-4b39ea1a637d",
    "links": {
      "self": "http://api.remotelock.dev/billing/cards/816865ff-5d25-4ec4-a29c-4b39ea1a637d"
    }
  }
}
```


## * Delete a billing card


### Request


#### Endpoint

`DELETE /billing/cards/:id`

```plaintext
DELETE /billing/cards/348ff556-a885-4c54-a679-4c65301533f8

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Get billing plans for current account


### Request


#### Endpoint

`GET /billing/plans`

```plaintext
GET /billing/plans

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
      "type": "billing_plan",
      "attributes": {
        "category": null,
        "name": "Basic",
        "level": 1,
        "features": {
          "access_instruction": false,
          "any_notification_event_type": true,
          "api_access": false,
          "august_device_integration": false,
          "common_door": false,
          "custom_role": false,
          "group": false,
          "location_accessible": false,
          "mercury_device_integration": false,
          "mobile_credential": false,
          "non_access_device": false,
          "rental_integration": false,
          "ical_integration": false,
          "reporting": false,
          "schedule": false,
          "tenant_module": false,
          "vera_device_integration": false,
          "igloo_device_integration": false,
          "oauth_integration": true,
          "schlage_home_device_integration": false
        },
        "free": {
          "access_device": 1,
          "account_member": null,
          "device": null,
          "rental_listing": null,
          "rental_listing_per_access_device": null,
          "ical_integration_per_access_device": null,
          "oauth_integration": null
        },
        "limits": {
          "access_guest_duration": 90,
          "access_guest": 75,
          "access_user": 25,
          "account_member": 2,
          "history_days": 60,
          "access_person": null,
          "device": -1
        },
        "currency": "usd",
        "visible": true,
        "legacy": false,
        "pricing": {
          "access_device": 300,
          "acs_door": 300,
          "acs_elevator_floor": 300,
          "plan": 300,
          "account_member": null,
          "non_access_device": null,
          "ical_integration": null,
          "rental_listing": null
        }
      },
      "id": "5e3d6540-bd6e-4c27-80b0-b3e735c12d4f",
      "links": {
        "self": "http://api.remotelock.dev/billing/plans/5e3d6540-bd6e-4c27-80b0-b3e735c12d4f"
      }
    },
    {
      "type": "billing_plan",
      "attributes": {
        "category": null,
        "name": "Enterprise",
        "level": 4,
        "features": {
          "access_instruction": true,
          "any_notification_event_type": true,
          "api_access": true,
          "august_device_integration": true,
          "common_door": true,
          "custom_role": true,
          "group": true,
          "location_accessible": true,
          "mercury_device_integration": true,
          "mobile_credential": true,
          "non_access_device": true,
          "rental_integration": true,
          "ical_integration": true,
          "reporting": true,
          "schedule": true,
          "tenant_module": true,
          "vera_device_integration": true,
          "igloo_device_integration": true,
          "oauth_integration": true,
          "schlage_home_device_integration": true
        },
        "free": {
          "access_device": 1,
          "account_member": null,
          "device": null,
          "rental_listing": null,
          "rental_listing_per_access_device": null,
          "ical_integration_per_access_device": null,
          "oauth_integration": null
        },
        "limits": {
          "access_guest_duration": -1,
          "access_guest": -1,
          "access_user": -1,
          "account_member": -1,
          "history_days": 365,
          "access_person": null,
          "device": -1
        },
        "currency": "usd",
        "visible": true,
        "legacy": false,
        "pricing": {
          "access_device": 1200,
          "acs_door": 1200,
          "acs_elevator_floor": 1200,
          "plan": 1200,
          "account_member": null,
          "non_access_device": null,
          "ical_integration": null,
          "rental_listing": null
        }
      },
      "id": "36260f61-46b6-4601-9e11-59f709739f29",
      "links": {
        "self": "http://api.remotelock.dev/billing/plans/36260f61-46b6-4601-9e11-59f709739f29"
      }
    },
    {
      "type": "billing_plan",
      "attributes": {
        "category": null,
        "name": "Business",
        "level": 3,
        "features": {
          "access_instruction": true,
          "any_notification_event_type": true,
          "api_access": false,
          "august_device_integration": true,
          "common_door": true,
          "custom_role": true,
          "group": true,
          "location_accessible": true,
          "mercury_device_integration": true,
          "mobile_credential": true,
          "non_access_device": true,
          "rental_integration": true,
          "ical_integration": true,
          "reporting": true,
          "schedule": true,
          "tenant_module": true,
          "vera_device_integration": true,
          "igloo_device_integration": true,
          "oauth_integration": true,
          "schlage_home_device_integration": true
        },
        "free": {
          "access_device": 1,
          "account_member": null,
          "device": null,
          "rental_listing": null,
          "rental_listing_per_access_device": null,
          "ical_integration_per_access_device": null,
          "oauth_integration": null
        },
        "limits": {
          "access_guest_duration": 90,
          "access_guest": 300,
          "access_user": 100,
          "account_member": 10,
          "history_days": 180,
          "access_person": null,
          "device": -1
        },
        "currency": "usd",
        "visible": true,
        "legacy": false,
        "pricing": {
          "access_device": 900,
          "acs_door": 900,
          "acs_elevator_floor": 900,
          "plan": 900,
          "account_member": null,
          "non_access_device": null,
          "ical_integration": null,
          "rental_listing": null
        }
      },
      "id": "c0e56e08-58be-4fa9-860b-a5aca78150da",
      "links": {
        "self": "http://api.remotelock.dev/billing/plans/c0e56e08-58be-4fa9-860b-a5aca78150da"
      }
    },
    {
      "type": "billing_plan",
      "attributes": {
        "category": null,
        "name": "Premium",
        "level": 2,
        "features": {
          "access_instruction": true,
          "any_notification_event_type": true,
          "api_access": false,
          "august_device_integration": true,
          "common_door": false,
          "custom_role": true,
          "group": false,
          "location_accessible": false,
          "mercury_device_integration": false,
          "mobile_credential": false,
          "non_access_device": false,
          "rental_integration": true,
          "ical_integration": true,
          "reporting": false,
          "schedule": true,
          "tenant_module": false,
          "vera_device_integration": true,
          "igloo_device_integration": true,
          "oauth_integration": true,
          "schlage_home_device_integration": true
        },
        "free": {
          "access_device": 1,
          "account_member": null,
          "device": null,
          "rental_listing": null,
          "rental_listing_per_access_device": null,
          "ical_integration_per_access_device": null,
          "oauth_integration": null
        },
        "limits": {
          "access_guest_duration": 90,
          "access_guest": 150,
          "access_user": 50,
          "account_member": 5,
          "history_days": 90,
          "access_person": null,
          "device": -1
        },
        "currency": "usd",
        "visible": true,
        "legacy": false,
        "pricing": {
          "access_device": 600,
          "acs_door": 600,
          "acs_elevator_floor": 600,
          "plan": 600,
          "account_member": null,
          "non_access_device": null,
          "ical_integration": null,
          "rental_listing": null
        }
      },
      "id": "a9ceb8b5-1996-4e9d-8004-d81083ceb2ef",
      "links": {
        "self": "http://api.remotelock.dev/billing/plans/a9ceb8b5-1996-4e9d-8004-d81083ceb2ef"
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


## * Get a new billing subscription


### Request


#### Endpoint

`GET /billing/subscription/new`

```plaintext
GET /billing/subscription/new?attributes[interval]=month

```

#### Parameters

```json
attributes: {&quot;interval&quot;=&gt;&quot;month&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[interval] *required* | "month" or "year" |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "billing_subscription",
    "attributes": {
      "status": "paid",
      "amount": 3600,
      "currency": "usd",
      "interval": "month",
      "interval_discount": 0,
      "payment_type": "card",
      "component_amounts": {
        "acs_door": 1200,
        "plan": 1200,
        "lock": 1200
      },
      "component_counts": {
        "acs_door": 1,
        "plan": 1,
        "lock": 2
      },
      "prepaid_remaining_credit": null
    }
  }
}
```


## * Get the current billing subscription


### Request


#### Endpoint

`GET /billing/subscription`

```plaintext
GET /billing/subscription

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
    "type": "billing_subscription",
    "attributes": {
      "status": "paid",
      "amount": 4200,
      "currency": "usd",
      "interval": "month",
      "interval_discount": 0,
      "payment_type": "card",
      "component_amounts": {
        "acs_door": 1200,
        "plan": 1200,
        "lock": 1200,
        "paid_oauth_application": 600
      },
      "component_counts": {
        "acs_door": 1,
        "plan": 1,
        "lock": 2,
        "paid_oauth_application": 2
      },
      "prepaid_remaining_credit": null
    },
    "id": "cea795c9-9f7a-4f6c-b1f8-a4f3297a6463",
    "links": {
      "self": "http://api.remotelock.dev/billing/subscription"
    }
  }
}
```


## * Create a billing subscription


### Request


#### Endpoint

`POST /billing/subscription`

```plaintext
POST /billing/subscription

```

#### Parameters


```json
{"attributes":{"interval":"month"}}
```

| Name | Description |
|:-----|:------------|
| attributes[interval] *required* | "month" or "year" |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "billing_subscription",
    "attributes": {
      "status": "paid",
      "amount": 3600,
      "currency": "usd",
      "interval": "month",
      "interval_discount": 0,
      "payment_type": "card",
      "component_amounts": {
        "acs_door": 1200,
        "plan": 1200,
        "lock": 1200
      },
      "component_counts": {
        "acs_door": 1,
        "plan": 1,
        "lock": 2
      },
      "prepaid_remaining_credit": null
    },
    "id": "832d10ce-72a8-49de-b654-c7f64ffcda27",
    "links": {
      "self": "http://api.remotelock.dev/billing/subscription"
    }
  }
}
```


## * Update the current billing subscription


### Request


#### Endpoint

`PUT /billing/subscription`

```plaintext
PUT /billing/subscription

```

#### Parameters


```json
{"attributes":{"interval":"year"}}
```

| Name | Description |
|:-----|:------------|
| attributes[interval] *required* | "month" or "year" |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "billing_subscription",
    "attributes": {
      "status": "paid",
      "amount": 38880,
      "currency": "usd",
      "interval": "year",
      "interval_discount": 10,
      "payment_type": "card",
      "component_amounts": {
        "acs_door": 14400,
        "plan": 14400,
        "lock": 14400
      },
      "component_counts": {
        "acs_door": 1,
        "plan": 1,
        "lock": 2
      },
      "prepaid_remaining_credit": null
    },
    "id": "1cce7216-93e0-4487-a050-d409a1625c0f",
    "links": {
      "self": "http://api.remotelock.dev/billing/subscription"
    }
  }
}
```


## * Delete the current billing subscription


### Request


#### Endpoint

`DELETE /billing/subscription`

```plaintext
DELETE /billing/subscription

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Common Doors



## * Get all common doors


### Request


#### Endpoint

`GET /common_doors`

```plaintext
GET /common_doors

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
      "type": "common_door",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "created_at": "2020-05-08T22:09:33Z",
        "updated_at": "2020-05-08T22:09:33Z",
        "record_name": "LS-6i - AC000W005553823",
        "record_id": "54c16697-220f-4655-991e-080bc88e3e54",
        "record_type": "lock",
        "to_id": "80b55811-4dab-4e8e-a366-44b82771e996",
        "to_type": "location"
      },
      "id": "4aeff3f9-b0a5-4d3d-b600-7f4663cc98f1",
      "links": {
        "self": "http://api.remotelock.dev/common_doors/4aeff3f9-b0a5-4d3d-b600-7f4663cc98f1",
        "record": "http://api.remotelock.dev/devices/54c16697-220f-4655-991e-080bc88e3e54",
        "to": "http://api.remotelock.dev/locations/80b55811-4dab-4e8e-a366-44b82771e996"
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


## * Get a common door


### Request


#### Endpoint

`GET /common_doors/:id`

```plaintext
GET /common_doors/64ddb6b5-c846-4648-bbd7-f107d6f8d418

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
    "type": "common_door",
    "attributes": {
      "guest_start_time": null,
      "guest_end_time": null,
      "created_at": "2020-05-08T22:09:34Z",
      "updated_at": "2020-05-08T22:09:34Z",
      "record_name": "LS-6i - AC000W004553523",
      "record_id": "3693ed14-d01e-43ee-a930-35add2fe9bdf",
      "record_type": "lock",
      "to_id": "20144fac-48f4-4905-a2a7-fc61be0e2391",
      "to_type": "location"
    },
    "id": "64ddb6b5-c846-4648-bbd7-f107d6f8d418",
    "links": {
      "self": "http://api.remotelock.dev/common_doors/64ddb6b5-c846-4648-bbd7-f107d6f8d418",
      "record": "http://api.remotelock.dev/devices/3693ed14-d01e-43ee-a930-35add2fe9bdf",
      "to": "http://api.remotelock.dev/locations/20144fac-48f4-4905-a2a7-fc61be0e2391"
    }
  }
}
```


## * Create a common door


### Request


#### Endpoint

`POST /common_doors`

```plaintext
POST /common_doors

```

#### Parameters


```json
{"attributes":{"record_type":"lock","record_id":"47b32f0d-3982-471c-910d-e2ac54cf510f","to_type":"location","to_id":"34db73a0-3ac8-41e0-a669-0c43e2f9f5c9","apply_retroactively":true,"access_schedule_id":"ac2614e9-f03f-4c65-9999-4191e13a703b","guest_start_time":"15:00:00","guest_end_time":"12:00:00"}}
```

| Name | Description |
|:-----|:------------|
| attributes[record_type] *required* | Common door type: door_group, acs_door, acs_elevator_floor, lock, zwave_lock or schlage_home_lock |
| attributes[record_id] *required* | Common door id |
| attributes[to_type] *required* | Common to type: location, acs_door, acs_elevator_floor, lock, zwave_lock or schlage_home_lock |
| attributes[to_id] *required* | Common to id |
| attributes[apply_retroactively]  | Add common door access for existing access persons. Default: false |
| attributes[access_schedule_id]  | Access Schedule id |
| attributes[guest_start_time]  | Access Guest start time override, ISO 8601 24 hour time format |
| attributes[guest_end_time]  | Access Guest end time override, ISO 8601 24 hour time format |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "common_door",
    "attributes": {
      "guest_start_time": "15:00:00",
      "guest_end_time": "12:00:00",
      "created_at": "2020-05-08T22:09:35Z",
      "updated_at": "2020-05-08T22:09:35Z",
      "record_name": "LS-6i - AC000W007395364",
      "record_id": "47b32f0d-3982-471c-910d-e2ac54cf510f",
      "record_type": "lock",
      "to_id": "34db73a0-3ac8-41e0-a669-0c43e2f9f5c9",
      "to_type": "location",
      "access_schedule_id": "ac2614e9-f03f-4c65-9999-4191e13a703b"
    },
    "id": "76bf403c-ab39-4851-a22b-510e4bdf7c64",
    "links": {
      "self": "http://api.remotelock.dev/common_doors/76bf403c-ab39-4851-a22b-510e4bdf7c64",
      "record": "http://api.remotelock.dev/devices/47b32f0d-3982-471c-910d-e2ac54cf510f",
      "to": "http://api.remotelock.dev/locations/34db73a0-3ac8-41e0-a669-0c43e2f9f5c9",
      "access_schedule": "http://api.remotelock.dev/schedules/ac2614e9-f03f-4c65-9999-4191e13a703b"
    }
  }
}
```


## * Update a common door


### Request


#### Endpoint

`PUT /common_doors/:id`

```plaintext
PUT /common_doors/83a93c08-5267-4695-8c96-5c4c77cbd437

```

#### Parameters


```json
{"attributes":{"guest_start_time":"14:00:00"}}
```

| Name | Description |
|:-----|:------------|
| attributes[access_schedule_id]  | Access Schedule id |
| attributes[guest_start_time]  | Access Guest start time override, ISO 8601 24 hour time format |
| attributes[guest_end_time]  | Access Guest end time override, ISO 8601 24 hour time format |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "common_door",
    "attributes": {
      "guest_start_time": "14:00:00",
      "guest_end_time": null,
      "created_at": "2020-05-08T22:09:35Z",
      "updated_at": "2020-05-08T22:09:35Z",
      "record_name": "LS-6i - AC000W003721685",
      "record_id": "24a8b80c-97d1-4f35-b0cf-684e86e3ee57",
      "record_type": "lock",
      "to_id": "35a8844e-225e-434c-92ca-9a5b56d1fc68",
      "to_type": "location"
    },
    "id": "83a93c08-5267-4695-8c96-5c4c77cbd437",
    "links": {
      "self": "http://api.remotelock.dev/common_doors/83a93c08-5267-4695-8c96-5c4c77cbd437",
      "record": "http://api.remotelock.dev/devices/24a8b80c-97d1-4f35-b0cf-684e86e3ee57",
      "to": "http://api.remotelock.dev/locations/35a8844e-225e-434c-92ca-9a5b56d1fc68"
    }
  }
}
```


## * Delete a common door


### Request


#### Endpoint

`DELETE /common_doors/:id`

```plaintext
DELETE /common_doors/72fe176a-66fe-4cd9-9ee3-670b5a968ab6

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Get doors that are common doors of a given accessible


### Request


#### Endpoint

`GET /common_doors/preview/:accessible_type/:accessible_id`

```plaintext
GET /common_doors/preview/location/8ce14303-5e45-4a92-979d-c589f441ff7a

```

#### Parameters



| Name | Description |
|:-----|:------------|
| accessible_type *required* | Accessible type location, acs_door, acs_elevator_floor, lock, zwave_lock or schlage_home_lock |
| accessible_id *required* | Accessible id |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "common_door",
      "attributes": {
        "guest_start_time": null,
        "guest_end_time": null,
        "created_at": "2020-05-08T22:09:36Z",
        "updated_at": "2020-05-08T22:09:36Z",
        "record_name": "LS-6i - AC000W006116398",
        "record_id": "b4ed9b1b-5e7e-4986-bc7d-75b5b21839c5",
        "record_type": "lock",
        "to_id": "8ce14303-5e45-4a92-979d-c589f441ff7a",
        "to_type": "location"
      },
      "id": "c23cdf0f-72a0-4c95-863a-2d2b80e6891a",
      "links": {
        "self": "http://api.remotelock.dev/common_doors/c23cdf0f-72a0-4c95-863a-2d2b80e6891a",
        "record": "http://api.remotelock.dev/devices/b4ed9b1b-5e7e-4986-bc7d-75b5b21839c5",
        "to": "http://api.remotelock.dev/locations/8ce14303-5e45-4a92-979d-c589f441ff7a"
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


# ACS Elevator Floors



## * Get all ACS Elevator Floors


### Request


#### Endpoint

`GET /devices`

```plaintext
GET /devices

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
      "type": "acs_elevator_floor",
      "attributes": {
        "name": "Home",
        "state": "locked",
        "number": 1,
        "created_at": "2020-05-08T22:09:42Z",
        "updated_at": "2020-05-08T22:09:42Z",
        "connected": true,
        "panel_number": 1,
        "controller_name": "Office",
        "output_number": 1,
        "model_id": "42928120-e8bd-4d1a-aa1e-5365206c7ff0",
        "location_id": "67332a9f-9109-4495-ae12-ad9a1ed3edf1",
        "elevator_id": "27c6624d-4030-45c1-af9d-fbae36e03f4a"
      },
      "id": "f14d2070-8a8b-4f2f-8dd7-d4ee43e00690",
      "links": {
        "self": "http://api.remotelock.dev/devices/f14d2070-8a8b-4f2f-8dd7-d4ee43e00690",
        "model": "http://api.remotelock.dev/models/42928120-e8bd-4d1a-aa1e-5365206c7ff0",
        "location": "http://api.remotelock.dev/locations/67332a9f-9109-4495-ae12-ad9a1ed3edf1",
        "elevator": "http://api.remotelock.dev/devices/27c6624d-4030-45c1-af9d-fbae36e03f4a"
      }
    },
    {
      "type": "acs_elevator_floor",
      "attributes": {
        "name": "Home, Health & Movies",
        "state": "locked",
        "number": 2,
        "created_at": "2020-05-08T22:09:42Z",
        "updated_at": "2020-05-08T22:09:42Z",
        "connected": true,
        "panel_number": 1,
        "controller_name": "Office",
        "output_number": 1,
        "model_id": "42928120-e8bd-4d1a-aa1e-5365206c7ff0",
        "location_id": "67332a9f-9109-4495-ae12-ad9a1ed3edf1",
        "elevator_id": "6978a064-6fcd-44d7-a18f-e0b5e1820ea2"
      },
      "id": "bdeed71e-faa8-45be-907c-85983cfb6485",
      "links": {
        "self": "http://api.remotelock.dev/devices/bdeed71e-faa8-45be-907c-85983cfb6485",
        "model": "http://api.remotelock.dev/models/42928120-e8bd-4d1a-aa1e-5365206c7ff0",
        "location": "http://api.remotelock.dev/locations/67332a9f-9109-4495-ae12-ad9a1ed3edf1",
        "elevator": "http://api.remotelock.dev/devices/6978a064-6fcd-44d7-a18f-e0b5e1820ea2"
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


## * Get ACS Elevator Floor


### Request


#### Endpoint

`GET /devices/:id`

```plaintext
GET /devices/727b3bf0-edbd-4a7b-a184-8cb1a956758a

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
    "type": "acs_elevator_floor",
    "attributes": {
      "name": "Sports, Books & Music",
      "state": "locked",
      "number": 3,
      "created_at": "2020-05-08T22:09:42Z",
      "updated_at": "2020-05-08T22:09:42Z",
      "connected": true,
      "panel_number": 1,
      "controller_name": "Office",
      "output_number": 1,
      "model_id": "c8fc223f-31df-499c-9204-bd64be22aeac",
      "location_id": "fa79856a-b347-44ea-a987-cf9e19001dbd",
      "elevator_id": "26dad072-bb7a-4230-9986-afcbda7b1dd3"
    },
    "id": "727b3bf0-edbd-4a7b-a184-8cb1a956758a",
    "links": {
      "self": "http://api.remotelock.dev/devices/727b3bf0-edbd-4a7b-a184-8cb1a956758a",
      "model": "http://api.remotelock.dev/models/c8fc223f-31df-499c-9204-bd64be22aeac",
      "location": "http://api.remotelock.dev/locations/fa79856a-b347-44ea-a987-cf9e19001dbd",
      "elevator": "http://api.remotelock.dev/devices/26dad072-bb7a-4230-9986-afcbda7b1dd3"
    }
  }
}
```


## * Update an ACS Elevator Floor


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/ae53e685-d822-4bd5-91ea-ceb6cd8182c8

```

#### Parameters


```json
{"attributes":{"name":"Amenities"}}
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
    "type": "acs_elevator_floor",
    "attributes": {
      "name": "Amenities",
      "state": "locked",
      "number": 5,
      "created_at": "2020-05-08T22:09:42Z",
      "updated_at": "2020-05-08T22:09:43Z",
      "connected": true,
      "panel_number": 1,
      "controller_name": "Office",
      "output_number": 1,
      "model_id": "ea650a8b-a3c8-4d34-acf7-b76eb7200cfe",
      "location_id": "54b9d4c2-6b6c-4b6f-9e19-af3e8ff34ff3",
      "elevator_id": "3743b480-612c-4656-8142-592c37971858"
    },
    "id": "ae53e685-d822-4bd5-91ea-ceb6cd8182c8",
    "links": {
      "self": "http://api.remotelock.dev/devices/ae53e685-d822-4bd5-91ea-ceb6cd8182c8",
      "model": "http://api.remotelock.dev/models/ea650a8b-a3c8-4d34-acf7-b76eb7200cfe",
      "location": "http://api.remotelock.dev/locations/54b9d4c2-6b6c-4b6f-9e19-af3e8ff34ff3",
      "elevator": "http://api.remotelock.dev/devices/3743b480-612c-4656-8142-592c37971858"
    }
  }
}
```


## * Delete ACS Elevator Floor


### Request


#### Endpoint

`DELETE /devices/:id`

```plaintext
DELETE /devices/524add0d-f462-4d5f-9768-d143ee9b66df

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Lock an ACS Elevator Floor


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/ce4826ee-5151-4032-ae6f-b125203c3ae8/lock

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
    "type": "acs_elevator_floor",
    "attributes": {
      "name": "Books & Automotive",
      "state": "locked",
      "number": 9,
      "created_at": "2020-05-08T22:09:43Z",
      "updated_at": "2020-05-08T22:09:43Z",
      "connected": true,
      "panel_number": 1,
      "controller_name": "Office",
      "output_number": 1,
      "model_id": "b63ba5cd-3b5e-49df-aca9-bfe0024238b6",
      "location_id": "e52edf25-d52f-4e6d-8fef-0c28b683ecdb",
      "elevator_id": "a9dc5694-2e93-43a5-8b4d-dd7f042db64d"
    },
    "id": "ce4826ee-5151-4032-ae6f-b125203c3ae8",
    "links": {
      "self": "http://api.remotelock.dev/devices/ce4826ee-5151-4032-ae6f-b125203c3ae8",
      "model": "http://api.remotelock.dev/models/b63ba5cd-3b5e-49df-aca9-bfe0024238b6",
      "location": "http://api.remotelock.dev/locations/e52edf25-d52f-4e6d-8fef-0c28b683ecdb",
      "elevator": "http://api.remotelock.dev/devices/a9dc5694-2e93-43a5-8b4d-dd7f042db64d"
    }
  }
}
```


## * Unlock an ACS Elevator Floor


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/2586488e-06fb-4ec1-9444-f3788c89e2c4/unlock

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
    "type": "acs_elevator_floor",
    "attributes": {
      "name": "Computers",
      "state": "unlocked",
      "number": 11,
      "created_at": "2020-05-08T22:09:44Z",
      "updated_at": "2020-05-08T22:09:44Z",
      "connected": true,
      "panel_number": 1,
      "controller_name": "Office",
      "output_number": 1,
      "model_id": "cce91ce0-5fd3-4474-af4e-7b8753c0585a",
      "location_id": "78a48d00-49b7-417b-9477-ef665181ed11",
      "elevator_id": "f7fc6622-73a4-40d7-8b4b-d833645a92e6"
    },
    "id": "2586488e-06fb-4ec1-9444-f3788c89e2c4",
    "links": {
      "self": "http://api.remotelock.dev/devices/2586488e-06fb-4ec1-9444-f3788c89e2c4",
      "model": "http://api.remotelock.dev/models/cce91ce0-5fd3-4474-af4e-7b8753c0585a",
      "location": "http://api.remotelock.dev/locations/78a48d00-49b7-417b-9477-ef665181ed11",
      "elevator": "http://api.remotelock.dev/devices/f7fc6622-73a4-40d7-8b4b-d833645a92e6"
    }
  }
}
```


## * Temporary unlock an ACS Elevator Floor


### Request


#### Endpoint

`PUT /devices/:id/temporary_unlock`

```plaintext
PUT /devices/39daaa56-38c2-46b7-a4f1-83ea044f4180/temporary_unlock

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
    "type": "acs_elevator_floor",
    "attributes": {
      "name": "Grocery & Music",
      "state": "unlocked",
      "number": 13,
      "created_at": "2020-05-08T22:09:44Z",
      "updated_at": "2020-05-08T22:09:44Z",
      "connected": true,
      "panel_number": 1,
      "controller_name": "Office",
      "output_number": 1,
      "model_id": "63a398cf-0c3a-4789-afb0-3a20cf9d88da",
      "location_id": "ede99ac0-fa80-4f21-8a9e-ffb9fb2e5743",
      "elevator_id": "1c02cf33-598a-466f-aa61-186d455672bb"
    },
    "id": "39daaa56-38c2-46b7-a4f1-83ea044f4180",
    "links": {
      "self": "http://api.remotelock.dev/devices/39daaa56-38c2-46b7-a4f1-83ea044f4180",
      "model": "http://api.remotelock.dev/models/63a398cf-0c3a-4789-afb0-3a20cf9d88da",
      "location": "http://api.remotelock.dev/locations/ede99ac0-fa80-4f21-8a9e-ffb9fb2e5743",
      "elevator": "http://api.remotelock.dev/devices/1c02cf33-598a-466f-aa61-186d455672bb"
    }
  }
}
```


## * Access person accesses of an ACS Elevator Floor


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/bda72abd-b803-486e-bb41-44dac856a820/access_person_accesses?attributes[access_person_type]=access_user

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
        "created_at": "2020-05-08T22:09:45Z",
        "updated_at": "2020-05-08T22:09:45Z",
        "accessible_name": "Triple-buffered maximized capability",
        "access_schedule_name": null,
        "access_person_id": "4f4e4949-7f6c-494f-b8f6-8b4823fd69bc",
        "access_person_type": "access_user",
        "accessible_id": "9a38faea-47e5-4f22-9a13-7e7ff0b8ae67"
      },
      "id": "a1650f1b-b88b-4f94-971a-c90a6ffd01e4",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/4f4e4949-7f6c-494f-b8f6-8b4823fd69bc/accesses/a1650f1b-b88b-4f94-971a-c90a6ffd01e4",
        "access_person": "http://api.remotelock.dev/access_persons/4f4e4949-7f6c-494f-b8f6-8b4823fd69bc",
        "accessible": "http://api.remotelock.dev/locations/9a38faea-47e5-4f22-9a13-7e7ff0b8ae67"
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
        "accessible_type": "acs_elevator_floor",
        "created_at": "2020-05-08T22:09:45Z",
        "updated_at": "2020-05-08T22:09:45Z",
        "accessible_name": "Health",
        "access_schedule_name": null,
        "access_person_id": "840b59c3-76f6-418b-a2c9-397beebf5563",
        "access_person_type": "access_user",
        "accessible_id": "bda72abd-b803-486e-bb41-44dac856a820"
      },
      "id": "827a02b2-a0a4-49a6-901e-7105d8bd0319",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/840b59c3-76f6-418b-a2c9-397beebf5563/accesses/827a02b2-a0a4-49a6-901e-7105d8bd0319",
        "access_person": "http://api.remotelock.dev/access_persons/840b59c3-76f6-418b-a2c9-397beebf5563",
        "accessible": "http://api.remotelock.dev/devices/bda72abd-b803-486e-bb41-44dac856a820"
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



## * Update an Igloo Lock


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/59d3d3c6-efba-485d-a6a9-94969016cada

```

#### Parameters


```json
{"attributes":{"name":"My Padlock","location_id":"c5271914-9caa-4c3f-b306-53cd865b65e4"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[location_id]  | Location Id |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "igloo_lock",
    "attributes": {
      "name": "My Padlock",
      "location_id": "c5271914-9caa-4c3f-b306-53cd865b65e4",
      "model_id": "8249a973-4cf8-42d1-8d6d-fc46bcb0b2e4"
    },
    "id": "59d3d3c6-efba-485d-a6a9-94969016cada",
    "links": {
      "self": "http://api.remotelock.dev/devices/59d3d3c6-efba-485d-a6a9-94969016cada",
      "location": "http://api.remotelock.dev/locations/c5271914-9caa-4c3f-b306-53cd865b65e4",
      "model": "http://api.remotelock.dev/models/8249a973-4cf8-42d1-8d6d-fc46bcb0b2e4"
    }
  }
}
```


## Register an OpenEdge RG/BG/CG (formerly 5i/3i/7i) lock


### Request


#### Endpoint

`POST /devices`

```plaintext
POST /devices

```

#### Parameters


```json
{"attributes":{"name":"Home Lock","location_id":"bc646681-ffb0-4e3a-93a7-79245b197e59","serial_number":"AC000W000213429"}}
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
      "connected_at": "2020-05-08T22:06:46Z",
      "serial_number": "AC000W000213429",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "locked",
      "power_level": 5,
      "created_at": "2020-05-08T22:09:46Z",
      "updated_at": "2020-05-08T22:09:46Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "2631efaa-df48-4cb6-a3b9-2807c8e60b9c",
      "location_id": "bc646681-ffb0-4e3a-93a7-79245b197e59"
    },
    "id": "8659693e-5bd2-4abf-82d8-0f8a504a1618",
    "links": {
      "self": "http://api.remotelock.dev/devices/8659693e-5bd2-4abf-82d8-0f8a504a1618",
      "model": "http://api.remotelock.dev/models/2631efaa-df48-4cb6-a3b9-2807c8e60b9c",
      "location": "http://api.remotelock.dev/locations/bc646681-ffb0-4e3a-93a7-79245b197e59"
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
PUT /devices/b860b817-a4b9-41b1-8f37-fbff8a97a711

```

#### Parameters


```json
{"attributes":{"name":"Backdoor Lock","location_id":"74d80418-5a9b-4e88-aac1-6008f659f812","default_guest_start_time":"11:15:00","power_source":"alkaline_battery","local_pins":["1234"]}}
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
      "signal_quality": 2,
      "connected": false,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-08T22:09:49Z",
      "serial_number": "AC000W008702009",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "locked",
      "power_level": 5,
      "created_at": "2020-05-08T22:09:49Z",
      "updated_at": "2020-05-08T22:09:49Z",
      "default_guest_start_time": "11:15:00",
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "70fa0e35-b842-4f3b-b6e2-8965d99aec87",
      "location_id": "74d80418-5a9b-4e88-aac1-6008f659f812"
    },
    "id": "b860b817-a4b9-41b1-8f37-fbff8a97a711",
    "links": {
      "self": "http://api.remotelock.dev/devices/b860b817-a4b9-41b1-8f37-fbff8a97a711",
      "model": "http://api.remotelock.dev/models/70fa0e35-b842-4f3b-b6e2-8965d99aec87",
      "location": "http://api.remotelock.dev/locations/74d80418-5a9b-4e88-aac1-6008f659f812"
    }
  }
}
```


## Lock a lock


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/bf0204fe-a687-4088-b47d-c20de803b240/lock

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
      "name": "LS-6i - AC000W002881513",
      "heartbeat_interval": 0,
      "wifi_level": 0,
      "signal_quality": 0,
      "connected": false,
      "alive": false,
      "power_source": "hardwire",
      "connected_at": null,
      "serial_number": "AC000W002881513",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 0,
      "programming_code": null,
      "state": "locked",
      "power_level": 0,
      "created_at": "2020-05-08T22:09:49Z",
      "updated_at": "2020-05-08T22:09:49Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": null,
      "model_id": "5c3ee7ff-6875-4716-ab65-197f136b8bd4",
      "location_id": "6bf5a3cc-135b-4877-aff6-8a4ff8faec07"
    },
    "id": "bf0204fe-a687-4088-b47d-c20de803b240",
    "links": {
      "self": "http://api.remotelock.dev/devices/bf0204fe-a687-4088-b47d-c20de803b240",
      "model": "http://api.remotelock.dev/models/5c3ee7ff-6875-4716-ab65-197f136b8bd4",
      "location": "http://api.remotelock.dev/locations/6bf5a3cc-135b-4877-aff6-8a4ff8faec07"
    }
  }
}
```


## Unlock a lock


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/a394f588-15e5-4dd8-878f-26ef672fde5d/unlock

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
      "name": "LS-6i - AC000W003613100",
      "heartbeat_interval": 0,
      "wifi_level": 0,
      "signal_quality": 0,
      "connected": false,
      "alive": false,
      "power_source": "hardwire",
      "connected_at": null,
      "serial_number": "AC000W003613100",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 0,
      "programming_code": null,
      "state": "unlocked",
      "power_level": 0,
      "created_at": "2020-05-08T22:09:50Z",
      "updated_at": "2020-05-08T22:09:50Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": null,
      "model_id": "2d9aa439-c4f6-432b-ba91-bcf8dc9c7d05",
      "location_id": "d88aa7e1-d7fd-4ac3-a6c2-5d27ac7c742b"
    },
    "id": "a394f588-15e5-4dd8-878f-26ef672fde5d",
    "links": {
      "self": "http://api.remotelock.dev/devices/a394f588-15e5-4dd8-878f-26ef672fde5d",
      "model": "http://api.remotelock.dev/models/2d9aa439-c4f6-432b-ba91-bcf8dc9c7d05",
      "location": "http://api.remotelock.dev/locations/d88aa7e1-d7fd-4ac3-a6c2-5d27ac7c742b"
    }
  }
}
```


## Access person accesses of a lock


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/f1f918bb-9dd6-43c8-b470-58e7f07c7a82/access_person_accesses?attributes[access_person_type]=access_user

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
        "created_at": "2020-05-08T22:09:51Z",
        "updated_at": "2020-05-08T22:09:51Z",
        "access_person_id": "cd01928b-b727-4049-aa20-85d0907d3777",
        "access_person_type": "access_user",
        "accessible_id": "a111a894-99e0-4ff0-821a-94b29d977ad7"
      },
      "id": "edcd5b71-b395-456d-bb3d-35148129b41d",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/cd01928b-b727-4049-aa20-85d0907d3777/accesses/edcd5b71-b395-456d-bb3d-35148129b41d",
        "access_person": "http://api.remotelock.dev/access_persons/cd01928b-b727-4049-aa20-85d0907d3777",
        "accessible": "http://api.remotelock.dev/locations/a111a894-99e0-4ff0-821a-94b29d977ad7"
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
        "created_at": "2020-05-08T22:09:51Z",
        "updated_at": "2020-05-08T22:09:51Z",
        "access_person_id": "1f47a42d-0219-4ae3-bb62-cd01e09c5013",
        "access_person_type": "access_user",
        "accessible_id": "f1f918bb-9dd6-43c8-b470-58e7f07c7a82"
      },
      "id": "e75a151a-08fb-49a9-be54-05ec62089341",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/1f47a42d-0219-4ae3-bb62-cd01e09c5013/accesses/e75a151a-08fb-49a9-be54-05ec62089341",
        "access_person": "http://api.remotelock.dev/access_persons/1f47a42d-0219-4ae3-bb62-cd01e09c5013",
        "accessible": "http://api.remotelock.dev/devices/f1f918bb-9dd6-43c8-b470-58e7f07c7a82"
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
PUT /devices/5e0fd459-f95d-4b3b-acef-eb91cbaedc1c

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
    "type": "schlage_home_lock",
    "attributes": {
      "name": "East door",
      "state": "locked",
      "alive": true,
      "connected": true,
      "connected_at": "2020-05-08T22:03:54Z",
      "power_level": 90,
      "created_at": "2020-05-08T22:09:54Z",
      "updated_at": "2020-05-08T22:09:54Z",
      "serial_number": "3100003251782951",
      "location_id": "dd8a7f3e-7afd-48f3-8f6d-8208a1837273",
      "model_id": "ead85a8f-60bd-41d3-ad7a-9828432466ab"
    },
    "id": "5e0fd459-f95d-4b3b-acef-eb91cbaedc1c",
    "links": {
      "self": "http://api.remotelock.dev/devices/5e0fd459-f95d-4b3b-acef-eb91cbaedc1c",
      "location": "http://api.remotelock.dev/locations/dd8a7f3e-7afd-48f3-8f6d-8208a1837273",
      "model": "http://api.remotelock.dev/models/ead85a8f-60bd-41d3-ad7a-9828432466ab"
    }
  }
}
```


## Lock a Schlage Home lock


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/4cac7d6b-abc6-4cdf-9528-b1b628323360/lock

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
      "name": "master bedroom",
      "state": "locked",
      "alive": true,
      "connected": true,
      "connected_at": "2020-05-08T21:59:55Z",
      "power_level": 90,
      "created_at": "2020-05-08T22:09:55Z",
      "updated_at": "2020-05-08T22:09:55Z",
      "serial_number": "3100003251782951",
      "location_id": "e367492b-364b-4b9e-855c-ee4bd4f88ccc",
      "model_id": "34ecab7c-7c18-48d9-936f-d40f2aad55a4"
    },
    "id": "4cac7d6b-abc6-4cdf-9528-b1b628323360",
    "links": {
      "self": "http://api.remotelock.dev/devices/4cac7d6b-abc6-4cdf-9528-b1b628323360",
      "location": "http://api.remotelock.dev/locations/e367492b-364b-4b9e-855c-ee4bd4f88ccc",
      "model": "http://api.remotelock.dev/models/34ecab7c-7c18-48d9-936f-d40f2aad55a4"
    }
  }
}
```


## Unlock a Schlage Home lock


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/a4738ac6-7e8b-4036-bfba-6bb6a48f177f/unlock

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
      "name": "drawing room",
      "state": "locked",
      "alive": true,
      "connected": true,
      "connected_at": "2020-05-08T21:59:55Z",
      "power_level": 90,
      "created_at": "2020-05-08T22:09:55Z",
      "updated_at": "2020-05-08T22:09:55Z",
      "serial_number": "3100003251782951",
      "location_id": "2ddd7dca-9a87-4cb3-9b1e-cb76e957c100",
      "model_id": "ca52cbac-40e4-43cc-96a4-e5f54b708802"
    },
    "id": "a4738ac6-7e8b-4036-bfba-6bb6a48f177f",
    "links": {
      "self": "http://api.remotelock.dev/devices/a4738ac6-7e8b-4036-bfba-6bb6a48f177f",
      "location": "http://api.remotelock.dev/locations/2ddd7dca-9a87-4cb3-9b1e-cb76e957c100",
      "model": "http://api.remotelock.dev/models/ca52cbac-40e4-43cc-96a4-e5f54b708802"
    }
  }
}
```


## Access person accesses of a Schlage Home lock


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/4abd11a7-5dbc-47e4-a15d-2cc93aab95fb/access_person_accesses?attributes[access_person_type]=access_user

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
        "created_at": "2020-05-08T22:09:55Z",
        "updated_at": "2020-05-08T22:09:55Z",
        "access_person_id": "a3ca1ae6-9535-413b-ac01-d9ef1d3f4f7e",
        "access_person_type": "access_user",
        "accessible_id": "20d1ddae-f780-4f98-aba1-2b09248a6a94"
      },
      "id": "d3483e44-ad4e-4198-8eac-885518cc2a78",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/a3ca1ae6-9535-413b-ac01-d9ef1d3f4f7e/accesses/d3483e44-ad4e-4198-8eac-885518cc2a78",
        "access_person": "http://api.remotelock.dev/access_persons/a3ca1ae6-9535-413b-ac01-d9ef1d3f4f7e",
        "accessible": "http://api.remotelock.dev/locations/20d1ddae-f780-4f98-aba1-2b09248a6a94"
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
        "created_at": "2020-05-08T22:09:55Z",
        "updated_at": "2020-05-08T22:09:55Z",
        "access_person_id": "e517594d-cf52-4076-8e18-08cb4edab510",
        "access_person_type": "access_user",
        "accessible_id": "4abd11a7-5dbc-47e4-a15d-2cc93aab95fb"
      },
      "id": "bbe4608c-d56f-4620-8f62-c944774281e3",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/e517594d-cf52-4076-8e18-08cb4edab510/accesses/bbe4608c-d56f-4620-8f62-c944774281e3",
        "access_person": "http://api.remotelock.dev/access_persons/e517594d-cf52-4076-8e18-08cb4edab510",
        "accessible": "http://api.remotelock.dev/devices/4abd11a7-5dbc-47e4-a15d-2cc93aab95fb"
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


## * Register an LS-90i Thermostat


### Request


#### Endpoint

`POST /devices`

```plaintext
POST /devices

```

#### Parameters


```json
{"attributes":{"name":"Test Thermostat","location_id":"fa4aa87d-0653-4e00-a959-ffcb34ccb809","serial_number":"20F85E129479","model_id":"ef44610b-57c4-41ce-a98e-420a3c519c55"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name] *required* | Name |
| attributes[serial_number] *required* | Device serial number |
| attributes[model_id] *required* | Device model |
| attributes[location_id] *required* | Location |
| attributes[heartbeat_interval]  | Heartbeat interval |
| attributes[thermostat_schedule_id]  | Thermostat Schedule |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "thermostat",
    "attributes": {
      "name": "Test Thermostat",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 2,
      "connected": false,
      "alive": true,
      "power_source": "hardwire",
      "connected_at": "2020-05-08T22:04:56Z",
      "serial_number": "20F85E129479",
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
      "created_at": "2020-05-08T22:09:56Z",
      "updated_at": "2020-05-08T22:09:56Z",
      "model_id": "ef44610b-57c4-41ce-a98e-420a3c519c55",
      "location_id": "fa4aa87d-0653-4e00-a959-ffcb34ccb809"
    },
    "id": "5ff3643e-069a-47f2-9af5-6bc8bb9abaac",
    "links": {
      "self": "http://api.remotelock.dev/devices/5ff3643e-069a-47f2-9af5-6bc8bb9abaac",
      "model": "http://api.remotelock.dev/models/ef44610b-57c4-41ce-a98e-420a3c519c55",
      "location": "http://api.remotelock.dev/locations/fa4aa87d-0653-4e00-a959-ffcb34ccb809"
    },
    "meta": {
      "restricted_actions": [
        "replace"
      ]
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
| power_level | Battery power level (percentage), if using batteries |
| current_mode | Current operating mode (heating or cooling) |
| energy_saver | Is the thermostat in Energy Saver mode? |
| fan_mode | Current fan mode |
| hold | Is the thermostat in Hold mode? |
| humidity | Current humidity value (percentage) |
| temperature | Current temperature value |
| target_mode | Desired mode (heating or cooling) |
| target_temperature | Desired temperature |
| connected_at | Time of last successful connection. |
## * Update a Thermostat


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/69630b40-204a-452e-b18a-35422a58103d

```

#### Parameters


```json
{"attributes":{"name":"Another Test Thermostat"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[location_id]  | Location |
| attributes[heartbeat_interval]  | Heartbeat interval |
| attributes[thermostat_schedule_id]  | Thermostat Schedule |
| attributes[target_temperature]  | Desired temperature |
| attributes[target_mode]  | Set desired operation mode |
| attributes[fan_mode]  | Set Fan mode |
| attributes[hold]  | Set Hold mode |
| attributes[energy_saver]  | Set Energy Saver mode |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "thermostat",
    "attributes": {
      "name": "Another Test Thermostat",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 1,
      "connected": false,
      "alive": true,
      "power_source": "hardwire",
      "connected_at": "2020-05-08T22:05:56Z",
      "serial_number": "001DC9A0717G",
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
      "created_at": "2020-05-08T22:09:56Z",
      "updated_at": "2020-05-08T22:09:56Z",
      "model_id": "590ecd43-21b1-47cf-bc42-a2c1b94b3971",
      "location_id": "687cecda-0ba5-473c-9c7d-baba9550480e",
      "thermostat_schedule_id": "b8a458a0-e549-4950-99d1-826c7b43c00a"
    },
    "id": "69630b40-204a-452e-b18a-35422a58103d",
    "links": {
      "self": "http://api.remotelock.dev/devices/69630b40-204a-452e-b18a-35422a58103d",
      "model": "http://api.remotelock.dev/models/590ecd43-21b1-47cf-bc42-a2c1b94b3971",
      "location": "http://api.remotelock.dev/locations/687cecda-0ba5-473c-9c7d-baba9550480e",
      "thermostat_schedule": "http://api.remotelock.dev/schedules/b8a458a0-e549-4950-99d1-826c7b43c00a"
    },
    "meta": {
      "restricted_actions": [
        "replace"
      ]
    }
  }
}
```


## Update a ZWave lock


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/b34349fb-4c93-4f42-8ea2-830ad261c27c

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
      "created_at": "2020-05-08T22:09:57Z",
      "updated_at": "2020-05-08T22:09:57Z",
      "location_id": "6d7ab81f-ccbe-46ce-8a85-04a52b3a65f5",
      "model_id": "07a9c642-953d-489e-a5c8-4d75e128c70d"
    },
    "id": "b34349fb-4c93-4f42-8ea2-830ad261c27c",
    "links": {
      "self": "http://api.remotelock.dev/devices/b34349fb-4c93-4f42-8ea2-830ad261c27c",
      "location": "http://api.remotelock.dev/locations/6d7ab81f-ccbe-46ce-8a85-04a52b3a65f5",
      "model": "http://api.remotelock.dev/models/07a9c642-953d-489e-a5c8-4d75e128c70d"
    }
  }
}
```


## Lock a ZWave lock


### Request


#### Endpoint

`PUT /devices/:id/lock`

```plaintext
PUT /devices/c2f98024-ecfa-43b0-a300-338254e894db/lock

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
      "name": "IXB",
      "state": "locked",
      "connected": false,
      "power_level": 0,
      "protocol": "",
      "created_at": "2020-05-08T22:09:57Z",
      "updated_at": "2020-05-08T22:09:57Z",
      "location_id": "c8123143-eaef-4a45-9eaf-dcf168ea86fc",
      "model_id": "259d8398-2d95-4133-85d5-769f093c70b7"
    },
    "id": "c2f98024-ecfa-43b0-a300-338254e894db",
    "links": {
      "self": "http://api.remotelock.dev/devices/c2f98024-ecfa-43b0-a300-338254e894db",
      "location": "http://api.remotelock.dev/locations/c8123143-eaef-4a45-9eaf-dcf168ea86fc",
      "model": "http://api.remotelock.dev/models/259d8398-2d95-4133-85d5-769f093c70b7"
    }
  }
}
```


## Unlock a ZWave lock


### Request


#### Endpoint

`PUT /devices/:id/unlock`

```plaintext
PUT /devices/9ceb16dc-2b3a-4b4d-b7eb-c2a11705116d/unlock

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
      "name": "MCD",
      "state": "unlocked",
      "connected": false,
      "power_level": 0,
      "protocol": "",
      "created_at": "2020-05-08T22:09:57Z",
      "updated_at": "2020-05-08T22:09:57Z",
      "location_id": "403ecf47-90e0-42e8-a263-3793d8bdb777",
      "model_id": "2496a201-408b-4955-9491-0cbfdc561f10"
    },
    "id": "9ceb16dc-2b3a-4b4d-b7eb-c2a11705116d",
    "links": {
      "self": "http://api.remotelock.dev/devices/9ceb16dc-2b3a-4b4d-b7eb-c2a11705116d",
      "location": "http://api.remotelock.dev/locations/403ecf47-90e0-42e8-a263-3793d8bdb777",
      "model": "http://api.remotelock.dev/models/2496a201-408b-4955-9491-0cbfdc561f10"
    }
  }
}
```


## Access person accesses of a ZWave lock


### Request


#### Endpoint

`GET /devices/:id/access_person_accesses`

```plaintext
GET /devices/62d9c542-13e2-46dc-980f-eff87dc1e3c7/access_person_accesses?attributes[access_person_type]=access_user

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
        "created_at": "2020-05-08T22:09:58Z",
        "updated_at": "2020-05-08T22:09:58Z",
        "access_person_id": "3791a227-c9d6-4a43-b4f6-f291ab156f50",
        "access_person_type": "access_user",
        "accessible_id": "28021c0d-a211-4a63-bf8b-034f4903c4d7"
      },
      "id": "5663a268-2200-488a-a7c7-327821b30837",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/3791a227-c9d6-4a43-b4f6-f291ab156f50/accesses/5663a268-2200-488a-a7c7-327821b30837",
        "access_person": "http://api.remotelock.dev/access_persons/3791a227-c9d6-4a43-b4f6-f291ab156f50",
        "accessible": "http://api.remotelock.dev/locations/28021c0d-a211-4a63-bf8b-034f4903c4d7"
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
        "created_at": "2020-05-08T22:09:58Z",
        "updated_at": "2020-05-08T22:09:58Z",
        "access_person_id": "cd0b4506-74d2-4e2d-917b-53a115a04b04",
        "access_person_type": "access_user",
        "accessible_id": "62d9c542-13e2-46dc-980f-eff87dc1e3c7"
      },
      "id": "2d0f4459-9d05-4df1-a78a-9289525d9118",
      "links": {
        "self": "http://api.remotelock.dev/access_persons/cd0b4506-74d2-4e2d-917b-53a115a04b04/accesses/2d0f4459-9d05-4df1-a78a-9289525d9118",
        "access_person": "http://api.remotelock.dev/access_persons/cd0b4506-74d2-4e2d-917b-53a115a04b04",
        "accessible": "http://api.remotelock.dev/devices/62d9c542-13e2-46dc-980f-eff87dc1e3c7"
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
        "name": "LS-6i - AC000W001692506",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 4,
        "connected": true,
        "alive": true,
        "power_source": "alkaline_battery",
        "connected_at": "2020-05-08T22:05:59Z",
        "serial_number": "AC000W001692506",
        "wake_wifi": "user_action",
        "muted": false,
        "auto_lock": true,
        "auto_lock_timeout": 20,
        "programming_code": "123456",
        "state": "locked",
        "power_level": 5,
        "created_at": "2020-05-08T22:09:58Z",
        "updated_at": "2020-05-08T22:09:58Z",
        "default_guest_start_time": null,
        "default_guest_end_time": null,
        "local_pins": [
          "1234"
        ],
        "model_id": "fa37e8e3-ff64-4a13-8ce1-6927909fac01",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "lock_action_schedule_id": "6bd09584-1b07-492c-bfd9-05a0feb267da"
      },
      "id": "7a62b428-1632-4cad-9041-9ba39c91e932",
      "links": {
        "self": "http://api.remotelock.dev/devices/7a62b428-1632-4cad-9041-9ba39c91e932",
        "model": "http://api.remotelock.dev/models/fa37e8e3-ff64-4a13-8ce1-6927909fac01",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "lock_action_schedule": "http://api.remotelock.dev/schedules/6bd09584-1b07-492c-bfd9-05a0feb267da"
      }
    },
    {
      "type": "thermostat",
      "attributes": {
        "name": "LS-60i - 001DC9A01JPO",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 4,
        "connected": false,
        "alive": true,
        "power_source": "hardwire",
        "connected_at": "2020-05-08T22:07:59Z",
        "serial_number": "001DC9A01JPO",
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
        "created_at": "2020-05-08T22:09:58Z",
        "updated_at": "2020-05-08T22:09:58Z",
        "model_id": "130823a7-4798-420e-af04-c24cad532ef8",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "thermostat_schedule_id": "6dcaebb8-cb4b-4cfd-9f4e-62344fc1c835"
      },
      "id": "8779764c-3896-42f1-89a1-f6634a9d1a23",
      "links": {
        "self": "http://api.remotelock.dev/devices/8779764c-3896-42f1-89a1-f6634a9d1a23",
        "model": "http://api.remotelock.dev/models/130823a7-4798-420e-af04-c24cad532ef8",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "thermostat_schedule": "http://api.remotelock.dev/schedules/6dcaebb8-cb4b-4cfd-9f4e-62344fc1c835"
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
        "name": "LS-DB500i - 20F85E000PMO",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 4,
        "connected": false,
        "alive": true,
        "power_source": "alkaline_battery",
        "connected_at": "2020-05-08T22:08:59Z",
        "serial_number": "20F85E000PMO",
        "wake_wifi": "user_action",
        "muted": false,
        "auto_lock": true,
        "auto_lock_timeout": 20,
        "programming_code": "123456",
        "state": "unlocked",
        "power_level": 15,
        "created_at": "2020-05-08T22:09:58Z",
        "updated_at": "2020-05-08T22:09:58Z",
        "default_guest_start_time": null,
        "default_guest_end_time": null,
        "local_pins": [
          "1234"
        ],
        "model_id": "31083c25-2ce3-4b18-8087-6a8597e1cf68",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46"
      },
      "id": "44f2c05f-fd01-4819-afd2-a5e5ac855d2f",
      "links": {
        "self": "http://api.remotelock.dev/devices/44f2c05f-fd01-4819-afd2-a5e5ac855d2f",
        "model": "http://api.remotelock.dev/models/31083c25-2ce3-4b18-8087-6a8597e1cf68",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46"
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
        "name": "RL-4000 - CWEEV7DF0B4FBE01",
        "default_guest_start_time": null,
        "default_guest_end_time": null,
        "created_at": "2020-05-08T22:09:59Z",
        "updated_at": "2020-05-08T22:09:59Z",
        "serial_number": "CWEEV7DF0B4FBE01",
        "model_id": "9bc88882-df0d-4b25-8cfa-a442041f5084",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46"
      },
      "id": "46a65bec-02fa-46bd-a17e-23d19d4beabe",
      "links": {
        "self": "http://api.remotelock.dev/devices/46a65bec-02fa-46bd-a17e-23d19d4beabe",
        "model": "http://api.remotelock.dev/models/9bc88882-df0d-4b25-8cfa-a442041f5084",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46"
      }
    },
    {
      "type": "power_plug",
      "attributes": {
        "name": "LS-P50i - 20F85EAZ38QN",
        "heartbeat_interval": 1200,
        "wifi_level": 0,
        "signal_quality": 3,
        "connected": true,
        "alive": true,
        "power_source": "hardwire",
        "connected_at": "2020-05-08T22:04:59Z",
        "serial_number": "20F85EAZ38QN",
        "on": true,
        "voltage": 120.0,
        "power": 4.5,
        "power_factor": 0.57,
        "current": 0.06,
        "frequency": 59.95,
        "total_power": 8.75,
        "occupied": true,
        "model_id": "c2d40fe6-a98e-4c31-b2d1-08effcbf844e",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "power_plug_schedule_id": "4fd52b15-cdb4-4e9f-a60f-9a146bdc47f5"
      },
      "id": "01e7f36a-493d-495e-999c-314046cc4210",
      "links": {
        "self": "http://api.remotelock.dev/devices/01e7f36a-493d-495e-999c-314046cc4210",
        "model": "http://api.remotelock.dev/models/c2d40fe6-a98e-4c31-b2d1-08effcbf844e",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "power_plug_schedule": "http://api.remotelock.dev/schedules/4fd52b15-cdb4-4e9f-a60f-9a146bdc47f5"
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
        "name": "Computers & Toys",
        "state": "locked",
        "connected": true,
        "created_at": "2020-05-08T22:09:59Z",
        "updated_at": "2020-05-08T22:09:59Z",
        "model_id": "32140621-9f33-44e6-a132-4e782afcf279",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46"
      },
      "id": "3f6272ca-ce18-4a64-bbf4-8f0141a33e94",
      "links": {
        "self": "http://api.remotelock.dev/devices/3f6272ca-ce18-4a64-bbf4-8f0141a33e94",
        "model": "http://api.remotelock.dev/models/32140621-9f33-44e6-a132-4e782afcf279",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46"
      }
    },
    {
      "type": "zwave_lock",
      "attributes": {
        "name": "JEC",
        "state": "locked",
        "connected": true,
        "power_level": 15,
        "protocol": "",
        "created_at": "2020-05-08T22:09:59Z",
        "updated_at": "2020-05-08T22:09:59Z",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "model_id": "4d780166-e4f4-4ef0-856a-cc4a966ff3ec"
      },
      "id": "27aa7c6e-6e64-4cf6-afbf-502f439ffa09",
      "links": {
        "self": "http://api.remotelock.dev/devices/27aa7c6e-6e64-4cf6-afbf-502f439ffa09",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "model": "http://api.remotelock.dev/models/4d780166-e4f4-4ef0-856a-cc4a966ff3ec"
      }
    },
    {
      "type": "igloo_lock",
      "attributes": {
        "name": "master bedroom",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "model_id": "8fae4807-590a-46cd-a462-523a34a20278"
      },
      "id": "6f667942-4bd3-44a9-bbdd-160e030bdea2",
      "links": {
        "self": "http://api.remotelock.dev/devices/6f667942-4bd3-44a9-bbdd-160e030bdea2",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "model": "http://api.remotelock.dev/models/8fae4807-590a-46cd-a462-523a34a20278"
      }
    },
    {
      "type": "schlage_home_lock",
      "attributes": {
        "name": "porch",
        "state": "locked",
        "alive": true,
        "connected": true,
        "connected_at": "2020-05-08T22:02:59Z",
        "power_level": 90,
        "created_at": "2020-05-08T22:09:59Z",
        "updated_at": "2020-05-08T22:09:59Z",
        "serial_number": "3100003251782951",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "model_id": "dc69430e-5d45-4153-b63c-9da20d309d03"
      },
      "id": "3bfd0576-51c9-4f57-8152-504ca2c9add4",
      "links": {
        "self": "http://api.remotelock.dev/devices/3bfd0576-51c9-4f57-8152-504ca2c9add4",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "model": "http://api.remotelock.dev/models/dc69430e-5d45-4153-b63c-9da20d309d03"
      }
    },
    {
      "type": "acs_elevator_floor",
      "attributes": {
        "name": "Music & Baby",
        "state": "locked",
        "number": 17,
        "created_at": "2020-05-08T22:09:59Z",
        "updated_at": "2020-05-08T22:09:59Z",
        "connected": true,
        "model_id": "b6308ae1-0398-4216-800c-65847bffa3f4",
        "location_id": "45426a74-50a5-40ef-a0d3-4745744e9b46",
        "elevator_id": "29483429-8afe-4484-aaa2-32238a550c89"
      },
      "id": "65846ce4-4317-4e83-928e-07c0b33fd41a",
      "links": {
        "self": "http://api.remotelock.dev/devices/65846ce4-4317-4e83-928e-07c0b33fd41a",
        "model": "http://api.remotelock.dev/models/b6308ae1-0398-4216-800c-65847bffa3f4",
        "location": "http://api.remotelock.dev/locations/45426a74-50a5-40ef-a0d3-4745744e9b46",
        "elevator": "http://api.remotelock.dev/devices/29483429-8afe-4484-aaa2-32238a550c89"
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
GET /devices/cb058963-70c9-4d16-9324-9cde442ab0d2

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
      "name": "LS-6i - AC000W007274414",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 2,
      "connected": true,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-08T22:09:05Z",
      "serial_number": "AC000W007274414",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "locked",
      "power_level": 15,
      "created_at": "2020-05-08T22:10:05Z",
      "updated_at": "2020-05-08T22:10:05Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "713b81eb-277b-4b22-ae5c-93253f4b1e6c",
      "location_id": "9d8db5e2-a6b8-413d-9a7a-53d009dc5063",
      "lock_action_schedule_id": "21516433-b741-4fc3-8fe9-bd4e6f614780"
    },
    "id": "cb058963-70c9-4d16-9324-9cde442ab0d2",
    "links": {
      "self": "http://api.remotelock.dev/devices/cb058963-70c9-4d16-9324-9cde442ab0d2",
      "model": "http://api.remotelock.dev/models/713b81eb-277b-4b22-ae5c-93253f4b1e6c",
      "location": "http://api.remotelock.dev/locations/9d8db5e2-a6b8-413d-9a7a-53d009dc5063",
      "lock_action_schedule": "http://api.remotelock.dev/schedules/21516433-b741-4fc3-8fe9-bd4e6f614780"
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
PUT /devices/64814b6f-bd20-47e5-bb3a-e055455e5d82/temporary_unlock

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
      "name": "Home & Clothing",
      "state": "unlocked",
      "connected": false,
      "created_at": "2020-05-08T22:10:06Z",
      "updated_at": "2020-05-08T22:10:06Z",
      "model_id": "c0221473-5e09-4d32-8b7f-24e5abc60fd0",
      "location_id": "facd1eef-bb5d-4d23-9e22-5b683c1d4de9"
    },
    "id": "64814b6f-bd20-47e5-bb3a-e055455e5d82",
    "links": {
      "self": "http://api.remotelock.dev/devices/64814b6f-bd20-47e5-bb3a-e055455e5d82",
      "model": "http://api.remotelock.dev/models/c0221473-5e09-4d32-8b7f-24e5abc60fd0",
      "location": "http://api.remotelock.dev/locations/facd1eef-bb5d-4d23-9e22-5b683c1d4de9"
    }
  }
}
```


## * Replace the device

Only available when current device model has replaceable capability

### Request


#### Endpoint

`PUT /devices/:id/replace`

```plaintext
PUT /devices/b85260b9-86ec-4da4-8968-55f1568ba2a8/replace

```

#### Parameters


```json
{"attributes":{"serial_number":"AC000W000100200"}}
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
      "name": "LS-6i - AC000W003944520",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 3,
      "connected": true,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-08T22:08:06Z",
      "serial_number": "AC000W000100200",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "unlocked",
      "power_level": 5,
      "created_at": "2020-05-08T22:10:06Z",
      "updated_at": "2020-05-08T22:10:06Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "97416cdb-0d91-413c-8f12-d8beef193920",
      "location_id": "98518ebd-a417-4c7e-9d04-7e6dbca1ee3d",
      "lock_action_schedule_id": "47251cf8-2031-4fb7-9be0-f253c5ff6b53"
    },
    "id": "b85260b9-86ec-4da4-8968-55f1568ba2a8",
    "links": {
      "self": "http://api.remotelock.dev/devices/b85260b9-86ec-4da4-8968-55f1568ba2a8",
      "model": "http://api.remotelock.dev/models/97416cdb-0d91-413c-8f12-d8beef193920",
      "location": "http://api.remotelock.dev/locations/98518ebd-a417-4c7e-9d04-7e6dbca1ee3d",
      "lock_action_schedule": "http://api.remotelock.dev/schedules/47251cf8-2031-4fb7-9be0-f253c5ff6b53"
    }
  }
}
```


## Replace the device


### Request


#### Endpoint

`PUT /devices/:id/replace`

```plaintext
PUT /devices/bed69238-4e3b-4bc4-90cf-b70a632f339b/replace

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
      "name": "LS-6i - AC000W008142319",
      "heartbeat_interval": 1200,
      "wifi_level": 0,
      "signal_quality": 4,
      "connected": true,
      "alive": true,
      "power_source": "alkaline_battery",
      "connected_at": "2020-05-08T22:10:07Z",
      "serial_number": "20F85E123456",
      "wake_wifi": "user_action",
      "muted": false,
      "auto_lock": true,
      "auto_lock_timeout": 20,
      "programming_code": "123456",
      "state": "locked",
      "power_level": 5,
      "created_at": "2020-05-08T22:10:07Z",
      "updated_at": "2020-05-08T22:10:07Z",
      "default_guest_start_time": null,
      "default_guest_end_time": null,
      "local_pins": [
        "1234"
      ],
      "model_id": "d188eab4-1c2a-4181-9a88-63ccd7149771",
      "location_id": "69ef4dcd-7205-47dd-8833-cd87b9eaaa91",
      "lock_action_schedule_id": "d4df58ac-0eb2-4f48-a3c9-dc48ed587636"
    },
    "id": "bed69238-4e3b-4bc4-90cf-b70a632f339b",
    "links": {
      "self": "http://api.remotelock.dev/devices/bed69238-4e3b-4bc4-90cf-b70a632f339b",
      "model": "http://api.remotelock.dev/models/d188eab4-1c2a-4181-9a88-63ccd7149771",
      "location": "http://api.remotelock.dev/locations/69ef4dcd-7205-47dd-8833-cd87b9eaaa91",
      "lock_action_schedule": "http://api.remotelock.dev/schedules/d4df58ac-0eb2-4f48-a3c9-dc48ed587636"
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
DELETE /devices/078090f3-96bb-4192-a8ca-ae60b1095b70

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
{"attributes":{"name":"My Resort Lock","serial_number":"AB57EF010F4FBE01","location_id":"8660896f-a738-4f44-859b-83d348c0d6da","model_id":"23443cbc-e942-4f7b-8b2c-dbaef97687e4","default_guest_start_time":"11:30:00","default_guest_end_time":"14:15:00"}}
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
      "created_at": "2020-05-08T22:12:04Z",
      "updated_at": "2020-05-08T22:12:04Z",
      "serial_number": "AB57EF010F4FBE01",
      "model_id": "23443cbc-e942-4f7b-8b2c-dbaef97687e4",
      "location_id": "8660896f-a738-4f44-859b-83d348c0d6da"
    },
    "id": "3f993098-978c-4c43-bffc-68e8bfe535d3",
    "links": {
      "self": "http://api.remotelock.dev/devices/3f993098-978c-4c43-bffc-68e8bfe535d3",
      "model": "http://api.remotelock.dev/models/23443cbc-e942-4f7b-8b2c-dbaef97687e4",
      "location": "http://api.remotelock.dev/locations/8660896f-a738-4f44-859b-83d348c0d6da"
    }
  }
}
```


## Update a ResortLock


### Request


#### Endpoint

`PUT /devices/:id`

```plaintext
PUT /devices/cb8845cc-47cf-45ce-a322-a2908132a5c4

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
      "created_at": "2020-05-08T22:12:05Z",
      "updated_at": "2020-05-08T22:12:05Z",
      "serial_number": "GEZDIBTR0B4FBE01",
      "model_id": "540ae212-ecbc-4bea-9998-6e529ab79d98",
      "location_id": "4704d2db-a566-40ce-929e-da3a98ec69c9"
    },
    "id": "cb8845cc-47cf-45ce-a322-a2908132a5c4",
    "links": {
      "self": "http://api.remotelock.dev/devices/cb8845cc-47cf-45ce-a322-a2908132a5c4",
      "model": "http://api.remotelock.dev/models/540ae212-ecbc-4bea-9998-6e529ab79d98",
      "location": "http://api.remotelock.dev/locations/4704d2db-a566-40ce-929e-da3a98ec69c9"
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
      "type": "access_guest_late_sync_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T21:32:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "associated_resource_name": null,
        "publisher_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "publisher_type": "lock",
        "associated_resource_id": "3eaecd97-d081-412e-b566-41856fa3b1ad",
        "associated_resource_type": "access_guest"
      },
      "id": "00c7c571-5573-49df-9628-6779f458bee2",
      "links": {
        "self": "http://api.remotelock.dev/events/00c7c571-5573-49df-9628-6779f458bee2",
        "publisher": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677",
        "associated_resource": "http://api.remotelock.dev/access_persons/3eaecd97-d081-412e-b566-41856fa3b1ad"
      }
    },
    {
      "type": "access_person_synced_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T20:09:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "associated_resource_name": null,
        "publisher_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "publisher_type": "lock",
        "associated_resource_id": "76f62095-14ee-478d-bae3-e4f058794a6f",
        "associated_resource_type": "access_user"
      },
      "id": "8765feb9-73ad-4dd1-b556-116086a47e6c",
      "links": {
        "self": "http://api.remotelock.dev/events/8765feb9-73ad-4dd1-b556-116086a47e6c",
        "publisher": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677",
        "associated_resource": "http://api.remotelock.dev/access_persons/76f62095-14ee-478d-bae3-e4f058794a6f"
      }
    },
    {
      "type": "access_person_used_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T18:40:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "associated_resource_name": null,
        "status_info": null,
        "method": null,
        "card": null,
        "pin": null,
        "smart_card_serial_number": null,
        "publisher_id": "2591f28d-cbc0-4440-b17b-8897682ac8a0",
        "publisher_type": "access_user",
        "associated_resource_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "associated_resource_type": "lock"
      },
      "id": "0c80ea62-13ad-4d27-b381-157f860569fd",
      "links": {
        "self": "http://api.remotelock.dev/events/0c80ea62-13ad-4d27-b381-157f860569fd",
        "publisher": "http://api.remotelock.dev/access_persons/2591f28d-cbc0-4440-b17b-8897682ac8a0",
        "associated_resource": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677"
      }
    },
    {
      "type": "unlocked_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T14:08:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "associated_resource_name": null,
        "status_info": null,
        "method": "pin",
        "card": null,
        "pin": "1234",
        "smart_card_serial_number": null,
        "publisher_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "publisher_type": "lock",
        "associated_resource_id": "c02fc2f8-4d5c-4d72-b3b1-875dce307107",
        "associated_resource_type": "access_user"
      },
      "id": "4a968a17-45b5-4d44-a233-c7afcc457191",
      "links": {
        "self": "http://api.remotelock.dev/events/4a968a17-45b5-4d44-a233-c7afcc457191",
        "publisher": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677",
        "associated_resource": "http://api.remotelock.dev/access_persons/c02fc2f8-4d5c-4d72-b3b1-875dce307107"
      }
    },
    {
      "type": "power_level_low_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T11:42:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "power_level": 1,
        "publisher_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "publisher_type": "lock"
      },
      "id": "367e6e83-5871-4c7b-91bf-5da2d36be49c",
      "links": {
        "self": "http://api.remotelock.dev/events/367e6e83-5871-4c7b-91bf-5da2d36be49c",
        "publisher": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677"
      }
    },
    {
      "type": "access_person_used_event",
      "attributes": {
        "source": "user",
        "status": "failed",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T10:14:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "associated_resource_name": null,
        "status_info": null,
        "method": null,
        "card": null,
        "pin": null,
        "smart_card_serial_number": null,
        "publisher_id": "2db97ba1-859e-41ef-b44c-8c9830aea1f8",
        "publisher_type": "access_guest",
        "associated_resource_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "associated_resource_type": "lock"
      },
      "id": "90d252b7-04b7-42d5-a360-51899db87458",
      "links": {
        "self": "http://api.remotelock.dev/events/90d252b7-04b7-42d5-a360-51899db87458",
        "publisher": "http://api.remotelock.dev/access_persons/2db97ba1-859e-41ef-b44c-8c9830aea1f8",
        "associated_resource": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677"
      }
    },
    {
      "type": "connectivity_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T07:06:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "connected_at": "2020-05-05T01:54:09Z",
        "publisher_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "publisher_type": "lock"
      },
      "id": "bdd1286a-2627-474f-87d1-a0960016e732",
      "links": {
        "self": "http://api.remotelock.dev/events/bdd1286a-2627-474f-87d1-a0960016e732",
        "publisher": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677"
      }
    },
    {
      "type": "access_person_sync_failed_event",
      "attributes": {
        "source": "user",
        "status": "succeeded",
        "time_zone": "America/Denver",
        "occurred_at": "2020-05-08T06:55:09Z",
        "created_at": "2020-05-08T22:10:09Z",
        "updated_at": "2020-05-08T22:10:09Z",
        "associated_resource_name": null,
        "status_info": "timeout",
        "publisher_id": "464f7248-41e1-4114-9d35-39b84e9b0677",
        "publisher_type": "lock",
        "associated_resource_id": "e3958de6-aba4-4d5f-8512-11d3c6a603b4",
        "associated_resource_type": "access_user"
      },
      "id": "794c69da-1fc9-4dd3-8666-0fc0a86c4341",
      "links": {
        "self": "http://api.remotelock.dev/events/794c69da-1fc9-4dd3-8666-0fc0a86c4341",
        "publisher": "http://api.remotelock.dev/devices/464f7248-41e1-4114-9d35-39b84e9b0677",
        "associated_resource": "http://api.remotelock.dev/access_persons/e3958de6-aba4-4d5f-8512-11d3c6a603b4"
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
GET /events/c5050835-4b9b-4504-8d6a-73b69fabb29f

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
      "occurred_at": "2020-05-08T15:10:12Z",
      "created_at": "2020-05-08T22:10:12Z",
      "updated_at": "2020-05-08T22:10:12Z",
      "associated_resource_name": null,
      "status_info": null,
      "method": "pin",
      "card": null,
      "pin": "1234",
      "smart_card_serial_number": null,
      "publisher_id": "f33e3647-3264-4a5f-961f-7860093f4fee",
      "publisher_type": "lock",
      "associated_resource_id": "a9a42e37-6938-49b9-b228-9bb6d50e90b4",
      "associated_resource_type": "access_user"
    },
    "id": "c5050835-4b9b-4504-8d6a-73b69fabb29f",
    "links": {
      "self": "http://api.remotelock.dev/events/c5050835-4b9b-4504-8d6a-73b69fabb29f",
      "publisher": "http://api.remotelock.dev/devices/f33e3647-3264-4a5f-961f-7860093f4fee",
      "associated_resource": "http://api.remotelock.dev/access_persons/a9a42e37-6938-49b9-b228-9bb6d50e90b4"
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
        "created_at": "2020-05-08T22:10:15Z",
        "updated_at": "2020-05-08T22:10:15Z"
      },
      "id": "fbd4d0c3-846f-4bdb-b98d-7480fb8844c9",
      "links": {
        "self": "http://api.remotelock.dev/groups/fbd4d0c3-846f-4bdb-b98d-7480fb8844c9"
      }
    },
    {
      "type": "door_group",
      "attributes": {
        "name": "Electronics, Health & Grocery",
        "created_at": "2020-05-08T22:10:15Z",
        "updated_at": "2020-05-08T22:10:15Z"
      },
      "id": "f75cb8e9-7bff-437a-b9e4-7e4fdbc784fb",
      "links": {
        "self": "http://api.remotelock.dev/groups/f75cb8e9-7bff-437a-b9e4-7e4fdbc784fb"
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
GET /groups/fce49be3-c4ea-40a6-9556-9e96345e9cd2

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
      "created_at": "2020-05-08T22:10:15Z",
      "updated_at": "2020-05-08T22:10:15Z"
    },
    "id": "fce49be3-c4ea-40a6-9556-9e96345e9cd2",
    "links": {
      "self": "http://api.remotelock.dev/groups/fce49be3-c4ea-40a6-9556-9e96345e9cd2"
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
      "created_at": "2020-05-08T22:10:16Z",
      "updated_at": "2020-05-08T22:10:16Z"
    },
    "id": "ed5dd15a-1e84-47f1-a0e7-c8183227227f",
    "links": {
      "self": "http://api.remotelock.dev/groups/ed5dd15a-1e84-47f1-a0e7-c8183227227f"
    }
  }
}
```


## Update a group


### Request


#### Endpoint

`PUT /groups/:id`

```plaintext
PUT /groups/8fbc8ad5-f945-44a6-a983-dee0e8aba41f

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
      "created_at": "2020-05-08T22:10:16Z",
      "updated_at": "2020-05-08T22:10:16Z"
    },
    "id": "8fbc8ad5-f945-44a6-a983-dee0e8aba41f",
    "links": {
      "self": "http://api.remotelock.dev/groups/8fbc8ad5-f945-44a6-a983-dee0e8aba41f"
    }
  }
}
```


## Delete a group


### Request


#### Endpoint

`DELETE /groups/:id`

```plaintext
DELETE /groups/14dc552c-142b-4292-a5f3-2d0ef7c4acee

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
GET /groups/1369971f-d890-43c8-afd9-e15ccdf2461d/doors?attributes[door_type]=lock

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
        "created_at": "2020-05-08T22:10:17Z",
        "updated_at": "2020-05-08T22:10:17Z",
        "door_id": "14301cfb-ba0f-4192-91ae-f0ee4c6e298c",
        "door_type": "lock",
        "door_group_id": "1369971f-d890-43c8-afd9-e15ccdf2461d"
      },
      "id": "72d1e2d0-7a03-42a4-ad8b-b2dfe4dbd37c",
      "links": {
        "self": "http://api.remotelock.dev/groups/1369971f-d890-43c8-afd9-e15ccdf2461d/doors/72d1e2d0-7a03-42a4-ad8b-b2dfe4dbd37c",
        "door": "http://api.remotelock.dev/devices/14301cfb-ba0f-4192-91ae-f0ee4c6e298c",
        "door_group": "http://api.remotelock.dev/groups/1369971f-d890-43c8-afd9-e15ccdf2461d"
      }
    },
    {
      "type": "door_group_door",
      "attributes": {
        "created_at": "2020-05-08T22:10:17Z",
        "updated_at": "2020-05-08T22:10:17Z",
        "door_id": "d7ad8fce-be4b-47be-a8da-0c6b251ac6a7",
        "door_type": "lock",
        "door_group_id": "1369971f-d890-43c8-afd9-e15ccdf2461d"
      },
      "id": "8b98fe71-d07b-4124-93c4-5d1f8b54b608",
      "links": {
        "self": "http://api.remotelock.dev/groups/1369971f-d890-43c8-afd9-e15ccdf2461d/doors/8b98fe71-d07b-4124-93c4-5d1f8b54b608",
        "door": "http://api.remotelock.dev/devices/d7ad8fce-be4b-47be-a8da-0c6b251ac6a7",
        "door_group": "http://api.remotelock.dev/groups/1369971f-d890-43c8-afd9-e15ccdf2461d"
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
GET /groups/868abd71-db2f-410b-bf0c-75e2b5f0f7d6/doors?attributes[door_type]=schlage_home_lock

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
        "created_at": "2020-05-08T22:10:18Z",
        "updated_at": "2020-05-08T22:10:18Z",
        "door_id": "3e37c189-0808-4f38-a70e-f88c9c1cdd5d",
        "door_type": "schlage_home_lock",
        "door_group_id": "868abd71-db2f-410b-bf0c-75e2b5f0f7d6"
      },
      "id": "2d86bc35-d5a6-426a-b5a9-f8009ec8cb4e",
      "links": {
        "self": "http://api.remotelock.dev/groups/868abd71-db2f-410b-bf0c-75e2b5f0f7d6/doors/2d86bc35-d5a6-426a-b5a9-f8009ec8cb4e",
        "door": "http://api.remotelock.dev/devices/3e37c189-0808-4f38-a70e-f88c9c1cdd5d",
        "door_group": "http://api.remotelock.dev/groups/868abd71-db2f-410b-bf0c-75e2b5f0f7d6"
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
GET /groups/908f3f30-b85c-43e7-b2db-15c45d3d73de/doors/a16d2211-44b9-4da9-891d-9d3dbf067d95

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
      "created_at": "2020-05-08T22:10:18Z",
      "updated_at": "2020-05-08T22:10:18Z",
      "door_id": "d8f98122-6008-42fd-9031-250cc4b6056a",
      "door_type": "lock",
      "door_group_id": "908f3f30-b85c-43e7-b2db-15c45d3d73de"
    },
    "id": "a16d2211-44b9-4da9-891d-9d3dbf067d95",
    "links": {
      "self": "http://api.remotelock.dev/groups/908f3f30-b85c-43e7-b2db-15c45d3d73de/doors/a16d2211-44b9-4da9-891d-9d3dbf067d95",
      "door": "http://api.remotelock.dev/devices/d8f98122-6008-42fd-9031-250cc4b6056a",
      "door_group": "http://api.remotelock.dev/groups/908f3f30-b85c-43e7-b2db-15c45d3d73de"
    }
  }
}
```


## Add a door to a door group


### Request


#### Endpoint

`POST /groups/:group_id/doors`

```plaintext
POST /groups/1674a0a7-4a21-47f1-a2ac-8fd3cb5b9891/doors

```

#### Parameters


```json
{"attributes":{"door_id":"d157e9dd-be61-4e49-8fc7-130811bdb599","door_type":"lock"}}
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
      "created_at": "2020-05-08T22:10:18Z",
      "updated_at": "2020-05-08T22:10:18Z",
      "door_id": "d157e9dd-be61-4e49-8fc7-130811bdb599",
      "door_type": "lock",
      "door_group_id": "1674a0a7-4a21-47f1-a2ac-8fd3cb5b9891"
    },
    "id": "7fe6284c-50c1-46ee-8667-476e3a41a2a4",
    "links": {
      "self": "http://api.remotelock.dev/groups/1674a0a7-4a21-47f1-a2ac-8fd3cb5b9891/doors/7fe6284c-50c1-46ee-8667-476e3a41a2a4",
      "door": "http://api.remotelock.dev/devices/d157e9dd-be61-4e49-8fc7-130811bdb599",
      "door_group": "http://api.remotelock.dev/groups/1674a0a7-4a21-47f1-a2ac-8fd3cb5b9891"
    }
  }
}
```


## Remove a door from a door group


### Request


#### Endpoint

`DELETE /groups/:group_id/doors/:id`

```plaintext
DELETE /groups/03fbb7dc-3620-4e7e-8013-aa42fd3d4a5c/doors/19abe4b3-a6a3-48c2-83a4-00bc27e2a30c

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Guest Message Times



## * Get all Guest Message Times


### Request


#### Endpoint

`GET /guest_message_times`

```plaintext
GET /guest_message_times

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
      "type": "guest_message_time",
      "attributes": {
        "time_frame": "P3D",
        "created_at": "2020-05-08T22:10:20Z",
        "updated_at": "2020-05-08T22:10:20Z"
      },
      "id": "f8de2fa5-1cef-46dc-a714-efe2040d08d5",
      "links": {
        "self": "http://api.remotelock.dev/guest_message_times/f8de2fa5-1cef-46dc-a714-efe2040d08d5"
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


## * Create Guest Message Time


### Request


#### Endpoint

`POST /guest_message_times`

```plaintext
POST /guest_message_times

```

#### Parameters


```json
{"attributes":{"time_frame":"PT5H"}}
```

| Name | Description |
|:-----|:------------|
| attributes[time_frame] *required* | Attributes time frame |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "guest_message_time",
    "attributes": {
      "time_frame": "PT5H",
      "created_at": "2020-05-08T22:10:21Z",
      "updated_at": "2020-05-08T22:10:21Z"
    },
    "id": "44150475-293e-4b46-954b-34afed5705cd",
    "links": {
      "self": "http://api.remotelock.dev/guest_message_times/44150475-293e-4b46-954b-34afed5705cd"
    }
  }
}
```


## * Get a Guest Message Time


### Request


#### Endpoint

`GET /guest_message_times/:id`

```plaintext
GET /guest_message_times/c9240da7-359c-4308-b435-7004179a8e20

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
    "type": "guest_message_time",
    "attributes": {
      "time_frame": "P3D",
      "created_at": "2020-05-08T22:10:21Z",
      "updated_at": "2020-05-08T22:10:21Z"
    },
    "id": "c9240da7-359c-4308-b435-7004179a8e20",
    "links": {
      "self": "http://api.remotelock.dev/guest_message_times/c9240da7-359c-4308-b435-7004179a8e20"
    }
  }
}
```


## * Update a Guest Message Time


### Request


#### Endpoint

`PUT /guest_message_times/:id`

```plaintext
PUT /guest_message_times/11011b1f-f722-4c0a-9db8-eb87fa80c4f4

```

#### Parameters


```json
{"attributes":{"time_frame":"PT1H"}}
```

| Name | Description |
|:-----|:------------|
| attributes[time_frame] *required* | Attributes time frame |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "guest_message_time",
    "attributes": {
      "time_frame": "PT1H",
      "created_at": "2020-05-08T22:10:22Z",
      "updated_at": "2020-05-08T22:10:22Z"
    },
    "id": "11011b1f-f722-4c0a-9db8-eb87fa80c4f4",
    "links": {
      "self": "http://api.remotelock.dev/guest_message_times/11011b1f-f722-4c0a-9db8-eb87fa80c4f4"
    }
  }
}
```


## * Delete a Guest Message Time


### Request


#### Endpoint

`DELETE /guest_message_times/:id`

```plaintext
DELETE /guest_message_times/6c63f960-9367-4373-896e-bd8967840221

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
        "name": "Focused logistical time-frame",
        "phone": null,
        "address": "9687 Trisha Wells",
        "address2": null,
        "city": null,
        "state": null,
        "postal_code": null,
        "country": null,
        "time_zone": "America/Denver",
        "created_at": "2020-05-08T22:11:30Z",
        "updated_at": "2020-05-08T22:11:30Z"
      },
      "id": "53a15098-e1de-4264-bd96-ded475867cd7",
      "links": {
        "self": "http://api.remotelock.dev/locations/53a15098-e1de-4264-bd96-ded475867cd7"
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
        "created_at": "2020-05-08T22:11:30Z",
        "updated_at": "2020-05-08T22:11:30Z"
      },
      "id": "fbe0a1d3-a0c3-43c1-ac34-32c78a5e1ff9",
      "links": {
        "self": "http://api.remotelock.dev/locations/fbe0a1d3-a0c3-43c1-ac34-32c78a5e1ff9"
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
GET /locations/751247dc-6b6a-4dcc-9c46-32951fef254b

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
      "created_at": "2020-05-08T22:11:31Z",
      "updated_at": "2020-05-08T22:11:31Z"
    },
    "id": "751247dc-6b6a-4dcc-9c46-32951fef254b",
    "links": {
      "self": "http://api.remotelock.dev/locations/751247dc-6b6a-4dcc-9c46-32951fef254b"
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
      "created_at": "2020-05-08T22:11:31Z",
      "updated_at": "2020-05-08T22:11:31Z"
    },
    "id": "2939012c-f3e0-4bb1-980f-a649b8bc19b2",
    "links": {
      "self": "http://api.remotelock.dev/locations/2939012c-f3e0-4bb1-980f-a649b8bc19b2"
    }
  }
}
```


## Update a location


### Request


#### Endpoint

`PUT /locations/:id`

```plaintext
PUT /locations/70720d37-8882-4c65-a951-b9cae41d2d6d

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
      "created_at": "2020-05-08T22:11:32Z",
      "updated_at": "2020-05-08T22:11:32Z"
    },
    "id": "70720d37-8882-4c65-a951-b9cae41d2d6d",
    "links": {
      "self": "http://api.remotelock.dev/locations/70720d37-8882-4c65-a951-b9cae41d2d6d"
    }
  }
}
```


## Delete a location


### Request


#### Endpoint

`DELETE /locations/:id`

```plaintext
DELETE /locations/54472a78-df5a-4a5f-ba09-002f25749a86

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Mios



## * Get registered Mios accounts


### Request


#### Endpoint

`GET /mios/accounts`

```plaintext
GET /mios/accounts

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
      "type": "mios_account",
      "attributes": {
        "username": "Cozy rentals 1",
        "registered": false
      },
      "id": "ABC12",
      "links": {
        "self": "http://api.remotelock.dev/mios/accounts/ABC12"
      }
    },
    {
      "type": "mios_account",
      "attributes": {
        "username": "Cozy rentals 2",
        "registered": false
      },
      "id": "ABC34",
      "links": {
        "self": "http://api.remotelock.dev/mios/accounts/ABC34"
      }
    },
    {
      "type": "mios_account",
      "attributes": {
        "username": "abc56",
        "registered": true
      },
      "id": "ABC56",
      "links": {
        "self": "http://api.remotelock.dev/mios/accounts/ABC56"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total_count": 3,
    "total_pages": 1
  }
}
```


## * Add Mios account


### Request


#### Endpoint

`POST /mios/accounts`

```plaintext
POST /mios/accounts

```

#### Parameters


```json
{"attributes":{"username":"testuser","password":"secret"}}
```

| Name | Description |
|:-----|:------------|
| attributes[username] *required* | Mios account username |
| attributes[password] *required* | Mios account password |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "mios_account",
    "attributes": {
      "username": "testuser",
      "registered": false
    },
    "id": "ABC12",
    "links": {
      "self": "http://api.remotelock.dev/mios/accounts/ABC12"
    }
  }
}
```


## * Deregister Mios account


### Request


#### Endpoint

`DELETE /mios/accounts/:id`

```plaintext
DELETE /mios/accounts/b8a2960a-b834-4fad-8e08-473a4603133b

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Get controllers on Mios account


### Request


#### Endpoint

`GET /mios/controllers`

```plaintext
GET /mios/controllers?attributes[mios_account_id]=5871aa8e-96c9-4c77-9b52-28c805ff788f

```

#### Parameters

```json
attributes: {&quot;mios_account_id&quot;=&gt;&quot;5871aa8e-96c9-4c77-9b52-28c805ff788f&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[mios_account_id] *required* | Mios account id |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "mios_controller",
      "attributes": {
        "serial_number": "12345678",
        "name": "Entrance controller",
        "connected": true,
        "mios_account_id": "5871aa8e-96c9-4c77-9b52-28c805ff788f"
      },
      "links": {
        "mios_account": "http://api.remotelock.dev/mios/accounts/5871aa8e-96c9-4c77-9b52-28c805ff788f"
      }
    },
    {
      "type": "mios_controller",
      "attributes": {
        "serial_number": "23456789",
        "name": "Building controller",
        "connected": false,
        "mios_account_id": "5871aa8e-96c9-4c77-9b52-28c805ff788f"
      },
      "links": {
        "mios_account": "http://api.remotelock.dev/mios/accounts/5871aa8e-96c9-4c77-9b52-28c805ff788f"
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


## * Import controller

Controller can be imported only on added Mios accounts.

### Request


#### Endpoint

`POST /mios/controllers`

```plaintext
POST /mios/controllers

```

#### Parameters


```json
{"attributes":{"mios_account_id":"1330ae3c-3544-4af1-b2af-646cfe18183d","serial_number":"12345678","name":"Office controller","location_id":"27d0f879-52bb-4a25-a11b-bdae338ee20a"}}
```

| Name | Description |
|:-----|:------------|
| attributes[mios_account_id] *required* | Mios account id |
| attributes[serial_number] *required* | Controller serial number |
| attributes[name] *required* | Controller Name |
| attributes[location_id] *required* | Location id |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "mios_controller",
    "attributes": {
      "serial_number": "12345678",
      "name": "Office controller",
      "connected": false,
      "location_id": "27d0f879-52bb-4a25-a11b-bdae338ee20a",
      "mios_account_id": "1330ae3c-3544-4af1-b2af-646cfe18183d"
    },
    "id": "a9b83bb2-5ad7-4fc6-8e1b-7acf64e41d5e",
    "links": {
      "self": "http://api.remotelock.dev/mios/controllers/a9b83bb2-5ad7-4fc6-8e1b-7acf64e41d5e",
      "location": "http://api.remotelock.dev/locations/27d0f879-52bb-4a25-a11b-bdae338ee20a",
      "mios_account": "http://api.remotelock.dev/mios/accounts/1330ae3c-3544-4af1-b2af-646cfe18183d"
    }
  }
}
```


## * Register a controller

Controller can only be registered on an "internal" Mios account. Registration is not possible with imported Mios accounts.

### Request


#### Endpoint

`POST /mios/controllers`

```plaintext
POST /mios/controllers

```

#### Parameters


```json
{"attributes":{"serial_number":"12345678","mac_address":"b5:c6:d7:f8","name":"Home controller","location_id":"3837620a-c1ab-45f4-b1c2-4a904272eb53"}}
```

| Name | Description |
|:-----|:------------|
| attributes[serial_number] *required* | Controller serial number |
| attributes[mac_address] *required* | Controller mac address |
| attributes[name] *required* | Controller Name |
| attributes[location_id] *required* | Location id |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "mios_controller",
    "attributes": {
      "serial_number": "12345678",
      "name": "Home controller",
      "connected": false,
      "location_id": "3837620a-c1ab-45f4-b1c2-4a904272eb53",
      "mios_account_id": "64954e0b-6084-4601-8129-bcad4936025a"
    },
    "id": "8e619c67-8948-44fc-b8b1-34a13bac349b",
    "links": {
      "self": "http://api.remotelock.dev/mios/controllers/8e619c67-8948-44fc-b8b1-34a13bac349b",
      "location": "http://api.remotelock.dev/locations/3837620a-c1ab-45f4-b1c2-4a904272eb53",
      "mios_account": "http://api.remotelock.dev/mios/accounts/64954e0b-6084-4601-8129-bcad4936025a"
    }
  }
}
```


## * Update controller


### Request


#### Endpoint

`PUT /mios/controllers/:id`

```plaintext
PUT /mios/controllers/6ee04ab9-24aa-4541-8195-1aa2e23b3e0f

```

#### Parameters


```json
{"attributes":{"location_id":"4c5623e9-81b6-4ef9-98c6-7dc3a4cf5e86"}}
```

| Name | Description |
|:-----|:------------|
| attributes[location_id]  | Location id |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "mios_controller",
    "attributes": {
      "serial_number": "12345678",
      "name": "Building controller",
      "connected": false,
      "location_id": "4c5623e9-81b6-4ef9-98c6-7dc3a4cf5e86",
      "mios_account_id": "11bfd10a-5970-46d7-842f-655893a038cd"
    },
    "id": "6ee04ab9-24aa-4541-8195-1aa2e23b3e0f",
    "links": {
      "self": "http://api.remotelock.dev/mios/controllers/6ee04ab9-24aa-4541-8195-1aa2e23b3e0f",
      "location": "http://api.remotelock.dev/locations/4c5623e9-81b6-4ef9-98c6-7dc3a4cf5e86",
      "mios_account": "http://api.remotelock.dev/mios/accounts/11bfd10a-5970-46d7-842f-655893a038cd"
    }
  }
}
```


## * Delete controller


### Request


#### Endpoint

`DELETE /mios/controllers/:id`

```plaintext
DELETE /mios/controllers/e690b696-146d-4355-8167-c03b181106b9

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Set the controller to &#39;pair&#39; mode

Set a controller to this mode for 30 seconds.

### Request


#### Endpoint

`PUT /mios/controllers/:id/pair`

```plaintext
PUT /mios/controllers/9758aa75-8f58-4db5-b523-3890662d02ff/pair

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
    "type": "mios_controller",
    "attributes": {
      "serial_number": "",
      "name": "",
      "connected": false,
      "mios_account_id": ""
    },
    "id": "9758aa75-8f58-4db5-b523-3890662d02ff",
    "links": {
      "self": "http://api.remotelock.dev/mios/controllers/9758aa75-8f58-4db5-b523-3890662d02ff",
      "mios_account": "http://api.remotelock.dev/mios/accounts/"
    }
  }
}
```


## * Set the controller to &#39;unpair&#39; mode

Set a controller to this mode for 30 seconds.

### Request


#### Endpoint

`PUT /mios/controllers/:id/unpair`

```plaintext
PUT /mios/controllers/61dd13de-20d4-4abc-ab0f-f4d4f7890dda/unpair

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
    "type": "mios_controller",
    "attributes": {
      "serial_number": "",
      "name": "",
      "connected": false,
      "mios_account_id": ""
    },
    "id": "61dd13de-20d4-4abc-ab0f-f4d4f7890dda",
    "links": {
      "self": "http://api.remotelock.dev/mios/controllers/61dd13de-20d4-4abc-ab0f-f4d4f7890dda",
      "mios_account": "http://api.remotelock.dev/mios/accounts/"
    }
  }
}
```


## * Get locks on a controller


### Request


#### Endpoint

`GET /mios/locks`

```plaintext
GET /mios/locks?attributes[mios_controller_id]=80431a8d-0fea-4f7a-a697-4567991c1302

```

#### Parameters

```json
attributes: {&quot;mios_controller_id&quot;=&gt;&quot;80431a8d-0fea-4f7a-a697-4567991c1302&quot;}
```


| Name | Description |
|:-----|:------------|
| attributes[mios_controller_id] *required* | Mios controller id |

### Response


```plaintext

200 OK
```

```json
{
  "data": [
    {
      "type": "mios_lock",
      "attributes": {
        "remote_id": "1",
        "name": "Front door",
        "mios_controller_id": "80431a8d-0fea-4f7a-a697-4567991c1302"
      },
      "links": {
        "mios_controller": "http://api.remotelock.dev/mios/controllers/80431a8d-0fea-4f7a-a697-4567991c1302"
      }
    },
    {
      "type": "mios_lock",
      "attributes": {
        "remote_id": "2",
        "name": "Back door",
        "mios_controller_id": "80431a8d-0fea-4f7a-a697-4567991c1302"
      },
      "id": "00d6af25-998c-459e-af5b-6663eff8b978",
      "links": {
        "self": "http://api.remotelock.dev/mios/locks/00d6af25-998c-459e-af5b-6663eff8b978",
        "mios_controller": "http://api.remotelock.dev/mios/controllers/80431a8d-0fea-4f7a-a697-4567991c1302"
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


## * Import lock


### Request


#### Endpoint

`POST /mios/locks`

```plaintext
POST /mios/locks

```

#### Parameters


```json
{"attributes":{"mios_controller_id":"6dd7989e-cd88-42b1-885e-9585bfc83391","remote_id":"2"}}
```

| Name | Description |
|:-----|:------------|
| attributes[mios_controller_id]  | Mios controller id |
| attributes[remote_id]  | Lock remote id |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "mios_lock",
    "attributes": {
      "remote_id": "2",
      "name": "Front door",
      "mios_controller_id": "6dd7989e-cd88-42b1-885e-9585bfc83391"
    },
    "id": "e913a214-dd72-4d57-bd88-120c69aad68a",
    "links": {
      "self": "http://api.remotelock.dev/mios/locks/e913a214-dd72-4d57-bd88-120c69aad68a",
      "mios_controller": "http://api.remotelock.dev/mios/controllers/6dd7989e-cd88-42b1-885e-9585bfc83391"
    }
  }
}
```


## * Delete lock


### Request


#### Endpoint

`DELETE /mios/locks/:id`

```plaintext
DELETE /mios/locks/c558dbbc-4646-475c-a031-6db52723b346

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
      "id": "fec34819-06fe-4214-bfc4-07ddafa98e80",
      "links": {
        "self": "http://api.remotelock.dev/models/fec34819-06fe-4214-bfc4-07ddafa98e80"
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
      "id": "bbf6f586-c1ee-4b58-9a87-3b9f6f7a2439",
      "links": {
        "self": "http://api.remotelock.dev/models/bbf6f586-c1ee-4b58-9a87-3b9f6f7a2439"
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
      "id": "560b05d6-681e-4063-a23c-b09195ec9cb2",
      "links": {
        "self": "http://api.remotelock.dev/models/560b05d6-681e-4063-a23c-b09195ec9cb2"
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
      "id": "ee64a990-0145-4983-be10-eaeb5d26aaaf",
      "links": {
        "self": "http://api.remotelock.dev/models/ee64a990-0145-4983-be10-eaeb5d26aaaf"
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
      "id": "edae9478-d6bd-48c9-81de-37c85d840c70",
      "links": {
        "self": "http://api.remotelock.dev/models/edae9478-d6bd-48c9-81de-37c85d840c70"
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
      "id": "54f529bd-63c0-4801-a801-2bcd042459d5",
      "links": {
        "self": "http://api.remotelock.dev/models/54f529bd-63c0-4801-a801-2bcd042459d5"
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
      "id": "7e867603-8836-4b58-a2b6-dc3122c6d4aa",
      "links": {
        "self": "http://api.remotelock.dev/models/7e867603-8836-4b58-a2b6-dc3122c6d4aa"
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
      "id": "96700ca4-cc5d-4b70-a7d9-ade069289e83",
      "links": {
        "self": "http://api.remotelock.dev/models/96700ca4-cc5d-4b70-a7d9-ade069289e83"
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
      "id": "2b401181-1bbb-46ac-9f03-e9d76051424b",
      "links": {
        "self": "http://api.remotelock.dev/models/2b401181-1bbb-46ac-9f03-e9d76051424b"
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
      "id": "75b348a6-8d07-433c-ab40-46b92f6fff6e",
      "links": {
        "self": "http://api.remotelock.dev/models/75b348a6-8d07-433c-ab40-46b92f6fff6e"
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
      "id": "0ceac76a-257b-4232-848e-7b755fd02100",
      "links": {
        "self": "http://api.remotelock.dev/models/0ceac76a-257b-4232-848e-7b755fd02100"
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
      "id": "57a579b5-33b6-4db7-b1c3-92795f61b47c",
      "links": {
        "self": "http://api.remotelock.dev/models/57a579b5-33b6-4db7-b1c3-92795f61b47c"
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
      "id": "a390f9e0-254b-4e92-a1f8-f57cd3d3bc8c",
      "links": {
        "self": "http://api.remotelock.dev/models/a390f9e0-254b-4e92-a1f8-f57cd3d3bc8c"
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
      "id": "01513963-569b-4e11-ab00-188bcc2eb74e",
      "links": {
        "self": "http://api.remotelock.dev/models/01513963-569b-4e11-ab00-188bcc2eb74e"
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
      "id": "a56325c4-f00a-41fe-a904-d68a76b5a0d8",
      "links": {
        "self": "http://api.remotelock.dev/models/a56325c4-f00a-41fe-a904-d68a76b5a0d8"
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
      "id": "7c7f268d-ace4-4dd0-a298-eaafc3452b1b",
      "links": {
        "self": "http://api.remotelock.dev/models/7c7f268d-ace4-4dd0-a298-eaafc3452b1b"
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
      "id": "8fdb834d-890d-4178-bae9-01eb5cac6e39",
      "links": {
        "self": "http://api.remotelock.dev/models/8fdb834d-890d-4178-bae9-01eb5cac6e39"
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
      "id": "16f5e13b-8d3b-4fd9-8aac-f3daec7be571",
      "links": {
        "self": "http://api.remotelock.dev/models/16f5e13b-8d3b-4fd9-8aac-f3daec7be571"
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
      "id": "84983edc-5cf4-483e-b7a9-729558e124ac",
      "links": {
        "self": "http://api.remotelock.dev/models/84983edc-5cf4-483e-b7a9-729558e124ac"
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
      "id": "5bc95852-4917-4365-9e38-c2b9f556d316",
      "links": {
        "self": "http://api.remotelock.dev/models/5bc95852-4917-4365-9e38-c2b9f556d316"
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
      "id": "16034f27-3400-4216-a311-b56dace659e4",
      "links": {
        "self": "http://api.remotelock.dev/models/16034f27-3400-4216-a311-b56dace659e4"
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
      "id": "bc5dd43c-b0bf-42c2-a8a8-879ef170ec07",
      "links": {
        "self": "http://api.remotelock.dev/models/bc5dd43c-b0bf-42c2-a8a8-879ef170ec07"
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
      "id": "ed18a55f-038b-4317-a30b-fb6d6af8a76e",
      "links": {
        "self": "http://api.remotelock.dev/models/ed18a55f-038b-4317-a30b-fb6d6af8a76e"
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
GET /models/b211be7a-f2ec-4407-96e3-fc16fb8cf592

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
    "id": "b211be7a-f2ec-4407-96e3-fc16fb8cf592",
    "links": {
      "self": "http://api.remotelock.dev/models/b211be7a-f2ec-4407-96e3-fc16fb8cf592"
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
        "name": "Krissy Upton MD",
        "phone": "988-024-8298 x313",
        "carrier": "cricket",
        "active": true,
        "created_at": "2020-05-08T22:11:46Z",
        "updated_at": "2020-05-08T22:11:46Z"
      },
      "id": "cf1a8455-c87a-4884-a68f-ff4df63e057f",
      "links": {
        "self": "http://api.remotelock.dev/notification_subscribers/cf1a8455-c87a-4884-a68f-ff4df63e057f"
      }
    },
    {
      "type": "webhook_notification_subscriber",
      "attributes": {
        "name": "Jannet Hilpert",
        "url": "https://www.google.com",
        "content_type": "form",
        "secret": "ef007d02de6c9225a30c4602d9615d71",
        "active": true,
        "created_at": "2020-05-08T22:11:46Z",
        "updated_at": "2020-05-08T22:11:46Z"
      },
      "id": "5e8cd341-8660-4f60-b5a3-a532fa28a02f",
      "links": {
        "self": "http://api.remotelock.dev/notification_subscribers/5e8cd341-8660-4f60-b5a3-a532fa28a02f"
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
GET /notification_subscribers/94af1c39-20f9-429b-ba55-d8aea39edab8

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
      "name": "Miss Antony Price",
      "phone": "279-503-9542 x8057",
      "carrier": "uscellular",
      "active": true,
      "created_at": "2020-05-08T22:11:46Z",
      "updated_at": "2020-05-08T22:11:46Z"
    },
    "id": "94af1c39-20f9-429b-ba55-d8aea39edab8",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/94af1c39-20f9-429b-ba55-d8aea39edab8"
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
PUT /notification_subscribers/9d7cc2ac-3d40-41be-be8c-2733b2ea00bc

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
      "name": "Donette Herman",
      "phone": "420-850-1950 x57280",
      "carrier": "metropcs",
      "active": false,
      "created_at": "2020-05-08T22:11:46Z",
      "updated_at": "2020-05-08T22:11:46Z"
    },
    "id": "9d7cc2ac-3d40-41be-be8c-2733b2ea00bc",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/9d7cc2ac-3d40-41be-be8c-2733b2ea00bc"
    }
  }
}
```


## Delete a notification subscriber


### Request


#### Endpoint

`DELETE /notification_subscribers/:id`

```plaintext
DELETE /notification_subscribers/c120562c-daf7-4544-8d08-b043d997a241

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
      "created_at": "2020-05-08T22:11:47Z",
      "updated_at": "2020-05-08T22:11:47Z"
    },
    "id": "0623e577-9217-4e39-bace-fae20cc0ecc9",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/0623e577-9217-4e39-bace-fae20cc0ecc9"
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
      "created_at": "2020-05-08T22:11:47Z",
      "updated_at": "2020-05-08T22:11:47Z"
    },
    "id": "33e0dcb5-c164-443f-93c6-cfaac9277b47",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/33e0dcb5-c164-443f-93c6-cfaac9277b47"
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
      "created_at": "2020-05-08T22:11:48Z",
      "updated_at": "2020-05-08T22:11:48Z"
    },
    "id": "ce73bb71-4cfb-4959-ae79-0e7799ab4cb7",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscribers/ce73bb71-4cfb-4959-ae79-0e7799ab4cb7"
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
        "created_at": "2020-05-08T22:11:49Z",
        "updated_at": "2020-05-08T22:11:49Z",
        "subscriber_id": "f26ee0b0-a7d3-462d-8549-7bdb088436ee",
        "subscriber_type": "text_notification_subscriber",
        "publisher_id": "faa9a938-67a8-439a-9862-b491708014d7",
        "publisher_type": "account"
      },
      "id": "c069cb53-644e-4edf-92f0-964969e8af5f",
      "links": {
        "self": "http://api.remotelock.dev/notification_subscriptions/c069cb53-644e-4edf-92f0-964969e8af5f",
        "subscriber": "http://api.remotelock.dev/notification_subscribers/f26ee0b0-a7d3-462d-8549-7bdb088436ee",
        "publisher": "http://api.remotelock.dev/accounts/faa9a938-67a8-439a-9862-b491708014d7"
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
GET /notification_subscriptions/ba1c1168-38ba-4e29-9613-87c923880a04

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
      "created_at": "2020-05-08T22:11:49Z",
      "updated_at": "2020-05-08T22:11:49Z",
      "subscriber_id": "c0d22554-8a4b-44ac-b293-21ef6da91022",
      "subscriber_type": "text_notification_subscriber",
      "publisher_id": "1e95a6c5-97ce-4c82-ac11-a39c0cc10c74",
      "publisher_type": "account"
    },
    "id": "ba1c1168-38ba-4e29-9613-87c923880a04",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscriptions/ba1c1168-38ba-4e29-9613-87c923880a04",
      "subscriber": "http://api.remotelock.dev/notification_subscribers/c0d22554-8a4b-44ac-b293-21ef6da91022",
      "publisher": "http://api.remotelock.dev/accounts/1e95a6c5-97ce-4c82-ac11-a39c0cc10c74"
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
{"attributes":{"events":[{"event_type":"access_person_used"},{"event_type":"acs_door_opened"},{"event_type":"acs_door_closed"},{"event_type":"acs_door_held_open"},{"event_type":"access_person_synced"},{"event_type":"access_person_sync_failed"},{"event_type":"access_guest_late_sync"},{"event_type":"reset"},{"event_type":"unlocked"},{"event_type":"locked"},{"event_type":"access_denied"},{"event_type":"jammed"},{"event_type":"connectivity"},{"event_type":"power_level_low"},{"event_type":"battery_replaced"},{"event_type":"temperature_changed"},{"event_type":"humidity_changed"},{"event_type":"relay_enabled"},{"event_type":"relay_disabled"},{"event_type":"unlockedlocked"}],"publisher_type":"account","publisher_id":"818e7fcc-3d75-4929-a3bc-39073defe668","subscriber_type":"text_notification_subscriber","subscriber_id":"26b29cb5-4665-4f80-8d0e-6b69a7e7b901"}}
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
      "created_at": "2020-05-08T22:11:50Z",
      "updated_at": "2020-05-08T22:11:50Z",
      "subscriber_id": "26b29cb5-4665-4f80-8d0e-6b69a7e7b901",
      "subscriber_type": "text_notification_subscriber",
      "publisher_id": "818e7fcc-3d75-4929-a3bc-39073defe668",
      "publisher_type": "account"
    },
    "id": "c08cdf11-5a2b-4bf9-b691-05729c1d40eb",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscriptions/c08cdf11-5a2b-4bf9-b691-05729c1d40eb",
      "subscriber": "http://api.remotelock.dev/notification_subscribers/26b29cb5-4665-4f80-8d0e-6b69a7e7b901",
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
PUT /notification_subscriptions/b2f2a896-9eee-40fc-955e-5d8399add88f

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
      "created_at": "2020-05-08T22:11:50Z",
      "updated_at": "2020-05-08T22:11:50Z",
      "subscriber_id": "91589f9b-39b5-420d-9d6e-1382486ebd26",
      "subscriber_type": "text_notification_subscriber",
      "publisher_id": "7ff1d41d-39d8-4395-94c1-89ad644bad64",
      "publisher_type": "account"
    },
    "id": "b2f2a896-9eee-40fc-955e-5d8399add88f",
    "links": {
      "self": "http://api.remotelock.dev/notification_subscriptions/b2f2a896-9eee-40fc-955e-5d8399add88f",
      "subscriber": "http://api.remotelock.dev/notification_subscribers/91589f9b-39b5-420d-9d6e-1382486ebd26",
      "publisher": "http://api.remotelock.dev/accounts/7ff1d41d-39d8-4395-94c1-89ad644bad64"
    }
  }
}
```


## Delete a notification subscription


### Request


#### Endpoint

`DELETE /notification_subscriptions/:id`

```plaintext
DELETE /notification_subscriptions/1164d326-f444-474c-b96c-f3295177ee02

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
        "created_at": "2020-05-08T22:11:51Z",
        "updated_at": "2020-05-08T22:11:51Z",
        "subscriber_id": "2bc8e787-c3b2-4011-9972-aea85d861166",
        "subscriber_type": "text_notification_subscriber",
        "publisher_id": "75f0fe32-3f78-4173-8e58-5ac4d51fa120",
        "publisher_type": "lock",
        "event_id": "d43a3889-8e02-4576-ac15-accfc1930d7c",
        "event_type": "unlocked_event"
      },
      "id": "36ddc73e-ece3-4944-a3d3-bf8ac5865c12",
      "links": {
        "self": "http://api.remotelock.dev/notifications/36ddc73e-ece3-4944-a3d3-bf8ac5865c12",
        "subscriber": "http://api.remotelock.dev/notification_subscribers/2bc8e787-c3b2-4011-9972-aea85d861166",
        "publisher": "http://api.remotelock.dev/devices/75f0fe32-3f78-4173-8e58-5ac4d51fa120",
        "event": "http://api.remotelock.dev/events/d43a3889-8e02-4576-ac15-accfc1930d7c"
      }
    },
    {
      "type": "notification",
      "attributes": {
        "created_at": "2020-05-08T22:11:51Z",
        "updated_at": "2020-05-08T22:11:51Z",
        "subscriber_id": "60ab17ae-e86d-440b-a818-2567c54cf684",
        "subscriber_type": "email_notification_subscriber",
        "publisher_id": "75f0fe32-3f78-4173-8e58-5ac4d51fa120",
        "publisher_type": "lock",
        "event_id": "d43a3889-8e02-4576-ac15-accfc1930d7c",
        "event_type": "unlocked_event"
      },
      "id": "a54ca9e3-2749-4af4-9304-40a0a314e69a",
      "links": {
        "self": "http://api.remotelock.dev/notifications/a54ca9e3-2749-4af4-9304-40a0a314e69a",
        "subscriber": "http://api.remotelock.dev/notification_subscribers/60ab17ae-e86d-440b-a818-2567c54cf684",
        "publisher": "http://api.remotelock.dev/devices/75f0fe32-3f78-4173-8e58-5ac4d51fa120",
        "event": "http://api.remotelock.dev/events/d43a3889-8e02-4576-ac15-accfc1930d7c"
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


# OAuth Authorizations



## * Get authorized third-party applications


### Request


#### Endpoint

`GET /oauth_applications/authorized`

```plaintext
GET /oauth_applications/authorized

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
      "type": "oauth_application",
      "attributes": {
        "name": "Josef Waters",
        "description": null,
        "price": null,
        "site_url": null,
        "logo_url": null
      },
      "id": "ee84f088-edff-45ef-ad46-a844183e75b1",
      "links": {
        "self": "http://api.remotelock.dev/oauth_applications/ee84f088-edff-45ef-ad46-a844183e75b1"
      }
    },
    {
      "type": "oauth_application",
      "attributes": {
        "name": "Carter Cremin",
        "description": null,
        "price": null,
        "site_url": null,
        "logo_url": null
      },
      "id": "39d50a02-5028-43fd-97f8-45591292eed1",
      "links": {
        "self": "http://api.remotelock.dev/oauth_applications/39d50a02-5028-43fd-97f8-45591292eed1"
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


## * Get an authorized third-party application


### Request


#### Endpoint

`GET /oauth_applications/authorized/:id`

```plaintext
GET /oauth_applications/authorized/d44b1c8c-de44-4078-934f-d93f72bd0956

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
    "type": "oauth_application",
    "attributes": {
      "name": "Fern Wilkinson",
      "description": null,
      "price": null,
      "site_url": null,
      "logo_url": null
    },
    "id": "d44b1c8c-de44-4078-934f-d93f72bd0956",
    "links": {
      "self": "http://api.remotelock.dev/oauth_applications/d44b1c8c-de44-4078-934f-d93f72bd0956"
    }
  }
}
```


## * Revoke all access tokens for an application


### Request


#### Endpoint

`DELETE /oauth_applications/authorized/:id`

```plaintext
DELETE /oauth_applications/authorized/8fba9e55-2ee3-4925-adb8-5d028b834707

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# OAuth Applications



## * Get all featured oauth applications


### Request


#### Endpoint

`GET /oauth_applications/featured`

```plaintext
GET /oauth_applications/featured

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
      "type": "oauth_application",
      "attributes": {
        "name": "Danilo Pacocha PhD",
        "description": null,
        "price": null,
        "site_url": null,
        "logo_url": null
      },
      "id": "e3a9f672-c8a4-470e-9d0f-2bccb3d61085",
      "links": {
        "self": "http://api.remotelock.dev/oauth_applications/e3a9f672-c8a4-470e-9d0f-2bccb3d61085"
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


## * Get an oauth application


### Request


#### Endpoint

`GET /oauth_applications/featured/:id`

```plaintext
GET /oauth_applications/featured/2d4dc6f9-be77-4ea2-88db-8edbf37eb780

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
    "type": "oauth_application",
    "attributes": {
      "name": "Miss Reba Fritsch",
      "description": null,
      "price": null,
      "site_url": null,
      "logo_url": null
    },
    "id": "2d4dc6f9-be77-4ea2-88db-8edbf37eb780",
    "links": {
      "self": "http://api.remotelock.dev/oauth_applications/2d4dc6f9-be77-4ea2-88db-8edbf37eb780"
    }
  }
}
```


## * Get an oauth application by client id


### Request


#### Endpoint

`GET /oauth_applications/:client_id`

```plaintext
GET /oauth_applications/58ec3f1af516e011fb41a11679a6c24b85ed4618cc07c8931144a9f21f17b828

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
    "type": "oauth_application",
    "attributes": {
      "name": "Ha Fahey",
      "description": null,
      "price": 300,
      "site_url": null,
      "logo_url": null
    },
    "id": "3d059fa9-bc1e-4fe0-ace8-0293e71ba9f1",
    "links": {
      "self": "http://api.remotelock.dev/oauth_applications/3d059fa9-bc1e-4fe0-ace8-0293e71ba9f1"
    }
  }
}
```


# Remote Access Person Devices



## * Get all remote access person devices


### Request


#### Endpoint

`GET /remote_access_person_devices`

```plaintext
GET /remote_access_person_devices

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
      "type": "remote_access_person_device",
      "attributes": {
        "status": "failed",
        "sync_errors": [
          "communication_error",
          "timeout",
          "access_person_overcapacity",
          "access_schedule_overcapacity",
          "empty_credentials",
          "pin_conflict",
          "name_conflict",
          "smart_card_conflict",
          "prox_card_conflict"
        ],
        "created_at": "2020-05-08T22:11:56Z",
        "updated_at": "2020-05-08T22:11:56Z",
        "access_person_id": "f0961456-2421-4c9c-8902-d887ca2e9bb3",
        "access_person_type": "access_user",
        "access_person_access_id": "5c81789c-765f-45f5-abde-fc3454c35f3e",
        "device_id": "5843e6ef-dc8e-4d62-9348-1c7e062f14a7",
        "device_type": "acs_door"
      },
      "id": 39,
      "links": {
        "self": "http://api.remotelock.dev/remote_access_person_devices/39",
        "access_person": "http://api.remotelock.dev/access_persons/f0961456-2421-4c9c-8902-d887ca2e9bb3",
        "access_person_access": "http://api.remotelock.dev/access_persons/f0961456-2421-4c9c-8902-d887ca2e9bb3/accesses/5c81789c-765f-45f5-abde-fc3454c35f3e",
        "device": "http://api.remotelock.dev/devices/5843e6ef-dc8e-4d62-9348-1c7e062f14a7"
      }
    },
    {
      "type": "remote_access_person_device",
      "attributes": {
        "status": "synced",
        "sync_errors": [

        ],
        "created_at": "2020-05-08T22:11:56Z",
        "updated_at": "2020-05-08T22:11:56Z",
        "access_person_id": "f0961456-2421-4c9c-8902-d887ca2e9bb3",
        "access_person_type": "access_user",
        "access_person_access_id": "b7779f4e-2fd4-4e31-8bba-53866aab96ab",
        "device_id": "e4945dd2-5d62-4ab7-a9ff-fb718a700925",
        "device_type": "lock"
      },
      "id": 37,
      "links": {
        "self": "http://api.remotelock.dev/remote_access_person_devices/37",
        "access_person": "http://api.remotelock.dev/access_persons/f0961456-2421-4c9c-8902-d887ca2e9bb3",
        "access_person_access": "http://api.remotelock.dev/access_persons/f0961456-2421-4c9c-8902-d887ca2e9bb3/accesses/b7779f4e-2fd4-4e31-8bba-53866aab96ab",
        "device": "http://api.remotelock.dev/devices/e4945dd2-5d62-4ab7-a9ff-fb718a700925"
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


## * Retry access person on device with failed status


### Request


#### Endpoint

`PUT /remote_access_person_devices/:id/retry`

```plaintext
PUT /remote_access_person_devices/42/retry

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
    "type": "remote_access_person_device",
    "attributes": {
      "status": "update_pending",
      "sync_errors": [

      ],
      "created_at": "2020-05-08T22:11:56Z",
      "updated_at": "2020-05-08T22:11:56Z",
      "access_person_id": "cb5d9f60-baee-4606-9301-b7c76d3c2769",
      "access_person_type": "access_user",
      "access_person_access_id": "82703a70-ef6f-4d77-8b73-4c5ac9fbcf8b",
      "device_id": "5c3aeee3-0cb4-4d40-9d44-f336986619f1",
      "device_type": "acs_door"
    },
    "id": 42,
    "links": {
      "self": "http://api.remotelock.dev/remote_access_person_devices/42",
      "access_person": "http://api.remotelock.dev/access_persons/cb5d9f60-baee-4606-9301-b7c76d3c2769",
      "access_person_access": "http://api.remotelock.dev/access_persons/cb5d9f60-baee-4606-9301-b7c76d3c2769/accesses/82703a70-ef6f-4d77-8b73-4c5ac9fbcf8b",
      "device": "http://api.remotelock.dev/devices/5c3aeee3-0cb4-4d40-9d44-f336986619f1"
    }
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
        "created_at": "2020-05-08T22:11:57Z",
        "updated_at": "2020-05-08T22:11:57Z",
        "resort_lock_id": "c49fefe0-0c13-4b7c-9609-39065150efdf"
      },
      "id": "2536cf19-16ac-4c51-b10d-18c225e77cd1",
      "links": {
        "self": "http://api.remotelock.dev/resort_lock_guests/2536cf19-16ac-4c51-b10d-18c225e77cd1",
        "resort_lock": "http://api.remotelock.dev/devices/c49fefe0-0c13-4b7c-9609-39065150efdf"
      }
    },
    {
      "type": "resort_lock_guest",
      "attributes": {
        "name": "Marlena Grant",
        "email": "barrett_cremin@yostbecker.biz",
        "pin": "1281962967",
        "starts_at": "2020-05-08T22:00:00",
        "ends_at": "2020-05-10T22:00:00",
        "one_time_access": false,
        "guest_source": null,
        "created_at": "2020-05-08T22:11:57Z",
        "updated_at": "2020-05-08T22:11:57Z",
        "resort_lock_id": "c49fefe0-0c13-4b7c-9609-39065150efdf"
      },
      "id": "954e27e6-9220-443c-b332-b16fed86fa60",
      "links": {
        "self": "http://api.remotelock.dev/resort_lock_guests/954e27e6-9220-443c-b332-b16fed86fa60",
        "resort_lock": "http://api.remotelock.dev/devices/c49fefe0-0c13-4b7c-9609-39065150efdf"
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
GET /resort_lock_guests/f9f246fc-0834-40c3-bd3a-fa488df265c1

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
      "created_at": "2020-05-08T22:11:58Z",
      "updated_at": "2020-05-08T22:11:58Z",
      "resort_lock_id": "b2f3fb5a-e5ec-4038-9ed3-7dac484f269f"
    },
    "id": "f9f246fc-0834-40c3-bd3a-fa488df265c1",
    "links": {
      "self": "http://api.remotelock.dev/resort_lock_guests/f9f246fc-0834-40c3-bd3a-fa488df265c1",
      "resort_lock": "http://api.remotelock.dev/devices/b2f3fb5a-e5ec-4038-9ed3-7dac484f269f"
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
{"attributes":{"resort_lock_id":"6f99c663-685c-4781-9603-1e3eb363913e","name":"Ann Smith","starts_at":"2020-01-02T13:00:00","ends_at":"2021-01-02T16:00:00","email":"rogelio@windlermohr.info"}}
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
      "email": "rogelio@windlermohr.info",
      "pin": "640974037228",
      "starts_at": "2020-01-02T13:00:00",
      "ends_at": "2021-01-02T16:00:00",
      "one_time_access": false,
      "guest_source": null,
      "created_at": "2020-05-08T22:11:58Z",
      "updated_at": "2020-05-08T22:11:58Z",
      "resort_lock_id": "6f99c663-685c-4781-9603-1e3eb363913e"
    },
    "id": "27ec5887-3ff2-4d69-b63b-0e987f6dc73e",
    "links": {
      "self": "http://api.remotelock.dev/resort_lock_guests/27ec5887-3ff2-4d69-b63b-0e987f6dc73e",
      "resort_lock": "http://api.remotelock.dev/devices/6f99c663-685c-4781-9603-1e3eb363913e"
    }
  }
}
```


## Update a resort lock guest


### Request


#### Endpoint

`PUT /resort_lock_guests/:id`

```plaintext
PUT /resort_lock_guests/ab04a143-8495-4e78-bbeb-4733d33df41e

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
      "created_at": "2020-05-08T22:12:00Z",
      "updated_at": "2020-05-08T22:12:01Z",
      "resort_lock_id": "26ca9b4a-d489-4146-b662-997421c24b84"
    },
    "id": "ab04a143-8495-4e78-bbeb-4733d33df41e",
    "links": {
      "self": "http://api.remotelock.dev/resort_lock_guests/ab04a143-8495-4e78-bbeb-4733d33df41e",
      "resort_lock": "http://api.remotelock.dev/devices/26ca9b4a-d489-4146-b662-997421c24b84"
    }
  }
}
```


## Delete a resort lock guest


### Request


#### Endpoint

`DELETE /resort_lock_guests/:id`

```plaintext
DELETE /resort_lock_guests/ada3a5b4-ff0c-46d8-806c-8ea6ef757c8f

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
POST /resort_lock_guests/18b4a53d-692e-4a19-9d5c-088db36e0371/email/notify

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
GET /resort_lock_guests/adcf4895-d96e-4a70-baa9-621b0fa74133/email/preview

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
      "body": "<p>Dear John Doe,</p>\n\n<p>Here is your access code for your upcoming stay with us. Our property is equipped with a keyless entry door lock for your convenience.</p>\n\n<p>Access Code: 123-456-7890</p>\n\n<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" id=\"access-instructions\">\n  \n    <tr>\n      <td colspan=\"3\" width=\"100%\" align=\"left\" valign=\"top\">\n        Re-engineered 6th generation methodology\n        (796 Osinski Lodge)\n      </td>\n    </tr>\n\n    \n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td colspan=\"2\" width=\"97%\" align=\"left\" valign=\"top\">\n          <b>RL-4000 - NBTJV1DP0B4FBE01</b>\n        </td>\n      </tr>\n      <tr>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"3%\" align=\"left\" valign=\"top\"></td>\n        <td width=\"94%\" align=\"left\" valign=\"top\">\n          \n            Access times:\n            January 2, 2020  4:00 PM to March 2, 2020  4:00 PM\n            <br/>\n          \n          Access instruction:\n          <p><strong>Lock Instructions:</strong><br>\nThere are two methods to opening the lock on your vacation rental. One is to simply enter the 10 (or 12 if provided) digit Access Code above, followed by the &#39;#&#39; key. The other is to create your own shorter code for use during your stay.</p>\n\n<p>Method 1: Use Default Access Code Enter the following on the lock’s keypad: Access Code, # (Door will unlock)</p>\n\n<p>Method 2: Create Your Own Code (Can be 3 – 5 Digits)<br>\nStep 1: Hold the * key until green light is solid (About 2 seconds), then release.<br>\nStep 2: While green light is lit, enter Access Code, #, Your Own Code, #<br>\nNow you have programmed your own code into the lock. Next step is to unlock the door using the code you just created.<br>\nStep 3: Enter Your Code, # (Door will unlock)</p>\n\n        </td>\n      </tr>\n    \n  \n</table>\n\n<p>If you have any questions, please feel free to call us at (Phone not provided) or email at <a href=\"mailto:cyril.blanda@cremin.biz\">cyril.blanda@cremin.biz</a>.</p>\n\n<p>Regards,</p>\n\n<p>Lakiesha Effertz</p>\n",
      "from_name": "Lakiesha Effertz",
      "reply_to": "cyril.blanda@cremin.biz",
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
        "name": "Ut at ut vel.",
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
        "created_at": "2020-05-08T22:12:08Z",
        "updated_at": "2020-05-08T22:12:08Z"
      },
      "id": "925419b4-83d6-4261-9a7c-0d22ab5a30d0",
      "links": {
        "self": "http://api.remotelock.dev/schedules/925419b4-83d6-4261-9a7c-0d22ab5a30d0"
      }
    },
    {
      "type": "auto_lock_schedule",
      "attributes": {
        "name": "Qui ex molestiae tempore.",
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
        "created_at": "2020-05-08T22:12:08Z",
        "updated_at": "2020-05-08T22:12:08Z"
      },
      "id": "5b6376c8-5c4b-4076-a208-7e399a752bfd",
      "links": {
        "self": "http://api.remotelock.dev/schedules/5b6376c8-5c4b-4076-a208-7e399a752bfd"
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
GET /schedules/5586bec2-9942-4906-b9a1-2c3776eb3e58

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
      "name": "Iste dolores assumenda sed.",
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
      "created_at": "2020-05-08T22:12:09Z",
      "updated_at": "2020-05-08T22:12:09Z"
    },
    "id": "5586bec2-9942-4906-b9a1-2c3776eb3e58",
    "links": {
      "self": "http://api.remotelock.dev/schedules/5586bec2-9942-4906-b9a1-2c3776eb3e58"
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
PUT /schedules/089d05e8-0aa6-46a6-a64a-baad6c6791d4

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
      "created_at": "2020-05-08T22:12:09Z",
      "updated_at": "2020-05-08T22:12:09Z"
    },
    "id": "089d05e8-0aa6-46a6-a64a-baad6c6791d4",
    "links": {
      "self": "http://api.remotelock.dev/schedules/089d05e8-0aa6-46a6-a64a-baad6c6791d4"
    }
  }
}
```


## Delete a schedule


### Request


#### Endpoint

`DELETE /schedules/:id`

```plaintext
DELETE /schedules/f0c599ae-4d4a-4958-98a5-0bf456d8d642

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
{"type":"access_schedule","attributes":{"name":"Work access schedule","mon":[{"start_time":"08:00","end_time":"12:00"},{"start_time":"13:00","end_time":"18:00"}],"wed":[{"start_time":"08:00","end_time":"12:00"},{"start_time":"13:00","end_time":"18:00"}],"fri":[{"start_time":"08:00","end_time":"12:00"},{"start_time":"13:00","end_time":"18:00"}],"access_exception_id":"998c75a4-7296-4629-8c94-367587ea8e34"}}
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
      "created_at": "2020-05-08T22:12:10Z",
      "updated_at": "2020-05-08T22:12:10Z",
      "access_exception_id": "998c75a4-7296-4629-8c94-367587ea8e34"
    },
    "id": "1c01e25f-5469-4dca-b30b-ccbf7466052c",
    "links": {
      "self": "http://api.remotelock.dev/schedules/1c01e25f-5469-4dca-b30b-ccbf7466052c",
      "access_exception": "http://api.remotelock.dev/access_exceptions/998c75a4-7296-4629-8c94-367587ea8e34"
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
      "created_at": "2020-05-08T22:12:10Z",
      "updated_at": "2020-05-08T22:12:10Z"
    },
    "id": "d3ac202a-2cc4-41f0-9e70-392102c8cd23",
    "links": {
      "self": "http://api.remotelock.dev/schedules/d3ac202a-2cc4-41f0-9e70-392102c8cd23"
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
      "created_at": "2020-05-08T22:12:10Z",
      "updated_at": "2020-05-08T22:12:10Z"
    },
    "id": "fd6e98c4-cb14-4f60-a182-8ee44e67d159",
    "links": {
      "self": "http://api.remotelock.dev/schedules/fd6e98c4-cb14-4f60-a182-8ee44e67d159"
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
      "created_at": "2020-05-08T22:12:11Z",
      "updated_at": "2020-05-08T22:12:11Z"
    },
    "id": "5bb202ac-1ab6-41ec-a2f9-ccb702720ea5",
    "links": {
      "self": "http://api.remotelock.dev/schedules/5bb202ac-1ab6-41ec-a2f9-ccb702720ea5"
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
      "created_at": "2020-05-08T22:12:11Z",
      "updated_at": "2020-05-08T22:12:11Z"
    },
    "id": "ae1c6f33-b90b-412f-b049-b564a55d314f",
    "links": {
      "self": "http://api.remotelock.dev/schedules/ae1c6f33-b90b-412f-b049-b564a55d314f"
    }
  }
}
```


# Smart Cards



## * Get all smart cards


### Request


#### Endpoint

`GET /smart_cards`

```plaintext
GET /smart_cards

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
      "type": "smart_card",
      "attributes": {
        "serial_number": "5079172630",
        "created_at": "2020-05-08T22:12:56Z",
        "updated_at": "2020-05-08T22:12:56Z",
        "access_person_id": "a542b3d5-ef9f-4d58-abb7-5d4c38df4cfa",
        "access_person_type": "access_user"
      },
      "id": "5ae25081-ad1f-46cd-aba1-10e9f3c03f8f",
      "links": {
        "self": "http://api.remotelock.dev/smart_cards/5ae25081-ad1f-46cd-aba1-10e9f3c03f8f",
        "access_person": "http://api.remotelock.dev/access_persons/a542b3d5-ef9f-4d58-abb7-5d4c38df4cfa"
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


## * Delete a smart card


### Request


#### Endpoint

`DELETE /smart_cards/:id`

```plaintext
DELETE /smart_cards/53bb1d7f-e9a7-4172-8cc8-cbcf400d1057

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# Two factor authentication methods



## * Get current user&#39;s two factor authentication methods


### Request


#### Endpoint

`GET /two_factor_authentication_methods`

```plaintext
GET /two_factor_authentication_methods

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
      "type": "phone_two_factor_authentication_method",
      "attributes": {
        "number": "+19134567890",
        "confirmed": true
      },
      "id": "b9ab3d86-8be6-3ea8-b72d-a2bf17e6a514",
      "links": {
        "self": "http://api.remotelock.dev/two_factor_authentication_methods/b9ab3d86-8be6-3ea8-b72d-a2bf17e6a514"
      }
    },
    {
      "type": "backup_code_two_factor_authentication_method",
      "attributes": {
        "code": null,
        "confirmed": true
      },
      "id": "a4b92c59-244d-33c4-ad8c-953a9b67c69b",
      "links": {
        "self": "http://api.remotelock.dev/two_factor_authentication_methods/a4b92c59-244d-33c4-ad8c-953a9b67c69b"
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


## * Get current user&#39;s two factor authentication method


### Request


#### Endpoint

`GET /two_factor_authentication_methods/:id`

```plaintext
GET /two_factor_authentication_methods/d4c6af90-aa7e-302f-81d5-19da9d747235

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
    "type": "phone_two_factor_authentication_method",
    "attributes": {
      "number": "+19134567890",
      "confirmed": true
    },
    "id": "d4c6af90-aa7e-302f-81d5-19da9d747235",
    "links": {
      "self": "http://api.remotelock.dev/two_factor_authentication_methods/d4c6af90-aa7e-302f-81d5-19da9d747235"
    }
  }
}
```


## * Create phone two factor authentication method

Creates an *unconfirmed* method. In order to confirm the method it needs to be authenticated.

### Request


#### Endpoint

`POST /two_factor_authentication_methods`

```plaintext
POST /two_factor_authentication_methods

```

#### Parameters


```json
{"type":"phone_two_factor_authentication_method","attributes":{"number":"+19134567890"}}
```

| Name | Description |
|:-----|:------------|
| type *required* | phone_two_factor_authentication_method |
| attributes[number] *required* | Phone number in format +19991234567 |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "phone_two_factor_authentication_method",
    "attributes": {
      "number": "+19134567890",
      "confirmed": false
    },
    "id": "0875b27c-c2c3-3860-bcd4-fdb2d8125280",
    "links": {
      "self": "http://api.remotelock.dev/two_factor_authentication_methods/0875b27c-c2c3-3860-bcd4-fdb2d8125280"
    }
  }
}
```


## * Create backup code two factor authentication method

Before creating a backup code another confirmed method needs to exist.

### Request


#### Endpoint

`POST /two_factor_authentication_methods`

```plaintext
POST /two_factor_authentication_methods

```

#### Parameters


```json
{"type":"backup_code_two_factor_authentication_method"}
```

| Name | Description |
|:-----|:------------|
| type *required* | backup_code_two_factor_authentication_method |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "backup_code_two_factor_authentication_method",
    "attributes": {
      "code": "L3GNPLGQPHMFZXT8",
      "confirmed": true
    },
    "id": "a84b9e4f-343f-3d23-9dd9-4c6ae7e58d18",
    "links": {
      "self": "http://api.remotelock.dev/two_factor_authentication_methods/a84b9e4f-343f-3d23-9dd9-4c6ae7e58d18"
    }
  }
}
```


## * Delete two factor authentication method


### Request


#### Endpoint

`DELETE /two_factor_authentication_methods/:id`

```plaintext
DELETE /two_factor_authentication_methods/1143d967-d9e8-3720-b9fb-909e130158f7

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



## * Authenticate phone two factor authentication method


### Request


#### Endpoint

`PUT /two_factor_authentication_methods/:id/authenticate`

```plaintext
PUT /two_factor_authentication_methods/4851eecf-6f5c-324c-b35e-aeba1437880c/authenticate

```

#### Parameters


```json
{"otp":"038836"}
```

| Name | Description |
|:-----|:------------|
| otp *required* | Code sent to user's phone during the creation step |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "phone_two_factor_authentication_method",
    "attributes": {
      "number": "+19134567890",
      "confirmed": true
    },
    "id": "aad858db-dd96-3487-80c5-0e4bcb74e2ba",
    "links": {
      "self": "http://api.remotelock.dev/two_factor_authentication_methods/aad858db-dd96-3487-80c5-0e4bcb74e2ba"
    }
  }
}
```


# UniKey Installers



## * Get all installers


### Request


#### Endpoint

`GET /unikey_integration/installers`

```plaintext
GET /unikey_integration/installers

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
      "type": "unikey_installer",
      "attributes": {
        "email": "eliseo@douglas.com",
        "created_at": "2020-05-08T22:13:09Z",
        "updated_at": "2020-05-08T22:13:09Z"
      },
      "id": "df26b966-de3d-476a-ad3f-5a1f18a9d58a",
      "links": {
        "self": "http://api.remotelock.dev/unikey_integration/installers/df26b966-de3d-476a-ad3f-5a1f18a9d58a"
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


## * Create an installer


### Request


#### Endpoint

`POST /unikey_integration/installers`

```plaintext
POST /unikey_integration/installers

```

#### Parameters


```json
{"attributes":{"email":"john@doe.com"}}
```

| Name | Description |
|:-----|:------------|
| attributes[email] *required* | Email |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "unikey_installer",
    "attributes": {
      "email": "john@doe.com",
      "created_at": "2020-05-08T22:13:09Z",
      "updated_at": "2020-05-08T22:13:09Z"
    },
    "id": "45be0c0f-b4ff-4abd-a9ca-79d78885fd74",
    "links": {
      "self": "http://api.remotelock.dev/unikey_integration/installers/45be0c0f-b4ff-4abd-a9ca-79d78885fd74"
    }
  }
}
```


## * Delete an installer


### Request


#### Endpoint

`DELETE /unikey_integration/installers/:id`

```plaintext
DELETE /unikey_integration/installers/4eeb2f0b-3fb5-4567-925d-d85e42c14e1b

```

#### Parameters



None known.

### Response


```plaintext

204 No Content
```



# User Account Settings



## * Get user settings for current user and account


### Request


#### Endpoint

`GET /user_account_settings`

```plaintext
GET /user_account_settings

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
    "type": "user_account_setting",
    "attributes": {
      "weekly_summary": true,
      "health_tile": true
    },
    "id": 970,
    "links": {
      "self": "http://api.remotelock.dev/user_account_settings"
    }
  }
}
```


## * Update user settings on current account


### Request


#### Endpoint

`PUT /user_account_settings`

```plaintext
PUT /user_account_settings

```

#### Parameters


```json
{"attributes":{"weekly_summary":true}}
```

| Name | Description |
|:-----|:------------|
| attributes[weekly_summary]  | Receive account weekly summary - for account owners only |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "user_account_setting",
    "attributes": {
      "weekly_summary": true,
      "health_tile": true
    },
    "id": 971,
    "links": {
      "self": "http://api.remotelock.dev/user_account_settings"
    }
  }
}
```


# Users



## * Send password reset email


### Request


#### Endpoint

`POST /password`

```plaintext
POST /password

```

#### Parameters


```json
{"identifier":"justin@test.com"}
```

| Name | Description |
|:-----|:------------|
| identifier *required* | User email or handle |

### Response


```plaintext

204 No Content
```



## * Create a user


### Request


#### Endpoint

`POST /user`

```plaintext
POST /user

```

#### Parameters


```json
{"attributes":{"name":"Rob Goff","email":"rob@remotelock.com","password":"qwerty","password_confirmation":"qwerty","store_id":"f3134e78-f5df-445a-8415-c23b5403b474","terms_of_service":true,"primary_use":"coworking"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name] *required* | Name |
| attributes[email] *required* | Email |
| attributes[handle]  | Username (default is the `email` handle) |
| attributes[password] *required* | Attributes password |
| attributes[password_confirmation] *required* | Attributes password confirmation |
| attributes[store_id] *required* | Attributes store |
| attributes[terms_of_service] *required* | Attributes terms of service |
| attributes[primary_use]  | Attributes primary use |

### Response


```plaintext

201 Created
```

```json
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "Rob Goff",
      "email": "rob@remotelock.com",
      "handle": "rob",
      "created_at": "2020-05-08T22:13:34Z",
      "updated_at": "2020-05-08T22:13:34Z",
      "primary_account_id": "45a2c9d2-76fa-4666-b62f-a6e95ffba840",
      "default_account_id": "45a2c9d2-76fa-4666-b62f-a6e95ffba840"
    },
    "id": "064ab0f7-b34e-46a2-8564-f97a7cf67a84",
    "links": {
      "self": "http://api.remotelock.dev/users/064ab0f7-b34e-46a2-8564-f97a7cf67a84",
      "primary_account": "http://api.remotelock.dev/accounts/45a2c9d2-76fa-4666-b62f-a6e95ffba840",
      "default_account": "http://api.remotelock.dev/accounts/45a2c9d2-76fa-4666-b62f-a6e95ffba840"
    }
  }
}
```


## * Confirm a user


### Request


#### Endpoint

`PUT /user/confirm`

```plaintext
PUT /user/confirm

```

#### Parameters


```json
{"token":"BkYpaxhcYLQymbfYmPHe","password":"new password","password_confirmation":"new password","terms_of_service":true}
```

| Name | Description |
|:-----|:------------|
| token *required* | Confirmation token |
| password *required* |  password |
| password_confirmation *required* |  password confirmation |
| terms_of_service *required* |  terms of service |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "Tamra Becker",
      "email": "shelton.kovacek@rueckerauer.name",
      "handle": "sheltonkovacek",
      "created_at": "2020-05-08T22:13:36Z",
      "updated_at": "2020-05-08T22:13:37Z",
      "primary_account_id": "5572b6b2-329e-42a8-979b-8004a3b6f3e6",
      "default_account_id": "5572b6b2-329e-42a8-979b-8004a3b6f3e6"
    },
    "id": "5aede35d-2d66-4359-97e6-00c219a8b584",
    "links": {
      "self": "http://api.remotelock.dev/users/5aede35d-2d66-4359-97e6-00c219a8b584",
      "primary_account": "http://api.remotelock.dev/accounts/5572b6b2-329e-42a8-979b-8004a3b6f3e6",
      "default_account": "http://api.remotelock.dev/accounts/5572b6b2-329e-42a8-979b-8004a3b6f3e6"
    }
  }
}
```


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
      "name": "Kiara Runolfsson",
      "email": "paul_boyer@mayertcormier.info",
      "handle": "paul_boyer",
      "created_at": "2020-05-08T22:13:37Z",
      "updated_at": "2020-05-08T22:13:37Z",
      "primary_account_id": "b78c8cbc-a68c-4fc5-881d-b6a9dab293b0",
      "default_account_id": "b78c8cbc-a68c-4fc5-881d-b6a9dab293b0"
    },
    "id": "45691c7f-e301-44b9-817c-00d9323b1dda",
    "links": {
      "self": "http://api.remotelock.dev/user",
      "primary_account": "http://api.remotelock.dev/account",
      "default_account": "http://api.remotelock.dev/account"
    }
  }
}
```


## * Update signed in user


### Request


#### Endpoint

`PUT /user`

```plaintext
PUT /user

```

#### Parameters


```json
{"attributes":{"email":"foo@foo.com","handle":"jko"}}
```

| Name | Description |
|:-----|:------------|
| attributes[name]  | Name |
| attributes[email]  | Email |
| attributes[handle]  | Username (default is the `email` handle) |
| attributes[password]  | Attributes password |
| attributes[password_confirmation]  | Attributes password confirmation |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "Miss Tory Stoltenberg",
      "email": "foo@foo.com",
      "handle": "jko",
      "created_at": "2020-05-08T22:13:37Z",
      "updated_at": "2020-05-08T22:13:38Z",
      "enable_developer_tools": false,
      "primary_account_id": "2f801a86-5dfe-4767-b657-5bdace82c842",
      "default_account_id": "2f801a86-5dfe-4767-b657-5bdace82c842"
    },
    "id": "c131911a-646f-4292-9f0c-f5346e5f0d51",
    "links": {
      "self": "http://api.remotelock.dev/user",
      "primary_account": "http://api.remotelock.dev/account",
      "default_account": "http://api.remotelock.dev/account"
    }
  }
}
```


## * Change password


### Request


#### Endpoint

`PUT /user/change_password`

```plaintext
PUT /user/change_password

```

#### Parameters


```json
{"attributes":{"current_password":"password","password":"newpassword","password_confirmation":"newpassword"}}
```

| Name | Description |
|:-----|:------------|
| attributes[current_password]  | Attributes current password |
| attributes[password]  | Attributes password |
| attributes[password_confirmation]  | Attributes password confirmation |

### Response


```plaintext

200 OK
```

```json
{
  "data": {
    "type": "user",
    "attributes": {
      "name": "Miss Cleveland Cummerata",
      "email": "antonia.buckridge@dickinsonsipes.co",
      "handle": "antoniabuckridge",
      "created_at": "2020-05-08T22:13:38Z",
      "updated_at": "2020-05-08T22:13:39Z",
      "enable_developer_tools": false,
      "primary_account_id": "26bb0633-5249-4100-95fb-beea72067105",
      "default_account_id": "26bb0633-5249-4100-95fb-beea72067105"
    },
    "id": "f93ce7e1-015a-4930-91b9-b170cc253c4e",
    "links": {
      "self": "http://api.remotelock.dev/user",
      "primary_account": "http://api.remotelock.dev/account",
      "default_account": "http://api.remotelock.dev/account"
    }
  }
}
```


## * Verify password


### Request


#### Endpoint

`POST /user/verify_password`

```plaintext
POST /user/verify_password

```

#### Parameters


```json
{"password":"password"}
```

| Name | Description |
|:-----|:------------|
| password  |  password |

### Response


```plaintext

200 OK
```




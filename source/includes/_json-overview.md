# JSON Structure

## Overview

### JSON request structure

The HTTP methods `POST`/`PUT`/`PATCH` require the header `Content-Type: application/json`
and the request body must contain a valid `JSON` structure.

Other HTTP methods accept empty or missing `Content-Type` header since the request body
is ignored.

Example JSON request structure:

- `POST https://api.remotelock.com/articles/3/comments`

<div class="center-column"></div>

```json
{
  "attributes": {
    "body": "Very informative article"
  }
}
```

### JSON response structure

- All responses have `data` root key. `data` object keys are `id`, `type`,
  `attributes` and `links` (optional).
- `meta` top level key is used for collection pagination.
- Relationship resource URLs can be fetched from the `links` key. A `self` URL
  is also included.
- "1-to-1" relationship object ids are included in the `attributes` object.
  Example: `"author_id": 1` for the author relationship.
- All date and time fields are using ISO 8601 format.

**JSON response structure for a collection**

- `GET https://api.remotelock.com/articles`

<div class="center-column"></div>

```json
{
  "data": [
    {
      "type": "article",
      "id": "3",
      "attributes": {
        "title": "JSON API paints my bikeshed!",
        "body": "The shortest article. Ever.",
        "author_id": 1,
        "created_at": "2015-07-23T18:51:11Z",
        "updated_at": "2015-07-23T18:51:11Z"
      },
      "links": {
        "self": "https://api.remotelock.com/articles/3",
        "author": "https://api.remotelock.com/authors/1",
        "comments": "https://api.remotelock.com/comments"
      }
    },
    {
      "type": "article",
      "id": "5",
      "attributes": {
        "title": "Ruby on Rails framework",
        "body": "RoR is 10 years old!",
        "author_id": 1,
        "created_at": "2015-05-22T14:56:29Z",
        "updated_at": "2015-05-22T14:56:28Z"
      },
      "links": {
        "self": "https://api.remotelock.com/articles/3",
        "author": "https://api.remotelock.com/authors/1",
        "comments": "https://api.remotelock.com/comments"
      }
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 2,
    "total_pages": 7,
    "total_count": 14
  }
}
```

**JSON response structure for a single resource**

- `GET https://api.remotelock.com/articles/3`

<div class="center-column"></div>

```json
{
  "data": {
    "type": "article",
    "id": "3",
    "attributes": {
      "title": "JSON API paints my bikeshed!",
      "body": "The shortest article. Ever.",
      "author_id": 1,
      "created_at": "2015-07-23T18:51:11Z",
      "updated_at": "2015-07-23T18:51:11Z"
    },
    "links": {
      "self": "https://api.remotelock.com/articles/3",
      "author": "https://api.remotelock.com/authors/1",
      "comments": "https://api.remotelock.com/comments"
    }
  }
}
```

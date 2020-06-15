## Pagination

Collection resources can be paginated using the data from `meta` top level key.

<div class="center-column"></div>

```json
{
  "data": {
    //...
  },
  "meta": {
    "page": 1,
    "per_page": 2,
    "total_pages": 7,
    "total_count": 14
  }
}
```

On every endpoint that responds with a collection of resources, you can provide
the following query parameters:

- `page` (Default: 1, Minimum: 1, Maximum: value of `total_pages` from `meta`)
- `per_page` (Default: 25, Mimimum: 1, Maximum: 50)

_The pagination is limited to access up to 10,000 resources, which means the
product `page * per_page` should not exceed that number._

Examples:

- `/devices?page=5` retrieves the 5th page of devices
- `/devices?per_page=40` retrieves the first 40 devices
- `/devices?per_page=50&page=2` retrieves devices from 51 to 100

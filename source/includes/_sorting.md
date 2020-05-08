# Sorting
<br/>

Most endpoints that return a collection are sortable. Additionally, these
endpoints usually have a default sort attribute.
The documentation for each endpoint specifies the default sort attribute as well
as other attributes that can be used for sorting (if any).

### Query formats

* **using single sort attribute:** `?sort=<attr>`
* **using multiple sort attributes:** `?sort[]=<attr 1>&sort[]=<attr 2>&...`

### Sort order

The default sort order for any attribute is "ascending". In order to get
"descending" sort order prefix the attribute with hyphen (`-`).

Examples:

- "ascending" sort order: `?sort=name`
- "descending" sort order with hyphen: `?sort=-name`

### Examples:

* Retrieve devices sorted "ascending" by `name` attribute:

  `GET https://api.remotelock.com/devices?sort=name`

* Retrieve devices sorted "descending" by `name` attribute:

  `GET https://api.remotelock.com/devices?sort=-name`

* Retrieve devices sorted "ascending" by `created_at` and "descending" by `name`:

  `GET https://api.remotelock.com/devices?sort[]=created_at&sort[]=-name`

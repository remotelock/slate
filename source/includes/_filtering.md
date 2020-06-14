# Filtering

### Filter results by multiple ids

Supported in endpoints that return a collection of resources

* **Query format:** `?id[]=<id 1>&id[]=<id 2>&...`  
  Example: To retrieve devices with ids **a1b2** and **c3d4**:  
  `GET https://api.remotelock.com/devices?id[]=a1b2&id[]=c3d4`

### Filter results by resource type

Supported in endpoints that return a collection of resources of multiple types

* **Query format for a single type:** `?type=<type>`  
  Example: To retrieve devices of a single type, **lock**:  
  `GET https://api.remotelock.com/devices?type=lock`

* **Query format for multiple type:** `?type[]=<type 1>&type[]=<type 2>&...`  
  Example: To retrieve devices of types **power_plug** and **camera**:  
  `GET https://api.remotelock.com/devices?type[]=camera&type[]=power_plug`

### Filter results by association

Used to apply the id or type filter in a resource association  
Example: To retrieve devices of the location **a1b2**  
`GET https://api.remotelock.com/devices?attributes[location_id]=a1b2`

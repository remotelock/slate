# Versioning

### Specifying API version

It is strongly recommended to explicitly specify the version. Specifying the
version can be done:

- in the resource `url`  
`https://api.remotelock.com/v1/articles/1`

- or via request `Accept` header  
`Accept: application/vnd.remotelock.v1+json`

If API version is not specified, the application will default to the latest
version.

### Changes

API version will increase only if there's a breaking change.

For example: if a single field is added to the resource, the version won't
change as this is a non breaking change.

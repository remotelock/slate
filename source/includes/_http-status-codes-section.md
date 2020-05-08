# HTTP Status Codes

| Request Method        | Response Outcome        | Response Status Code |
|-----------------------|-------------------------|----------------------|
| GET                   | Success                 | 200                  |
| PUT/PATCH             | Success                 | 200                  |
| POST                  | Success                 | 201                  |
| DELETE                | Success                 | 204                  |
| ANY                   | Malformed request       | 400                  |
| ANY                   | Not permitted           | 401                  |
| ANY                   | Payment required        | 402                  |
| ANY                   | Expired/Invalid token   | 403                  |
| GET                   | Not found               | 404                  |
| POST                  | Duplicate resource      | 409                  |
| POST/PUT/PATCH/DELETE | Validation error        | 422                  |
| ANY                   | Unexpected server error | 5xx                  |

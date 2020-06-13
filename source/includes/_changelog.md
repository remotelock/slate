# Changelog

- *2020-03-09*
  - Add `schlage_home_lock` device type and `SchlageEncode` model number
- *2020-02-20*
  - Update webhook retry policy
- *2019-06-19*
  - If an associated record id (e.g. `access_schedule_id`) is given as an empty
    string (`""`), treat that value the same as if it were `NULL`.
- *2019-04-16*
  - Added `name` attribute to `Model`
- *2019-02-19*
  - Allow "remotelock" as vendor in accept header (versioning).
- *2019-02-14*
  - If a polymorphic record (e.g. `accessible`) does not exist, 404 is returned
    rather than a 422.
- *2018-11-14*
  - Added `ZWaveLock` resource to `/devices` endpoints.
- *2018-08-13*
  - Added `battery_replaced` event type for `Lock`.
- *2018-04-12*
  - Added a `signal_quality` attribute to `Lock`, `PowerPlug`, `Thermostat`.
  - Deprecated `wifi_level` attribute on `Lock`, `PowerPlug`, `Thermostat`.
- *2017-09-19*
  - Added a `generate_pin` attribute when creating and updating access persons.
    Its default value is `false` and when `true` is passed, a random PIN is
    generated for that access person.
- *2017-07-27*
  - Add requirements and recommendations for webhook endpoint handler.  
    See **Notification Subscriber > [Create a webhook notification subscriber](#create-a-webhook-notification-subscriber)** section.  
    The new requirements will be enforced as of August 14, 2017.
- *2017-07-18*
  - Add `status` attribute to `access_guest` type:
      - `upcoming` initial status when start time has not met yet
      - `current` initial status when start time has already met
      - `expired` when end time has already met
      - `deactivated` when a user manually deactivates it. See new endpoint below  
  - Add `status` attribute to `access_user` type:
      - `current` initial status
      - `deactivated` when a user manually deactivates it. See new endpoint below
  - Add `PUT /access_persons/:id/deactivate` endpoint to deactivate access
    person on associated devices and keep the record on history. We recommend
    using this new endpoint rather than `DELETE /access_persons/:id` because
    you can fetch past access persons using the filter explained below.  
    The current behavior of `DELETE /access_persons/:id` was preserved: once it
    deletes, the access person cannot be fetched via API or UI anymore.  
  - Add ability to filter access persons by status(es). Example:  
    `GET /access_persons?attributes[status][]=deactivated&attributes[status][]=expired`
  - When status filter is not provided to `GET /access_persons`, the current behavior
    was preserved: it only retrieves `upcoming` and `current` statuses.
- *2017-06-20*
  - Remove `record_type`, `record_id`, `to_type` and `to_id` attributes from
    `PUT /common_doors/:id` endpoint.
- *2017-05-24*
  - Remove ACS instructions and all the remaining ACS controller endpoints.
- *2017-03-14*
  - remove `Access Instructions`, `Device Permissions`, `Guest Email Templates`,
    `Roles`, `User Roles`, `User Invitations`
- *2017-02-27*
  - Add event examples for new event types: `access_person_synced_event`,
    `access_person_sync_failed_event` and `access_guest_late_sync_event`
- *2017-02-23*
  - Add the following fields to `access_person_access` API type:
      - `devices_count`
      - `devices_synced_count`
      - `devices_failed_sync_count`
      - `devices_pending_sync_count`
- *2017-02-20*
  - Add email preview/resend capability to Resort Lock Guests
- *2017-02-07*
  - remove `generated_pin_digits` attribute from the Account
  - removed all attributes from ACS doors except `name`, `state`,
    `lock_action_schedule_id` and `location_id`
- *2017-01-26*
  - change `wake_wifi` parameter options
  - add LS-5i only `wake_wifi` option `user_action_except_manual`
- *2016-12-19*
  - Remove all billing endpoints.
- *2016-12-06*
  - Deprecate all ACS endpoints except ACS doors.
  - Devices endpoint returns ACS doors instead of ACS readers.
  - Multiple endpoints now accept or are related to ACS doors instead of ACS readers:  
    events, notifications, device permissions, door groups, notification subscriptions, access person accesses and common doors.
  - All the existing objects that used 'acs_reader' type are now
    migrated to 'acs_door' (ID stays the same).
- *2016-11-23*
  - Added Common Doors functionality
- *2016-11-18*
  - `wifi_level_changed` event is now `connectivity`
  - `power_level_changed` event is now `power_level_low`
- *2016-11-15*
  - Guest emails are no longer automatically sent (with the exception of
    integrations).  
    You must explicitly send the email via: `POST /access_persons/:id/email/notify`
- *2016-11-02*
  - Local PINs support for 5i/6i/7i.
- *2016-11-01*
  - Resort Lock Guests only support hours. Please see parameters.
  - Delivery of Access Denied and Locked notifications.

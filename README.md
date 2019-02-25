# Information Security and Quality Assurance Projects - Issue Tracker

## Description

This project is part of the **FCC Information Security and Quality Assurance Certification**.

## User stories

1. I will prevent _cross-site_ scripting (`XSS`) attacks setting the `X-XSS-Protection` header to prevent reflected `XSS` attacks.
2. I can `POST` <https://fcc-issue-tracker-project.herokuapp.com/api/issues/{projectname}> with form data containing required `issue_title`, `issue_text`, `created_by`, and optional `assigned_to` and `status_text`.
3. The object saved (and returned) will include all of those fields (blank for optional no input) and also include `created_on`(date/time), `updated_on`(date/time), `open`(boolean, true for open, false for closed), and `_id`.
4. I can `PUT` /api/issues/{projectname} with a `_id` and any fields in the object with a value to object said object. Returned will be _'successfully updated'_ or _'could not update '_ + `_id`. This should always update `updated_on` field. If no fields are sent return _'no updated field sent'_.
5. I can `DELETE` <https://fcc-issue-tracker-project.herokuapp.com/api/issues/{projectname}> with a `_id` to completely delete an issue. If no `_id` is sent return _'`_id` error'_, success: _'deleted `_id`'_, failed: _'could not delete `_id`'_.
6. I can `GET` <https://fcc-issue-tracker-project.herokuapp.com/api/issues/{projectname}> for an array of all issues on that specific project with all the information for each issue as was returned when posted.
7. I can filter my get request by also passing along any field and value in the query(ie. `/api/issues/{project}?open=false`).
8. I can pass along as many fields/values as I want.
9. All 11 functional tests are complete and passing.

## Example request

<https://fcc-issue-tracker-project.herokuapp.com/api/issues/{project}>
<https://fcc-issue-tracker-project.herokuapp.com/api/issues/{project}?open=true&assigned_to=Joe>

## Example response

`[{"_id":"5871dda29faedc3491ff93bb","issue_title":"Fix error in posting data","issue_text":"When we post data it has an error.","created_on":"2017-01-08T06:35:14.240Z","updated_on":"2017-01-08T06:35:14.240Z","created_by":"Joe","assigned_to":"Joe","open":true,"status_text":"In QA"},...]`

Coded with music, coffe and love by _Claudio Cortese_

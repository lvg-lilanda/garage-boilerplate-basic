# Requirements Specifications

**Version:** 2
**Date:** 10/8/2026

## Change Summary
Additional edge cases and acceptance criteria have been included to support development and testing. Clarified how the visual styling decisions are made. The acceptance criteria have been revised into the Given / When / Then format to improve clarity.

## Feature
A styled login page leading into a Team page.

## Team Page Content Fields

| Field | Required | Validation | Display Rule |
| ----- | -------- | ---------- | ------------ |
| Team Name | Yes | Cannot be empty | Displayed as the Team page heading |
| Member Photo | No | Image available for team member | Displayed first in the member card. Refer to edge cases if the photo is missing or cannot be loaded. |
| Member Name | Yes | Cannot be empty | Displayed below the member photo |
| Member Role | Yes | Cannot be empty | Displayed below the member's name |
| Member Blurb | No | Maximum 200 characters | Displayed below the role and wrapped within the card. Refer to edge cases if missing. |

## Login Scope
The login work is styling only. No changes should be made to the existing authentication logic or session behavior. The existing authentication flow provided by the boilerplate must remain unchanged.


## Visual Styling
The visual styling implementation will be based on the design decisions made by UX while ensuring that the required fields and content are included.

The colour palette will be determined by the UX and developers during the development stages, reviewed and adjusted with the BA, and approved by the PM.

The visual design may be reviewed and adjusted during the design phases to ensure that the final implementation meets the intended project requirements.

## Edge Cases
| Scenario | Expected Outcome |
| -------- | ---------------- |
| Invalid login credentials | The login attempt fails and the existing error message is displayed using the current error styling, positioned at the centre-top of the page instead of the current top-right position. |
| Required login field empty | The login attempt fails and the existing validation error message is displayed using the current error styling. |
| Direct Team page access without logging in** | The Team page redirects back to login if accessed directly without a session. The Team page is not accessible without valid login. |
| Member photo is missing | A placeholder image is displayed. |
| Member photo cannot be loaded | A placeholder image is displayed. |
| Member name is very long | The text wraps appropriately while maintaining the layout. |
| Member role is very long | The text wraps appropriately while maintaining the layout. |
| Member blurb exceeds the maximum length | The member blurb must not exceed 200 characters. |
| Member blurb is missing | An appropriate message is displayed, e.g. "No bio added". |
| No team members are available | An appropriate message is displayed, e.g. "No team members available" |
| Different screen sizes | Team members are displayed in a clear and responsive layout. The layout can be reviewed and adjusted accordingly during the design phase. |

## Acceptance Criteria

### Login Page Styling

Given the user is on the login page
When the login page is displayed
Then the approved styling requirements must be displayed.

### Login Page Authentication and Session Behaviour

Given the user has valid login credentials
When the user successfully logs in
Then the existing authentication logic and session behaviour must remain unchanged.

### Team Page Access

Given the user has valid login credentials
When the user successfully logs in
Then the user can access the Team page.

Given the user does not have a session
When the user attempts to access the Team page directly
Then the user must be redirected back to login.

### Invalid Login Errors

Given** the user is on the login page
When the user enters invalid login credentials
Then the login attempt must fail, and the existing error message must be displayed using the current error styling at the centre-top of the page.

Given the user is on the login page
When the user leaves a required field empty
Then the validation error message must be displayed using the current error styling.

### Team Name Display

Given the user has successfully logged in
When the Team page is displayed
Then the team's name must be displayed as the Team page heading.

### Team Member Information

Given team members are available
When the Team page is displayed
Then each team member must display their name, role, photo or placeholder, and blurb where provided.

### Missing Member Photo

Given a team member does not have a photo available
When the Team page is displayed
Then a placeholder image must be displayed in place of the missing photo.

### Member Photo Cannot Be Loaded

Given a team member has a photo that cannot be loaded
When the Team page attempts to display the photo
Then a placeholder image must be displayed.

### Long Member Name

Given a team member has a long name
When the Team page is displayed
Then the name must wrap appropriately while maintaining the layout.

### Long Member Role

Given a team member has a long role
When the Team page is displayed
Then the role must wrap appropriately while maintaining the layout.

### Long Member Blurb

Given a team member has a long blurb
When the Team page is displayed
Then the blurb must not exceed 200 characters.

### Missing Member Blurb

Given** a team member does not have a blurb
When the Team page is displayed
Then an appropriate message, such as "No bio added", must be displayed in place of the missing blurb.

### No Team Members

Given no team members are available
When the Team page is displayed
Then an appropriate message, such as "No team members available", must be displayed.

### Different Screen Sizes

Given the user accesses the pages in different screen sizes
When the page is displayed
Then the content must be displayed in a clear and responsive layout.

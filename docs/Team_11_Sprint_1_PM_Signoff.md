# Team 11 — Sprint 1 PM Sign-off

## Sign-off details

| Item | Detail |
|---|---|
| Project | COSC2408 Capstone Programming Project — Bootstrap Restyling |
| Team | Team 11 |
| Sprint | Sprint 1 |
| Product Manager | Ali Sina Sharifi |
| Sign-off date | 16 August 2026 |
| Repository | <https://github.com/lvg-lilanda/garage-boilerplate-basic> |
| Deployed application | <https://garage-boilerplate-basic-frontend-git-fe-fdf70a-li-landavaradan.vercel.app> |
| Sign-off status | **Approved** |

## Scope reviewed

The following Sprint 1 deliverables were reviewed:

- Restyled login page; with authentication logic, validation and session handling kept unchanged.
- Successful login and continuous to redirect to the protected team page.
- Protection of the team page from unauthenticated access.
- Team-member content and approved desktop and mobile layouts.
- Long member name and role handling.
- Long biography with **See more / See less** behaviour.
- Missing-photo and missing-biography edge cases.
- Deployment of the completed feature to Vercel.

## Evidence reviewed

- Updated Planner export: `Week 3 & 4 - BootStrap - Team 11.xlsx`
- Combined test procedure and screenshot evidence: `Testing-SCRIPT.md`
- Test execution results: `TEST-REPORT.md`
- Approved BA requirements and UX designs.
- Working GitHub repository and deployed Vercel link.

## Test outcome

| Result | Count |
|---|---:|
| Tests executed | 12 |
| Passed | 12 |
| Failed | 0 |
| Blocked | 0 |
| Defects recorded | 0 |

Testing was reassigned from Dinesh, Developer 2, to Anuji Peiris, BA acting as the independent tester. The recorded results confirm that the normal Login → Redirect → Team Page flow and the defined edge cases passed on the deployed application.

## Acceptance review

| Area | PM assessment |
|---|---|
| Deployment | Accepted — the Vercel link is accessible and the application loads. |
| Login presentation | Accepted — required elements are present; the placement of labels above the fields is a minor visual difference and does not change the required behaviour. |
| Valid login and redirect | Accepted — successful authentication redirects to the protected team page. |
| Invalid login | Accepted — invalid credentials do not provide access. |
| Protected-route redirect | Accepted — direct team-page access while logged out redirects to login. |
| Team-page content | Accepted — required member information is displayed. |
| Desktop and mobile layouts | Accepted based on the recorded test results and evidence. |
| See more / See less | Accepted — the biography can be expanded and collapsed. |
| Missing content cases | Accepted — missing photo and missing biography states were tested. |
| Defect handling | No defects were found; bug logging and bug-fix retesting are therefore not applicable. |


## PM decision

Based on the evidence reviewed, the Sprint 1 feature is functionally acceptable and no release-blocking dedfects have been identified. I approve the sprint1 feature to complete and signed off.

## Final declaration

**PM:** Ali Sina Sharifi  
**Final approval date:** 16 Aug 2026  
**Signature/initials:** Ali Sina Sharifi
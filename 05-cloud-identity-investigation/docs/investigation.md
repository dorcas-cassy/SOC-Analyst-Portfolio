# Case ID-2026-011 — suspected cloud account compromise

**Severity:** High &nbsp; | &nbsp; **Status:** Contained in lab

## Timeline and reasoning

| Time (UTC) | Evidence | Assessment |
| --- | --- | --- |
| 03:12 | Successful Entra sign-in from `198.51.100.67`, country `BR`, new browser | Unusual relative to synthetic baseline; not proof alone |
| 03:22 | `New-InboxRule` adds forwarding to `external-recipient@example.net` | High-risk post-authentication behavior |
| 03:28 | Sessions revoked; password reset; rule removed | Lab containment action |

The new-country sign-in should be verified against travel, VPN egress, and device-registration context. Here, the sign-in and externally forwarding rule share the user, IP, and a ten-minute window, creating a stronger compromise assessment than either event individually.

## Containment and scope

Disable or reset the account according to policy, revoke refresh tokens/sessions, remove malicious rules and delegated access, and require MFA re-registration if appropriate. Review Entra audit logs for credential/MFA changes, Exchange activity for other forwarding or search activity, OAuth app consent, and sign-ins for similarly targeted accounts. Preserve the relevant audit events before changing access. Map confirmed valid-account abuse to **T1078** and email forwarding/collection to **T1114.003**.

The addresses and accounts are reserved, synthetic examples; this document does not describe a real tenant incident.

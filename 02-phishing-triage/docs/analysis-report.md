# Case PH-2026-017 — credential-harvesting email

**Severity:** Medium (raise to High if credential submission is confirmed) &nbsp; | &nbsp; **Verdict:** Malicious

## Evidence-led assessment

| Field | Observed value | Interpretation |
| --- | --- | --- |
| Display name | `SharePoint Notifications` | Brand impersonation; not an identity signal |
| Header From | `northwind-docs.example` | Not an approved document-sharing domain |
| Return path | `bounce@northwind-docs.example` | Consistent with sender infrastructure, but untrusted |
| Authentication | SPF, DKIM, and DMARC all fail | Strong spoofing indicator |
| URL | `contoso-sharepoint.example/login` | Look-alike domain, not the company tenant |
| Theme | Compensation plan / urgency | Plausible pretext designed to drive credential entry |

## Indicators

Use indicators only in approved security tools; do not browse to the URL.

| Type | Value | Action |
| --- | --- | --- |
| Domain | `northwind-docs.example` | Block/search mail telemetry |
| Domain | `contoso-sharepoint.example` | Block in DNS/web controls; search proxy logs |
| IP | `198.51.100.44` | Search email gateway records; example-only address |

## Scope and response

1. Quarantine matching messages using the subject, sender domain, and URL pattern.
2. Search mail delivery and click telemetry; notify recipients who received the message.
3. If a recipient clicked, review sign-in logs for new device, MFA, inbox-rule, or OAuth-consent activity. If credentials were entered, reset password and revoke sessions.
4. Block the domains in the mail and web layers, then monitor for variations rather than relying on one exact string.
5. Record actions and close only after the delivery/click search is complete.

No claim is made that a real user submitted credentials; this is a synthetic exercise.

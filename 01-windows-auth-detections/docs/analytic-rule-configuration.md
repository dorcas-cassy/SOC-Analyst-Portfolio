# Microsoft Sentinel analytic-rule configuration

Use [`../detections/password-spray.kql`](../detections/password-spray.kql) as the query for a **Scheduled query rule**.

| Setting | Recommended value | Reason |
| --- | --- | --- |
| Name | `AFW - Password spray against multiple accounts` | Describes behavior, not a verdict |
| Run query every | 5 minutes | Matches the aggregation window |
| Lookup data from last | 15 minutes | Captures delayed ingestion and overlapping bins |
| Alert threshold | Greater than 0 | Query already applies the account threshold |
| Severity | Medium | Promote to High only after contextual correlation |
| Tactics / techniques | Credential Access / T1110.003 | Aligns alert with the behavior observed |
| Entity mapping | `IpAddress` → IP; accounts array → Account; hosts array → Host | Makes investigation pivots faster |
| Automation | Create incident; do not auto-disable account | Prevents disruptive action on count-only evidence |

## Testing plan

1. Confirm normal bad-password activity produces no alert when fewer than five distinct accounts are involved.
2. Use approved historical lab events or a controlled test to verify that five distinct 4625 events from one non-loopback source create exactly one result.
3. Verify the entity mappings render source IP, accounts, and hosts in the incident.
4. Run the RDP-correlation query manually against the same period; confirm it joins only appropriate same-source events.
5. Document expected managed-service, scanner, and identity-sync behavior before adding any exclusion. Every exclusion needs an owner and review date.

## Tuning guardrails

Do not exclude a whole internal subnet solely because the source is internal. The case scenario demonstrates why that creates a blind spot. Prefer a reviewed watchlist for approved VPN egress or named service infrastructure. Revisit the five-account threshold after 30 days of baseline data and record the change in your change-management system.

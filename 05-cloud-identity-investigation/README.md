# Cloud Identity Investigation: Risky Sign-in and Inbox Rule

An Entra ID / Microsoft 365 investigation that correlates an unusual successful sign-in with a newly created mailbox forwarding rule. The supplied events are synthetic and the KQL expects Microsoft Sentinel tables such as `SigninLogs` and `OfficeActivity`.

## Scenario

`maria.chen@contoso.example` successfully signs in from a new country and user agent. Ten minutes later, the account creates a mailbox rule that forwards messages externally. The combination is assessed as a likely account compromise in this lab.

## Contents

| File | Purpose |
| --- | --- |
| [`detections/new-country-signin.kql`](detections/new-country-signin.kql) | Baseline-aware candidate detection |
| [`detections/inbox-forwarding-rule.kql`](detections/inbox-forwarding-rule.kql) | Searches Exchange audit activity |
| [`docs/investigation.md`](docs/investigation.md) | Timeline, rationale, containment |
| [`sample-data/identity-events.csv`](sample-data/identity-events.csv) | Safe synthetic event excerpt |

## Skills demonstrated

Cloud log analysis • KQL • identity containment • mailbox-rule triage • correlation • MITRE ATT&CK T1078 and T1114.003

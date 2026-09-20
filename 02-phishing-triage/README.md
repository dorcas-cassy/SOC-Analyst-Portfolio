# Phishing Triage: Fake SharePoint Notification

A complete, safe phishing-analysis case built from a synthetic email. This project focuses on the decision process a SOC analyst uses—preserving evidence, validating authentication, extracting indicators, scoping exposure, and communicating a response.

## Verdict

**Malicious — credential-harvesting attempt.** The displayed sender impersonates a document-sharing service, but the return path, sending domain, and destination URL do not belong to the organization. SPF and DKIM fail, and DMARC does not align.

## Contents

| File | Purpose |
| --- | --- |
| [`artifacts/sanitized-message.eml.txt`](artifacts/sanitized-message.eml.txt) | Safe text representation; no active links or attachment |
| [`docs/analysis-report.md`](docs/analysis-report.md) | Case notes, IOCs, and response decision |
| [`docs/email-triage-checklist.md`](docs/email-triage-checklist.md) | Reusable workflow for future tickets |

## Skills demonstrated

Email header analysis • SPF/DKIM/DMARC interpretation • URL deobfuscation • IOC handling • user-impact assessment • stakeholder communication

# LOLBin Threat Hunt: Suspicious PowerShell

A hypothesis-driven hunt for encoded PowerShell launched by Office applications. The content targets Microsoft Sentinel's `DeviceProcessEvents` table (Defender for Endpoint connector) and can be adapted to Sysmon event data.

## Hunt hypothesis

If a user was targeted with a malicious document, an Office process may launch PowerShell with encoded or download-oriented command-line arguments. Such behavior is unusual in this lab and warrants investigation.

## Contents

| File | Purpose |
| --- | --- |
| [`detections/office-to-powershell.kql`](detections/office-to-powershell.kql) | Hunt query with relevant fields |
| [`detections/encoded-powershell.kql`](detections/encoded-powershell.kql) | Candidate detection query |
| [`docs/hunt-report.md`](docs/hunt-report.md) | Finished hunt report and decision logic |
| [`sample-data/process-events.csv`](sample-data/process-events.csv) | Synthetic process tree evidence |

## Skills demonstrated

Threat-hunting methodology • process-tree analysis • PowerShell triage • KQL • MITRE ATT&CK T1059.001 / T1204.002 • documented false-positive handling

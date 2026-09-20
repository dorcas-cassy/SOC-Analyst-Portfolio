# Hunt HUNT-2026-004 — Office spawning PowerShell

## Method

Ran the Office-to-scripting hunt across 30 days of synthetic endpoint telemetry, then pivoted from each candidate to file origin, command line, network connections, and persistence events. The hunt produced two results.

| Device | Finding | Assessment |
| --- | --- | --- |
| `HR-LT-07` | `WINWORD.EXE` launched PowerShell with `-NoP -EncodedCommand` from a Downloads document | Suspicious; escalate |
| `IT-ADMIN-02` | Explorer launched a documented inventory script | Benign administrative activity |

## Analyst conclusion

The `HR-LT-07` chain is suspicious because an Office document from Downloads directly spawned obfuscated PowerShell. The base64 value in the sample decodes only to a harmless lab marker, but the parent/child relationship and evasion flags justify containment and deeper review in a real environment. Collect the document hash, isolate the device if execution is unapproved, review PowerShell operational logs and network events, and search for the document/hash across endpoints. Do not automatically suppress all Office-to-PowerShell activity: use approved signer, path, device group, and change-ticket context to tune.

# Email triage checklist

1. Preserve the original message and record the reporter, recipient, and receipt time.
2. Compare display name, From, Reply-To, Return-Path, and Received headers.
3. Check SPF, DKIM, and DMARC alignment; failures are evidence, not the entire verdict.
4. Extract and defang URLs, attachment names, hashes, and sender infrastructure. Never execute an attachment or visit an untrusted URL from a production endpoint.
5. Search delivery, click, and sign-in telemetry to establish scope and impact.
6. State a clear verdict with supporting evidence, actions taken, and any uncertainty.

# Triage playbook — password spray followed by RDP success

## First 15 minutes

1. Validate the alert fields: time range, source IP, distinct account count, failure reason, and affected domain controllers.
2. Run [`rdp-after-failure.kql`](../detections/rdp-after-failure.kql). Identify whether a targeted account had a later RDP success from the same source.
3. Run [`source-not-on-approved-vpn.kql`](../detections/source-not-on-approved-vpn.kql). Treat a watchlist match as context, not a clean bill of health.
4. Check the user and source against the change calendar, VPN logs, asset inventory, and approved admin activity.
5. Contact the user through a trusted channel—not an email reply—to confirm location, device, and remote-session activity.

## Escalate to High when

- a targeted account successfully logs in from the same source;
- the source is unapproved, unknown, or has poor reputation;
- the account is privileged or the endpoint handles regulated/high-value data; or
- the user denies the activity or cannot be reached during a time-sensitive window.

## Containment decision

Request identity and endpoint containment when high-confidence signals exist. Preserve relevant logs and endpoint evidence before making changes where policy requires it. Coordinate a safe alternative with the business owner; an analyst should state the operational impact, not silently leave a potentially compromised endpoint online because it is important.

## Minimum case notes

Record the query time range, raw event identifiers, source classification, user-verification result, containment approvals/actions, assets searched, and remaining uncertainty. A good handoff lets another analyst reproduce your conclusion without needing a verbal explanation.

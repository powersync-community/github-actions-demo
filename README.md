## GitHub Actions Sync Rules Demo

This repository shows how to deploy PowerSync sync rules to an instance whenever a push to the `main` branch includes changes to `sync-rules.yaml`. The included GitHub Actions workflow installs the PowerSync CLI and runs the deployment command automatically.

## Prerequisites

- A PowerSync instance.
- GitHub repository secrets named:
  - `POWERSYNC_AUTH_TOKEN`
  - `POWERSYNC_INSTANCE_ID`
  - `POWERSYNC_PROJECT_ID`
  - `POWERSYNC_ORG_ID`

## Getting the Auth Token

1. Sign in to the PowerSync dashboard.
2. Generate a personal access token with permissions to deploy sync rules.
3. Store the token in your repository secrets as `POWERSYNC_AUTH_TOKEN`.
4. Copy your PowerSync instance ID from the dashboard and store it as `POWERSYNC_INSTANCE_ID`.
5. From the dashboard URL, copy your project ID and organization ID and store them as `POWERSYNC_PROJECT_ID` and `POWERSYNC_ORG_ID`.

With the token and instance ID in place, the workflow will authenticate and deploy your sync rules whenever the `sync-rules.yaml` file changes on the `main` branch.

## Node Sample

The `node/` directory contains a simple Node project that connects to PowerSync, runs `SELECT * FROM lists` and `SELECT * FROM todos`, and logs the results. It exists purely as a demo alongside the GitHub Actions workflow.


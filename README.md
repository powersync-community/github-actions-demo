## GitHub Actions Deploy Sync Streams Demo

This repository shows how to deploy PowerSync Sync Config to an instance whenever a push to the `main` branch includes changes to `sync_config.yaml`. The included GitHub Actions workflow installs the PowerSync CLI and runs the deployment command automatically.

## Prerequisites

- A PowerSync instance.
- GitHub repository secrets named:
  - `POWERSYNC_AUTH_TOKEN`
  - `POWERSYNC_INSTANCE_ID`
  - `POWERSYNC_PROJECT_ID`
  - `POWERSYNC_ORG_ID`

## Getting the GitHub secrets

1. Sign in to the PowerSync Dashboard.
2. Generate a personal access token.
3. Store the token in your repository secrets as `POWERSYNC_AUTH_TOKEN`.
4. Copy your PowerSync instance ID from the dashboard and store it as `POWERSYNC_INSTANCE_ID`.
5. From the dashboard URL, copy your project ID and organization ID and store them as `POWERSYNC_PROJECT_ID` and `POWERSYNC_ORG_ID`.

## Node Sample

The `node/` directory contains a simple Node project that connects to PowerSync, runs `SELECT * FROM lists` and `SELECT * FROM todos`, and logs the results. It exists purely as a demo alongside the GitHub Actions workflow.


import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'f732bn2a',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
  },
})

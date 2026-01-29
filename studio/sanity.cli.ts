import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'v8ngbpl7',
    dataset: 'production',
  },
  deployment: {
    appId: 'y0w8rynwn5adok0ihmz9fx4v',
    autoUpdates: true,
  },
})

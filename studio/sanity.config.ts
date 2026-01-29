import { table } from '@sanity/table';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { media } from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'Wild & Wonderful Wellness',

  projectId: 'v8ngbpl7',
  dataset: 'production',
  studioUrl: '/studio',

  plugins: [
    structureTool({ structure }),
    media(),
    table(),
    visionTool()
  ],
  schema: {
    // @ts-ignore
    types: schemaTypes,
  },
})

import { defineConfig } from 'histoire'
import { HstVue, defineSetupVue3 } from '@histoire/plugin-vue'

import TestLib from '@histoire-bug/test-lib'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
    app.use(TestLib)
})

export default defineConfig({
  plugins: [
    HstVue(),
  ],
})
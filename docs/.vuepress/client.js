import { defineClientConfig } from 'vuepress/client'
import DownloadPanel from './components/DownloadPanel.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DownloadPanel', DownloadPanel)
  },
})

import { defineConfig, loadEnv } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.APP_ENV': JSON.stringify(env.APP_ENV),
      'process.env.APP_DEBUG': env.APP_DEBUG,
      'process.env.LOG_LEVEL': JSON.stringify(env.LOG_LEVEL),
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
    assetsInclude: [
      '!(index).html',
    ],
    plugins: [
      nunjucks({
        // Definir les variables globals aquí
        variables: {
            '*': {
                author: 'Profes DAW'
            }
        },
      })
    ]
  }
})
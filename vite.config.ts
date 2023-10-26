import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import Windicss from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import {resolve} from 'path'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  css:{
    postcss:{
      plugins:[autoprefixer({overrideBrowserslist:['chrome > 40','ff > 31','ie 11']})],
    }
  },
  resolve:{
    alias:[{
      find:'@',
      replacement:resolve(__dirname,'src')
    }]
  },
  plugins: [
    vue(),
    Windicss(),
    Components({
      resolvers:[
        AntDesignVueResolver({
          importStyle:false
        })
      ]
    }),
    legacy({
      targets:["cover 99.5%"],
    }),
  ],
  optimizeDeps:{
    include:["core-js"]
  }
})

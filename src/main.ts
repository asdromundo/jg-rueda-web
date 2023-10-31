import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#1060a4",
    "on-primary": "##f8fdff",
    secondary: "#bd1300",
    "on-secondary": "##f8fdff",
    tertiary: "#256c2c",
    background: "#f8fdff",
    surface: "#f8fdff",
    error: "#ba1a1a",
    info: "#256c2c",
    success: "#1060a4",
    warning: "#ba1a1a",
  },
}
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
      darkTheme,
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

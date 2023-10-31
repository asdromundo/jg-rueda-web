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
//Material Design 3


const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#1060a4",
    "on-primary": "#f8fdff",
    "primary-container": "#d2e4ff",
    "on-primary-container": "#001c38",
    secondary: "#bd1300",
    "on-secondary": "#f8fdff",
    "secondary-container": "#ffdad4",
    "on-secondary-container": "#400200",
    tertiary: "#256c2c",
    "on-tertiary": "#a9f5a4",
    "tertiary-container": "#a9f5a4",
    "on-tertiary-container": "#002204",
    background: "#f8fdff",
    "on-background": "#001f25",
    surface: "#f8fdff",
    "on-surface":"#001f25",
    "surface-variant": "#dfe2eb",
    "on-surface-variant": "#43474e",
    error: "#ba1a1a",
    "on-error": "#ffffff",
    info: "#256c2c",
    success: "#1060a4",
    warning: "#ba1a1a",
    "outline": "#73777f",
    },
}
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#a1c9ff",
    "on-primary": "#00325a",
    "primary-container": "#004880",
    "on-primary-container": "#d2e4ff",
    secondary: "#ffb4a6",
    "on-secondary": "#670600",
    "secondary-container": "#900c00",
    "on-secondary-container": "#ffdad4",
    tertiary: "#8ed88a",
    "on-tertiary": "#00390c",
    "tertiary-container": "#035316",
    "on-tertiary-container": "#a9f5a4",
    background: "#001f25",
    "on-background": "#a6eeff",
    surface: "#001f25",
    "on-surface":"#a6eeff",
    "surface-variant": "#43474e",
    "on-surface-variant": "#c3c6cf",
    error: "#ffb4ab",
    "on-error": "#690005",
    info: "#256c2c",
    success: "#1060a4",
    warning: "#ba1a1a",
    "outline": "#8d9199",
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

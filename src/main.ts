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
import { md3 } from 'vuetify/blueprints'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1060a4',
    'on-primary': '#f8fdff',
    'primary-container': '#D3E4FF',
    'on-primary-container': '#001c38',
    secondary: '#545F70',
    'on-secondary': '#f8fdff',
    'secondary-container': '#D7E3F8',
    'on-secondary-container': '#101C2B',
    tertiary: '#BD1300',
    'on-tertiary': '#f8fdff',
    'tertiary-container': '#FFDAD4',
    'on-tertiary-container': '#400200',
    background: '#FDFAE9',
    'on-background': '#001f25',
    surface: '#FDFAE9',
    'on-surface': '#1C1C17',
    'surface-variant': '#DFE2EB',
    'on-surface-variant': '#43474E',
    error: '#ba1a1a',
    'on-error': '#ffffff',
    info: '#256c2c',
    success: '#1060a4',
    warning: '#ba1a1a',
    outline: '#73777f'
  }
}
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#A1C9FF',
    'on-primary': '#00325B',
    'primary-container': '#004880',
    'on-primary-container': '#d2e4ff',
    secondary: '#BBC7DB',
    'on-secondary': '#263141',
    'secondary-container': '#3C4858',
    'on-secondary-container': '#D7E3F8',
    tertiary: '#FFB4A6',
    'on-tertiary': '#670600',
    'tertiary-container': '#900C00',
    'on-tertiary-container': '#FFDAD4',
    background: '#1C1C17',
    'on-background': '#E6E2DA',
    surface: '#14140F',
    'on-surface': '#C9C6BE',
    'surface-variant': '#43474e',
    'on-surface-variant': '#c3c6cf',
    error: '#FFB4AB',
    'on-error': '#690005',
    info: '#256c2c',
    success: '#1060a4',
    warning: '#ba1a1a',
    outline: '#8d9199'
  }
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
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  },
  blueprint: md3
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

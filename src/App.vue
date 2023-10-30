<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

let data = ref({
  drawer: false,
  showButton: false,
  drawerButtonShape: 'rounded'
})
</script>

<template>
  <v-app ref="app" class="rounded rounded-md bg-surface-variant">
    <v-app-bar color="" permanent>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          :class="data.drawerButtonShape"
          @click.stop="data.drawer = !data.drawer"
          class="d-sm-none"
        />
      </template>

      <v-app-bar-title>Juan Gustavo Rueda Escobedo</v-app-bar-title>

      <div class="d-none d-sm-block text-blue-darken-3">
        <v-btn to="/" variant="text" class="text-none text-subtitle-1 mr-1">Home</v-btn>
        <v-btn to="/publications" variant="text" class="text-none text-subtitle-1 mr-1">Publications</v-btn>
        <v-btn to="/about" variant="text" class="text-none text-subtitle-1 mr-1">About</v-btn>
        <v-btn to="/contact" variant="text" class="text-none text-subtitle-1 mr-1">Contact</v-btn>
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="data.drawer">
      <v-list-item title="Site" subtitle="Navegation"></v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item to="/publications" title="Publications"></v-list-item>
      <v-list-item to="/about" title="About"></v-list-item>
      <v-list-item to="/contact" title="Contact"></v-list-item>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>

    <v-footer>
      <v-btn class="mr-auto" variant="text"> Get data </v-btn>
    </v-footer>
  </v-app>
</template>



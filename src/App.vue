<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const darkMode = computed(() => {
  return theme.global.current.value.dark
})

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}

let data = ref({
  drawer: false
})
</script>

<template>
  <v-app app theme="theme">
    <v-app-bar :elevation="8">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click.stop="data.drawer = !data.drawer"
          class="d-md-none"
          rounded="lg"
        />
      </template>

      <v-app-bar-title class="font-weight-black text-primary"
        >Juan Gustavo Rueda Escobedo</v-app-bar-title
      >

      <div class="d-none d-md-flex text-primary">
        <v-btn to="/" variant="text" class="text-none text-subtitle-1 font-weight-bold">Home</v-btn>
        <v-btn to="/publications" variant="text" class="text-none text-subtitle-1 font-weight-bold"
          >Publications</v-btn
        >
        <v-btn to="/about" variant="text" class="text-none text-subtitle-1 font-weight-bold"
          >About</v-btn
        >
        <v-btn to="/contact" variant="text" class="text-none text-subtitle-1 font-weight-bold"
          >Contact</v-btn
        >
      </div>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" size="small"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="data.drawer" class="d-md-none" temporary>
      <v-list-item title="Site" subtitle="Navegation"></v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item to="/publications" title="Publications"></v-list-item>
      <v-list-item to="/about" title="About"></v-list-item>
      <v-list-item to="/contact" title="Contact"></v-list-item>
    </v-navigation-drawer>

    <v-main class="align-center justify-center h-100" :class="darkMode ? 'dark-main' : 'main'">
      <v-container class="container">
        <RouterView />
      </v-container>
    </v-main>

    <v-footer class="">
      <v-card></v-card>
      <v-btn class="mx-auto" variant="text"> Footer </v-btn>
    </v-footer>
  </v-app>
</template>

<style scoped>
.main {
  background-image: url('/texture_400x400.jpg'); /* Propiedad background para recortar y centrar la imagen */
  background-repeat: repeat;
}

.dark-main {
  background-repeat: repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/texture_400x400.jpg');
}

.container {
  background: var(--var-theme-primary);
  max-width: 1440px;
  min-width: 300px;
}
</style>

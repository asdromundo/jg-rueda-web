<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';
}

let data = ref({
  drawer: false,
})
</script>

<template>
  <v-app app theme="theme">
    <v-app-bar :elevation="8">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click.stop="data.drawer = !data.drawer"
          class="d-sm-none"
          rounded="lg"
        />
      </template>

      <v-app-bar-title>Juan Gustavo Rueda Escobedo</v-app-bar-title>

      <div class="d-none d-sm-flex text-primary">
        <v-btn to="/" variant="text" class="text-none text-subtitle-1">Home</v-btn>
        <v-btn to="/publications" variant="text" class="text-none text-subtitle-1">Publications</v-btn>
        <v-btn to="/about" variant="text" class="text-none text-subtitle-1">About</v-btn>
        <v-btn to="/contact" variant="text" class="text-none text-subtitle-1">Contact</v-btn>
      </div>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" size="small"></v-btn>
     
    </v-app-bar>

    <v-navigation-drawer v-model="data.drawer" class="d-sm-none" temporary>
      <v-list-item title="Site" subtitle="Navegation"></v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item to="/publications" title="Publications"></v-list-item>
      <v-list-item to="/about" title="About"></v-list-item>
      <v-list-item to="/contact" title="Contact"></v-list-item>
    </v-navigation-drawer>

    <v-main class="align-center justify-center h-100 main">
      <v-container class="max-width">
        <RouterView />
      </v-container>
    </v-main>

    <v-footer class="">
      <v-card></v-card>
      <v-btn class="mx-auto " variant="text"> Footer </v-btn>
    </v-footer>
  </v-app>
</template>

<style scoped>
.main {
  background: url('/texture_400x400.jpg'); /* Propiedad background para recortar y centrar la imagen */
  background-repeat: repeat;
}

.max-width {
  max-width: 1440px;
}
</style>

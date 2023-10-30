<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue';

let data = ref({
  drawer: false,
})
</script>

<template>
  <v-card>
    <v-layout class="rounded rounded-md">
      <v-app-bar
        color="teal-darken-4"
        permanent
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="data.drawer = !data.drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Juan Gustavo Rueda Escobedo</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn to="/" variant="text" class="text-none text-subtitle-1">Home</v-btn>
        <v-btn to="/publications" variant="text" class="text-none text-subtitle-1">Publications</v-btn>
        <v-btn to="/about" variant="text" class="text-none text-subtitle-1">About</v-btn>
        <v-btn to="/contact" variant="text" class="text-none text-subtitle-1">Contact</v-btn>
      </v-app-bar>

      <v-navigation-drawer
      v-model="data.drawer">
        <v-list-item title="Site" subtitle="Navegation"></v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/publications" title="Publications"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
        <v-list-item to="/contact" title="Contact"></v-list-item>
      </v-navigation-drawer>

      <v-main
      class="rounded rounded-md"
      style="min-height: 300px;"
      >
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

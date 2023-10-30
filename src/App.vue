<script setup lang="ts">
import { RouterView } from 'vue-router'

let toggleDrawer = false;
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="toggleDrawer = !toggleDrawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Juan Gustavo Rueda Escobedo</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn to="/" variant="text" class="text-none text-subtitle-1">Home</v-btn>
        <v-btn to="/publications" variant="text" class="text-none text-subtitle-1">Publications</v-btn>
        <v-btn to="/about" variant="text" class="text-none text-subtitle-1">About</v-btn>
        <v-btn to="/contact" variant="text" class="text-none text-subtitle-1">Contact</v-btn>
      </v-app-bar>

      <v-navigation-drawer>
        <v-list-item title="Site" subtitle="Navegation"></v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/publications" title="Publications"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
        <v-list-item to="/contact" title="Contact"></v-list-item>
      </v-navigation-drawer>

      <v-main>
          <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

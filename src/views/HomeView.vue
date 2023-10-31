<script setup lang="ts">
import { VCol } from 'vuetify/components'
</script>

<template>
  <div>
    <v-card class="pa-10 primary-container">
      <v-responsive :aspect-ratio="16 / 9">
        <v-card
          :elevation="8"
          class="secondary-container d-flex align-left justify-center flex-column"
        >
          <p class="pa-5 title text-h5 text-md-h3 text-lg-h1">Bienvenido a mi sitio web</p>
        </v-card>
      </v-responsive>
      <v-row align="start" no-gutters>
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2 ma-2"> .align-start </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped>
.primary-container {
  background: rgb(var(--v-theme-primary-container));
  color: rgb(var(--v-theme-on-primary-container));
  outline-color: rgb(var(--v-theme-outlined));
}

.secondary-container {
  background: rgb(var(--v-theme-secondary-container));
  background-image: url('/banner.jpg');
  background-repeat: repeat;
  background-position: center center;
  color: rgb(var(--v-theme-on-secondary-container));
  outline-color: rgb(var(--v-theme-outlined));
}
</style>
<!--  .secondary-container{
  background: rgb(var(--v-theme-secondary-container));
  color: rgb(var(--v-theme-on-secondary-container));
  outline-color: rgb(var(--v-theme-outlined));
}  -->

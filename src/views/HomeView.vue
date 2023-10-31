<script setup lang="ts">
import { VCol } from 'vuetify/components'
</script>

<template>
  <div>
    <v-card class="justify-center align-center pa-5 primary-container">
      <v-col
      align="center">
      <v-card :elevation="8" class="image-card secondary-container">
        <v-row no-gutters align="center">
          <v-col class="title text-h5 text-md-h3 text-lg-h1" cols="5">
            <p class="pa-5">Bienvenido a mi sitio web</p>
            <v-img src="/sub-banner.jpeg"></v-img>
          </v-col>
          <v-col cols="7">
            <!-- <v-img src="/banner.jpg" class="banner"></v-img> -->
            <v-container class="banner"></v-container>
          </v-col>  
        </v-row>
      </v-card>

      </v-col>
      <v-row align="start" no-gutters>
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2 ma-2"> .align-start </v-sheet>
        </v-col>
      </v-row>
      

    </v-card>
  </div>

</template>

<style scoped>

.banner {
  background-image: "/banner.jpg";
  height: 400px;
  object-fit: cover;
}

.primary-container{
  background: rgb(var(--v-theme-primary-container));
  color: rgb(var(--v-theme-on-primary-container));
  outline-color: rgb(var(--v-theme-outlined));
}

.secondary-container{
  background: rgb(var(--v-theme-secondary-container));
  background-image: url("/banner.jpg");
  color: rgb(var(--v-theme-on-secondary-container));
  outline-color: rgb(var(--v-theme-outlined));
}

.title {
  text-align: left;
  z-index: 1;
  font-weight: bolder;
  overflow-wrap: normal;
}

</style>
<!--  .secondary-container{
  background: rgb(var(--v-theme-secondary-container));
  color: rgb(var(--v-theme-on-secondary-container));
  outline-color: rgb(var(--v-theme-outlined));
}  -->
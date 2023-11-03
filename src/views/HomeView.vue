<script setup lang="ts">
import { VCol } from 'vuetify/components'
</script>

<template>
  <v-col class="pa-0">
    <v-card class="w-100">
      <v-img src="/banner_long.jpg">
        <v-card-title 
          class="text-primary font-weight-black text-h6 text-md-h3 pa-10 align-center"
          style="overflow-wrap: anywhere; white-space: normal; max-width: 45%; line-height: 3.5rem"
          >
          Department on Automatic Control
        </v-card-title>
        <v-card-subtitle
        class="ml-10 font-weight-black text-h6"
        style="overflow-wrap: anywhere; white-space: normal; max-width: 30%;"
        >
          <i>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</i>
          <p>"No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor."</p>
        </v-card-subtitle>
        <v-btn class="text-none text-subtitle-1 ml-10 mt-4" size="x-large" color="error">Welcome</v-btn>
      </v-img>
    </v-card>
  </v-col>
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

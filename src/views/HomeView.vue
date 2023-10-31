<script setup lang="ts">
import { VCol } from 'vuetify/components'
</script>

<template>
  <div>
    <v-container class="justify-center align-center pa-0">
      <v-col
      align="center">
        <v-card :elevation="8">
          <v-img
          src="/banner.jpg"
          class="primary text-left align-center text-h4 text-md-h2 text-lg-h1"
          centered>
            Bienvenido a mi sitio web
          </v-img>
        </v-card>

      </v-col>
      <v-row align="start" no-gutters>
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2 ma-2"> .align-start </v-sheet>
        </v-col>
      </v-row>
      

    </v-container>
  </div>

</template>

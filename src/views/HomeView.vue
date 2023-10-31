<script setup lang="ts">
import { VCol } from 'vuetify/components'
</script>

<template>
  <div>
    <v-container>
      <v-row align="start" no-gutters>
        <v-col v-for="n in 3" :key="n">
          <v-sheet class="pa-2 ma-2"> .align-start </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-sheet class="mx-auto rounded-xl" color="grey-lighten-3" elevation="8" width="95%">
    <div>
      <!-- Fila principal -->
      <v-row>
        <!-- Primera columna con ancho 6 en dispositivos grandes y extra grandes, y 12 en dispositivos pequeños y medianos -->
        <v-col cols="6" md="4">
          <v-sheet
            max-width="64"
            class="mx-auto mt-8"
            elevation="12"
            height="128"
            width="100%"
          ></v-sheet>

          <v-sheet
            max-width="128"
            class="mx-auto mt-8"
            elevation="12"
            height="128"
            width="100%"
          ></v-sheet>
        </v-col>

        <!-- Segunda columna con ancho 6 en dispositivos grandes y extra grandes, y 12 en dispositivos pequeños y medianos -->
        <v-col cols="6" md="4">
          <v-sheet
            max-width="256"
            class="mx-auto mt-8"
            elevation="12"
            height="128"
            width="100%"
          ></v-sheet>
        </v-col>
      </v-row>

      <!-- Otra fila -->
      <v-row>
        <!-- Columna con ancho 12 en todos los tamaños de pantalla -->
        <v-col cols="12">
          <!-- Contenido de la columna -->
          <!-- ... -->
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

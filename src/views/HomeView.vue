<script setup lang="ts">
import { VCol } from 'vuetify/components'
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<template>
  <v-col class="pa-0">
    <v-card class="w-100">
      <div class="title">
        <!-- On smaller devices -->
        <v-container class="d-md-none pa-4" align="center">
          <v-card-title
            class="text-primary font-weight-bold text-h4 text-md-h5 text-lg-h3 pa-8 align-center"
            style="overflow-wrap: anywhere; white-space: normal; line-height: normal"
          >
            Department on Automatic Control
          </v-card-title>
          <v-card-subtitle
            class="font-weight-bold text-body-2 text-justify"
            style="overflow-wrap: anywhere; white-space: normal"
          >
            <i
              >"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit..."</i
            >
            <p>
              "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera,
              simplemente porque es el dolor."
            </p>
          </v-card-subtitle>
          <v-btn
            class="text-none font-weight-bold text-subtitle-1 mx-auto"
            size="x-large"
            color="tertiary"
            >Welcome</v-btn
          >
        </v-container>
        <!-- On large devices -->
        <v-container class="overlay-container d-none d-md-block pa-0">
          <v-card-title
            class="text-primary font-weight-bold text-h5 text-lg-h3 mx-10 mt-10 align-center"
            style="
              overflow-wrap: anywhere;
              white-space: normal;
              max-width: 35%;
              line-height: normal;
            "
          >
            Department on Automatic Control
          </v-card-title>
          <v-card-subtitle
            class="ml-10 font-weight-bold text-body-2"
            style="overflow-wrap: anywhere; white-space: normal; max-width: 35%"
          >
            <i
              >"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit..."</i
            >
            <p>
              "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera,
              simplemente porque es el dolor."
            </p>
          </v-card-subtitle>
          <v-btn
            class="text-none font-weight-bold text-subtitle-1 ml-12 mt-4"
            size="x-large"
            color="tertiary"
            >Welcome</v-btn
          >
        </v-container>
      </div>
      <v-img
        src="/banner_long.jpg"
        :style="{ filter: theme.global.current.value.dark ? 'brightness(50%)' : 'none' }"
      />
    </v-card>
    <!-- End banner image -->
    <v-row no-gutters>
      <v-col class="text-justify d-flex" cols="12" sm="6" lg="3" style="flex-direction: : column;">
        <v-card class="pa-6">
          <v-card-title class="text-h6 text-md-h4 text-primary font-weight-black">
            Home
          </v-card-title>
          <v-card-text>
            <p>
              "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera,
              simplemente porque es el dolor."
            </p>
            <v-img src="/banner.jpg"></v-img>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              color="primary"
              class="text-none font-weight-bold"
              size="x-large"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="text-justify d-flex" cols="12" sm="6" lg="3" style="flex-direction: : column;">
        <v-card class="pa-6">
          <v-card-title class="text-h6 text-md-h4 text-primary font-weight-black">
            About
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nulla tempor,
              cursus lectus a, interdum turpis. Sed malesuada lacus vel lectus mattis tristique. Ut
              nec eros sed tellus sodales auctor. Sed fringilla blandit nunc, id iaculis velit.
              Integer tempus vulputate sem vitae tempus. In elit enim, laoreet ut tristique in,
              finibus quis purus. In elit enim, laoreet ut tristique in, finibus quis purus.
            </p>
            <v-card-actions class="justify-center">
              <v-btn
                block
                :variant="'flat'"
                class="text-none font-weight-bold"
                size="x-large"
                color="primary-container"
                >Lorem ipsum dolor</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-justify d-flex" cols="12" sm="6" lg="3" style="flex-direction: : column;">
        <v-card class="pa-6">
          <v-card-title class="text-h6 text-md-h4 text-primary font-weight-black">
            Research
          </v-card-title>
          <v-card-text>
            <p>
              "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera,
              simplemente porque es el dolor."
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              class="text-none font-weight-bold"
              size="x-large"
              color="primary-container"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              class="text-none font-weight-bold"
              size="x-large"
              color="primary-container"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              class="text-none font-weight-bold"
              size="x-large"
              color="primary-container"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="text-justify d-flex" cols="12" sm="6" lg="3" style="flex-direction: : column;">
        <v-card class="pa-6">
          <v-card-title class="text-h6 text-md-h4 text-primary font-weight-black">
            Contact
          </v-card-title>
          <v-card-text>
            <p>
              "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera,
              simplemente porque es el dolor."
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              color="primary"
              class="text-none font-weight-bold"
              size="x-large"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              class="text-none font-weight-bold"
              size="x-large"
              color="primary-container"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn
              block
              :variant="'flat'"
              color="tertiary"
              class="text-none font-weight-bold"
              size="x-large"
              >Lorem ipsum dolor</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
  <!-- End cards -->
</template>

<style scoped>
.overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>

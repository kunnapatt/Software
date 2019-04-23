<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex>
                            <v-card>
                            <v-flex xs5 sm4 md3>
                                    <v-img
                                    src="https://q-ak.bstatic.com/images/hotel/max1024x768/174/174729191.jpg"
                                    height="180px"
                                    ></v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-tile-primary-title>
                                        <div>
                                            <h3>
                                                Newyork
                                            </h3>
                                        </div>
                                </v-card-tile-primary-title>
                            </v-flex>
                            </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    work () {
      return this.$store.getters.featuredWork
    }
  }
}
</script>

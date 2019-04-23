<template>
    <v-container>
        <v-layout row pt-5>
            <v-flex xs12 offset-sm3>
                <h2>Create Work</h2>
            </v-flex>
        </v-layout>
        <v-layout row p-3>
            <v-flex xs12>
                <v-form @submit.prevent="onCreateWork">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Title"
                                id="title"
                                v-model="title"
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="location"
                                label="location"
                                id="location"
                                v-model="location"
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="description"
                                label="Description"
                                id="description"
                                v-model="description"
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center justify-center row>
                        <v-flex xs12 sm6 offset-sm-12>
                            <v-btn class="primary" :disabled="!formIsValid">Create</v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
  data () {
    return {
      title: '',
      location: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.location !== '' &&
      this.description !== ''
    }
  },
  methods: {
    onCreateWork () {
      if (!this.formIsValid) {
        return
      }
      const workdata = {
        title: this.title,
        location: this.location,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createWork', workdata)
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout row wrap style="margin-top:200px">
      <v-flex xs-4 offset-sm-6>
      </v-flex>
      <v-flex xs-4 offset-sm-6>
        <h1>Sign in</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-5>
      <v-flex xs-2>
      </v-flex>
      <v-flex xs-8>
        <v-form>
          <v-layout row>
            <v-flex xs-12 sm-8>
              <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="username"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row mt-3>
            <v-flex xs-12 sm-8>
              <v-text-field
              name="password"
              label="Password"
              v-model="password"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row warp mt-5>
            <v-flex>
            </v-flex>
            <v-flex xs-4>
              <v-btn class="primary" :disabled="!formisValidation">
                Log
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
      <v-flex xs-2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    formisValidation () {
      return this.username !== '' &&
      this.password !== ''
    }
  },
  methods: {
    logindata () {
      if (!this.formisValidation) {
        return
      }
      const logindata = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', logindata)
      this.$router.push('/')
    }
  }
}
</script>

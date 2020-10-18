<template>
  <v-container
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
              color="primary"
              dark
              flat
          >
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  label="Email"
                  name="email"
                  prepend-icon="mdi-email"
                  type="email"
                  v-model="email"
                  :error="errors.email"
                  :error-messages="errors.email"
              ></v-text-field>

              <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                  :error="errors.password"
                  :error-messages="errors.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="sendLoginRequest">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {loginRequest} from "@/requests/Auth";

export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null,
    errors: {
      email: null,
      password: null,
    },
    hasErrors: false
  }),
  methods: {
    sendLoginRequest() {
      loginRequest({email: this.email, password: this.password}).catch(err => {
        if (err.response.status === 422) {
          this.hasErrors = true;
          this.errors = err.response.data.errors;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
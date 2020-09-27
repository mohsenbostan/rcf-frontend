<template>
  <v-container>
    <v-row
        justify="center"
        content="center"
    >
      <v-col
          cols="12"
          md="6"
      >
        <v-card>
          <v-card-title>
            <router-link to="/thread/laravel+error" class="text-decoration-none black--text">
              <h2>Laravel error</h2>
            </router-link>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <p>Mohsen Bostan</p>
              </v-col>
              <v-col>
                <p class="text-right">2020/10/10 20:30</p>
              </v-col>
            </v-row>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laudantium molestiae mollitia praesentium
              qui! Accusantium atque corporis cupiditate deleniti dicta.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

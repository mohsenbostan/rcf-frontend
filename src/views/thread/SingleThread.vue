<template>
  <v-container>
    <v-row
        justify="center"
        content="center"
    >
      <v-col
          cols="12"
          md="8"
      >
        <v-card
            outlined
        >
          <v-card-title>
            <h2>{{ thread.title }}</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <p>{{  thread.user.name }}</p>
              </v-col>
              <v-col>
                <p class="text-right">{{ thread.created_at }}</p>
              </v-col>
            </v-row>
            <vue-markdown v-html="thread.content"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
          cols="12"
          md="8"
      >
        <v-row>
          <v-col><h2>Replies: </h2></v-col>
          <v-col
              class="text-right"
          >
            <v-btn
                ripple
                to="#"
                color="green"
                dark
            >
              Reply
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-row
          justify="center"
          content="center"
      >
        <v-col
            cols="12"
            md="8"
        >
          <v-card
              outlined
          >
            <v-card-title>
              <v-avatar
                  color="orange"
                  size="62"
              >
                MB
              </v-avatar>
              <v-row class="ml-6">
                <v-col
                    cols="12"
                    md="12"
                >
                  <h5>Mohsen Bostan</h5>
                </v-col>
                <v-col
                    cols="12"
                    md="12"
                >
                  <small class="grey--text" style="font-size: 10pt">2020/10/20 20:20:20</small>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda, cupiditate, dicta
                dolore dolorem eaque, enim ex facilis libero magni optio praesentium quod voluptatem. Blanditiis dolores
                expedita harum quaerat quas quia, vel voluptates! Atque debitis doloremque esse itaque maxime nobis
                recusandae reiciendis repellendus ullam ut. Laborum, laudantium, provident. Accusantium, porro.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown/src/VueMarkdown'
import {getSingleThreadRequest} from "@/requests/Threads";

export default {
  name: "SingleThread",
  components: {
    VueMarkdown
  },
  data: () => ({
    thread: {
      id: null,
      title: null,
      slug: null,
      content: null,
      best_answer_id: null,
      created_at: null,
      channel: {
        id: null,
        name: null
      },
      user: {
        id: null,
        name: null
      },
    }
  }),
  methods: {
    fetchThread() {
      getSingleThreadRequest(this.$route.params.slug).then(res => {
        this.thread = res.data
      })
    }
  },
  mounted() {
    this.fetchThread()
  }
}
</script>

<style scoped>

</style>
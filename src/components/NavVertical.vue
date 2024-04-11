<template>
  <v-container style="margin-left: -33px ;margin-top: 90px; padding-right: 10px;">
    <v-row>
      <v-col cols="12" ms="6">
        <v-card
          class="mx-auto"
          height="300"
          width="57"
          elevation="0"
        >
          <v-navigation-drawer
            class="accent-4"
            dark
            floating
            permanent
            color="#d9d9d9"
            style="border-top-right-radius: 30px; border-bottom-right-radius: 30px; border-bottom-left-radius: 30px; border-top-left-radius: 30px;"
          >
            <v-list>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                style="padding-right: 10px;"
              >
                <v-list-item-icon>
                  <v-icon :color="item.icon === 'mdi-home' && isHome ? 'purple' : 'black'">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>  
          </v-navigation-drawer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isHome: true, // Mettez à jour ceci selon l'état de la page
      items: [
        { icon: 'mdi-home' },
        { icon: 'mdi-account-box' },
        { icon: 'mdi-gavel' },
        { icon: 'mdi-pencil' },
        { icon: 'mdi-chart-bar' },
      ],
    }
  },
}
</script>

<template>    
    <v-div>      
      <v-toolbar elevation="0">
        <v-toolbar-title>
            <img :src="require('@/assets/mon-logo.png')" alt="">
        </v-toolbar-title>
      </v-toolbar>   
    </v-div>
</template>


<script>

export default {
    name: 'myMenu',
    data() {
      return {
        drawer: false,
        links: [
          { icon: 'home', text: 'Accueil', route: '/'},
          {icon: 'chart-bar', text: 'Notification', route: '/notification'},
          {icon: 'menu', text: 'Mon Test', route: '/test'},
        ],
        
      }
    }

  }

</script>

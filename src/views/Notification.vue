<template>
  <v-div> 
    <AppBar></AppBar>
    <v-container>
      <v-row>
        <v-col cols="auto" lg="1"><NavVertical></NavVertical></v-col>
        <Notif/>
      </v-row>    
    <div>     
    </div>
    </v-container>
  </v-div>
</template>
<script>

import AppBar from '@/components/AppBar.vue'
import NavVertical from "../components/NavVertical"
import Notif from '@/components/Notif.vue'

export default {
    data() {

    },
    components: {
      AppBar,
      NavVertical,
      Notif
    }
}
</script>
<style>

</style>
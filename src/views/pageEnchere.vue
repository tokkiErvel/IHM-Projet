<template>
    <v-div> 
    <AppBar></AppBar>
    <v-container>
      <v-row>
        <v-col cols="auto" lg="1"><NavVertical></NavVertical></v-col>
       
      </v-row>    
    <div>     
    </div>
    </v-container>
  </v-div>
</template>
<script>
import AppBar from '@/components/AppBar.vue'
import NavVertical from '@/components/NavVertical.vue';
//import enchere from '@/components/enchere.vue'
export default{
data (){

},
components:    
    AppBar,
    NavVertical,
    //enchere,
}

</script>
<style scoped>

</style>
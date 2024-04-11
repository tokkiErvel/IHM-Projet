<template>
  <v-row>
    <v-col cols="7">
      <p class="display-4 mt-5" style="font-weight: bold; color: #0d0d0d">
        Plongez dans <span class="span1">l'excitation des </span>
        <span class="span1">anchères</span>
      </p>
      <p class="mt-10" style="color: #666666;">
        Découvrez des trésors uniques sur notre plateforme en ligne
      </p>
      <v-btn color="#ab0767" dark class="mt-6" elevation="2" rounded large @click="redirectionPageConnexion">
        Se Connecter
        <v-icon class="ml-3 pt-3 pb-3">mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1" class="image">
      <img :src="require('@/assets/curseur.png')" alt="" width="50px" height="50px"/>
    </v-col>
    <v-col cols="4">
      <img :src="require('@/assets/imgAccueil.png')" alt=""/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    redirectionPageConnexion() {
      // Redirection vers la page "pageConnexion.vue"
      this.$router.push('/pageConnexion');
    }
  }
}
</script>

<style scoped>
.bigTitle {
  font-size: 5rem;
  font-weight: bold;
  color: #0d0d0d;
}
.subtitle {
  color: #222222;
  font-size: 20px;
}
.image {
  margin-top: 200px;
}
.span1 {
  padding-bottom: 200px;
}
</style>
  
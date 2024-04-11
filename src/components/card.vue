<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="6" md="5"
        offset-md="3">
                <v-card elevation="12" outlined shaped>
                <v-card-title class="text-center">                    
                    <h1 class="display-1" style="margin-left: 11px; color: #ab0767;">Se Connecter</h1>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row style="margin-top: 7px;">
                            <v-col>
                                <v-text-field label="Profile" outlined required></v-text-field>
                            </v-col>                          
                        </v-row>
                        <v-row style="margin-top: -25px;">
                            <v-col>
                                <v-text-field label="Nom d'utilsateur" outlined required></v-text-field>                              
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -25px;">
                            <v-col>
                                <v-text-field label="Prenom d'utilisateur" outlined required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -25px;">
                            <v-col>
                                <v-text-field label="Mot de passe" outlined required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary" rounded large
          >
            Se Connecter
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
          style="margin-left: 20px;"
            color="primary darken-1"
            text
            @click="redirectionPageInscription"            
          >
            S'inscrire
          </v-btn>
        </v-card-actions>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>        
    </v-container>           
</template>
<script>
export default{
    methods: {
        redirectionPageInscription() {
      // Redirection vers la page "pageConnexion.vue"
      this.$router.push('/pageInscription'); 
    }
}
}

</script>
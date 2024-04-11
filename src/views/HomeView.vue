<template>
  <div>
    <AppBar />
    <v-container>
      <Description></Description>
    </v-container>
  </div>
</template>

<script>
import Description from "../components/Description";
import AppBar from "../components/AppBar";

export default {
  name: "Home",

  components: {
    Description,
    AppBar,
  },
};
</script>

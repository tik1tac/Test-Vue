<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/TheFooter.vue";
import MainContainer from "./components/MainContainer.vue";
import Carusel from "./components/Carusel.vue";
</script>

<template>
  <div>
    <NavBar />
    <Carusel/>
    <MainContainer>
      <router-view></router-view>
    </MainContainer>
    <Footer />
  </div>
</template>

<style scoped></style>

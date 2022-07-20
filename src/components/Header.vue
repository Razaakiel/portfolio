<template>
<div class="header">

  <div class="header__profil">
    <h1 class="header__profil-name">Yoann POULAIN</h1>
    <img src="../assets/pp.jpeg" alt="photo de profil" class="header__profil-photo">
    <h2 class="header__profil-metier">Développeur - Frontend</h2>
  </div>

  <div class="header__nav">
    <div class="header__nav-accueil">
      <router-link to="/accueil">Accueil</router-link>
    </div>
    <div class="header__nav-profil">
        <router-link to="/profil">Mon Profil</router-link>
    </div>
    <div class="herder__nav-projets">
      <router-link to="/projet">Mes projets</router-link>
    </div>
    <div class="header__nav-linkedin">
      <a href="https://www.linkedin.com/in/yoann-poulain-1a6289153/">Linkedin</a>
    </div>
    <div class="header__nav-github">
      <a href="https://github.com/Razaakiel">Github</a>
    </div>
  </div>

</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Header"
}
</script>

<style lang="scss">
.header{
  background-color: #213f77;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.header{

  &__profil-photo{
    margin-left: 55px;
   }

  &__nav{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 90px;
    height: 200px;
  }
}


</style>
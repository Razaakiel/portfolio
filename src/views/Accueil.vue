<template>
  <div class="accueil">
    <h2 class="accueil__title">Accueil</h2>
    <div class="accueil__presentation">
      <h3 class="accueil__presentation-title">Bienvenu sur mon portfolio</h3>
      <p class="accueil__presentation-profil">
        Après plus de 10 ans dans la mécanique et des essaies en autodidacte en développement web,
        j'ai décidé de franchir le pas et de faire une reconversion professionnel du haut de mes 30 ans.
        Tout ce qui touche à l'informatique à toujours été une passion pour moi,
        j'ai donc commencé par une formation de "Développeur web" chez Openclassroom
        et souhaites maintenant poursuivre dans cette voie et m'y perfectionner.
      </p>
    </div>
  </div>

</template>

<script>

export default {
  // eslint-disable-next-line
  name: "Accueil.vue"
}
</script>

<style lang="scss">
.accueil{
  position: absolute;
  top: 0;
  left: 290px;
  right: 0;
  bottom: 0;

  &__title{
    margin-left: auto;
    margin-right: auto;
    width: 161px;
    font-size: 50px;
  }

  &__presentation{
    border: solid black 2px;
    width: 600px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 250px;
    border-radius: 15px;

    &-title{
      font-size: 30px;
    }
  }
}

</style>
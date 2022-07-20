<template>
  <div class="projet">
    <h2 class="projet__title">Projets</h2>
    <div class="projet__list">

      <div class="projet__list__one">
        <div class="projet__list__one-lien">
          <a href="">
            <div class="projet__list__one-lien__name">
              <p> <span>Name:</span> Ohmyfood!</p>
            </div>
            <div class="projet__list__one-lien__img">
              <img :src="require('../assets/ohmyfood.jpg')" alt="photo de Ohmyfood!" class="img">
            </div>
            <div class="projet__list__one-lien__techno">
              <p> <span>Techno:</span> HTML/CSS/Sass</p>
            </div>
          </a>
        </div>
      </div>

      <div class="projet__list__one">
        <div class="projet__list__one-lien">
          <a href="">
            <div class="projet__list__one-lien__name">
              <p><span>Name:</span> La chouette agence</p>
            </div>
            <div class="projet__list__one-lien__img">
              <img :src="require('../assets/la_chouette_agence.png')" alt="photo de La chouette agence!" class="img">
            </div>
            <div class="projet__list__one-lien__techno">
              <p> <span>Techno:</span> SEO</p>
            </div>
          </a>
        </div>
      </div>

      <div class="projet__list__one">
        <div class="projet__list__one-lien">
          <a href="">
            <div class="projet__list__one-lien__name">
              <p><span>Name:</span> Kanap</p>
            </div>
            <div class="projet__list__one-lien__img">
              <img :src="require('../assets/kanap.jpg')" alt="photo de Kanap" class="img">
            </div>
            <div class="projet__list__one-lien__techno">
              <p> <span>Techno:</span> Javascript</p>
            </div>
          </a>
        </div>
      </div>

      <div class="projet__list__one">
        <div class="projet__list__one-lien">
          <a href="">
            <div class="projet__list__one-lien__name">
              <p><span>Name:</span> Hot Takes</p>
            </div>
            <div class="projet__list__one-lien__img">
              <img :src="require('../assets/hot_takes.png')" alt="photo de Hot Takes" class="img">
            </div>
            <div class="projet__list__one-lien__techno">
              <p> <span>Techno:</span> Node.js/Express/MongoDB/Mongoose</p>
            </div>
          </a>
        </div>
      </div>

      <div class="projet__list__one">
        <div class="projet__list__one-lien">
          <a href="">
            <div class="projet__list__one-lien__name">
              <p><span>Name:</span> Groupomania</p>
            </div>
            <div class="projet__list__one-lien__img">
              <img :src="require('../assets/groupomania.png')" alt="photo de Groupomania" class="img">
            </div>
            <div class="projet__list__one-lien__techno">
              <p> <span>Techno:</span> Vue.js/Node.js/Express/Mysql/Sequelize</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Projets"
}
</script>

<style lang="scss">


.projet{
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
}

.projet__list{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;

  &__one{
    width: 400px;
    border: solid black 3px ;
    font-size: 20px;
    border-radius: 15px;
    margin-right: 25px;
    margin-bottom: 25px;
    padding: 25px;

    &-lien__name{
      width: 225px;
      margin-right: auto;
      margin-left: auto;
    }

    &-lien__img{
      height: 200px;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .img{
    height: 200px;
    width: 300px;
    object-fit: cover;
    border-radius: 15px;
  }
}

span{
  font-weight: bold;
  text-decoration: underline;
}



</style>
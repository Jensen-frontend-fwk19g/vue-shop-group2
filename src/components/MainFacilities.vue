<template>
  <section id="info-service">
    <article class="header" style="height:300px">
      <p class="holy-dog">HolyDog</p>
    </article>
    <article class="main">
      <section class="mission">
        <div class="title">
          <h2>OUR MISSION</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nesciunt distinctio iste aperiam enim non ipsam esse tempore deserunt
          excepturi commodi, officiis sapiente, dolor quia neque deleniti saepe
          harum maxime!
        </p>
      </section>
      <section class="facilities">
        <div class="title">
          <h2>OUR PET SITTING SERVICES FOR CATS & DOGS</h2>
        </div>
        <div class="container-description">
          <div class="description sector1">
            <h3>Dog Sitting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
              veniam officiis dolorum ipsa a alias similique deserunt iure ea
              eius possimus.
            </p>
          </div>
          <div class="description sector2">
            <h3>Walk with dog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
              veniam officiis dolorum ipsa a alias similique deserunt iure ea
              eius possimus.
            </p>
          </div>
          <div class="description sector3">
            <h3>free time with dog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
              veniam officiis dolorum ipsa a alias similique deserunt iure ea
              eius possimus.
            </p>
          </div>
        </div>
      </section>

      <section class="promotion">
        <div class="title">
          <h2>Entrust it to our qualified pet sitters, with us since 2012!</h2>
        </div>
        <div class="container-description">
          <div class="description sector4">
            <h3>24896 pet sitter, dog sitter e cat sitter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
              veniam officiis dolorum ipsa a alias similique deserunt iure ea
              eius possimus.
            </p>
          </div>
          <div class="description sector5">
            <h3>300 new pet sitter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
              veniam officiis dolorum ipsa a alias similique deserunt iure ea
              eius possimus.
            </p>
          </div>
        </div>
      </section>
      <section class="become-petsitter">
        <button class="become" @click="routeTo()">Become a pet sitter</button>
        <p class="adv">
          We do not take commissions on the performance of our pet sitters. 100%
          free, not like our competitors!
        </p>
      </section>
    </article>
    <footer class="footer">
      <Footer></Footer>
    </footer>
  </section>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "MainFacilities",
    components:{
    Footer,
  },
  methods: {
    routeTo() {
      this.$router.push("/MainFacilities/Form/");
    },
  },
};
</script>

<style scoped>
#info-service {
  max-width: 100vw;
  max-height: 100vh;
}

.header {
  width: 100%;
  height: 300px;
  background: url("./../assets/banner.webp");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.holy-dog {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.mission,
.facilities,
.promotion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: auto;
}

.container-description {
  display: flex;
}
.description {
  border-radius: 0.6rem;
  margin: 0.5rem;
}
.sector1,
.sector3,
.sector5 {
  background-color: rgba(237, 101, 125, 0.35);
  margin-right: 0.5rem;
}
.sector2,
.sector4 {
  background-color: rgba(98, 166, 243, 0.94);
  margin-right: 0.5rem;
}
.adv {
  font-weight: 700;
  padding: 1rem;
}
.footer {
  max-height: 20%;
  display:flex; 
}
.become {
  outline: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 2px 0;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: #ffffff;
  background-color: #ab2866;
}
.become:active {
  transform: translateY(1px);
  filter: saturate(150%);
}
.become:hover {
  color: #ab2866;
  border-color: currentColor;
  background-color: white;
}
.become:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5),
    0 0 0 1.5px rgba(255, 105, 180, 0.5);
}

@media (min-width: 600px) and (max-width: 900px) {
  .facilities,.promotion{
    width: 100%;
  }
}
@media   (max-width: 599px) {
  .container-description {
    flex-direction: column;
  }
   .facilities,.promotion{
    width: 90%;
  }
}
</style>

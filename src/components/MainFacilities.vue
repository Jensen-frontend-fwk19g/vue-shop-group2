<template>
  <section id="info-service">
    <article class="header">
      <img src="@/assets/banner.webp" alt="" />
    </article>
    <article class="main">
      <section class="mission">
        <h2>OUR MISSION</h2>
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
        <div class="description">
          <h3>Dog Sitting</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
            culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
            veniam officiis dolorum ipsa a alias similique deserunt iure ea eius
            possimus.
          </p>
        </div>
        <div class="description">
          <h3>Walk with dog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
            culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
            veniam officiis dolorum ipsa a alias similique deserunt iure ea eius
            possimus.
          </p>
        </div>
        <div class="description">
          <h3>free time with dog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
            culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
            veniam officiis dolorum ipsa a alias similique deserunt iure ea eius
            possimus.
          </p>
        </div>
      </section>

      <section class="promotion">
        <div class="title">
          <h2>Entrust it to our qualified pet sitters, with us since 2012!</h2>
        </div>
        <div class="description">
          <h3>24896 pet sitter, dog sitter e cat sitter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
            culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
            veniam officiis dolorum ipsa a alias similique deserunt iure ea eius
            possimus.
          </p>
        </div>
        <div class="description">
          <h3>300 new pet sitter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
            culpa impedit? Animi inventore, eos nihil, reiciendis mollitia
            veniam officiis dolorum ipsa a alias similique deserunt iure ea eius
            possimus.
          </p>
        </div>
      </section>
      <section class="become-petsitter">
        <button class="become">Become a pet sitter</button>
        <p>
          We do not take commissions on the performance of our pet sitters. 100%
          free, not like our competitors!
        </p>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: "MainFacilities",
};
</script>

<style scoped>
.mission,
.facilities,
.promotion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mission > h2 {
  width: 1200px;
}
</style>

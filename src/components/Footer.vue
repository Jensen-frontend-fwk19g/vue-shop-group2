<template>
  <section class="fixed-footer">
    <article class="article-footer owner">
      <h3>Contact the owner:</h3>
      <p><span class="owner-name">{{owner.name}}</span> </p>
      <p><span class="owner-epost">{{owner.epost}}</span> </p>
      <p class="owner-mobile"><span><small>{{owner.mobile.intro}}</small>{{owner.mobile.nr}}</span></p>
    </article>
    <article class="article-footer">
      <h3>Follow US</h3>
      <p>Instagram</p>
      <p>LinkedIn</p>
      <p>Twitter</p>
    </article>
    <article class="article-footer">
      <h3>About</h3>
      <p>FAQ</p>
      <p>About Us</p>
      <p>Services</p>
    </article>
  </section>
</template>

<script>
export default {
  name:'Footer',
  data(){
    return{
      owner:{
        name:'Humpty Dumpty',
        mobile:{
          intro:'+46 (0) ',
          nr: '00 111 22 33'
          },
        epost:'info@dog.com'
      }
    }
  },
}
</script>

<style scoped>

.fixed-footer{  padding: 0px;
  flex :1 100%;
  background:#edf2f3;
  background-image: linear-gradient(#d5ebf3, #badce5);
  display: flex;
}
article{
  flex:1;
}
.article-footer h3{
  font-variant: small-caps;
  font-size: 1em;
  font-weight: bold;
}
.article-footer p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75em;
}

</style>
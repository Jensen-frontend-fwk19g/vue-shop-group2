<template>
  <div class="dark-mode-toggle">
  <input @change="toggleDark" id="switch" type="checkbox" name="theme" v-model="darkMode">
  <p>{{darkMode}}</p>
</div>
</template>

<script>
export default {
 name :'DarkMode',
 data() {
   return {
     darkMode: false
   }
   
 },
 methods:{
   toggleDark(){
     //this.darkMode = !this.darkMode
     if(!this.darkMode) {
       document.documentElement.removeAttribute('data-theme')
       } else {
       document.documentElement.setAttribute('data-theme', 'dark-mode')

     }
   }
 }
}
</script>
  
<style>

html {
    transition: color 300ms, background-color 300ms;
    background-color: rgb(195, 216, 243);
}

html[data-theme='dark-mode'] {
    filter: invert(100%) hue-rotate(180deg) ;

}

html[data-theme='dark-mode'] img, #counter-cart, #counter-cart > figure{
    filter: invert(100%) hue-rotate(180deg);

}





</style>
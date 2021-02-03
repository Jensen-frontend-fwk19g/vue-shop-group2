<template>
  <a @click="toggleDark" href="" id="dark-button"></a>
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
     this.darkMode = !this.darkMode
   }
 }
}
</script>

<style>

</style>
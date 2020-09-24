<template>
  <div id="app">
  
    <Header></Header>

    <main>
      <MainIntroduction></MainIntroduction>
    </main>

  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import MainIntroduction from "@/components/MainIntroduction.vue"


export default {
  name: 'App',
    components:{
    Header,
    MainIntroduction
  },
}
</script>

<style>
</style>
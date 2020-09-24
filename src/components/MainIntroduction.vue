<template>
      <div class="introduction">
        <MainIntroductionTop></MainIntroductionTop>
        <b-row class="justify-content-center">
          <b-col cols="5">
            <hr>
          </b-col>
        </b-row>
        <MainIntroductionbottom></MainIntroductionbottom>
      </div>
</template>

<script>
import MainIntroductionTop from "@/components/MainIntroductionTop.vue"
import MainIntroductionbottom from "@/components/MainIntroductionbottom.vue"


export default {
  name: 'App',
  components:{
    MainIntroductionTop,
    MainIntroductionbottom,
  },
  }
</script>


<style scoped>
main .introduction hr{
  background-color: #4f3608;
  height:2px;
  margin: 50px auto;
}
</style>


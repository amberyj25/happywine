<template>
  <div class="introduction_top">
    <b-row>
      <b-col class="introduction_top_div mb-5 p-2"  cols="12" lg="4">
        <i class="fas fa-wine-glass-alt"></i>
        <h4>酒品</h4>
        <p>最棒的酒款</p>        
      </b-col>
      <b-col class="introduction_top_div mb-5 p-2"  cols="12" lg="4">
        <i class="fas fa-comment-dollar"></i>
        <h4>滿額</h4>
        <p>購滿<span>$2,000</span> 就可免運</p></b-col>
      </b-col>
      <b-col class="introduction_top_div p-2"  cols="12" lg="4">
        <i class="fas fa-truck"></i>
        <h4>寄送服務</h4>
        <p>恆溫的寄送服務</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default{
  name:"MainIntroductionTop",
}
</script>
<style scoped>
.introduction_top{
  margin-top: 35px;
}

.introduction_top_div{
  width: 300px;
  flex-direction:column;
  align-items: center;
}

/*
main .introduction .introduction_top div+div{
  margin-left: 85px;
} 
*/

.introduction_top_div{
  text-align:center;
}
.introduction_top_div i{
  display:block;
  margin:auto;
  font-size: 100px;
  color:gray;
}


.introduction_top_div h4,.introduction_top_div  p{
  text-align: center;
}


.introduction_top_div h4,.introduction_top_div h4{
    font-size: 20px;
}

.introduction_top_div p{
  font-size: 15px;
}

.introduction_top_div span{
  font-weight:bold;
}

</style>


<template>
  <div class="introduction_top">
    <b-row>
      <b-col class="introduction_top_div p-2"  cols="12" lg="4">
        <i class="fas fa-wine-glass-alt"></i>
        <div class="detail">
          <h4>酒品</h4>
          <p>最棒的酒款</p> 
        </div>       
      </b-col>
      <b-col class="introduction_top_div p-2"  cols="12" lg="4">
        <i class="fas fa-comment-dollar"></i>
        <div class="detail">
          <h4>滿額</h4>
          <p>購滿<span>$2,000</span> 就可免運</p>
        </div>
      </b-col>
      <b-col class="introduction_top_div p-2"  cols="12" lg="4">
        <i class="fas fa-truck"></i>
        <div class="detail">
          <h4>寄送服務</h4>
          <p>恆溫的寄送服務</p>
        </div>
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
  font-size: 150px;
  color:gray;
}
.introduction_top_div .detail{
  margin:25px;
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


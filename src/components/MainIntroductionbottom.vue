<template>
    <div class="introduction_bottom">
      <b-row>
        <b-col class="introduction_bottom_div" cols="12 mb-5" xl="3" md="6 mb-0" sm="12">
          <img src="https://i.imgur.com/74Ix92a.jpg" alt="" style="width:100%;height:500px;">
          <div>
            <h5>Lorem</h5>
            <p>恆溫的寄送服務</p>
          </div>
        </b-col>
        <b-col class="introduction_bottom_div" cols="12 mb-5" xl="3" md="6 mb-0" sm="12">
          <img src="https://i.imgur.com/7KWIixk.jpg" alt="" style="width:100%;height:500px;">
          <div>
            <h5>Lorem</h5>
            <p>恆溫的寄送服務</p>
          </div>
        </b-col>
        <b-col class="introduction_bottom_div" cols="12 mb-5" xl="3" md="6 mb-0" sm="12">
          <img src="https://i.imgur.com/7utTzva.jpg" alt="" style="width:100%;height:500px;">
          <div>
            <h5>Lorem</h5>
            <p>恆溫的寄送服務</p>
          </div>
        </b-col>
        <b-col class="introduction_bottom_div" cols="12 mb-5" xl="3" md="6 mb-0" sm="12">
          <img src="https://i.imgur.com/64BxYpv.jpg" alt="" style="width:100%;height:500px;">
          <div>
            <h5>Lorem</h5>
            <p>恆溫的寄送服務</p>
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  name: 'MainIntroductionbottom',
  }
</script>


<style scoped> 
.introduction_bottom div{
  justify-content:center;
}

.introduction_bottom_div{
  width:100%;
}
.introduction_bottom_div img{
  width:100%;
  height:100%;
  display: block;
  position:relative;
}
/* 
main .introduction .introduction_bottom div+div{
  margin-left:25px;
}

main .introduction .introduction_bottom_img img{
  display: block;
  width:100%;
  position:relative;
}
*/


.introduction_bottom_div div{
  position:relative;
  left: 0;
  bottom: 55px;
  background-color: #8c6e55;
  color: white;
  opacity: 0.8;
} 
.introduction_bottom_div h5,.introduction_bottom_div p{
  text-align: center;
}

</style>
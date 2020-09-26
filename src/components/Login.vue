<template>
  <div class="form_outer">
    <form v-if="changeComponent == `form`">
    <div class="form_inner">
      <div> 
        <label for="email">登入信箱 ： </label>
        <input type="text" id="email" placeholder="請輸入登入信箱" v-model="user.username">
      </div>
      <div> 
        <label for="password">密碼 : </label>
        <input type="password" id="password" placeholder="請輸入密碼" v-model="user.password">
      </div>
      <div>
        <button type="submit" @click.prevent="signin">登入</button>
        <p>{{notSuccess}}</p>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
export default{
  name:"Login",
  data(){
    return{
      user:{
        username:"",
        password:"",
      },
      changeComponent: "form",
      answer:"",
      notSuccess:"",
      isLoading:false,
    }
  },
  methods:{
    signin(){
      const vm = this;
      vm.axios.post("https://vue-course-api.hexschool.io/signin",vm.user).then((result)=>{
        if(result.data.success == true){
          this.$router.push("/");
          this.$store.commit("signinChange",true);
          // vm.answer = "恭喜您成功登入";
        } else if(result.data.success == false) {
          vm.notSuccess = "沒有登入成功";
        }
      })
    },
  }
}
</script>
<style scoped>
.form_outer{
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  margin: 0;
}
form{
  width: 350px;
  background: #ABDADC;
  border-radius: 25px;
  padding: 25px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 8px black;
}
div{
  margin: 15px;
}
label{
  display: block;
  margin: 5px 0;
}
input{
  width: 250px;
  height: 25px;
  border:none;
  border-radius: 10px;
  outline: none;
  padding: 5px 15px;
}
button{
  display: block;
  width:100px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  margin-top: 25px; 
}
p{
  text-align: center;
  color: yellow;
}
h2{
  width:100%;
  text-align: center;
}
</style>
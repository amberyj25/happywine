<template>
  <div class="outer">
    <header>
      <Navbar class="navbar_outer"></Navbar>
    </header>

    <div class="form_outer">
      <form>
        <div>
          <div>
            <label for="email">登入信箱 ： </label>
            <input type="text" id="email" placeholder="請輸入登入信箱" v-model.trim="user.username">
          </div>
          <div>
            <label for="password">密碼 : </label>
            <input type="password" id="password" placeholder="請輸入密碼" v-model.trim="user.password">
          </div>
          <div>
            <button type="submit" @click.prevent="signin">登入</button>
            <p>{{ notSuccess }}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  name: "Login",
  components: {
    Navbar
  },
  data () {
    return {
      user: {
        username: "",
        password: "",
      },
      answer: "",
      notSuccess: "",
      isLoading: false
    }
  },
  methods: {
    signin () {
      this.axios.post("https://vue-course-api.hexschool.io/signin",this.user).then(result => {
        const isResultSuccess = result.data.success
        switch (isResultSuccess) {
          case true:
            this.$router.push("/");
            this.$store.commit("checkSignIn", true);
            break;
          case false:
            this.notSuccess = "沒有登入成功";
            break;
        }
      })
    }
  }
}
</script>
<style scoped>
.outer {
  background-color: #494b50;
  margin: 0;
}
.navbar_outer {
  margin: 0;
}
.form_outer {
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  margin: 0;
  background-color:#494b50;
}
form {
  width: 450px;
  background: #ABDADC;
  border-radius: 25px;
  padding: 25px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 8px black;
}
div {
  margin: 15px;
}
label {
  display: block;
  margin: 5px 0;
}
input {
  width: 250px;
  height: 25px;
  border:none;
  border-radius: 10px;
  outline: none;
  padding: 5px 15px;
}
button {
  display: block;
  width:100px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  margin-top: 25px; 
}
p {
  text-align: center;
  color: yellow;
}
h2 {
  width:100%;
  text-align: center;
}
.header_img {
  width:100%;
  height:580px;
  background: url("https://i.imgur.com/3isOg5S.jpg") no-repeat 50% 50%;
  background-size: cover;
}
</style>
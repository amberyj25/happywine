<template>
  <div class="container">
    <form>
      <label for="name">姓名 :</label>
      <input type="text" id="name" placeholder="請輸入姓名" v-model="user.name">
      <label for="email">信箱 :</label>
      <input type="text" id="email" placeholder="ex.amber@gmail.com" v-model="user.phone">
      <label for="phone_number">手機號碼 :</label>
      <input type="text" id="phone_number" placeholder="ex.0989-768-701" v-model="user.phoneNumber">
      <label for="address">地址 :</label>
      <input type="text" id="address" placeholder="ex.台中市....." v-model="user.address">
      <label for="message">備註 :</label>
      <textarea rows="5" cols="50" id="message" v-model="user.message"></textarea>
    </form>
    <div class="submit">
      <div
        v-for="(btn, btnNum) in submitBtn"
        :key="btnNum"
        :class="btn.class"
        @click="changePage(btn)"
      >{{ btn.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutCustomerForm',
  data () {
    return {
      user: {
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        message: ''
      },
      submitBtn: [
        {
          title: '上一步',
          class: 'btn_Previous'
        }, {
          title: '送出訂單',
          class: 'btn_submit'
        }
      ]
    }
  },
  methods: {
    changePage (btn) {
      switch (btn.title) {
        case '上一步':
          this.$emit('changeComponent', 'CheckoutShoppingCartContent')
          break
        case '送出訂單':
          break
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 85%;
  margin: auto;
}
form label, input, textarea {
  margin: 5px 0;
}
form label {
  display: block;
}
form input, textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
.submit {
  display: flex;
  justify-content: center;
}
.submit .btn_Previous, .btn_submit {
  padding: 5px 25px;
  border-radius: 5px;
  margin: 0 25px;
  text-align: center;
}
.submit .btn_Previous {
  border: 2px solid blueviolet;
}
.submit .btn_submit {
  border: 2px solid red;
}
.submit .btn_Previous:hover{
  color: white;
  background-color:#FF3EFF;
  cursor: pointer;
}
.submit .btn_submit:hover{
  color: white;
  background-color: #fe5050;
  cursor: pointer;
}
</style>

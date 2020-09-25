<template>
    <footer>
      <div class="footer_top">
        <div class="footer_top_left">
          <a href="##">Happy Wine</a>
          <p class="copyright">&copy 2020 Happy Wine</p> 
        </div>
        <div class="footer_top_right">
          <p>contact</p>
          <p>Email : XXX@gmail.com</p>
          <p>mobile : 09XX-XXX-XXX</p>
        </div>  
      </div>
    </footer>
</template>

<script>
export default{
  name:"Footer",
}
</script>

<style scoped>
footer .footer_top{
  background:#f2f0ea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
}
footer .footer_top_left{
  font-size: 15px;
  color:#55381d;
}
footer .footer_top_left a{
  font-size:25px;
  display: block;
  color:#55381d;
}
footer .footer_top_right{
  color:#55381d;
}
</style>
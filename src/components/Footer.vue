<template>
  <footer>
    <div class="content">
      <div class="content_left">
        <a href="##">Wine Space</a>
        <p class="copyright">&copy 2020 Happy Wine</p>
      </div>
      <div class="content_right">
        <p>contact</p>
        <p>Email : XXX@gmail.com</p>
        <p>mobile : 09XX-XXX-XXX</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer .content {
  background: #f2f0ea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
}
footer .content_left {
  font-size: 15px;
  color: #55381d;
}
footer .content_left a {
  font-size: 25px;
  display: block;
  color: #55381d;
}
footer .content_right {
  color: #55381d;
}
</style>
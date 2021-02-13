<template>
  <div class="service">
    <b-row>
      <b-col
        v-for="(service, index) in serviceContent"
        :key="index"
        cols="12"
        lg="4"
      >
        <i :class="service.style"></i>
        <div class="detail">
          <h4>{{ service.title }}</h4>
          <p>{{ service.description }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Service",
  data () {
    return {
      serviceContent: [
        {
          title: "酒品",
          description: "最棒的酒款",
          style: 'fas fa-wine-glass-alt'
        },{
          title: "滿額",
          description: "購滿$2,000就可免運",
          style: 'fas fa-comment-dollar'
        },{
          title: "寄送服務",
          description: "恆溫的寄送服務",
          style: 'fas fa-truck'
        }
      ]
    };
  }
};
</script>
<style scoped>
/* .service {
  width: 300px;
  flex-direction: column;
  align-items: center;
} */

.service {
  text-align: center;
}
.service i {
  display: block;
  margin: auto;
  font-size: 150px;
  color: gray;
}
.service .detail {
  margin: 25px;
}

.service h4,
.service p {
  text-align: center;
}

.service h4,
.service h4 {
  font-size: 20px;
}

.service p {
  font-size: 15px;
}

.service span {
  font-weight: bold;
}
</style>


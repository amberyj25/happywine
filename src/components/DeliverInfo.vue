<template>
  <div class="deliver_info">
    <b-row>
      <b-col
        v-for="(deliver, index) in deliverContent"
        :key="index"
        class="content"
        cols="12 mb-5"
        xl="3"
        md="6 mb-0"
        sm="12"
      >
        <img :src="deliver.img" alt="image" />
        <div>
          <h5>{{ deliver.title }}</h5>
          <p>{{ deliver.description }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import deliverImg1 from '../assets/introduction1.jpg'
import deliverImg2 from '../assets/introduction2.jpg'
import deliverImg3 from '../assets/introduction3.jpg'
import deliverImg4 from '../assets/introduction4.jpg'

export default {
  name: 'DeliverInfo',
  data () {
    return {
      deliverContent: [
        {
          title: 'Lorem',
          description: '恆溫的寄送服務',
          img: deliverImg1
        },
        {
          title: '滿額',
          description: '購滿$2,000就可免運',
          img: deliverImg2
        },
        {
          title: '寄送服務',
          description: '恆溫的寄送服務',
          img: deliverImg3
        },
        {
          title: '寄送服務',
          description: '恆溫的寄送服務',
          img: deliverImg4
        }
      ]
    }
  }
}
</script>

<style scoped>
.deliver_info div {
  justify-content: center;
}

.content {
  width: 100%;
  height: 500px;
}
.content img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
  position: relative;
}

.content div {
  position: relative;
  left: 0;
  bottom: 55px;
  background-color: #8c6e55;
  color: white;
  opacity: 0.8;
}
.content h5,
.content p {
  text-align: center;
}
</style>

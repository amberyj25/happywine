<template>
  <div class="container">
    <div
      v-for="(category, index) in categoryProducts"
      :key="index"
    >
      <h1>{{ category.title }}</h1>
      <table>
        <tr>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
          <th>總額</th>
        </tr>
        <tr
          v-for="(product, index) in category.data"
          :key="index"
        >
          <td>{{ product.product.title }}</td>
          <td>{{ product.qty }}瓶</td>
          <td>{{ product.product.price }}</td>
          <td>${{ product.total }}</td>
        </tr>
      </table>
    </div>
    <div class="total">
      <h1>total</h1>
      <div class="totalContent">
        <span>總計 : </span>
        <span>{{ totalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutShoppingCartContent',
  props: ['classicProductData', 'newProductData'],
  data () {
    return {
      classicData: {},
      newData: {},
      classicAndNewData: []
    }
  },
  computed: {
    categoryProducts () {
      return this.getCategoryProducts()
    },
    totalPrice () {
      return this.getTotalPrice()
    }
  },
  watch: {
    classicProductData () {
      // eslint-disable-next-line dot-notation
      this.classicData['title'] = 'classic(經典款)'
      // eslint-disable-next-line dot-notation
      this.classicData['data'] = this.classicProductData
      this.classicAndNewData.push(this.classicData)
    },
    newProductData () {
      // eslint-disable-next-line dot-notation
      this.newData['title'] = 'new(新款)'
      // eslint-disable-next-line dot-notation
      this.newData['data'] = this.newProductData
      this.classicAndNewData.push(this.newData)
    }
  },
  methods: {
    getCategoryProducts () {
      return this.classicAndNewData
    },
    getTotalPrice () {
      const tempArray = []
      this.classicProductData.forEach(item => tempArray.push(item.total))
      this.newProductData.forEach(item => tempArray.push(item.total))
      const total = tempArray.reduce((prev, currentItem, currentItemIndex, array) => { return prev + currentItem }, 0)
      return total
    }
  }
}
</script>

<style scoped>
.container {
  width: 85%;
  margin: auto;
}
table {
  width: 100%;
}
h1 {
  font-size: 1.5rem;
  margin: 25px 0;
}
th, td {
  width: 25%;
  text-align: center;
}
tr {
  line-height: 2.5;
}
th {
  background-color: bisque;
}
td {
  border-bottom: 1px solid #7B7B7B ;
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
}
.total h1 {
  margin: 0;
}
.totalContent span{
  font-size: 1rem;
}
</style>

<template>
  <router-view
  v-if ="categories && products"
    :baseURL='baseURL'
    :categories='categories'
    :products="products"
    @fetchData="fetchData"
    ></router-view>
    
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      baseURL: "http://localhost:5000/",
      categories:null,
      products: null
    }
  },
  methods:{
    async fetchdata(){
      await axios.get(this.baseURL+'catgory'+'/list')
      .then(res=>{
        this.categories=res.data
      }).catch((err) => console.log('err', err));
      
      await axios.get(this.baseURL + "product/")
      .then(res => {
        this.products = res.data
      }).catch((err) => console.log('err', err));

    }
  },
  mounted(){
    this.fetchdata()
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>

<div class="container">
    <div class="row">
        <div class="text-center">
            <h3>ADD CATEGORY</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <form>
  <div class="mb-3">
    <label for="name" class="form-label">Category Name</label>
    <input type="text" class="form-control" v-model="categoryname" id="name" >
  
  </div>
  <div class="mb-3">
    <label for="discription" class="form-label">Category Discription</label>
    <input type="text" class="form-control" v-model="categorydis" id="discription">
  </div>
  <div class="mb-3">
    <label for="image" class="form-label">Category Image</label>
    <input type="text" class="form-control" v-model="imageurl" id="image">
  </div>
 
  <button type="button" v-on:click="addcategory" class="btn btn-primary">Submit</button>
</form>
           
        </div>
        <div class="col-3"></div>
    </div>
</div>


</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    name:'Addcategory',
    data(){
      return{
        categoryname:'',
        categorydis:'',
        imageurl:''

      }
    },
    methods:{
       addcategory(){
       
        const newcategory={
          categoryName:this.categoryname,
          description:this.categorydis,
          imageURL:this.imageurl

        }
        const baseurl='http://localhost:5000'
        axios({
          method:'post',
          url:'http://localhost:5000/catgory/create',
          data :JSON.stringify(newcategory),
          headers:{
            "Content-Type":"application/json"
          }
         

          

        }).then(()=>{
         swal({
            text:"category added successfully",
            icon:"success",
          })

        })
        .catch((err)=>{
          console.log(err)
        })
        

      
      }
    }
}

</script>
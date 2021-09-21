<template>

<div>
    
        <div class =""> 
        <h1 class ="d-flex justify-content-center">Home Page</h1>
       
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary">Add List</button>
           
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <!-- <button type="button" class="btn btn-primary" >Category</button> -->
            <router-link type="button" class="btn btn-primary" to="/category">Add Category</router-link>

        </div>
       
        </div>
        </div>
        <hr>
        
     
</div>


</template>

<script>
export default{
    name:'home',

    data(){
        return{

        }
    }
}


</script>

<style>
        
        .buttons{
            float:right;
            margin:5px;
        }

</style>
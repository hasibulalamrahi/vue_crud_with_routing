<template>
<div>
    
        <div class =""> 
        <h1 class ="d-flex justify-content-center">Category page</h1>
        <button class = "btn btn-primary" @click="openModel"> Add New Category</button>
          <hr>
        <!-- <div class="clear"></div> -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="(cat,index) in categories" :key="cat.id">
                        <td>{{cat.name}}</td>
                        <td>
                            <button type="button" class="btn btn-light mr-1" @click="openEdit(cat)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                            </button>
                        
                            <button type="button" class="btn btn-light mr-1" @click="remove(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </button>
                        </td>
                        
                        
                    </tr>

                </tbody>   
            

        </table>
        <div>
            <div v-if="myModel">.
                <transition name="model">
                    <div class="modal-mask">
                        <div class ="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" @click="myModel=false"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title">{{dynamicTitle}}</h4>

                                    </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label>Add Category</label>
                                                <!-- <input type="text" class="form-control" v-model="allData" @keyup.enter="addData" /> -->
                                                <input type="text" class="form-control" v-model="allData" />

                                            </div>
                                            <div align = "center">
                                                <!-- <input type="hidden" v-model="hiddenId"/> -->
                                                <div v-if="addButton">
                                                    <button class = "btn btn-secondary" v-model="allData" @click="addData"> Add New Category</button>

                                                    <!-- <input type="button" class ="btn btn-success btn-xs" v-model="actionButton" @click="addData"/> -->

                                                </div>
                                                <div v-if="editButton">
                                                    <button class = "btn btn-secondary" v-model="EditData" @click="editData()"> Edit Category</button>

                                                    <!-- <input type="button" class ="btn btn-success btn-xs" v-model="actionButton" @click="addData"/> -->

                                                </div>
                                                <!-- <input v-model="allData" @keyup.enter="addData"> -->
                                            </div>

                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        </div>
      
     
</div>


</template>

<script>
export default{
    name:'category',

    data(){
        return{
            categories:[
                {
                    id:0,
                    name:"Finish learning Vue"
                },
                {
                    id:1,
                    name:"Finishing Vue CRUD Project"
                },
                {
                    id:2,
                    name:"Getting Assigned into a project"
                },
            

            ],
            catergoryId:3,
            allData:'',
            myModel:false,
            actionButton:'Insert',
            dynamicTitle:'Add Data',
            beforeEditCache:'',
            addButton:false,
            editButton:false,
            EditData:'',
            editId:''
        }
    },
    methods:{
            openModel(){
                this.actionButton="Insert";
                this.dynamicTitle="Add New Category";
                this.myModel = true;
                this.addButton=true;
                this.editButton = false;
                this.allData ='';

            },
            openEdit(cat){
                
                this.editId = cat;
                this.dynamicTitle="Edit Category";
                this.myModel = true;
                this.allData = cat.name ;
                this.editButton = true;
                this.addButton=false;

            },
            addData(){
                if(this.allData.trim().length ==0){
                    return
                }
                else{
                    console.log("Data is Submitted")
                    this.categories.push({
                        id:this.catergoryId,
                        name:this.allData
                    })
                    console.log(this.categories);
                    this.allData=''
                    this.catergoryId++
                    this.myModel=false


                }
            },
            remove(index){
                
                this.categories.splice(index,1);

                 console.log(index);
            },
            editData(){
                this.EditData = this.allData;
                const ide =this.editId.id;
                // alert("Data is edited");
                if(this.EditData.trim().length == 0){
                    this.myModel = false
                }
                
                else{
                    // console.log("Hello")
                    this.categories[ide].name = this.EditData;
                    this.myModel = false;
                    this.editId = '';
                }
              


            }


    }
}


</script>

<style>
        *{
            margin : 5px;
            padding: 2px;
        }

        .modal-mask{
            position:fixed;
            z-index:9998;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color: rgba(5,5,5,.5);
            display: table;
            transition:opacity .3s ease;
        }
        .modal-wrapper{
            display: table-cell;
            vertical-align: middle;
        }
        /* .container{
            width:960px;
            margin:auto;
            margin-top: 44px;
        }

        .fleft{
            float: left;

        }

        .fright{
            float: right;

        }

        .clear{
            clear:both;
        }

        h1{
            font-size: 30px ;
        }
        .button1{
            padding:2px 9px;
        } */ 


</style>
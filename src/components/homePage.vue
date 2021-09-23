<template>

<div>
    
        <div class =""> 
        <h1 class ="d-flex justify-content-center">Home Page</h1>
       
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary" @click="openModel">Add List</button>
           
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <!-- <button type="button" class="btn btn-primary" >Category</button> -->
            <router-link type="button" class="btn btn-primary" to="/category">Add Category</router-link>

        </div>
       
        </div>
        </div>
        <div>
    
        <div class =""> 
        <!-- <div class="clear"></div> -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>View</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="(post,index) in posts" :key="post.index" >
                        <td>{{post.title}}</td>
                        <td>
                            <button type="button" class="btn btn-light mr-1"@click="viewPostData(index)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                            <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg></button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-light mr-1" @click="openEdit(post,index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                            </button>
                             
                            <button type="button" class="btn btn-light mr-1" @click="removePost(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </button>
                        </td>
                        
                        
                    </tr>

                </tbody>   
            

        </table>
        <componentM v-if="viewPost" :expTitle="expTitle" :expCategory="expCategory" :expPost="expPost" v-on:closeWindow="closeModal($event)"></componentM>
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
                                                <label>Title </label>
                                                <!-- <input type="text" class="form-control" v-model="allData" @keyup.enter="addData" /> -->
                                                <input type="text" class="form-control" v-model="title" /> <br>

                                                <label>Add Category</label>
                                                <select v-model="category">
                                                    <option v-for="cat in categories" :key="cat.id" >{{cat.name}}</option>

                                                </select> <br>
                                                <label>Post Body</label>
                                                <!-- <input type="text" class="form-control" v-model="allData" @keyup.enter="addData" /> -->
                                                <input type="text" class="form-control" v-model="postBody" />

                                            </div>
                                            <div align = "center">
                                                <!-- <input type="hidden" v-model="hiddenId"/> -->
                                                <div v-if="addButton">
                                                    <button class = "btn btn-secondary" v-model="allPostData" @click="addPostData"> Add New Data</button>

                                                    <!-- <input type="button" class ="btn btn-success btn-xs" v-model="actionButton" @click="addData"/> -->

                                                </div>
                                                <div v-if="editButton">
                                                    <button class = "btn btn-secondary" v-model="EditData" @click="editPost"> Edit Data</button>

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


        
     
</div>


</template>

<script>
const STORAGE_KEY = 'vue-post-storage';
import componentM from './modalWindow.vue' ;
export default{
    name:'home',
    components:{
        componentM
    },

    data(){
        return{
        categories:[],
        posts:[],
        allPostData:'',
        dynamicTitle : '',
        myModel:false,
        addButton: false,
        allData:'',
        editData:'',
        title:'',
        category:'',
        postBody:'',
        editId:'',
        viewPost:false,
        expTitle:'',
        expCategory:'',
        expPost:''
        

        }
    },
    created(){
        this.posts = JSON.parse(localStorage.getItem(STORAGE_KEY)|| '[]');
    },
    methods:{
        openModel(){
            this.dynamicTitle = "Add New Data"
            this.myModel = true;
            this.addButton = true;
            this.editButton = false;

            this.categories = JSON.parse(localStorage.getItem('vue-todo-app-storage'));
            // console.log(category)
            // this.categories.push(category);
            console.log(this.categories);
            // this.title ='';
            // this.editPost ='';
        },
        openEdit(post,index){
            this.dynamicTitle = "Edit Data",
            this.myModel = true;
            this.addButton = false;
            this.editButton = true;
            this.title= post.title;
            this.postBody= post.postBody;
            this.editId = index;

        },
        addPostData(){
            if(this.title.trim().length == 0){
                alert("Fill up the title")
            }
            else if(this.postBody.trim().length == 0){
                alert("Fill up the Post body segment")
            }
            else{
                console.log("Data is Submitted")
                    this.posts.push({
                        // id:this.catergoryId,
                        title:this.title,
                        postBody:this.postBody,
                        category:this.category
                    })
                    console.log(this.posts);
                    // this.allPostData=''
                    // this.catergoryId++
                    this.myModel=false;
                    this.title='';
                    this.postBody='';
                    this.category ='';
                    localStorage.setItem(STORAGE_KEY,JSON.stringify(this.posts));

            }


                    
        },

        editPost(){
            if(this.title.trim().length ==0){
                return
            }
            else if(this.postBody.trim().length == 0){
                return 
            }
            else {
                console.log(this.editId);
                this.posts[this.editId].title = this.title;
                this.posts[this.editId].postBody = this.postBody;
                this.posts[this.editId].category = this.category;

                this.myModel = false;
                this.title = '';
                this.postBody= '';
                localStorage.setItem(STORAGE_KEY,JSON.stringify(this.posts));


            }
        },
        removePost(index){
                this.posts.splice(index,1);
                console.log(index);
                localStorage.setItem(STORAGE_KEY,JSON.stringify(this.posts));

        },
        viewPostData(index){
            console.log(index);
            this.expTitle =this.posts[index].title ;
            this.expCategory =this.posts[index].category ;
            this.expPost =this.posts[index].postBody ;


            console.log(this.expTitle)

            this.viewPost = true;
        },
        closeModal(val){
            this.viewPost = val
        }
    }
}


</script>

<style>
        
        .buttons{
            float:right;
            margin:5px;
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

</style>
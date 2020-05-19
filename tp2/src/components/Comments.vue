<template>
    <div class="commentSection">
        <h3> Comments : </h3>
            <div id="comments">
                <div class="comment-form">
                    <textarea class="author1" type="text" v-model="author" placeholder="Author Name"></textarea>
                    <star-rating @rating-selected ="setRating" v-bind:increment="0.5" v-bind:max-rating="5" v-model="rating"></star-rating>
                    <textarea type="text" v-model="comment" placeholder="Write your comment about the movie" :maxlength="255"></textarea>
                    <button @click: addComment>Add Comment</button>
                </div>
                <div v-for="critics in critics" :key="critics.id" class="comments-box">
                    <div> 
                        <p> {{critics.comment}} </p>
                        <p> Comment Done by: <strong> {{critics.critic_first_name}} {{critics.critic_last_name}}</strong></p> 
                        <span>{{ critics.creation_date | moment("D MMM YYYY") }}</span>
                        <br>
                        <button id="editButton" @click: addComment>Edit Comment</button>
                    </div>
                    <br>
                </div>
            </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'

    export default {
         components:{
            StarRating,
        },

        data() {
            return{
                critic_first_name: null,
                critic_last_name: null,
            }
         },

         props: {
             comment: {
                type: Array,
                default: null
             },
             crtitcs: {
                type: Array,
                default: null
             }
         },
        
        methods:{
            addComment: function (){
                if(this.critics.id && this.critics.comment){
                    this.critics.comments.push({author: this.critics.critic_first_name + this.crtitics.critic_last_name, content: this.critics.comment})
                }else{
                    alert('Fields Empty');
                }
            }
            },
            /*    
                removeComment: function (index){
                    this.comments.remove(index);
                }
                },
        
                filters: {
                marked: marked
            },*/
    }
</script>

<style lang="scss" scoped>
.loginhref{
    float: right;
    padding-right: 5%;
}

.movieRating{
    margin-left: 44%;
    margin-right: 56%; 
    margin-top: 1%;
}
.comment-form{
    display: block;
    width: 80%;
    margin: auto;
}

textarea{
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 7px;
    height: 70px;
    font-family: Verdana, Helvetica, sans-serif;
    padding: 5px;
}

.author1{
     width: 100%;
    border: 2px solid #ccc;
    border-radius: 7px;
    height: 20px;
    font-family: Verdana, Helvetica, sans-serif;
    padding: 5px;
}

input{
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}

button{
    background: #333;
    color: #ccc;
    border: 0;
    padding: 5px;
    cursor: pointer;
}

#editButton{
    background: rgb(116, 116, 116);
    float: right;
    
}

/*Comment Box*/

.comments-box{
    width: 90%;
    margin: auto;
    padding: 20px 0;
    border-bottom: 1px solid #000;
}

.delete{
    background: rgb(0, 0, 0);
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    display: inline;
    padding: 3px;
}

.author{
    margin: 10px 0;
    font-weight: bold;
}
</style>
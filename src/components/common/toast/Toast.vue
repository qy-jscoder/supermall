<template>
  <div class="toast" v-show="isShow">
      <div >{{message}}</div>
  </div>
</template>
<script>
    export default{
        name:"Toast",
        props:{
            message:{
                type:String,
                default(){
                    return ''
                }
            },
            isShow:{
                type:Boolean,
                default(){
                    return false
                }
            }
        }
    }
</script>
<style scoped>
    .toast{
        position: fixed;
        top:50%;
        left:50%;
        color: #fff;
        padding: 8px 10px;
        transform: translateX(-50%) translateY(-50%);
        background-color: rgba(0, 0, 0, .6);
    }
</style>
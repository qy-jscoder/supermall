<template>
  <div class="tabControl">
      <div v-for="(item,id) in titles" :key="id" class="tabControlitem" :class="{active:currentIndex==id}" @click="spanClick(id)">
          <span>{{item}}</span>
      </div>
  </div>
</template>
<script>
    export default{
        name:"TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            spanClick(index){
                this.currentIndex=index
                //字传父，第一个参数为发送的事件，第二个参数为触发的元素
                this.$emit('tabClick',index)
            }
        }
    }
</script>
<style scoped>
    .tabControl{
        background-color: #fff;
        display: flex;
        text-align: center;
        font-size:15px;
    }
    .tabControlitem{
        flex:1;
        height: 40px;
        line-height: 40px;
    }
    .active{
        color: var(--color-high-text);
        
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>
<script setup>
    import { ref,reactive } from "vue";

    const carts = reactive([
        {
            name:'可乐',
            price:3,
            number:10
        },
        {
            name:'薯片',
            price:8,
            number:6
        }
    ])

    function compute(){
        let count = 0
        for(let i in carts){
            count += carts[i].price*carts[i].number
        }
        return count
    }

    function removeCart(i){
        carts.splice(i,1)
    }


</script>

<template>
    <div>
        <table>
           <thead>
               <tr style="color:orange">
                  <th>序号</th>
                  <th>商品名</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>小计</th>
                  <th>操作</th>
               </tr>
           </thead>
           <tbody v-if="carts.length > 0">
               <!-- 有数据显示-->
               <tr v-for="cart,index in carts" :key="index">
                  <th>{{ index+1 }}</th>
                  <th>{{ cart.name }}</th>
                  <th>{{ cart.price + '元' }}</th>
                  <th>{{ cart.number }}</th>
                  <th>{{ cart.price*cart.number  + '元'}}</th>
                  <th> <button @click="removeCart(index)" style="color:red">删除</button> </th>
               </tr>
           </tbody>
           <tbody v-else>
               <!-- 没有数据显示-->
               <tr>
                  <td colspan="6">购物车没有数据!</td>
               </tr>
           </tbody>
        </table>
        购物车总金额: {{ compute() }} 元
    </div>
</template>

<style>

</style>
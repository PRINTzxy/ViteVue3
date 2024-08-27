<script setup>
    import { reactive,computed } from "vue";
    const author = reactive({
        name: 'joe',
        books: [
            'b1 - 海底两万里',
            'b2 - 这不是斯巴达',
            'b3 - 这就是斯巴达'
        ]
    })

    let hasbooks=()=>{
        console.log("hasbooks")
        return author.books.length>0?'yes':'no'
        
    }

    const publishedBooksMessage=computed(()=>{
        console.log('publishedBooksMessage')
        return author.books.length>0?'yes':'no'
    })

</script>

<template>
    <div>
        <!-- 两个标签两个请求 -->
        <p>{{author.name}} Has published books?:</p>
        <span>{{author.books.length>0?'yes':'no'}}</span><br>
        <span>{{hasbooks()}}</span><br>
        <span>{{hasbooks()}}</span><br>
        <br>
        <!-- 两个标签只有一个请求 -->
        <p style="color:red">{{author.name}} Has published books?:</p>
        <span>{{publishedBooksMessage}}</span><br>
        <span>{{publishedBooksMessage}}</span>
    </div>
</template>

<style>

</style>
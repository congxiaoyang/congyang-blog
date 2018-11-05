<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Foo></Foo>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Foo from '@/components/Foo'
  export default {
    name: 'App',
    components:{
      Header,
      Foo
    }
  }
</script>

<style>
  #app{
    min-height: 100%;
  }
</style>

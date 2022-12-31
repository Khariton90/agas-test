<template>
  <header class="header">
    <div class="container">
      <HeaderTop />
      <HeaderBottom :card="card" :totalPrice="totalPrice"/>   
    </div>
  </header>
</template>

<script>
import HeaderBottom from './HeaderBottom.vue'
import HeaderTop from './HeaderTop.vue'

export default {
  components: { 
    HeaderTop, 
    HeaderBottom 
  },
  props: ['card', 'totalPrice'],
  name: "header-component",
}

</script>

<style lang="scss">
  .header {
    border-bottom: 1px solid #EBEDF1;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
</style>
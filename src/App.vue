<template>
  <div id="app">
    <div class="page">
      <HeaderComponent 
      :card="card" 
      :totalPrice="totalPrice"/>
      <main class="content">
        <div class="container">
          <NearbyPruductsForm />
          <div class="content__avialable-sets avialable-sets">
            <h2 class="avialable-sets__title">Доступные наборы</h2>
            <FormFilter />
            <ProductList 
            :product-list="products" 
            @add-to-card="addToCard" 
            @like-product="likeProduct"/>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import NearbyPruductsForm from '@/components/NearbyPruductsForm.vue'
import ProductList from '@/components/ProductList.vue'
import FormFilter from '@/components/FormFilter.vue'
import { getProducts } from '@/utils/utils.js';

export default {
  name: 'App',
  data() {
    return {
      products: [],
      card: []
    }
  },
  methods: {
    addToCard(product) {
      this.products.forEach((item) => {
        if (item.id === product.id) {
          item.avialable -= 1;
        }
      });

      this.card.push({
        id: product.id,
        price: product.price
      });
    },
    likeProduct(product) {
      this.products.forEach((item) => {
        if (item.id === product.id) {
          item.like = !item.like;
        }
      })
    },
  },
  computed: {
    totalPrice() {
      if (this.card.length) {
        return this.card.reduce((acc, { price }) => price += acc, 0);
      }

      return '';
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    NearbyPruductsForm,
    ProductList,
    FormFilter
  },
  created() {
    this.products = [...getProducts()];
  },

}
</script>

<style lang="scss">
  #app {
    font-family: $font;
  }

  .page {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
  }

  .content {
    padding: 3.75rem 0 7.5rem;
    margin-top: 10.3rem;
  }

  .avialable-sets__title {
    grid-area: hd;
    margin: 0;
  }

  .avialable-sets__form {
    position: sticky;
    top: 6.2rem;
    width: 260px;
  }

  .avialable-sets {
    display: grid;
    gap: 40px;
    grid-template-columns: 260px 1fr;
    grid-template-areas: 
    "hd hd"
    "sd main";
    padding: 5rem 0 0 0;
  }
</style>

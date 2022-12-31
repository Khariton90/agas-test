<template>
  <div class="avialable-sets__cards product-list">
    <div v-for="product in products" :key="product.id" class="product-list__item product">
      <div class="product__image">
        <figure class="product__figure">
          <img :src="product.previewImage" :alt="product.title">
        </figure>
         <div class="product__feedback">
          <a class="product__rating">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.55651 0.934542C8.74331 0.575742 9.25669 0.575742 9.44349 0.934543L11.3593 4.6142C11.5767 
              5.03186 11.9777 5.32317 12.4421 5.40092L16.5337 6.08585C16.9326 6.15264 17.0913 6.64088 16.8078 
              6.92942L13.9002 9.88851C13.5702 10.2244 13.417 10.6957 13.4866 11.1614L14.0995 15.2644C14.1593 
              15.6645 13.744 15.9662 13.382 15.7858L9.66922 13.9349C9.2478 13.7248 8.7522 13.7248 8.33078 13.9349L4.61803 
              15.7858C4.25601 15.9662 3.84068 15.6645 3.90045 15.2644L4.5134 11.1614C4.58298 10.6957 4.42983 10.2244 4.0998 
              9.88851L1.19225 6.92942C0.908736 6.64088 1.06737 6.15264 1.46634 6.08585L5.55791 5.40092C6.02233 5.32317 
              6.42328 5.03186 6.64073 4.6142L8.55651 0.934542Z" fill="#FDBA55" stroke="#FF9D0B"/>
            </svg>

            {{ product.rating }}
          </a>
          <a class="product__like" :class="{active: product.like}" @click.prevent="likeProduct(product)">
            <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2534 2.93678C16.8343 2.5175 16.3367 2.1849 15.7891 
              1.95798C15.2414 1.73106 14.6544 1.61426 14.0616 1.61426C13.4688 1.61426 12.8818 1.73106 
              12.3341 1.95798C11.7865 2.1849 11.2889 2.5175 10.8698 2.93678L10.0001 3.80653L9.13033 
              2.93678C8.28381 2.09026 7.13569 1.6147 5.93853 1.6147C4.74138 1.6147 3.59325 2.09026 2.74674 
              2.93678C1.90022 3.7833 1.42465 4.93142 1.42465 6.12858C1.42465 7.32573 1.90022 8.47386 2.74674 
              9.32037L3.61648 10.1901L10.0001 16.5737L16.3837 10.1901L17.2534 9.32037C17.6727 8.90129 18.0053 
              8.40371 18.2322 7.85605C18.4591 7.30839 18.5759 6.72139 18.5759 6.12858C18.5759 5.53577 18.4591 
              4.94876 18.2322 4.40111C18.0053 3.85345 17.6727 3.35586 17.2534 2.93678Z" stroke="white" stroke-width="1.64103" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
         </div>
      </div>
    <p class="product__title"><span><b>{{ product.title }}</b></span> 
      <span>
        <b>{{ product.price }} {{ product.weight | filterPrice }}</b>
      </span>
    </p>
    <p class="product__description">{{ product.description }}</p>
    <div class="author">
      <span class="author__avatar"><img :src="product.user.avatar" alt="Аватар"></span>
      <span class="author__fullname">
        {{ getFullname(product.user.firstname, product.user.lastname) }}
      </span>
    </div>
    <div class="product__fields-container">
      <a 
      v-if="product.avialable" 
      class="btn-primary" 
      @click.prevent="addToCard(product)">В корзину</a>
      <a 
      v-else class="btn-primary" 
      :class="{disabled: !product.avialable}" 
      disabled>Добавлено
      </a>
      <a class="btn-compare">
        <img src="../assets/icons/compare.svg" alt="Сравнить">
      </a>
    </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "product-list",
  props: ['productList'],
  data() {
    return {
      products: this.productList
    }
  },
  methods: {
    getFullname(firstname = '', lastname = '') {
      return `${firstname} ${lastname}`
    },
    addToCard(product) {
      this.$emit('add-to-card', product);
    },
    likeProduct(product) {
      this.$emit('like-product', product);
    }
  },
  filters: {
    filterPrice(weight) {
      if (!weight) {
        return '₽'
      }

      if (weight < 1) {
        return `₽ / ${weight * 1000} г`
      }

      return `₽ / кг`
    }
  },
}

</script>

<style lang="scss">
  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 260px);
    grid-template-rows: auto;
    margin: 0 auto;
    gap: 40px;
  }

  .product {
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product__fields-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
    margin-top: auto;

    & .btn-primary {
      flex: 1;
    }
  }

  .product__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
  }

  .product__description {
    font-size: 16px;
    letter-spacing: -0.02em;
    padding: 16px 0 21px;
    margin-bottom: auto;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    font-weight: 500;
    padding-bottom: 29px;
    margin-top: auto;

    & .author__avatar {
      border-radius: 50%;
    }
  }

  .product__image {
    position: relative;

    & figure {
      margin: 0;
    }
  }

  .product__feedback {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-weight: 600;
    font-size: 14px;

    & .product__rating,
    & .product__like {
      background: rgba(255, 255, 255, 0.11);
      backdrop-filter: blur(5.5px);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      gap: 4px;
    }

    & .product__rating {
      border-radius: 16px;
      width: 61px;
    }

    & .product__like {
      background: rgba(255, 255, 255, 0.11);
      backdrop-filter: blur(5.5px);
      border-radius: 50%;
      width: 32px;
      cursor: pointer;
      
      & svg {
      fill: none;
    }
    }
  }

  .product__like.active {
    & svg {
      fill: $color-green;
    }
  }

  
</style>
<template>
  <div class="content__search products-nearby-search">
    <h1 class="products-nearby-search__title">Заполните поля, чтобы найти нужные товары поблизости</h1>
    <form action="#" class="products-nearby-search__form form-nearby">
      <div class="form-nearby__select"> 
        <select name="state" class="state">
          <option class="special-option" value="">Город</option>
        </select>
      </div>
      
      <div class="form-nearby__select">
        <select name="state" class="district">
          <option class="special-option" value="">Район</option>
        </select>
      </div>
      <div class="form-nearby__select">
        <select name="state" class="type-card">
          <option class="special-option" value="">Тип корзины</option>
          <option class="special-option" value="">Тип корзины</option>
          <option class="special-option" value="">Тип корзины</option>
        </select>
      </div>
      <button class="btn-primary form-nearby__btn">Поиск</button>
    </form>
  </div>
</template>
  
<script>
export default {
  name: "nearby-products-form",
}

</script>

<style lang="scss">
  .products-nearby-search {
    padding: 60px;
    background-color: $bg-grey;
    border-radius: 33px;
    background: url(../assets/nearby-bg.png) center center no-repeat;

    & .products-nearby-search__title {
      margin: 0 0 40px 0;
      font-size: 32px;
      font-size: 32px;
      line-height: 140%;
      letter-spacing: -0.02em;
    }

    & .form-nearby__select {
      position: relative;
      z-index: 0;
      background-color: #FFFFFF;
      border-radius: 12px;
      margin-right: 12px;

      &::after {
        content: '>';
        position: absolute;
        right: 30px;
        top: 20px;
        transform: rotate(90deg);
        z-index: 1;
        color: $color-black;
      }

      & select  {
        width: 260px;
        height: 60px;
        border: none;
        border-radius: 12px;
        background-color: transparent;
        padding: 18px 26px 19px 20px;
        color: $color-grey;
        position: relative;
        z-index: 2;
      }
      
    }
  }

  .form-nearby {
    display: flex;
  }

  .form-nearby__btn {
    width: 170px;
  }
</style>
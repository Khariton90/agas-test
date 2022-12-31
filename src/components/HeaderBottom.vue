<template>
  <div class="header__bottom header-bottom">
    <div class="header-bottom__left">
      <div class="header__search">
        <input class="header__search-field" type="search" name="search" placeholder="Поиск">
      </div>
    </div>   
    <div class="header-bottom__right">
      <nav class="header-bottom__nav header-bottom-nav">
        <a href="#" class="header-bottom__link">
          <img src="../assets/icons/header-like.svg" alt="like">
        </a>
        <a href="#" class="header-bottom__link">
          <img src="../assets/icons/header-login.svg" alt="login">
        </a>
        <a href="#" class="header__card card">
          <span v-if="totalPrice" class="card__price">{{ totalPrice }} ₽</span>
          <img src="../assets/icons/card.svg" alt="card">
        </a>
      </nav>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['card', 'totalPrice'],
  name: "header-bottom",
}

</script>

<style lang="scss">
  .header-bottom {
    display: flex;
    padding: 18px 0 24px;
  }

  .header-bottom__left {
    flex: 1;
  }

  .header__search {
    & .header__search-field {
      background-color: $bg-grey;
      padding: 20px 22px;
      border: none;
      border-radius: 12px;
      width: 100%;
      position: relative;

      &::before {
        content: url(../assets/icons/search.svg);
        width: 20px;
        height: 20px;
        left: 21px;
        top: 20px;
      }
    }
  }

  .header-bottom__right {
    padding-left: 40px;
  }

  .header-bottom-nav {
    display: flex;
    gap: 8px;
  }

  .header-bottom__link {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: $color-translucent-green;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 124px;
    height: 60px;
    background-color: $color-green;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    position: relative;

    & .card__price {
      position: absolute;
      right: -4px;
      top: -4px;
      background-color: $color-translucent-green;
      padding: 2px;
      color: $color-green;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 700;
    }

    & img {
      width: 20px;
      height: 20px;
    }
  }
</style>
<template>
  <Transition>
  <div class="header__top header-top" v-show="show">
    <div class="header-top__left">
      <a href="#" class="header__logo">
      <img src="../assets/logo.png" alt="logo">
      </a>

      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#" class="nav__link">Доставка</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Фермеры</a></li>
          <li class="nav__item"><a href="#" class="nav__link">О нас</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Кабинеты</a></li>
        </ul>
      </nav>
    </div>

    <div class="header-top__right">
      <div class="header__location">
        <a href="#">г.Москва, Кировский р-он</a>
      </div>
    </div>
  </div>
</Transition>
</template>
  
<script>
export default {
  name: "header-top",
  data() {
    return {
      show: true,
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        return this.show = false;
      }

      return this.show = true;
    }
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}

</script>

<style lang="scss">
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;

    & .header__logo {
      margin-right: 54px;
    }

    & .header-top__left {
      display: flex;

      & .header__nav {
        display: flex;
        align-items: center;
      }

      & .nav__list {
        display: flex;
        gap: 32px;
      }
    }
  }

  .header__location {
    &::before {
      content: url(../assets/icons/marker.svg);
      width: 16px;
      height: 20px;
      padding-right: 12px;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
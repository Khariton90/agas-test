<template>
  <footer class="footer">
    
      <div class="footer__links">
        <div class="container">
          <div class=" footer__logo">
            <a href="/"><img src="../assets/footer-logo.png" alt="footer-logo"></a>
          </div>

          <div class="footer__sections">
            <ul class="footer__list">
              <li class="footer__list-header">Разделы</li>
              <li class="footer__list-item">
                <a href="#">Доставка</a>
              </li>
              <li class="footer__list-item">
                <a href="#">Фермеры</a>
              </li>
              <li class="footer__list-item">
                <a href="#">О нас</a>
              </li>
              <li class="footer__list-item">
                <a href="#">Кабинеты</a>
              </li>
            </ul>
          </div>

          <div class="footer__contacts">
            <ul class="footer__list">
              <li class="footer__list-header">Контакты</li>

              <li class="footer__list-item">WhatsApp</li>
              <li class="footer__list-item">
                <a href="tel:972548037007">972548037007</a>
              </li>
              <li class="footer__list-item">Email</li>
              <li class="footer__list-item">
                <a href="mailto:agoramas.net@gmail.com">agoramas.net@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="footer__call-me call-me">
            <a href="tel:054 803 700 7" class="footer__tel">054 803 700 7</a>
            <a href="#" class="call-me__btn">Перезвоните мне</a>
          </div>

      </div>
      </div>
      <div class="footer__bottom copyright">
        <div class="container">
            <p class="footer__copyright">© 2022 AGAS Innovation Enviroment</p>
              <ul class="footer__col footer__social-list social-list">
                <li class="social-list__item">
                  <a href="#" 
                  class="social-list__link">
                    <img src="../assets/icons/vk.svg" alt="vk">
                  </a>
                </li>
                <li class="social-list__item">
                  <a href="#" 
                  class="social-list__link">
                    <img src="../assets/icons/instagram.svg" alt="instagram">
                  </a>
                </li>
                <li class="social-list__item">
                  <a href="#" 
                  class="social-list__link">
                    <img src="../assets/icons/facebook.svg" alt="facebook">
                  </a>
                </li>
                <li class="social-list__item">
                  <a href="#" 
                  class="social-list__link">
                    <img src="../assets/icons/whatsapp.svg" alt="whatsapp">
                  </a>
                </li>
                <li class="social-list__item">
                  <a href="#" 
                  class="social-list__link">
                    <img src="../assets/icons/telegram.svg" alt="telegram">
                  </a>
                </li>
              </ul>
          <a href="#" class="privacy-policy">Политика конфиденциальности</a>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
}

</script>

<style lang="scss">
.footer {
  background-color: $bg-grey;
}

.footer__links {
  border-bottom: 1px solid #EBEDF1;
  padding: 40px 0;

  & .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

}

.social-list {
  display: flex;
  gap: 16px;
}

.footer__bottom {
  color: $color-grey;
  padding: 44px 0 42px;

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.footer__col {
  margin: 0 auto;
}

.footer__list {
  & .footer__list-header {
    color: $color-grey;
  }
}

.footer__sections {
  & .footer__list-header {
    margin-bottom: 16px;
  }

  & .footer__list-item {
    margin-bottom: 12px;
    font-weight: 500;
    color:#363738;
  }
}

.footer__contacts {
  & .footer__list-item {
    &:nth-child(even) {
      margin: 16px 0 4px;
      color: $color-grey;
    }

    &:nth-child(odd) {
      color: $color-black;
      font-weight: 500;
    }
  }
}

.footer__call-me {
  & .footer__tel {
    font-weight: 500;
    font-size: 32px;
    color: $color-black;
    display: block;
    margin-bottom: 12px;
  }

  & .call-me__btn {
    width: 260px;
    border: 1px solid $color-green;
    color: $color-green;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 12px;
  }
}
</style>
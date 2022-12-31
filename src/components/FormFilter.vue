<template>
  <div class="form-filter">
    <form action="#" class="avialable-sets__form">
      <div class="form-filter__select">
        <select name="form-filter-type" class="form-filter__select">
          <option value="">По количеству отзывов</option>
        </select>
      </div>
      <div class="form-filter__body">
        <h3 class="form-filter__title">Фильтр</h3>
        <fieldset class="total__weight">
          <legend>Общий вес</legend>
          <label>500гр
            <input 
            class="weight__checkbox" 
            type="checkbox" 
            name="weight" 
            value="500"/>
          </label>

          <label>1кг
            <input 
            class="weight__checkbox" 
            type="checkbox" 
            name="weight" 
            value="1"/>
          </label>

          <label>
            2кг
            <input 
            class="weight__checkbox" 
            type="checkbox" 
            name="weight" 
            value="2"/>
          </label>


          <label>5кг
            <input 
            class="weight__checkbox" 
            type="checkbox" 
            name="weight" 
            value="5"/>
          </label>


          <label>10кг
            <input 
            class="weight__checkbox" 
            type="checkbox" 
            name="weight" 
            value="10"/>
          </label>

        </fieldset>

        <fieldset class="delivery">
          <legend>Сроки доставки</legend>
          <label>
            Сегодня
            <input 
            class="delivery__checkbox" 
            type="checkbox" 
            name="delivery" 
            value="1"/>
          </label>

          <label>
            Завтра
            <input 
            class="delivery__checkbox" 
            type="checkbox" 
            name="delivery" 
            value="2"/>
          </label>
          <label>
            3 дня
            <input 
            class="delivery__checkbox" 
            type="checkbox" 
            name="delivery" 
            value="3"/>
          </label>
          <label>
            Неделя
            <input 
            class="delivery__checkbox" 
            type="checkbox" 
            name="delivery" 
            value="7"/>
          </label>
        </fieldset>

        <fieldset>
          <legend>Цена</legend>
          <div class="range-slider">
            <input 
            type="range" 
            min="0" 
            max="11000" 
            step="1" 
            v-model.number="minPrice"
            @change="setRangeSlider">

            <input 
            type="range" 
            min="0" 
            max="11000" 
            step="1" 
            v-model.number="maxPrice"
            @change="setRangeSlider">
          </div>

          <div class="range-values">
            <p>от <span>{{ minPrice }}</span></p>
            <p>до <span>{{ maxPrice }}</span></p>
          </div>
        </fieldset>

        <fieldset class="reviews">
          <legend>Количество отзывов</legend>
          <label>
            > 5
            <input class="reviews__checkbox" type="checkbox" name="reviews" value="5"/>
          </label>
          <label>
            > 10
            <input class="reviews__checkbox" type="checkbox" name="reviews" value="10"/>
          </label>
          <label>
            > 50
            <input class="reviews__checkbox" type="checkbox" name="reviews" value="50"/>
          </label>
          <label>
            > 100
            <input class="reviews__checkbox" type="checkbox" name="reviews" value="100"/>
          </label>

        </fieldset>

        <fieldset class="rating">
          <legend>Рейтинг фермера</legend>
          <label>
            1
            <input class="rating__checkbox" type="checkbox" name="rating" value="1"/>
          </label>

          <label>
            2
            <input class="rating__checkbox" type="checkbox" name="rating" value="2"/>
          </label>


          <label>
            3
            <input class="rating__checkbox" type="checkbox" name="rating" value="3"/>
          </label>


          <label>
            4
            <input class="rating__checkbox" type="checkbox" name="rating" value="4"/>
          </label>


          <label>
            5
            <input class="rating__checkbox" type="checkbox" name="rating" value="5"/>
          </label>

        </fieldset>

        <button class="btn-filter">Поиск</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'form-filter',
    data() {
      return {
        form: {
          weight : []
        },
        minPrice: 100,
        maxPrice: 5000
    }
  },
  methods: {
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
    }
  }

  }
</script>

<style lang="scss">
 .form-filter {
    grid-area: sd;
    width: 260px;
    position: relative;

    .form-filter__title {
      margin: 0 0 20px 0;
    }

    & .form-filter__body {
      border: 1px solid #ECEDF1;
      border-radius: 12px;
      margin-top: 24px;
      padding: 24px;
    }

    & .form-filter__select  {
      background-color: $bg-grey;
      border-radius: 12px;
      
      &::after {
        content: '>';
        position: absolute;
        right: 30px;
        top: 20px;
        transform: rotate(90deg);
        z-index: 1;
        color: $color-black;
      }

      & select{
        height: 60px;
        border: none;
        background-color: transparent;
        border-radius: 12px;
        font-size: 15px;
        width: 100%;
        padding-left: 20px;
        position: relative;
        z-index: 2;
      }

      & option {
        font-size: 18px;
      }
    }

    & fieldset {
      border: none;
      margin: 0 0 0 -4px;
      padding: 0 0 24px 0;
      display: flex;
      flex-wrap: wrap;
    }

    & legend {
      font-weight: 500;
      margin: 0 0 14px 4px;
    }

    & .btn-filter {
      border: none;
      width: 212px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-green;
      background-color: $color-translucent-green;
      font-weight: 600;
      cursor: pointer;
      margin-top: 8px;
    }

    & label {
      background: #F6F7F9;
      border: 1px solid #F6F7F9;
      border-radius: 8px;
      font-size: 14px;
      color: $color-black;
      padding: 2px 8px;
      gap: 8px;
      margin: 4px 3px;
      position: relative;

      & input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
      }
    }

    & label:has(input:checked) {
      background: $color-translucent-green;
      border: 1px solid $color-green;
    }
  }

  .rating {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    & label {
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 2px;
      margin: 2px;
    }

    & label::after {
      content: url(../assets/icons/star.svg);
      width: 20px;
      height: 20px;
    }
  }

  .range-slider {
    width: 212px;
    margin: 29px 0 21px;
    text-align: center;
    position: relative;
  }

  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }

  input[type='range'] {
    appearance: none !important;
    background:#F6F7F9;
    height: 6px;
    width: 212px;
    border-radius: 12px;
}
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background:$color-green;
    height:24px;
    width:24px;
    border-radius: 50%;
}

.range-values {
  display: flex;
  gap: 8px;

  & p {
    width: 102px;
    height: 60px;
    background-color: $bg-grey;
    border-radius: 12px;
    color: $color-grey;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    & span {
      color: $color-black;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
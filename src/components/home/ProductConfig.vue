<template>
  <div class="h-100">
    <h2 class="fw-bold mb-0">Configurator</h2>
    <p class="mb-3">Create your own custom design</p>

    <div class="accordion accordion-flush">
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                  aria-expanded="true" aria-controls="flush-collapseOne">
            <span class="fs-5 me-2 fw-light rounded-circle">1</span>
            Select your size
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne">
          <div class="accordion-body">
            <div class="d-flex flex-wrap">
              <span :class="selected_size === size ? 'active' : ''"
                    class="bg-white py-1 px-3 me-3 mb-3 small size rounded-2 cursor-pointer" v-for="size in sizes"
                    :key="size"
                    @click="selected_size = size">{{ size }}</span>
            </div>
            <div class="d-flex justify-content-between">
              <small class="cursor-pointer">
                <i class="bi bi-envelope"></i>
                Do not find your size?
              </small>
              <small class="cursor-pointer">
                <i class="bi bi-file"></i>
                Size guid
              </small>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">
            <span class="fs-5 me-2 fw-light rounded-circle">2</span>
            Select colors
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo">
          <div class="accordion-body">
            <div class="d-flex justify-content-between mb-2" v-for="color in colors" :key="color">
              <span>{{ color }}</span>
              <span class="color-boxes">
                <span class="color-box d-inline-block me-2 rounded-2 cursor-pointer"
                      :class="selected_colors[color] === i ? 'active' : ''" @click="selected_colors[color] = i"
                      v-for="i of 5" :key="color + i"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <span class="fs-5 me-2 fw-light rounded-circle">3</span>
            Select lining
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree">
          <div class="accordion-body">
            <div class="d-flex justify-content-between mb-2" v-for="color in lining_colors" :key="color">
              <span>{{ color }}</span>
              <span class="color-boxes">
                <span class="color-box d-inline-block me-2 rounded-2 cursor-pointer"
                      :class="selected_lining_colors[color] === i ? 'active' : ''" @click="selected_lining_colors[color] = i"
                      v-for="i of 5" :key="'lining_'+color + i"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header" id="flush-headingFour">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
            <span class="fs-5 me-2 fw-light rounded-circle">4</span>
            Receiving
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse show" aria-labelledby="flush-headingFour">
          <div class="accordion-body">
            <div class="d-flex flex-wrap">
              <span :class="selected_receiving === receiving ? 'active' : ''"
                    class="bg-white py-1 px-3 me-3 mb-3 small size rounded-2 cursor-pointer" v-for="receiving in receivings"
                    :key="receiving"
                    @click="selected_receiving = receiving">{{ receiving }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mt-4">
      <div>
        <small>Total</small>
        <h2 class="fw-bolder">{{ price }} €</h2>
      </div>
      <button type="button" class="btn btn-primary fw-bold text-white">Proceed checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductConfig",
  data() {
    return {
      sizes: ['40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44', '44.5', '45'],
      selected_size: '44',
      colors: ['Base Side', 'Outsole Side', 'Left and right laces', 'Heel side'],
      selected_colors: {},
      lining_colors: ['Base Side', 'Outsole Side', 'Left and right laces', 'Heel side'],
      selected_lining_colors: {},
      receivings: ['Home delivery (+3.5 €)', 'Pickup (0 €)', 'Mail (+2.90 €)'],
      selected_receiving: '',
      price: 89.90,
      standard_price: 90.00
    }
  },
  watch: {
    selected_size (v) {
      switch (v) {
        case '40':
        case '40.5':
        case '41':
        case '41.5':
        case '42':
          switch (this.selected_receiving) {
            case 'Home delivery (+3.5 €)':
              this.price = 93.50
              break
            case 'Pickup (0 €)':
              this.price = 90.00
              break
            case 'Mail (+2.90 €)':
              this.price = 92.90
              break
          }
          break
        default:
          switch (this.selected_receiving) {
            case 'Home delivery (+3.5 €)':
              this.price = 100.20
              break
            case 'Pickup (0 €)':
              this.price = 96.70
              break
            case 'Mail (+2.90 €)':
              this.price = 99.60
              break
          }
      }
    },
    selected_receiving (v) {
      switch (this.selected_size) {
        case '40':
        case '40.5':
        case '41':
        case '41.5':
        case '42':
          switch (v) {
            case 'Home delivery (+3.5 €)':
              this.price = 93.50
              break
            case 'Pickup (0 €)':
              this.price = 90.00
              break
            case 'Mail (+2.90 €)':
              this.price = 92.90
              break
          }
          break
        default:
          switch (v) {
            case 'Home delivery (+3.5 €)':
              this.price = 100.20
              break
            case 'Pickup (0 €)':
              this.price = 96.70
              break
            case 'Mail (+2.90 €)':
              this.price = 99.60
              break
          }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.accordion-item {
  border none
}

.accordion-button:not(.collapsed) {
  color: #000;
  background-color: transparent;
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%)
}

.accordion-button {
  box-shadow none
  font-weight bold
  background transparent
  padding-left 0

  span {
    border 1px solid gray
    height 2rem
    width 2rem
    line-height 2rem
    text-align center
  }
}

.accordion-button:not(.collapsed) {
  box-shadow none

  span {
    background-color darkorange
    color white
    font-weight bold !important
    border-color darkorange
  }
}

.size {
  border 1px solid transparent
  min-width 3rem

  &.active {
    border-color darkorange
  }
}

.color-boxes {
  span {
    height 1.5rem
    width 1.5rem
    position relative

    &.active {
      &:after {
        content ''
        width 2rem
        height 2rem
        border 2px solid darkorange
        border-radius .4rem
        position absolute
        left -.25rem
        top -.25rem
      }
    }
  }

  span:nth-child(1) {
    background-color white
    border 1px solid #ccc
  }

  span:nth-child(2) {
    background-color #DC3545
  }

  span:nth-child(3) {
    background-color #bbbbbb
  }

  span:nth-child(4) {
    background-color #000000
  }

  span:nth-child(5) {
    background-color #333333
  }
}
</style>

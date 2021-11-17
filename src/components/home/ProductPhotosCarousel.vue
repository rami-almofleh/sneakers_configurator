<template>
  <div class="p-0">
    <div class="d-flex align-content-center align-items-center" style="background-color: #ececec">
      <img class="img-fluid main-image mx-auto" src="../../assets/products/karl_kani/89_prm/1978468_P.jpeg" alt="" style="max-width: 50%;" />
    </div>
    <div class="d-flex align-items-center fs-1 fw-light mt-3">
      <i class="bi bi-chevron-left text-black-50 cursor-pointer" @click="scrollToLeft"></i>
      <div class="d-flex flex-row overflow-hidden images">
        <img class="img-thumbnail border-0 image_1978468_P cursor-pointer" @click="selectThisImage" src="../../assets/products/karl_kani/89_prm/1978468_P.jpeg" alt="" />
        <img class="img-thumbnail border-0 image_1978468_P1 cursor-pointer" @click="selectThisImage" src="../../assets/products/karl_kani/89_prm/1978468_P1.jpeg" alt="" />
        <img class="img-thumbnail border-0 image_1978468_P2 cursor-pointer" @click="selectThisImage" src="../../assets/products/karl_kani/89_prm/1978468_P2.jpeg" alt="" />
        <img class="img-thumbnail border-0 image_1978468_P3 cursor-pointer" @click="selectThisImage" src="../../assets/products/karl_kani/89_prm/1978468_P3.jpeg" alt="" />
        <img class="img-thumbnail border-0 image_1978468_P4 cursor-pointer" @click="selectThisImage" src="../../assets/products/karl_kani/89_prm/1978468_P4.jpeg" alt="" />
      </div>
      <i class="bi bi-chevron-right text-black-50 cursor-pointer" @click="scrollToRight"></i>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductPhotosCarousel",
  methods: {
    selectThisImage (e) {
      document.querySelector('img.main-image').setAttribute('src', e.target.src)
    },
    scrollToLeft() {
      // todo ausgegraut wenn ganz links
      const scroll_width = document.querySelector('.images').scrollWidth
      const item_width = document.querySelector('.images img:nth-child(1)').clientWidth
      const scrolled = document.querySelector('.images').scrollLeft
      const scroll_value = scrolled - item_width
      document.querySelector('.images').scrollTo(scroll_value, 0)
    },
    scrollToRight() {
      // todo ausgegraut wenn ganz rechts
      const scroll_width = document.querySelector('.images').scrollWidth
      const item_width = document.querySelector('.images img:nth-child(1)').clientWidth
      const scrolled = document.querySelector('.images').scrollLeft
      const scroll_value = scrolled + item_width
      document.querySelector('.images').scrollTo(scroll_value, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
.text-black-20 {
  color rgba(0,0,0,.2)
}
.images {
  transition all 0.2s ease-out
  scroll-behavior smooth
  img {
    max-width calc(100% / 3)
  }
}
</style>

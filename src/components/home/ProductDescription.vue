<template>
  <div>
    <div class="d-flex align-items-end">
      <h5>Description</h5>

      <ul class="nav nav-tabs border-0 ms-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link border-0 text-reset fw-bold" :class="selected_tab === 'details' ? 'border-0 border-bottom' : ''" @click="selected_tab = 'details'" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="true">Details</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link border-0 text-reset fw-bold" :class="selected_tab === 'story' ? 'border-0 border-bottom' : ''" @click="selected_tab = 'story'" id="story-tab" data-bs-toggle="tab" data-bs-target="#story" type="button" role="tab" aria-controls="story" aria-selected="false">Story</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link border-0 text-reset fw-bold" :class="selected_tab === 'reviews' ? 'border-0 border-bottom' : ''" @click="selected_tab = 'reviews'" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
        </li>
      </ul>
    </div>
    <div class="tab-content mt-3" id="myTabContent">
      <div class="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
        You want to bring some color into the gray autumn? The 89 PRM from Karl Kani could hardly be more colorful. The sneaker is characterized by orange and red tones. Complementing this, some elements are kept complementary. Especially the laces and the tongue in blue form a fresh accentuation to the reddish dominance. The color balancing, however, does not appear overloaded, but pleasantly experimental. - A shoe for courageous sneaker freaks.
        Translated with www.DeepL.com/Translator (free version)
      </div>
      <div class="tab-pane fade" id="story" role="tabpanel" aria-labelledby="story-tab">
        Brand:	Karl Kani<br>
        Manufacturer No.:	KKFWM000059<br>
        Color:	merlot/pumpkin spice/yellow/blue/white<br>
        Category:	Karl Kani 89<br>
        Article No.:	1080541
      </div>
      <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <span class="me-3">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
        0 Reviews
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  data () {
    return {
      selected_tab: 'details'
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom {
  border-color #DC3545 !important
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6 px-md-5 px-2">
        <nav class="pt-3 fw-bold" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item small">Men</li>
            <li class="breadcrumb-item small" aria-current="page">KARL KANI</li>
          </ol>
        </nav>

        <h2 class="fw-bold mb-4">KARL KANI</h2>
        <div class="control-btns">
          <button type="button" class="btn btn-light me-3">
            <i class="bi bi-arrows-fullscreen"></i>
          </button>
          <button type="button" class="btn btn-light">
            <i class="bi bi-box"></i>
          </button>
        </div>

        <product-photos-carousel class="my-3" />

        <product-description class="my-5" />
      </div>

      <div class="col-12 col-lg-6 px-md-5 p-2 bg-light">
        <product-config />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPhotosCarousel from "../components/home/ProductPhotosCarousel";
import ProductDescription from "../components/home/ProductDescription";
import ProductConfig from "../components/home/ProductConfig";
export default {
  name: "Product",
  components: {ProductConfig, ProductDescription, ProductPhotosCarousel}
}
</script>

<style lang="stylus" scoped>

</style>

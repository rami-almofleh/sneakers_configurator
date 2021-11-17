<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom pb-0">
    <div class="container-fluid px-md-5 px-2">
      <a class="navbar-brand" href="#">
        <i class="bi bi-image"></i>
        Sneakers
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse fw-bold" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item border-bottom py-2">
            <router-link class="nav-link active" aria-current="page" to="/">Men</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link class="nav-link" aria-current="page" to="/">Women</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link class="nav-link" aria-current="page" to="/">Kids</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link class="nav-link" aria-current="page" to="/">Delivery</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <i class="bi bi-search me-4"></i>
          <i class="bi bi-bag"></i>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="stylus" scoped>
.nav-item.border-bottom {
  border-color #DC3545 !important
  border-width 1px !important
}
</style>

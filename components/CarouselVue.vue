<template>
  <div class="mt-8 w-full max-w-3xl lg:max-w-5xl center-carousel">
    <h1 class="text-center text-2xl">
      Nos cartes
    </h1>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="lg:flex lg:justify-center">
        <nuxt-img
          provider="sanity"
          :src="Boissons.imageId.asset._ref"
          :alt="Boissons.alt"
          class="h-full rounded-md w-full lg:w-3/5 xl:w-3/4"
        />
      </swiper-slide>
      <swiper-slide class="lg:flex lg:justify-center">
        <nuxt-img
          provider="sanity"
          :src="Entrées.imageId.asset._ref"
          :alt="Entrées.alt"
          class="h-full rounded-md w-full lg:w-3/5 xl:w-3/4"
        />
      </swiper-slide>
      <swiper-slide class="lg:flex lg:justify-center">
        <nuxt-img
          provider="sanity"
          :src="Plats.imageId.asset._ref"
          :alt="Plats.alt"
          class="h-full rounded-md w-full lg:w-3/5 xl:w-3/4"
        />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
export default {
  name: 'CarouselVue',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getCarte']),
    Boissons () {
      return this.getCarte.find(el => el.name === '1')
    },
    Entrées () {
      return this.getCarte.find(el => el.name === '2')
    },
    Plats () {
      return this.getCarte.find(el => el.name === '3')
    }
  }
}
</script>
<style scoped>
.swipper-button-next::after,
.swipper-button-prev:after,
.swiper-pagination {
  color: black !important;
}
@media screen and (min-width: 820px) {
  .center-carousel {
    margin: 25px auto;
  }
}
</style>

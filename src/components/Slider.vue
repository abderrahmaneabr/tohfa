<template>
  <vue-slider-carousel
    v-if="sliderThumbs.length"
    :arrows="true"
    :dots="false"
    class="slider overflow-hidden"
  >
    <div
      v-for="(thumb, index) in sliderThumbs"
      :key="index"
    >
      <div class="hidden sm:block">
        <img
          class="object-cover w-full"
          :src="`${thumb}?nf_resize=smartcrop&w=1800&h=800`"
        >
      </div>
      <div class="block sm:hidden">
        <img
          class="object-cover w-full"
          :src="`${thumb}?nf_resize=smartcrop&w=800&h=500`"
        >
      </div>
    </div>
  </vue-slider-carousel>
</template>
<script>
import VueSliderCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Slider',
  components: {
    VueSliderCarousel
  },
  props: {
    sliderThumbs: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
.slider {
  height: calc(100vh - 150px);
  @media (max-width: 767px) {
    height: 50vh;
  }
  img {
    height: calc(100vh - 150px);
    @media (max-width: 767px) {
      height: 50vh;
    }
  }
}
</style>

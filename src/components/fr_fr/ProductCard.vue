<template>
  <div>
    <a
      :href="$tp(productItem.path)"
      class="flex-shrink-0"
    >
      <img
        class="h-full w-auto object-cover"
        :src="`${productItem.photos.mainPhoto}?nf_resize=smartcrop&w=400&h=700`"
        :alt="productItem.name.fr"
      >
    </a>
    <div class="absolute flex-1 bottom-5 sm:bottom-12 p-5 sm:p-6 flex flex-col justify-between">
      <div class="flex-1">
        <a
          :href="$tp(productItem.path)"
          class="block"
        >
          <p class="text-3xl sm:text-5xl font-extrabold text-white">
            {{ productItem.name.fr }}
          </p>
        </a>
      </div>
    </div>
    <div />
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    productItem: {
      type: Object,
      required: true
    }
  }
}
</script>

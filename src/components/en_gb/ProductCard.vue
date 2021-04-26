<template>
  <div>
    <a
      :href="$tp(productItem.path)"
      class="flex-shrink-0"
    >
      <img
        class="h-48 w-full object-cover"
        :src="`${productItem.photos.mainPhoto}?nf_resize=smartcrop&w=430&h=200`"
        :alt="productItem.name.fr"
      >
    </a>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <a
          :href="$tp(productItem.path)"
          class="block"
        >
          <p class="text-2xl font-bold text-gray-900">
            {{ productItem.name.en }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ productItem.shortDesc.en }}
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

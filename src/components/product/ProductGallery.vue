<script setup lang="ts">
import type { Product } from '@/schemas/product'
import { computed, ref } from 'vue'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.image)

const images = computed(() => [props.product.image, ...props.product.gallery])
</script>

<template>
  <section>
    <div class="product-gallery">
      <div class="main-image">
        <img :src="activeImage" alt="Product Image" />
      </div>
      <div class="thumbnail-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="Product Thumbnail"
          :class="['thumbnail', { active: image === activeImage }]"
          @click="activeImage = image"
        />
      </div>
    </div>
  </section>
</template>

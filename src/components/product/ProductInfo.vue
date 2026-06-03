<script setup lang="ts">
import type { Product } from '@/schemas/product'
import { ref } from 'vue'

const props = defineProps<{
  product: Product
}>()

const selectedColor = ref(props.product.colors[0])

const selectedSize = ref(props.product.sizes[0])

const quantity = ref(1)
</script>

<template>
  <section>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-header active">Description</button>
        <button class="tab-header">Specifications</button>
        <button class="tab-header">Shipping</button>
      </div>
      <div class="tab-content">
        <div class="tab-panel active">
          <p>{{ product.description }}</p>
        </div>
        <div class="tab-panel">
          <p>Specifications content goes here...</p>
        </div>
        <div class="tab-panel">
          <p>Shipping information goes here...</p>
        </div>
      </div>
    </div>
  </section>
</template>

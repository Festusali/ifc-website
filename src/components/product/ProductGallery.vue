<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
import type { Product } from '@/schemas/product'

const props = defineProps<{
  product: Product
}>()

const images = computed(() => [props.product.image, ...(props.product.gallery || [])])

const activeIndex = ref(0)

watch(
  () => props.product.id,
  () => {
    activeIndex.value = 0
  },
)

const activeImage = computed(() => images.value[activeIndex.value])

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length
}

const previousImage = () => {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<template>
  <div class="space-y-5">
    <!-- MAIN IMAGE -->
    <div class="group relative overflow-hidden rounded-2xl bg-[#f8f5f2]">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <img
          :key="activeImage"
          :src="activeImage"
          :alt="product.name"
          class="aspect-square w-full object-cover"
        />
      </Transition>

      <!-- PREV -->
      <button
        v-if="images.length > 1"
        @click="previousImage"
        class="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur transition hover:bg-primary hover:text-white"
      >
        <IconChevronLeft :size="20" />
      </button>

      <!-- NEXT -->
      <button
        v-if="images.length > 1"
        @click="nextImage"
        class="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur transition hover:bg-primary hover:text-white"
      >
        <IconChevronRight :size="20" />
      </button>
    </div>

    <!-- THUMBNAILS -->
    <div v-if="images.length > 1" class="grid grid-cols-4 gap-3 md:grid-cols-5">
      <button
        v-for="(image, index) in images"
        :key="image"
        @click="activeIndex = index"
        class="overflow-hidden rounded border-2 transition-all duration-300"
        :class="
          activeIndex === index
            ? 'border-primary shadow-lg'
            : 'border-transparent hover:border-primary/30'
        "
      >
        <img
          :src="image"
          :alt="`${product.name} ${index + 1}`"
          class="aspect-square w-full object-cover"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean
  hasMore?: boolean
}>()

const emit = defineEmits<{
  (e: 'load-more'): void
}>()
</script>

<template>
  <section v-if="hasMore" class="mt-6 flex justify-center">
    <button
      :disabled="loading"
      class="group inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
      @click="emit('load-more')"
    >
      <span v-if="loading"> Loading... </span>
      <span v-else> Load More Products </span>

      <svg
        v-if="!loading"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </section>
</template>

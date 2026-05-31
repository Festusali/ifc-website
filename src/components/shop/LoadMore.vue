<script setup lang="ts">
import { IconChevronDown, IconLoader2 } from '@tabler/icons-vue'

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
      <IconLoader2 v-if="loading" :size="20" class="animate-spin" />

      <span>
        {{ loading ? 'Loading...' : 'Load More Products' }}
      </span>

      <IconChevronDown
        v-if="!loading"
        :size="20"
        class="transition-transform duration-300 group-hover:translate-y-0.5"
      />
    </button>
  </section>
</template>

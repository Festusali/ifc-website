<script setup lang="ts">
defineProps<{
  visible: number
  total: number
  label?: string
}>()
</script>

<template>
  <span class="text-sm text-slate-500">
    Showing
    <span class="font-semibold text-secondary">
      {{ visible }}
    </span>
    of
    <span class="font-semibold text-secondary">
      {{ total }}
    </span>
    {{ label || 'products' }}
  </span>
</template>

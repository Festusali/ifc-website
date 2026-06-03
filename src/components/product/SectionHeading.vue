<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h3 class="font-heading text-2xl font-semibold md:text-3xl">{{ title }}</h3>
</template>

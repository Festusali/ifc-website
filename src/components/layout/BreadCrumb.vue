<script setup lang="ts">
import type { Breadcrumb } from '@/types/breadcrumb'
import { IconChevronRight } from '@tabler/icons-vue'

defineProps<{
  breadcrumb: Breadcrumb
}>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <div class="container-base">
      <ol
        class="flex flex-wrap items-center gap-2 text-sm"
        :class="{
          'justify-start': breadcrumb?.align === 'left' || !breadcrumb.align,
          'justify-center': breadcrumb?.align === 'center',
          'justify-end': breadcrumb?.align === 'right',
        }"
      >
        <li
          v-for="(item, index) in breadcrumb.items"
          :key="`${item.label}-${index}`"
          class="flex items-center gap-2"
        >
          <!-- LINK -->
          <RouterLink
            v-if="item.to && index !== breadcrumb.items.length - 1"
            :to="item.to"
            :class="
              breadcrumb.linkClass ||
              'text-slate-500 transition-colors duration-300 hover:text-primary'
            "
          >
            {{ item.label }}
          </RouterLink>

          <!-- CURRENT PAGE -->
          <span v-else :class="breadcrumb.activeLinkClass || 'font-medium text-secondary'">
            {{ item.label }}
          </span>

          <!-- SEPARATOR -->
          <IconChevronRight
            v-if="index < breadcrumb.items.length - 1"
            :size="16"
            :class="breadcrumb.activeLinkClass || 'text-secondary'"
          />
        </li>
      </ol>
    </div>
  </nav>
</template>

<template>
  <section class="container mx-auto py-10">
    <slot name="toolbar" />

    <div class="mt-8 flex gap-8">
      <slot name="filters" />

      <div class="flex-1 min-w-0">
        <slot />
      </div>
    </div>

    <div class="my-3 text-center">
      <slot name="count" />
    </div>

    <div class="my-3 text-center">
      <slot name="pagination" />
    </div>
  </section>
</template>

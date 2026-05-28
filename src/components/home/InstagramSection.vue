<script setup lang="ts">
import { IconArrowRight, IconBrandInstagram, IconHeart, IconMessageCircle } from '@tabler/icons-vue'

const posts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    likes: '12.4k',
    comments: '320',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    likes: '9.8k',
    comments: '210',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    likes: '15.1k',
    comments: '540',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    likes: '7.2k',
    comments: '180',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
    likes: '11.6k',
    comments: '260',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200&auto=format&fit=crop',
    likes: '13.9k',
    comments: '410',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-white/90 py-24">
    <!-- Decorative Background -->
    <div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />

    <div class="container-base relative z-10">
      <!-- HEADER -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <!-- LEFT -->
        <div class="max-w-2xl">
          <!-- Badge -->
          <div
            class="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <IconBrandInstagram :size="18" />

            <span> Follow Our Instagram </span>
          </div>

          <!-- Heading -->
          <h2 class="font-heading text-4xl leading-tight font-bold md:text-5xl">
            Style Inspiration Daily
          </h2>

          <!-- Description -->
          <p class="mt-6 text-lg">
            Discover the latest fashion inspiration, exclusive drops and behind-the-scenes moments
            from Immaeby Fashion Closet.
          </p>
        </div>

        <!-- CTA -->
        <a
          href="#"
          class="group inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          Follow @immaebyfashion

          <IconArrowRight :size="18" class="ml-2" />
        </a>
      </div>

      <!-- INSTAGRAM GRID -->
      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(post, index) in posts"
          :key="post.id"
          v-motion
          :initial="{
            opacity: 0,
            y: 60,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 700,
              delay: index * 80,
            },
          }"
          class="group relative overflow-hidden rounded-[2.5rem]"
        >
          <!-- IMAGE -->
          <img
            :src="post.image"
            alt="Instagram Fashion Post"
            class="h-105 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
          />

          <!-- Center Instagram Icon -->
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100"
          >
            <div
              class="flex h-18 w-18 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl"
            >
              <IconBrandInstagram :size="34" />
            </div>
          </div>

          <!-- Bottom Stats -->
          <div
            class="absolute right-0 bottom-0 left-0 flex items-center justify-between p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <!-- Likes -->
            <div
              class="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-xl"
            >
              <IconHeart :size="18" class="text-primary" />

              <span class="text-sm font-medium">
                {{ post.likes }}
              </span>
            </div>

            <!-- Comments -->
            <div
              class="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-xl"
            >
              <IconMessageCircle :size="18" class="text-soft" />

              <span class="text-sm font-medium">
                {{ post.comments }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 flex justify-center">
        <button class="primary-btn">
          View More On Instagram

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>
    </div>
  </section>
</template>

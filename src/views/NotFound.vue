<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import { useSeo } from '@/composables/useSeo'
import { IconArrowLeft, IconHome, IconMoodConfuzed, IconSearch } from '@tabler/icons-vue'

useSeo({
  title: '404 Not Found',
  description:
    'The page you are looking for does not exist. Explore our latest collections and discover premium fashion pieces curated for confidence and timeless elegance.',
  keywords: [
    '404',
    'not found',
    'page not found',
    'immaeby fashion closet',
    'fashion',
    'unisex fashion',
  ],
})
</script>

<template>
  <div class="wrapper">
    <!-- Nav bar -->
    <NavBar />

    <!-- Main content -->
    <main>
      <section
        class="relative flex min-h-screen items-center overflow-hidden bg-secondary px-4 py-24"
      >
        <!-- BACKGROUND IMAGE -->
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop"
            alt="Fashion Background"
            class="h-full w-full object-cover"
          />

          <!-- DARK OVERLAY -->
          <div class="absolute inset-0 bg-black/75" />

          <!-- WARM GRADIENT -->
          <div
            class="absolute inset-0 bg-linear-to-br from-secondary/90 via-secondary/70 to-primary/30"
          />

          <!-- BLUR -->
          <div class="absolute inset-0 backdrop-[blur(3px)]" />
        </div>

        <!-- Decorative Blobs -->
        <div class="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div
          class="absolute right-0 bottom-0 h-[32rem] w-[32rem] rounded-full bg-soft/10 blur-3xl"
        />

        <!-- CONTENT -->
        <div class="container-base relative z-10">
          <div class="mx-auto max-w-5xl">
            <div
              class="overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14 lg:p-20"
            >
              <div class="grid items-center gap-16 lg:grid-cols-2">
                <!-- LEFT CONTENT -->
                <div
                  v-motion
                  :initial="{
                    opacity: 0,
                    y: 60,
                  }"
                  :visible="{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 800,
                    },
                  }"
                >
                  <!-- Badge -->
                  <div
                    class="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/15 px-4 py-2 text-sm font-medium text-white"
                  >
                    <IconMoodConfuzed :size="18" />

                    <span> Page Not Found </span>
                  </div>

                  <!-- Error Code -->
                  <h1
                    class="font-heading text-7xl leading-none font-black text-primary md:text-8xl lg:text-9xl"
                  >
                    404
                  </h1>

                  <!-- Heading -->
                  <h2
                    class="mt-6 font-heading text-4xl leading-tight font-bold text-white md:text-5xl"
                  >
                    Looks Like This Page
                    <span class="text-soft"> Took A Fashion Break </span>
                  </h2>

                  <!-- Description -->
                  <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                    The page you’re trying to access may have been moved, removed or never existed
                    in the first place.
                  </p>

                  <!-- Search -->
                  <div class="mt-6 lg:hidden">
                    <div class="relative max-w-xl">
                      <input
                        type="text"
                        placeholder="Search collections, products or categories..."
                        class="h-15 w-full rounded-full border border-black/5 bg-white pr-16 pl-6 shadow-sm outline-none transition-all duration-300 focus:border-primary"
                      />

                      <button
                        class="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-primary-dark active:scale-95"
                      >
                        <IconSearch :size="20" />
                      </button>
                    </div>
                  </div>

                  <!-- ACTIONS -->
                  <div class="mt-10 flex flex-wrap items-center gap-4">
                    <!-- Home -->
                    <RouterLink
                      to="/"
                      class="group inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark active:scale-95"
                    >
                      <IconHome :size="18" class="mr-2" />

                      Back Home
                    </RouterLink>

                    <!-- Go Back -->
                    <button
                      onclick="history.back()"
                      class="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-secondary active:scale-95"
                    >
                      <IconArrowLeft :size="18" class="mr-2" />

                      Go Back
                    </button>
                  </div>
                </div>

                <!-- RIGHT VISUAL -->
                <div
                  v-motion
                  :initial="{
                    opacity: 0,
                    x: 60,
                    scale: 0.9,
                  }"
                  :visible="{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 800,
                    },
                  }"
                  class="relative hidden lg:block"
                >
                  <!-- Glow -->
                  <div class="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl" />

                  <!-- Card -->
                  <div
                    class="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                  >
                    <!-- Search Icon -->
                    <div
                      class="mx-auto flex h-26 w-26 items-center justify-center rounded-full bg-primary text-white shadow-2xl"
                    >
                      <IconSearch :size="50" />
                    </div>

                    <!-- Text -->
                    <div class="mt-6 text-center">
                      <h3 class="font-heading text-3xl font-semibold text-white">
                        Lost In Fashion?
                      </h3>

                      <p class="mt-4 leading-relaxed text-white/70">
                        Explore our latest collections and discover premium fashion pieces curated
                        for confidence and timeless elegance.
                      </p>
                    </div>

                    <!-- Search -->
                    <div class="mt-6">
                      <div class="relative max-w-xl">
                        <input
                          type="text"
                          placeholder="Search collections, products or categories..."
                          class="h-15 w-full rounded-full border border-black/5 bg-white pr-16 pl-6 shadow-sm outline-none transition-all duration-300 focus:border-primary"
                        />

                        <button
                          class="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-primary-dark active:scale-95"
                        >
                          <IconSearch :size="20" />
                        </button>
                      </div>
                    </div>

                    <!-- Decorative Line -->
                    <div
                      class="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent"
                    />

                    <!-- Mini Stats -->
                    <div class="mt-10 grid grid-cols-2 gap-5">
                      <!-- Item -->
                      <div
                        class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
                      >
                        <h4 class="text-3xl font-bold text-soft">500+</h4>

                        <p class="mt-2 text-sm text-white/60">Fashion Products</p>
                      </div>

                      <!-- Item -->
                      <div
                        class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
                      >
                        <h4 class="text-3xl font-bold text-soft">24/7</h4>

                        <p class="mt-2 text-sm text-white/60">Customer Support</p>
                      </div>
                    </div>
                  </div>

                  <!-- Floating Badge -->
                  <div
                    class="absolute -bottom-11 left-10 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 shadow-2xl backdrop-blur-xl"
                  >
                    <p class="text-sm font-medium text-white/70">Immaeby Fashion Closet</p>

                    <h4 class="mt-1 text-xl font-semibold text-white">
                      Elegant. Modern. Timeless.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

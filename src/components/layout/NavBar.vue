```vue
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { IconMenu2, IconX, IconChevronRight, IconShoppingBag } from '@tabler/icons-vue'

const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

/*
|--------------------------------------------------------------------------
| NAVIGATION
|--------------------------------------------------------------------------
*/

const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Shop',
    route: '/shop',
  },
  {
    label: 'Categories',
    route: '/categories',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
]

/*
|--------------------------------------------------------------------------
| ACTIVE LINK
|--------------------------------------------------------------------------
*/

const isLinkActive = (link: (typeof navLinks)[number]) => {
  if (link.route === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(link.route)
}

/*
|--------------------------------------------------------------------------
| SCROLL
|--------------------------------------------------------------------------
*/

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

/*
|--------------------------------------------------------------------------
| MOBILE MENU
|--------------------------------------------------------------------------
*/

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

/*
|--------------------------------------------------------------------------
| RESIZE
|--------------------------------------------------------------------------
*/

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu()
  }
}

/*
|--------------------------------------------------------------------------
| LIFECYCLE
|--------------------------------------------------------------------------
*/

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)

  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})

/*
|--------------------------------------------------------------------------
| CLOSE MOBILE ON ROUTE CHANGE
|--------------------------------------------------------------------------
*/

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  },
)
</script>

<template>
  <header
    v-motion
    :initial="{
      opacity: 0,
      y: -30,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 700,
      },
    }"
    class="fixed top-0 left-0 z-50 w-full transition-all duration-500"
    :class="
      scrolled
        ? 'border-b border-white/5 bg-secondary/90 py-2 shadow-2xl backdrop-blur-2xl'
        : 'bg-secondary/70 py-4'
    "
  >
    <div class="container-base">
      <div class="flex items-center justify-between">
        <!-- LOGO -->
        <RouterLink to="/" class="group flex items-center gap-3">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-lg"
          >
            <IconShoppingBag :size="26" />
          </div>

          <div class="flex flex-col">
            <span class="font-heading text-xl font-semibold tracking-wide text-white">
              IMMAEBY
            </span>

            <span class="-mt-1 text-[11px] tracking-[0.35em] text-white/70 uppercase">
              FASHION CLOSET
            </span>
          </div>
        </RouterLink>

        <!-- DESKTOP NAV -->
        <nav class="hidden items-center gap-10 lg:flex">
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.route"
            class="group relative text-[15px] font-medium tracking-[0.08em] text-white/70 transition-all duration-300 hover:text-white"
            :class="{
              'text-white!': isLinkActive(link),
            }"
          >
            {{ link.label }}

            <!-- UNDERLINE -->
            <span
              class="absolute -bottom-2 left-0 h-[1.5px] bg-primary transition-all duration-300"
              :class="isLinkActive(link) ? 'w-full' : 'w-0 group-hover:w-full'"
            />
          </RouterLink>
        </nav>

        <!-- RIGHT ACTIONS -->
        <div class="hidden items-center gap-4 lg:flex">
          <!-- CART -->
          <button
            class="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
          >
            <IconShoppingBag :size="22" />

            <!-- COUNT -->
            <span
              class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-white"
            >
              2
            </span>
          </button>

          <!-- CTA -->
          <button
            class="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(181,82,45,0.35)] transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_15px_40px_rgba(181,82,45,0.45)]"
          >
            Shop Now

            <IconChevronRight
              :size="18"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <!-- MOBILE TOGGLE -->
        <button
          class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 lg:hidden"
          @click="toggleMobileMenu"
        >
          <Transition name="nav-icon" mode="out-in">
            <component
              :is="mobileMenuOpen ? IconX : IconMenu2"
              :key="mobileMenuOpen ? 'close' : 'menu'"
              :size="24"
            />
          </Transition>
        </button>
      </div>

      <!-- MOBILE MENU -->
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="mt-5 overflow-hidden rounded-3xl border border-white/5 bg-secondary/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.label"
              :to="link.route"
              class="flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300"
              :class="
                isLinkActive(link)
                  ? 'bg-primary text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              "
            >
              <span class="font-medium tracking-wide">
                {{ link.label }}
              </span>

              <IconChevronRight :size="18" />
            </RouterLink>
          </div>

          <!-- MOBILE CTA -->
          <button
            class="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary-dark"
          >
            Shop Collection

            <IconChevronRight :size="18" />
          </button>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.nav-icon-enter-active,
.nav-icon-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.nav-icon-enter-from,
.nav-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

/* MOBILE MENU */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

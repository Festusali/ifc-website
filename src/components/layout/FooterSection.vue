<script setup lang="ts">
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconArrowRight,
  IconMail,
  IconMapPin,
  IconPhone,
  IconHeartFilled,
} from '@tabler/icons-vue'

const shopLinks = ['New Arrivals', 'Best Sellers', 'Featured Collections', 'Accessories', 'Shoes']

const supportLinks = [
  'Contact Us',
  'Shipping Policy',
  'Returns & Exchanges',
  'FAQs',
  'Privacy Policy',
]
</script>

<template>
  <footer id="footer" class="relative overflow-hidden bg-secondary pt-24 text-white">
    <!-- Decorative Glow -->
    <div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    <div class="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

    <div class="container-base relative z-10">
      <!-- TOP -->
      <div class="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-12">
        <!-- BRAND -->
        <div class="lg:col-span-5">
          <!-- Logo -->
          <div class="inline-flex items-center gap-3">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg"
            >
              <IconHeartFilled :size="26" />
            </div>

            <div>
              <h2 class="font-heading text-3xl font-bold">Immaeby</h2>

              <p class="text-sm text-white/50">Fashion Closet</p>
            </div>
          </div>

          <!-- Description -->
          <p class="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Premium fashion collections designed to inspire confidence, elegance and timeless
            everyday style for modern fashion lovers.
          </p>

          <!-- Contact -->
          <div class="mt-10 space-y-5">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-soft backdrop-blur-xl"
              >
                <IconMapPin :size="20" />
              </div>

              <div>
                <p class="font-medium text-white">Store Location</p>

                <p class="mt-1 text-sm text-white/60">Abuja, Nigeria</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-soft backdrop-blur-xl"
              >
                <IconPhone :size="20" />
              </div>

              <div>
                <p class="font-medium text-white">Phone Number</p>

                <p class="mt-1 text-sm text-white/60">+234 800 000 0000</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-soft backdrop-blur-xl"
              >
                <IconMail :size="20" />
              </div>

              <div>
                <p class="font-medium text-white">Email Address</p>

                <p class="mt-1 text-sm text-white/60">hello@immaeby.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- LINKS -->
        <div class="lg:col-span-7">
          <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Shop -->
            <div>
              <h3 class="font-heading text-2xl font-semibold text-white">Shop</h3>

              <ul class="mt-6 space-y-4">
                <li v-for="(link, index) in shopLinks" :key="index">
                  <a
                    href="#"
                    class="group inline-flex items-center text-white/65 transition-all duration-300 hover:text-white"
                  >
                    <span>
                      {{ link }}
                    </span>

                    <IconArrowRight
                      :size="16"
                      class="ml-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <!-- Support -->
            <div>
              <h3 class="font-heading text-2xl font-semibold text-white">Support</h3>

              <ul class="mt-6 space-y-4">
                <li v-for="(link, index) in supportLinks" :key="index">
                  <a
                    href="#"
                    class="group inline-flex items-center text-white/65 transition-all duration-300 hover:text-white"
                  >
                    <span>
                      {{ link }}
                    </span>

                    <IconArrowRight
                      :size="16"
                      class="ml-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <!-- Social -->
            <div>
              <h3 class="font-heading text-2xl font-semibold text-white">Follow Us</h3>

              <p class="mt-6 leading-relaxed text-white/65">
                Stay connected with us on social media for the latest trends and exclusive updates.
              </p>

              <!-- Social Icons -->
              <div class="mt-8 flex flex-wrap gap-4">
                <!-- Instagram -->
                <a
                  href="#"
                  class="group flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                >
                  <IconBrandInstagram :size="22" />
                </a>

                <!-- Facebook -->
                <a
                  href="#"
                  class="group flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                >
                  <IconBrandFacebook :size="22" />
                </a>

                <!-- Twitter -->
                <a
                  href="#"
                  class="group flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                >
                  <IconBrandTwitter :size="22" />
                </a>

                <!-- TikTok -->
                <a
                  href="#"
                  class="group flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                >
                  <IconBrandTiktok :size="22" />
                </a>

                <!-- WhatsApp -->
                <a
                  href="#"
                  class="group flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                >
                  <IconBrandWhatsapp :size="22" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM -->
      <div
        class="flex flex-col items-center justify-between gap-6 py-8 text-center lg:flex-row lg:text-left"
      >
        <!-- Copyright -->
        <p class="text-sm text-white/50">
          © {{ new Date().getFullYear() }} Immaeby Fashion Closet. All rights reserved.
        </p>

        <!-- Bottom Links -->
        <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <a href="#" class="transition-colors duration-300 hover:text-white">
            Terms & Conditions
          </a>

          <a href="#" class="transition-colors duration-300 hover:text-white"> Privacy Policy </a>

          <a href="#" class="transition-colors duration-300 hover:text-white"> Cookies Policy </a>
        </div>
      </div>
    </div>
  </footer>
</template>

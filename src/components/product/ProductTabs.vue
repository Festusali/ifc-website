<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Product } from '@/schemas/product'

const props = defineProps<{
  product: Product
}>()

type TabKey = 'description' | 'specifications' | 'shipping'

const activeTab = ref<TabKey>('description')

const specifications = computed(() => {
  const specs: Array<{
    label: string
    value: string
  }> = []

  specs.push({
    label: 'Brand',
    value: props.product.brand,
  })

  specs.push({
    label: 'SKU',
    value: props.product.sku,
  })

  specs.push({
    label: 'Stock',
    value: `${props.product.stock}`,
  })

  specs.push({
    label: 'Status',
    value: props.product.status,
  })

  if (props.product.weight) {
    specs.push({
      label: 'Weight',
      value: `${props.product.weight.value} ${props.product.weight.unit}`,
    })
  }

  if (props.product.dimensions) {
    specs.push({
      label: 'Dimensions',
      value: `${props.product.dimensions.length} × ${props.product.dimensions.width} × ${props.product.dimensions.height} ${props.product.dimensions.unit}`,
    })
  }

  if (props.product.colors.length) {
    specs.push({
      label: 'Colors',
      value: props.product.colors.join(', '),
    })
  }

  if (props.product.sizes.length) {
    specs.push({
      label: 'Sizes',
      value: props.product.sizes.join(', '),
    })
  }

  return specs
})

const tabs = [
  {
    key: 'description',
    label: 'Description',
  },
  {
    key: 'specifications',
    label: 'Specifications',
  },
  {
    key: 'shipping',
    label: 'Shipping & Returns',
  },
] as const
</script>

<template>
  <section class="py-6">
    <div class="container-base">
      <div
        class="overflow-hidden rounded-4xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
      >
        <!-- TAB HEADER -->
        <div class="flex flex-wrap gap-2 border-b border-black/5 p-4">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300"
            :class="
              activeTab === tab.key
                ? 'bg-primary text-white'
                : 'bg-[#f8f5f2] text-secondary hover:bg-primary/10'
            "
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- CONTENT -->
        <div class="p-8 md:p-10">
          <!-- DESCRIPTION -->
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div :key="activeTab">
              <!-- DESCRIPTION TAB -->
              <div v-if="activeTab === 'description'" class="max-w-4xl">
                <h3 class="mb-6 text-2xl font-semibold text-secondary">Product Description</h3>

                <div class="space-y-5 leading-relaxed text-slate-600">
                  <p>
                    {{ product.description }}
                  </p>
                </div>
              </div>

              <!-- SPECIFICATIONS TAB -->
              <div v-else-if="activeTab === 'specifications'">
                <h3 class="mb-6 text-2xl font-semibold text-secondary">Specifications</h3>

                <div class="overflow-hidden rounded-3xl border border-black/5">
                  <div
                    v-for="spec in specifications"
                    :key="spec.label"
                    class="grid grid-cols-1 gap-2 border-b border-black/5 p-5 last:border-b-0 md:grid-cols-[220px_1fr]"
                  >
                    <div class="font-semibold text-secondary">
                      {{ spec.label }}
                    </div>

                    <div class="text-slate-600">
                      {{ spec.value }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- SHIPPING TAB -->
              <div v-else-if="activeTab === 'shipping'" class="max-w-4xl">
                <h3 class="mb-6 text-2xl font-semibold text-secondary">Shipping & Returns</h3>

                <div class="space-y-6 text-slate-600">
                  <div>
                    <h4 class="mb-2 font-semibold text-secondary">Delivery</h4>

                    <p>
                      Orders are processed and dispatched as quickly as possible. Delivery times
                      vary depending on destination and courier availability.
                    </p>
                  </div>

                  <div>
                    <h4 class="mb-2 font-semibold text-secondary">Returns</h4>

                    <p>
                      Eligible items may be returned within the stated return window provided they
                      remain unused and in original condition.
                    </p>
                  </div>

                  <div>
                    <h4 class="mb-2 font-semibold text-secondary">Support</h4>

                    <p>
                      For order issues, sizing questions, or delivery inquiries, please contact our
                      customer support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

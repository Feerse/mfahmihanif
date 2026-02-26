<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <section id="experience" class="py-20 bg-pastel-cream">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium text-pastel-navy mb-4"
          >Pengalaman</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Perjalanan Karir</h2>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="relative">
          <div
            class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2"
          ></div>

          <div
            v-for="(exp, index) in store.experiences"
            :key="index"
            class="relative mb-12 md:mb-16"
          >
            <div
              class="md:flex items-center"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <div
                class="hidden md:block md:w-1/2"
                :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'"
              ></div>

              <div
                class="absolute left-4 md:left-1/2 w-4 h-4 bg-pastel-navy rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"
              ></div>

              <div
                class="pl-12 md:pl-0 md:w-1/2"
                :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'"
              >
                <div
                  class="bg-white rounded-2xl p-6 shadow-sm border border-pastel-blue/20 hover:shadow-md transition-shadow"
                >
                  <div
                    class="flex items-center gap-2 mb-2"
                    :class="index % 2 !== 0 ? 'md:justify-end' : ''"
                  >
                    <span
                      class="px-3 py-1 bg-pastel-blue/20 rounded-full text-xs font-medium text-pastel-navy"
                    >
                      {{ exp.period }}
                    </span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-1">
                    {{ exp.title }}
                  </h3>
                  <p class="text-pastel-navy font-medium text-sm mb-3">
                    {{ exp.company }}
                  </p>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    {{ exp.description }}
                  </p>

                  <div
                    class="mt-4 flex flex-wrap gap-2"
                    :class="index % 2 !== 0 ? 'md:justify-end' : ''"
                  >
                    <span
                      v-for="skill in exp.skills"
                      :key="skill"
                      class="px-2 py-1 bg-pastel-gray rounded text-xs text-gray-600"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

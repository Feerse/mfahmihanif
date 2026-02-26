<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <section id="achievements" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium text-pastel-navy mb-4"
          >Prestasi</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Penghargaan & Pencapaian</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(achievement, index) in store.achievements"
          :key="index"
          class="achievement-card rounded-2xl p-6 border border-pastel-blue/20 hover:border-pastel-blue/50 transition-all hover:-translate-y-1"
        >
          <div
            class="w-12 h-12 bg-linear-to-br from-pastel-blue to-pastel-blue-dark rounded-xl flex items-center justify-center mb-4"
          >
            <i :data-lucide="achievement.icon" class="w-6 h-6 text-white"></i>
          </div>
          <div class="text-xs font-medium text-pastel-navy mb-2">
            {{ achievement.date }}
          </div>
          <h3 class="font-bold text-gray-800 mb-2">
            {{ achievement.title }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ achievement.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

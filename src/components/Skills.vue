<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <section id="skills" class="py-20 bg-pastel-cream">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium text-pastel-navy mb-4"
          >Kemampuan</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Tech Stack</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in store.skillCategories"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-sm border border-pastel-blue/20"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-linear-to-br from-pastel-blue to-pastel-blue-dark rounded-lg flex items-center justify-center"
            >
              <i :data-lucide="category.icon" class="w-5 h-5 text-white"></i>
            </div>
            <h3 class="font-bold text-gray-800">
              {{ category.name }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="skill-tag px-4 py-2 bg-pastel-blue-light rounded-full text-sm font-medium text-pastel-navy cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mt-16">
        <h3 class="text-xl font-bold text-gray-800 text-center mb-8">Sertifikasi</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(cert, index) in store.certifications"
            :key="index"
            class="flex items-start gap-4 p-4 bg-white rounded-xl border border-pastel-blue/20 hover:shadow-md transition-all"
          >
            <div
              class="w-10 h-10 bg-pastel-blue/20 rounded-lg flex items-center justify-center shrink-0"
            >
              <i data-lucide="award" class="w-5 h-5 text-pastel-navy"></i>
            </div>
            <div>
              <h4 class="font-medium text-gray-800 text-sm mb-1">
                {{ cert.name }}
              </h4>
              <p class="text-xs text-gray-500">{{ cert.issuer }} • {{ cert.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

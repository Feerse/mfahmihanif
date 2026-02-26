<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium text-pastel-navy mb-4"
          >Projek</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Hasil Karya</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in store.projects"
          :key="index"
          class="project-card bg-pastel-cream rounded-2xl overflow-hidden border border-pastel-blue/20"
        >
          <div
            class="h-48 bg-linear-to-br from-pastel-blue to-pastel-navy flex items-center justify-center"
          >
            <div class="text-center text-white">
              <i :data-lucide="project.icon" class="w-16 h-16 mx-auto mb-2 opacity-80"></i>
              <div class="text-sm opacity-70">
                {{ project.category }}
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-white rounded-full text-xs font-medium text-pastel-navy border border-pastel-blue/20"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-3">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-pastel-navy text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
                Demo
              </a>
              <a
                v-if="project.repo"
                :href="project.repo"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-white text-pastel-navy rounded-lg text-sm font-medium border border-pastel-blue/30 hover:bg-pastel-blue-light transition-colors"
              >
                <i data-lucide="github" class="w-4 h-4"></i>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <footer class="py-8 bg-white border-t border-pastel-blue/20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-center md:text-left">
          <span class="text-xl font-bold text-pastel-navy"
            >Fahmi<span class="text-pastel-blue-dark">.</span></span
          >
          <p class="text-sm text-gray-500 mt-1">Full-stack Web Developer</p>
        </div>

        <div class="flex items-center gap-6">
          <a
            v-for="social in store.socials"
            :key="social.name"
            :href="social.href"
            target="_blank"
            class="text-gray-400 hover:text-pastel-navy transition-colors"
          >
            <i :data-lucide="social.icon" class="w-5 h-5"></i>
          </a>
        </div>

        <p class="text-sm text-gray-500">© 2026 Muhammad Fahmi Hanif. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

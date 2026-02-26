<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const mobileMenuOpen = ref(false)
</script>
<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-blue/30"
  >
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="#" class="text-xl font-bold text-pastel-navy">
          Fahmi<span class="text-pastel-blue-dark">.</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in store.navItems"
            :key="item.id"
            :href="item.href"
            class="nav-link text-sm font-medium text-gray-600 hover:text-pastel-navy transition-colors"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-pastel-blue-light transition-colors"
        >
          <i :data-lucide="mobileMenuOpen ? 'x' : 'menu'" class="w-5 h-5 text-pastel-navy"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-pastel-blue/30 pt-4">
          <div class="flex flex-col gap-3">
            <a
              v-for="item in store.navItems"
              :key="item.id"
              :href="item.href"
              @click="mobileMenuOpen = false"
              class="text-sm font-medium text-gray-600 hover:text-pastel-navy transition-colors py-2"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
  >
    <!-- Background Blobs -->
    <div class="blob bg-pastel-blue w-96 h-96 rounded-full top-20 -left-48"></div>
    <div class="blob bg-pastel-blue-light w-80 h-80 rounded-full bottom-20 -right-40"></div>

    <div class="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <transition name="slide-up" appear>
          <div>
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-pastel-blue/20 rounded-full mb-6"
            >
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-pastel-navy">Tersedia untuk kerja sama</span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Muhammad<br />
              <span
                class="text-transparent bg-clip-text bg-linear-to-r from-pastel-blue-dark to-pastel-navy"
              >
                Fahmi Hanif
              </span>
            </h1>

            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Mahasiswa D4 Teknik Informatika Multimedia Semester 3 yang berfokus pada
              <span class="font-semibold text-pastel-navy">Full-stack Web Development</span>.
            </p>

            <div class="flex flex-wrap gap-3 mb-8">
              <span
                v-for="tag in store.heroTags"
                :key="tag"
                class="px-4 py-2 bg-white rounded-full text-sm font-medium text-pastel-navy shadow-sm border border-pastel-blue/30"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex flex-wrap gap-4">
              <a
                href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pastel-blue-dark to-pastel-navy text-white rounded-full font-medium hover:shadow-lg hover:shadow-pastel-blue/30 transition-all hover:-translate-y-1"
              >
                <i data-lucide="mail" class="w-4 h-4"></i>
                Hubungi Saya
              </a>
              <a
                href="#projects"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white text-pastel-navy rounded-full font-medium border border-pastel-blue/30 hover:bg-pastel-blue-light transition-all"
              >
                <i data-lucide="folder" class="w-4 h-4"></i>
                Lihat Projek
              </a>
            </div>

            <div class="flex items-center gap-6 mt-8">
              <a
                v-for="social in store.socials"
                :key="social.name"
                :href="social.href"
                target="_blank"
                class="p-2 rounded-full bg-white shadow-sm border border-pastel-blue/20 text-gray-600 hover:text-pastel-navy hover:border-pastel-blue transition-all"
              >
                <i :data-lucide="social.icon" class="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </transition>

        <transition name="slide-up" appear style="transition-delay: 0.2s">
          <div class="relative">
            <div class="aspect-square max-w-md mx-auto relative">
              <div
                class="absolute inset-0 bg-linear-to-br from-pastel-blue to-pastel-blue-dark rounded-3xl rotate-6 opacity-30"
              ></div>
              <div
                class="absolute inset-0 bg-linear-to-br from-pastel-blue-light to-pastel-blue rounded-3xl -rotate-3 opacity-50"
              ></div>
              <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-pastel-blue/20">
                <div class="text-center">
                  <div
                    class="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-pastel-blue to-pastel-navy flex items-center justify-center"
                  >
                    <!-- <span
													class="text-4xl font-bold text-white"
													>MF</span
												> -->
                    <img src="../assets/me.jpg" alt="me!" class="rounded-full" />
                  </div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Muhammad Fahmi Hanif</h3>
                  <p class="text-pastel-navy font-medium mb-4">Full-stack Developer</p>
                  <div class="flex justify-center gap-2 flex-wrap">
                    <span
                      class="px-3 py-1 bg-pastel-blue/20 rounded-full text-xs font-medium text-pastel-navy"
                      >Vue.js</span
                    >
                    <span
                      class="px-3 py-1 bg-pastel-blue/20 rounded-full text-xs font-medium text-pastel-navy"
                      >Laravel</span
                    >
                    <span
                      class="px-3 py-1 bg-pastel-blue/20 rounded-full text-xs font-medium text-pastel-navy"
                      >Tailwind</span
                    >
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-pastel-blue/20">
                  <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div class="text-xl font-bold text-pastel-navy">3+</div>
                      <div class="text-xs text-gray-500">Tahun</div>
                    </div>
                    <div>
                      <div class="text-xl font-bold text-pastel-navy">10+</div>
                      <div class="text-xs text-gray-500">Projek</div>
                    </div>
                    <div>
                      <div class="text-xl font-bold text-pastel-navy">5+</div>
                      <div class="text-xs text-gray-500">Sertifikasi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

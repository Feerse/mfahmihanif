<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>
<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium text-pastel-navy mb-4"
          >Tentang Saya</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Latar Belakang</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="text-gray-600 leading-relaxed">
            Saya adalah mahasiswa D4 Teknik Informatika Multimedia Semester 2 di Politeknik Negeri
            Samarinda dengan passion dalam pengembangan web. Memiliki rekam jejak prestasi sebagai
            peraih
            <span class="font-semibold text-pastel-navy"
              >Medallion for Excellence (Peringkat 11) LKS Nasional 2025</span
            >
            serta Juara 1 tingkat Provinsi di bidang Web Technologies.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Berpengalaman dalam membangun aplikasi menggunakan Laravel dan Vue.js, serta memiliki
            sertifikasi kompetensi
            <span class="font-semibold text-pastel-navy">Junior Programmer dari BNSP</span>. Saya
            senang mempelajari teknologi baru dan mengaplikasikannya dalam projek nyata.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="p-4 bg-pastel-gray rounded-xl">
              <i data-lucide="map-pin" class="w-5 h-5 text-pastel-navy mb-2"></i>
              <div class="text-sm text-gray-500">Lokasi</div>
              <div class="font-medium text-gray-800">Samarinda, Kaltim</div>
            </div>
            <div class="p-4 bg-pastel-gray rounded-xl">
              <i data-lucide="graduation-cap" class="w-5 h-5 text-pastel-navy mb-2"></i>
              <div class="text-sm text-gray-500">IP</div>
              <div class="font-medium text-gray-800">3.97 / 4.00</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="(stat, index) in store.stats"
            :key="index"
            class="p-6 bg-linear-to-br from-pastel-blue-light to-white rounded-2xl border border-pastel-blue/20 text-center"
          >
            <div class="text-3xl font-bold text-pastel-navy mb-1">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-600">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

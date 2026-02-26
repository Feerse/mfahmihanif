<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const handleSubmit = () => {
  if (!confirm('Apakah Anda yakin untuk mengirim pesan ini?')) {
    return 0
  }

  const subject = encodeURIComponent(`Pesan dari ${store.form.name}`)
  const body = encodeURIComponent(
    `Nama: ${store.form.name}\nEmail: ${store.form.email}\n\nPesan:\n${store.form.message}`,
  )
  window.location.href = `mailto:fahmi@mfahmihanif.my.id?subject=${subject}&body=${body}`

  store.form.name = ''
  store.form.email = ''
  store.form.message = ''

  alert('Terima kasih! Pesan Anda akan dikirim via email.')
}
</script>
<template>
  <section id="contact" class="py-20 bg-pastel-cream">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium text-pastel-navy mb-4"
          >Kontak</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Mari Terhubung</h2>
        <p class="text-gray-600 mt-4">
          Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <a
          v-for="(contact, index) in store.contacts"
          :key="index"
          :href="contact.href"
          target="_blank"
          class="group bg-white rounded-2xl p-6 text-center border border-pastel-blue/20 hover:border-pastel-blue/50 hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-pastel-blue to-pastel-blue-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <i :data-lucide="contact.icon" class="w-6 h-6 text-white"></i>
          </div>
          <h3 class="font-bold text-gray-800 mb-1">
            {{ contact.label }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ contact.value }}
          </p>
        </a>
      </div>

      <div class="bg-white rounded-2xl p-8 border border-pastel-blue/20">
        <form id="form" @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nama</label>
              <input
                v-model="store.form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl border border-pastel-blue/30 focus:border-pastel-blue-dark focus:ring-2 focus:ring-pastel-blue/20 outline-none transition-all"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                v-model="store.form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-xl border border-pastel-blue/30 focus:border-pastel-blue-dark focus:ring-2 focus:ring-pastel-blue/20 outline-none transition-all"
                placeholder="email@anda.com"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
            <textarea
              v-model="store.form.message"
              rows="4"
              required
              class="w-full px-4 py-3 rounded-xl border border-pastel-blue/30 focus:border-pastel-blue-dark focus:ring-2 focus:ring-pastel-blue/20 outline-none transition-all resize-none"
              placeholder="Tulis pesan Anda..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full md:w-auto px-8 py-3 bg-linear-to-r from-pastel-blue-dark to-pastel-navy text-white rounded-xl font-medium hover:shadow-lg hover:shadow-pastel-blue/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <i data-lucide="send" class="w-4 h-4"></i>
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

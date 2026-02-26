import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    navItems: [
      { id: 1, label: 'Beranda', href: '#home' },
      { id: 2, label: 'Tentang', href: '#about' },
      { id: 3, label: 'Pengalaman', href: '#experience' },
      { id: 4, label: 'Prestasi', href: '#achievements' },
      { id: 5, label: 'Kemampuan', href: '#skills' },
      { id: 6, label: 'Projek', href: '#projects' },
      { id: 7, label: 'Kontak', href: '#contact' },
    ],
    heroTags: ['Vue.js', 'Laravel', 'TailwindCSS', 'Full-stack Developer'],
    socials: [
      { name: 'GitHub', icon: 'github', href: 'https://github.com/Feerse' },
      { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/mfahmihanif' },
      { name: 'Email', icon: 'mail', href: 'mailto:fahmi@mfahmihanif.my.id' },
    ],
    stats: [
      { value: '3+', label: 'Tahun Pengalaman' },
      { value: '10+', label: 'Projek Selesai' },
      { value: '5+', label: 'Sertifikasi' },
    ],
    experiences: [
      {
        period: 'Jun 2024 - Des 2024',
        title: 'Siswa Magang',
        company: 'CV Beesoft Research & Technology (Britech)',
        description:
          'Bertanggung jawab dalam pengelolaan dan entri data perusahaan menggunakan Excel dan database MySQL. Melaksanakan prosedur Software Testing untuk mengidentifikasi bug dan glitch pada aplikasi.',
        skills: ['MySQL', 'Excel', 'QA Testing', 'Data Management'],
      },
      {
        period: '2022 - 2025',
        title: 'Siswa Jurusan PPLG',
        company: 'SMK TI Airlangga Samarinda',
        description:
          'Mengembangkan perangkat lunak dan game dengan nilai rata-rata 85,20. Lulus sebagai siswa teraktif seangkatan dan terbaik di jurusan PPLG.',
        skills: ['Web Development', 'Programming', 'Software Engineering'],
      },
    ],
    achievements: [
      {
        icon: 'medal',
        date: 'Juli 2025',
        title: 'Medallion for Excellence',
        description: 'Peringkat 11 Nasional LKS Web Technologies',
      },
      {
        icon: 'trophy',
        date: 'Juli 2025',
        title: 'Juara 1 Provinsi',
        description: 'LKS Kalimantan Timur Web Technologies',
      },
      {
        icon: 'award',
        date: 'April 2025',
        title: 'Juara 1 Kota',
        description: 'LKS Samarinda Web Technologies',
      },
      {
        icon: 'star',
        date: 'Mei 2025',
        title: 'Lulusan Terbaik',
        description: 'SMK TI Airlangga Samarinda',
      },
    ],
    skillCategories: [
      {
        name: 'Web Development',
        icon: 'code',
        skills: [
          'PHP (Laravel)',
          'JavaScript (Vue.js, React)',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Bootstrap',
        ],
      },
      {
        name: 'Tools & Database',
        icon: 'database',
        skills: ['MySQL', 'Git/GitHub', 'NPM', 'Filament', 'Vercel', 'Netlify'],
      },
      {
        name: 'Design & Multimedia',
        icon: 'palette',
        skills: [
          'Figma (UI/UX)',
          'Adobe Photoshop',
          'Adobe Premiere Pro',
          'Adobe After Effects',
          'Blender (3D)',
        ],
      },
    ],
    certifications: [
      {
        name: 'Certificate of Competence - Junior Programmer',
        issuer: 'BNSP',
        date: 'Okt 2024',
      },
      {
        name: 'Belajar Dasar Pemrograman Web',
        issuer: 'Dicoding Indonesia',
        date: 'Agu 2025',
      },
      {
        name: 'Belajar Dasar Pemrograman JavaScript',
        issuer: 'Dicoding Indonesia',
        date: 'Okt 2024',
      },
      {
        name: 'Belajar Membuat Front-End Web untuk Pemula',
        issuer: 'Dicoding Indonesia',
        date: 'Okt 2024',
      },
      {
        name: 'Belajar Fundamental Front-End Web Development',
        issuer: 'Dicoding Indonesia',
        date: 'Nov 2024',
      },
      {
        name: 'Belajar Pengembangan Web Intermediate',
        issuer: 'Dicoding Indonesia',
        date: 'Mar 2025',
      },
    ],
    projects: [
      {
        name: 'Sistem Perpustakaan',
        category: 'Web Application',
        description:
          'Sistem manajemen perpustakaan menggunakan Laravel dan Filament PHP untuk dashboard admin interaktif dengan Tailwind CSS untuk desain responsif.',
        tech: ['Laravel', 'Filament', 'Tailwind CSS', 'MySQL'],
        icon: 'book-open',
        demo: null,
        repo: 'https://github.com/Feerse',
      },
      {
        name: 'Aplikasi Buku Tamu Digital',
        category: 'Web Application',
        description:
          'Aplikasi buku tamu untuk kebutuhan UKK menggunakan PHP murni dengan optimasi performa database dan Tailwind CSS untuk UX modern.',
        tech: ['PHP', 'Tailwind CSS', 'MySQL'],
        icon: 'users',
        demo: null,
        repo: 'https://github.com/Feerse',
      },
      {
        name: 'Sistem Informasi Pembayaran SPP',
        category: 'Web Application',
        description:
          'Aplikasi manajemen pembayaran uang sekolah menggunakan PHP dan Tailwind CSS untuk pencatatan transaksi siswa secara digital.',
        tech: ['PHP', 'Tailwind CSS', 'MySQL'],
        icon: 'credit-card',
        demo: null,
        repo: 'https://github.com/Feerse',
      },
    ],
    contacts: [
      {
        icon: 'mail',
        label: 'Email',
        value: 'fahmi@mfahmihanif.my.id',
        href: 'mailto:fahmi@mfahmihanif.my.id',
      },
      { icon: 'map-pin', label: 'Lokasi', value: 'Samarinda, Kaltim', href: '#' },
    ],
    form: { name: '', email: '', message: '' },
  }),
})

<script setup>
import { onMounted, onUpdated } from 'vue'
import {
  createIcons,
  Menu,
  X,
  Mail,
  Folder,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Medal,
  Trophy,
  Award,
  Star,
  Code,
  Database,
  Palette,
  BookOpen,
  Users,
  CreditCard,
  Phone,
  Send,
  ExternalLink,
} from 'lucide'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Achievements from './components/Achievements.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'

const refreshIcons = () => {
  createIcons({
    icons: {
      Menu,
      X,
      Mail,
      Folder,
      Github,
      Linkedin,
      MapPin,
      GraduationCap,
      Medal,
      Trophy,
      Award,
      Star,
      Code,
      Database,
      Palette,
      BookOpen,
      Users,
      CreditCard,
      Phone,
      Send,
      ExternalLink,
    },
  })
}

onMounted(() => refreshIcons())
onUpdated(() => refreshIcons())
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <Experience />
  <Achievements />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</template>

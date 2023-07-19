<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <footer class="flex flex-col items-center font-mono">
      footer
    </footer>
  </div>
</template>

<template>
  <div class="about">
    <h1 class="font-mono underline text-orange-700">This is an about page</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

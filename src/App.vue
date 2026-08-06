<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { AppConfigProvider } from "aps-design-pro";
import SearchDialog from "./components/SearchDialog.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
import WebsiteHeader from "./components/WebsiteHeader.vue";

const isSearchOpen = ref(false);
</script>

<template>
  <AppConfigProvider>
    <div class="website-shell">
      <WebsiteHeader @open-search="isSearchOpen = true" />
      <RouterView />
      <WebsiteFooter />
      <SearchDialog v-model="isSearchOpen" />
    </div>
  </AppConfigProvider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(3);
const pageSize = ref(10);
</script>

<template>
  <div class="col">
    <AppPagination v-model:page="page" v-model:page-size="pageSize" :total="500" show-quick-jumper />
    <AppPagination v-model:page="page" v-model:page-size="pageSize" :total="500" :show-quick-jumper="false" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>

<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(1);
const pageSize = ref(50);
const options = [50, 100, 200];
</script>

<template>
  <AppPagination v-model:page="page" v-model:page-size="pageSize" :total="5000" :page-size-options="options" />
</template>

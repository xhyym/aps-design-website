<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(4);
const pageSize = ref(10);
</script>

<template><AppPagination v-model:page="page" v-model:page-size="pageSize" :total="64" :page-size-options="[10, 25, 50]" :show-quick-jumper="false" /></template>

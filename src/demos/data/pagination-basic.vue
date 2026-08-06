<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(1);
const pageSize = ref(20);
</script>

<template><AppPagination v-model:page="page" v-model:page-size="pageSize" :total="246" /></template>

<script setup lang="ts">
import { ref } from "vue";
import { AppInput, AppTableHeader, type ControlSize } from "aps-design-pro";
import "aps-design-pro/style.css";

const searchVisible = ref(false);
const tableSize = ref<ControlSize>("default");
const keyword = ref("");
</script>

<template><AppTableHeader v-model:search-visible="searchVisible" v-model:table-size="tableSize" title="课程列表" description="共 36 门课程"><template #filters><AppInput v-if="searchVisible" v-model="keyword" placeholder="搜索课程" /></template></AppTableHeader></template>

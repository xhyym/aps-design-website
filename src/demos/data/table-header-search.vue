<script setup lang="ts">
import { ref } from "vue";
import { AppInput, AppTableHeader } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ name: true });
const search = ref(false);
const keyword = ref("");
const columnOptions = [{ key: "name", label: "名称" }];
</script>

<template>
  <AppTableHeader v-model="visible" title="订单列表" description="全部订单数据" :column-options="columnOptions" v-model:search-visible="search">
    <template #filters>
      <AppInput v-model="keyword" placeholder="搜索订单号" />
    </template>
  </AppTableHeader>
</template>

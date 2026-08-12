<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("design");
const options = [
  { label: "产品中心", value: "product", children: [{ label: "产品设计", value: "design" }, { label: "产品运营", value: "operation" }] },
  { label: "研发中心", value: "engineering", children: [{ label: "前端研发", value: "frontend" }, { label: "服务端研发", value: "backend" }] },
  { label: "市场中心", value: "marketing", children: [{ label: "品牌", value: "brand" }, { label: "增长", value: "growth" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppTreeSelect v-model="value" :options="options" :default-expanded-keys="['product']" accordion clearable placeholder="默认展开产品中心" aria-label="部门" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>

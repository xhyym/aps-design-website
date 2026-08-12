<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ title: "", price: 0, stock: 10, cover: "" });
const steps: FormWorkflowStep[] = [
  {
    key: "info",
    title: "商品信息",
    description: "填写基础信息",
    items: [{ key: "title", label: "商品标题", type: "input", required: true, rules: [{ required: true, message: "请输入商品标题" }] }],
    beforeNext: (value) => (value.title ? true : "请先填写商品标题"),
  },
  {
    key: "price",
    title: "价格库存",
    description: "设置价格与库存",
    items: [
      { key: "price", label: "价格", type: "input" },
      { key: "stock", label: "库存", type: "input" },
    ],
    beforeNext: (value) => (Number(value.stock) > 0 ? true : "库存必须大于 0"),
  },
  {
    key: "cover",
    title: "封面上传",
    description: "上传商品封面",
    items: [{ key: "cover", label: "封面", type: "input" }],
  },
];
</script>

<template>
  <AppStepForm v-model="model" :steps="steps" finish-text="提交商品" />
</template>

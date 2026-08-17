<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref(false);
</script>

<template>
  <AppCheckTag v-model="active">
    <span>自定义内容</span>
  </AppCheckTag>
</template>

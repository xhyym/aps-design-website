<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const plan = ref("team");
</script>

<template>
  <div class="radio-card-list">
    <AppRadio
      v-model="plan"
      value="personal"
      appearance="card"
      label="个人版"
      description="适合独立讲师管理单个课程空间"
    />
    <AppRadio
      v-model="plan"
      value="team"
      appearance="card"
      label="团队版"
      description="支持协作成员、课程分工与统一资产管理"
    />
  </div>
</template>

<style scoped>
.radio-card-list {
  display: grid;
  gap: 10px;
  width: min(100%, 420px);
}
</style>

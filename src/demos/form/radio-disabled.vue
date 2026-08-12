<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const plan = ref("free");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="plan" name="plan" value="free" label="免费版" />
    <AppRadio v-model="plan" name="plan" value="team" disabled label="团队版（暂未开放）" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>

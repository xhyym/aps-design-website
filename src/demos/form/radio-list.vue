<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const level = ref("l1");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="level" name="level" value="l1" label="入门" />
    <AppRadio v-model="level" name="level" value="l2" label="进阶" />
    <AppRadio v-model="level" name="level" value="l3" label="高级" />
    <AppRadio v-model="level" name="level" value="l4" label="专家" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; width: min(100%, 360px); }
</style>

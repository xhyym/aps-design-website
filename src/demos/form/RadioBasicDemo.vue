<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const learningMode = ref("live");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="learningMode" name="learning-mode" value="live" label="直播授课" />
    <AppRadio v-model="learningMode" name="learning-mode" value="recorded" label="录播学习" />
  </div>
</template>

<style scoped>
.radio-demo-list {
  display: grid;
  gap: 12px;
}
</style>

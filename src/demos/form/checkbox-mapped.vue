<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const receiveNews = ref("enabled");
</script>

<template>
  <AppCheckbox
    v-model="receiveNews"
    true-value="enabled"
    false-value="disabled"
    label="接收课程资讯"
  />
</template>

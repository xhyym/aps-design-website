<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const publicAccess = ref(false);

function confirmPublicAccess(nextValue: boolean): Promise<boolean> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(nextValue), 700);
  });
}
</script>

<template>
  <AppSwitch
    v-model="publicAccess"
    inline-prompt
    active-text="公开"
    inactive-text="私有"
    label="课程访问范围"
    :before-change="confirmPublicAccess"
  />
</template>

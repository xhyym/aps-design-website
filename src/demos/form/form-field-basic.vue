<script setup lang="ts">
import { ref } from "vue";
import { AppFormField, AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const name = ref("");
</script>

<template><AppFormField label="课程名称" for="course-name" required description="最多 40 个字符"><AppInput id="course-name" v-model="name" placeholder="输入课程名称" /></AppFormField></template>

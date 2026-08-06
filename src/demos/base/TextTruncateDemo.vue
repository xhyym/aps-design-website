<script setup lang="ts">
import { AppText } from "aps-design-pro";

const courseDescription = "本课程覆盖 Vue 3 工程化、状态管理、权限模型和大型项目协作流程。";
</script>

<template>
  <div class="course-description">
    <AppText :truncated="true" :title="courseDescription">
      {{ courseDescription }}
    </AppText>
  </div>

  <AppText :line-clamp="2" :title="courseDescription">
    {{ courseDescription }}
  </AppText>
</template>

<style scoped>
.course-description {
  max-width: 240px;
}
</style>

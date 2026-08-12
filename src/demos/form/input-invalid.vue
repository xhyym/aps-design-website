<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const email = ref("not-an-email");
</script>

<template>
  <div class="input-demo-invalid">
    <AppInput
      v-model="email"
      type="email"
      invalid
      placeholder="name@example.com"
      aria-label="邮箱"
      described-by="email-error"
    />
    <p id="email-error" class="input-demo-invalid__error">邮箱格式不正确</p>
  </div>
</template>

<style scoped>
.input-demo-invalid {
  width: min(100%, 360px);
}

.input-demo-invalid__error {
  margin: 6px 0 0;
  color: var(--aps-red, #e5484d);
  font-size: 13px;
}
</style>

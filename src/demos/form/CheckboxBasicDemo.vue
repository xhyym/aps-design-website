<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const hasAcceptedAgreement = ref(false);
</script>

<template>
  <AppCheckbox
    v-model="hasAcceptedAgreement"
    label="我已阅读并同意课程服务协议"
    description="继续操作前需要完成确认"
  />
</template>

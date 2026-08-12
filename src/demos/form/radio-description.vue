<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const channel = ref("wechat");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="channel" name="channel" value="wechat" label="微信" description="扫码即可支付" />
    <AppRadio v-model="channel" name="channel" value="alipay" label="支付宝" description="跳转收银台支付" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>

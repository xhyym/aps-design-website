<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const type = ref("person");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="type" name="type" value="person">
      个人<strong>认证</strong>
    </AppRadio>
    <AppRadio v-model="type" name="type" value="org">
      机构<strong>认证</strong>
    </AppRadio>
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>

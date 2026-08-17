<script setup lang="ts">
import { AppSpace, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div style="max-width: 320px">
    <AppSpace wrap>
      <AppTag v-for="i in 10" :key="i" :label="'标签 ' + i" />
    </AppSpace>
  </div>
</template>

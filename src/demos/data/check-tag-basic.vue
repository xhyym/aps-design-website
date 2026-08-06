<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref(true);
</script>

<template><AppCheckTag v-model="selected" label="已上架" /></template>

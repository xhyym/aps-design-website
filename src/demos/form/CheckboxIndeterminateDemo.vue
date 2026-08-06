<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const allSelected = ref(false);
const isPartiallySelected = ref(true);

function selectAll(value: boolean): void {
  allSelected.value = value;
  isPartiallySelected.value = false;
}
</script>

<template>
  <AppCheckbox
    v-model="allSelected"
    bordered
    :indeterminate="isPartiallySelected"
    label="全选当前页课程"
    description="已选择 3 / 10 项"
    @change="selectAll"
  />
</template>

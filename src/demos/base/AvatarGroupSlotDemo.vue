<script setup lang="ts">
import { AppAvatar, AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";

const reviewers: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨", initials: "陈" },
];
</script>

<template>
  <AppAvatarGroup :items="reviewers" :max="2" shape="square">
    <template #item="{ item }">
      <AppAvatar
        :src="item.src"
        :name="item.name"
        :initials="item.initials"
        shape="square"
      />
    </template>
  </AppAvatarGroup>
</template>

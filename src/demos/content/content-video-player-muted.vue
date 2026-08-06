<script setup lang="ts">
import { AppVideoPlayer } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppVideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" title="静音循环背景视频" muted loop :controls="false" /></template>

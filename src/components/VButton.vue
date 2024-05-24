<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: #002dbf 1px solid;
  border-radius: 8px;
  padding: 16px 32px;
  color: #002dbf;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms;

  &:focus {
    background-color: #f5f5f5;
  }

  &:active {
    transform: scale(1.05);
  }
}
</style>

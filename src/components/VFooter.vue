<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <img src="/logo.png" class="footer__logo logo" />
      <div class="footer__copyright">© alpha, 2023</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 200px;
  background-color: #f0f6fe;
  color: #81899d;

  &__inner {
    padding: 64px 100px;
  }

  &__copyright {
    margin-top: 8px;
  }
}
</style>

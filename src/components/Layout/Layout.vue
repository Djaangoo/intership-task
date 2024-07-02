<template>
  <a-layout theme="light" class="layout">
    <a-layout-header>
      <div class="logo">☁️ WeatherApp</div>
    </a-layout-header>
    <a-layout-content>
      <div class="container">
        <RouterView />
      </div>
    </a-layout-content>

    <a-layout-footer class="footer"> Made with ❣️ and 🍕 </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
//#region vendor
//#endregion
//#region internal
//#endregion
</script>

<style lang="less" scoped>
.layout {
  min-height: 100vh;
}

.logo {
  color: white;
  font-weight: 800;
}

.footer {
  text-align: center;
}
</style>

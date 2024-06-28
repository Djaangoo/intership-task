<template>
  <div>
    <a-typography-title>Home!</a-typography-title>
  </div>
</template>

<script lang="ts">
//#region vendor
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
//#endregion
//#region internal
import { $http } from '@services/http.service';
import { basePath } from '@paths/base.path';
//#endregion
export default defineComponent({
  name: 'HomePage',
  setup() {
    const { t } = useI18n();
    const city = 'London';
    const limit = 5;
    $http.get(basePath.api + '/geo/1.0/direct', {
      params: {
        q: city,
        limit,
      },
    });

    return { t };
  },
});
</script>

<style lang="less" scoped></style>

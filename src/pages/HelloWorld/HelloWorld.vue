<template>
  <div class="container">
    <a-flex vertical gap="20" justify="center">
      <a-flex justify="center">
        <a-image src="/public/img/cat-space.gif" class="cat" />
      </a-flex>

      <div>
        <a-typography-title class="title">
          Hello World! <br />
          Time to become a hero! <br />
          ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)
        </a-typography-title>

        <a-typography-title :level="3"> Mission objective: Weather App </a-typography-title>

        <a-typography-paragraph>
          Mission Target:
          <a-typography-link
            href="https://www.figma.com/file/hFYt7RFdxpByOwk1SF75Qb/Minimal-Weather-App-(Community)?node-id=6%3A10"
            target="_blank"
            content="Mockups (only for inspiration)"
          />
        </a-typography-paragraph>

        <a-typography-paragraph>
          Mission Equipment:
          <a-typography-link href="https://openweathermap.org/api/geocoding-api" target="_blank" content="Geo Api" />,
          <a-typography-link href="https://openweathermap.org/current" target="_blank" content="Weather Api" />,
          <a-typography-link href="https://openweathermap.org/api/air-pollution" target="_blank" content="Air Pollution Api" />
        </a-typography-paragraph>

        <a-typography-paragraph>
          Your team:
          <a-typography-link href="https://vuejs.org/guide/introduction.html" target="_blank" content="Vue" />,
          <a-typography-link href="https://router.vuejs.org/guide/" target="_blank" content="Vue Router" />,
          <a-typography-link href="https://antdv.com/docs/vue/introduce" target="_blank" content="Ant Design 4" />,
          <a-typography-link href="https://pinia.vuejs.org/introduction.html" target="_blank" content="Pinia" />,
          <a-typography-text strong content="Your Skill 💪" />
        </a-typography-paragraph>

        <a-typography-paragraph>
          <a-typography-text strong>
            Experts recommend: before proceeding with the mission will be necessary to complete tutorials
          </a-typography-text>

          <a-typography-link href="https://www.codecademy.com/learn/learn-typescript" target="_blank" content="codecademy.com" />
          or
          <a-typography-link href="https://learntypescript.dev/" target="_blank" content="learntypescript.dev" />
          <br />

          <a-typography-link href="https://vuejs.org/tutorial/#step-1" target="_blank" content="Vue" />
          <br />
        </a-typography-paragraph>

        <a-typography-paragraph strong>
          If you fill need more icons just use
          <a-typography-link href="https://fontawesome.com/docs/web/use-with/vue/" target="_blank" content="Fontawesome" />
        </a-typography-paragraph>
      </div>
    </a-flex>
  </div>
</template>

<script lang="ts">
//#region vendor
import { defineComponent } from 'vue';
//#endregion
//#region internal

//#endregion

export default defineComponent({
  name: 'StepsPage',
  components: {},
  data() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.cat {
  padding: 24px 0;
  margin: auto;
}

.title {
  text-align: center;
}

.container {
  max-width: 600px;
  margin: auto;
}
</style>

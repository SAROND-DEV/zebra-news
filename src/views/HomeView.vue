<script setup lang="ts">
import VNewsCard from '@/components/VNewsCard.vue'
import VButton from '@/components/VButton.vue'

import { useStorageNews } from '@/stores/storageNews'
import { onMounted } from 'vue'

const newsStore = useStorageNews()

onMounted(() => {
  newsStore.getNews()
})
</script>

<template>
  <main>
    <div class="heading">
      <div class="heading__inner">
        <h1 class="heading__title title">Новости</h1>
      </div>
    </div>

    <div class="news">
      <div class="news__contents">
        <VNewsCard
          v-for="(newItem, index) in newsStore.news"
          :key="index"
          :img="newItem.image"
          :date="newItem.date"
        >
          <template #title>{{ newItem.name }}</template>
          <template #previewText>{{ newItem.previewText }}</template>
        </VNewsCard>
      </div>

      <VButton
        v-if="newsStore.hasNextPage"
        class="news__button"
        :disabled="newsStore.isLoading"
        @click="newsStore.getNews()"
      >
        Загрузить ещё
      </VButton>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.heading {
  min-height: 320px;
  background-image: url('/hero_background.jpg');
  display: flex;
  align-items: end;

  &__inner {
    margin-left: 100px;
    margin-bottom: 48px;
  }
}

.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;

  &__contents {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 48px;
    padding: 64px 8px;
    box-sizing: border-box;
  }

  &__button {
    font-weight: bold;
    font-size: 1.25rem;
  }
}
</style>

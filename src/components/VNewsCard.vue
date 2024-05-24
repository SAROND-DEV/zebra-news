<script setup lang="ts">
import moment from 'moment'

const props = defineProps({
  tags: { type: Array<String>, default: () => [] },
  img: { type: String, default: '' },
  date: { type: [Number, Date, String], required: true }
})

const instanceMomentDate =
  typeof props.date === 'number' ? moment.unix(props.date) : moment(props.date)

const defaultTags = ['Новости']
const tags = props.tags.length ? props.tags : defaultTags
</script>

<template>
  <div class="news-card">
    <img v-if="props.img" class="news-card__image" :src="props.img" alt="" />
    <div class="news-card__inner">
      <div class="news-card__date">
        <span class="news-card__date-day">{{ instanceMomentDate.format('DD') }}</span>
        <div class="news-card__date-inner">
          <span class="news-card__date-month">{{ instanceMomentDate.format('MMMM') }}</span>
          <span class="news-card__date-year">{{ instanceMomentDate.format('YYYY') }}</span>
        </div>
      </div>

      <h3 class="news-card__title title">
        <slot name="title"></slot>
      </h3>

      <p class="news-card__previewText">
        <slot name="previewText"></slot>
      </p>

      <div class="news-card__tags">
        <div v-for="(tag, index) in tags" :key="index" class="news-card__tag tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-card {
  min-width: 280px;
  width: 100%;
  max-width: 536px;
  min-height: 554px;
  border: #0c5bef 1px solid;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__inner {
    flex: 1;
    padding: 32px;
    display: flex;
    flex-direction: column;
  }

  &__title,
  &__previewText {
    margin-top: 16px;
  }

  &__title {
    font-weight: 400;
    font-size: 1.375rem;
    color: #0c5bef;
  }

  &__previewText {
    font-size: 1.25rem;
    line-height: 26px;
    flex: 1;
  }

  &__tags {
    display: flex;
    margin-top: 1.5rem;
  }

  &__date {
    display: flex;
    align-items: center;
    color: #a1a7b5;

    &-inner {
      display: flex;
      flex-direction: column;
      margin-left: 6px;
    }

    &-day {
      font-size: 2.25rem;
      font-weight: 400;
    }

    &-month,
    &-year {
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: capitalize;
    }
  }
}
</style>

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { GetNewsResponse, NewsItem } from '@/types/common'
import axios from 'axios'

export const useStorageNews = defineStore('storageNews', () => {
  const baseURL = new URL(import.meta.env.VITE_BASE_URL)
  const instanceAxios = axios.create({
    baseURL: baseURL.toString()
  })

  const currentPage = ref(1)
  const totalPages = ref(2)

  const isLoading = ref(false)
  const hasNextPage = ref(currentPage.value < totalPages.value)
  const news = ref<NewsItem[]>([])

  const wrapperAxios = <T>(axiosFn: Promise<T>) => {
    isLoading.value = true
    return axiosFn.finally(() => {
      isLoading.value = false
    })
  }

  const getNews = () =>
    hasNextPage.value &&
    wrapperAxios(
      instanceAxios.get<GetNewsResponse>('/test/api/news/' + currentPage.value).then((response) => {
        news.value.push(...response.data.items)
        totalPages.value = response.data.nav.total
        currentPage.value = currentPage.value + 1
        hasNextPage.value = response.data.nav.current < response.data.nav.total
      })
    )

  return { news, getNews, isLoading, hasNextPage }
})

export interface NewsItem {
  name: string
  code: string
  previewText: string
  type: {
    value: string
    xmlId: string
  }
  date: number
  link: string
  image: string
}

export interface GetNewsResponse {
  nav: {
    current: number
    total: number
  }

  items: NewsItem[]
}

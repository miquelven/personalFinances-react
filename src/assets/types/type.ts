export interface Item{
    date: Date
    title: string
    category: string
    price: number
    id: number
}

export interface Category{
    [tag: string]: {
        title: string, color: string, expense: boolean
    }
}
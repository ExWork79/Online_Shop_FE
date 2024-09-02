export interface Equipment {
    _id: string,
    name: string,
    description: {
        color: string,
        ram: string,
        display: string,
        storage: string
    },
    price: number,
    slug: string,
    category: string,
    maker: string
}
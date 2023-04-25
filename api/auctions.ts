export type Auction = {
    id: number
    name: string
    end: string
    image: string
}

export const getAuctions = () =>
    new Promise<Auction[]>(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 0,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/300x300',
                },
                {
                    id: 1,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/350x350',
                },
                {
                    id: 2,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/400x400',
                },
                {
                    id: 3,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/450x450',
                },
                {
                    id: 4,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/500x500',
                },
                {
                    id: 5,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/550x550',
                },
                {
                    id: 6,
                    name: 'Hymer 123',
                    end: '2023-04-28T14:05:00.000Z',
                    image: 'https://source.unsplash.com/featured/600x600',
                },
            ])
        }, 500)
    })

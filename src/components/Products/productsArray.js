const productsArray = [
    {
        id: 1,
        name: 'iPhone XMAX',
        // description: 'This is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 500,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 2,
        name: 'iPhone X',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 300,
        image: '/images/iphone-gold.jpg',
    },
    {
        id: 3,
        name: 'iPhone 8Max',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 340,
        image: '/images/iphone-silver.jpg',
    },
    {
        id: 4,
        name: 'iPhone 5S',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 200,
        image: '/images/iphone-white.jpg',
    },
    {
        id: 5,
        name: 'iPhone 12',
        description: 'This is iPhone 16',
        type: 'phone',
        capacity: 128,
        price: 400,
        image: '/images/iphone-gold.jpg',
    },
    {
        id: 6,
        name: 'iPhone 12 Pro Max',
        description: 'This is iPhone 16',
        type: 'phone',
        capacity: 134,
        price: 100,
        image: '/images/iphone-gold.jpg',
    },
    {
        id: 7,
        name: 'iPhone XS',
        description: 'This is iPhone 20',
        type: 'phone',
        capacity: 134,
        price: 150,
        image: '/images/iphone-gold.jpg',
    },
]

export const getProductsObject = (array) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray

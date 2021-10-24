export const addItemToCard = (product, newProduct) => {
    const isExist = product.find((produc) => produc.title === newProduct.title)

    if(isExist) {
        return product.map((item) => {
            return item.title === newProduct.title ? {...item, countNum: item.countNum + 1, costPrice: item.price.NumCost * (item.countNum + 1)} : item
        })
    }
    return [...product, {...newProduct, countNum: 1, costPrice: newProduct.price.NumCost}];
};
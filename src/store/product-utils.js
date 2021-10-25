export const addItemToCard = (product, newProduct) => {
    const isExist = product.find((produc) => produc.title === newProduct.title)

    if(isExist) {
        return product.map((item) => {
            return item.title === newProduct.title ? {...item, countNum: item.countNum + 1, costPrice: item.price.NumCost * (item.countNum + 1)} : item
        })
    }
    return [...product, {...newProduct, countNum: 1, costPrice: newProduct.price.NumCost}];
};

export const decreaseItemToCard = (product, newProduct) => {
    const isExist = product.find((produc) => produc.title === newProduct.title)

    if(isExist.countNum === 1) {
        return product.filter((item) => item.title !== newProduct.title)
    }
    return product.map((list) => 
        list.title === newProduct.title ? {...list, countNum: list.countNum - 1, costPrice: list.price.NumCost * (list.countNum - 1)} : list
    )
}

export const removeItemFromCard = (product, newProduct) => {
    const isExist = product.find((item) => item.title === newProduct.title)

    if (isExist) {
        return product.filter((item) => item.title !== newProduct.title)
    }

    return product.map((list) => 
        list.title === newProduct.title ? {...list, countNum: list.countNum - 100} : list
    );
};
const { childrenAge, mailList, shopCart } = require('../data')


const childrenBirthyYear = childrenAge.map(element => {
    return {
        age: element,
        year: (new Date().getFullYear() - element)
    }
})
//console.table(childrenBirthyYear)

const children = childrenAge.reduce(( list, age ) => {
    list.push({
        age,
        year: (new Date().getFullYear() - age) 
    })

    return [... list]
}, [])
//console.table(children)


/*
const childrenBirthyYear = []
childrenAge.forEach(element => {
    childrenBirthyYear.push({'age': element, 'year': (new Date().getFullYear() - element)})
})
console.table(childrenBirthyYear)
*/


const mailsDomains = mailList.map(element => {
    return element.split('@')[1]
})
//console.table(mailsDomains)

const domains = mailList.reduce((list, email) => {
    list.push({
        domains: email.split('@')[1]
    })
    return [... list]
}, [])
//console.table(domains);


const maxPrice = shopCart
    .filter(element => element.unitPrice < 100)
    .sort((a, b) => b.unitPrice - a.unitPrice)
    .find((element, index) => index === 0)
//console.table(maxPrice)

const maxPrice2 = shopCart
    .filter(element => element.unitPrice < 100)
    .sort((a, b) => b.unitPrice - a.unitPrice)[0]
//console.table(maxPrice2)

const maxPrice3 = shopCart
    .filter(element => element.unitPrice < 100)
    .reduce(( lastProduct, currentProduct ) => {
        if( lastProduct.unitPrice > currentProduct.unitPrice ) return lastProduct
        return currentProduct
    }, {unitPrice: 0})
//console.table(maxPrice3)
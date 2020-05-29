const { childrenAge, mailList } = require('../data')

/*
console.log(childrenAge)
const childrenFiltered = childrenAge.filter(idade => idade >=2 && idade <= 11)
console.table(childrenFiltered)
*/

const filteredMails = mailList.filter(mail => mail.includes('@rocketseat.com'))
console.table(filteredMails)
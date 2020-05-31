let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
]

let makeTree = ( categories, parent ) => {
    let node = {}
    let teste = categories
        .filter( c => c.parent === parent )
        .forEach( c => { 
            node[c.id] = makeTree(categories, c.id)
        })
    
    return node
}

let tree = makeTree(categories, null)
console.log( JSON.stringify(tree, null, null, 2) )
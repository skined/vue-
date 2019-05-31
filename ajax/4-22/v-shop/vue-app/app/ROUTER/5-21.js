[{
    id: 1,
    name: '1',
}, {
    id: 2,
    name: '1-1',
    parentId: 1
}, {
    id: 3,
    name: '1-1-1',
    parentId: 2
}, {
    id: 4,
    name: '1-2',
    parentId: 1
}, {
    id: 5,
    name: '1-2-2',
    parentId: 4
}, {
    id: 6,
    name: '1-1-1-1',
    parentId: 3
}, {
    id: 7,
    name: '2',
}]
[{id: 1,name: '1',children:[{id: 2,
name: '1-1',children:{ id: 2, name: '1-1',
    parentId: 1}}]
}
]
//如何将多维数组转换为树结构
const products = [
    {id : 1, name : "laptop", price :100},
    {id : 2, name : "mobile", price : 60},
    {id : 3, name : "watch", price :70},
    {id : 4, name :"tablet", price :200}
]

// map
const names = products.map(pd => pd.name);
const prices = products.map(pd => {
        // do some work
        return pd.price
    }
);
console.log(names);  // [ 'laptop', 'mobile', 'watch', 'tablet' ]
console.log(prices); // [ 100, 60, 70, 200 ]

// forEach
products.forEach(pd => console.log(pd.name));   //laptop
                                                //mobile
                                                //watch
                                                //tablet

// filter
// const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper); //    [
//                       //      { id: 2, name: 'mobile', price: 60 },
//                       //      { id: 3, name: 'watch', price: 70 }
//                       //    ]

// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);
// [
//     { id: 1, name: 'laptop', price: 100 },
//     { id: 2, name: 'mobile', price: 60 },
//     { id: 4, name: 'tablet', price: 200 }
// ]

// find 
const hasWatch = products.find(pd => pd.name = "watch");
console.log(hasWatch);  // { id: 1, name: 'watch', price: 100 }

// reduce

// includes

// push

// pop

// length

// indexOf



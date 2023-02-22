const a = [

    {company: "samsung",model: "s23", price: 2000},
    {company: "samsung",model: "s23", price: 7000},
    {company: "samsung",model: "s23 ultra", price: 5000},
    {company: "samsung",model: "s23", price: 3000},
    {company: "samsung",model: "s23", price: 5000}

]

const res = a.find(item => item.price === 5000)

console.log(res)
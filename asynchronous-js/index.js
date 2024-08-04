fetch('https://dummyjson.com/products/add', {
    method: 'POST', 
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
       description: 'Iphone 19',
       price: '1000',
       rating: '9/10'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)) 
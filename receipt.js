function receipt(){
    let obj = {
        hotdog: {
            info: 'mini',
            price: 10000
        },
        lavash: {
            info: 'big cheese',
            price: 20000
        },
        pizzaHot: {
            info: 'diabolo big',
            price: 60000
        },
        cola: {
            info: '1.5l',
            price: 8000
        },
        fanta: {
            info: '1.5l',
            price: 8000
        },
        pepsi: {
            info: '1.5l',
            price: 9000
        },
        juice: {
            info: 'апельсиновый',
            price: 11000
        },
        sendvich: {
            info: 'club big',
            price: 22000
        },
        shaurma: {
            info: 'beef big',
            price: 20000
        },
        shaverma: {
            info: 'cat big',
            price: 25000
        },
        steak: {
            info: 'turn beef',
            price: 200000
        },
        shashlik: {
            info: 'куриный',
            price: 9500
        },
        pizzaVegan: {
            info: 'mushrooms',
            price: 80000
        },
        pizzaMix: {
            info: 'много мяса',
            price: 100000
        },
        surprise: {
            info: 'wtf???',
            price: 8000000
        },
    };
    let objArr = Object.entries(obj);
    let range = Math.floor(Math.random() * (5-2)+2);
    let obj1 = {};
    for (let i = 0; i < range; i++) {
        let max = Math.floor(Math.random() * objArr.length);
        obj1[objArr[max][0]] = objArr[max][1];
        delete obj[objArr[max][0]];
    }
    return obj1;
}

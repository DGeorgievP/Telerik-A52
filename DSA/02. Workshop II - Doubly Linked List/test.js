let print = this.print || console.log;

const N = +gets();
 
const wishes = new Map();
 
for (let i = 0; i < N; i++) {
    let input = gets().split(/ (.*)/s);
 
    let command = input[0];
    let data = input[1];
    
    if (command === 'AddWish') {
        const wishParts = data.split(';');
        const item = wishParts[0];
        const price = wishParts[1];
        const child = wishParts[2];
    
        if (!wishes.has(child)) {
            wishes.set(child, []);
        }
    
        wishes.get(child).push({ item, price });
        print('Wish added');
    }
 
    if (command === 'FindWishesByChild') {
        const name = data;
 
        if (wishes.has(name)) {
            const childWishes = wishes.get(name);
            childWishes.forEach(wish => {
                print(`{${wish.item};${name};${wish.price}}`);
            });
        } else {
            print('No Wishes found')
        }
        
    }
 
    if (command === 'DeleteWishes') {
        const name = data;
        if (wishes.has(name)) {
            let count = 0;
            const childToDelete = wishes.get(name);
            childToDelete.forEach(() => {
                wishes.delete(name);
                count++;
            });
            print(`${count} Wishes deleted`);
        } else {
            print('No Wishes found');
        }
    }
 
    if (command === 'FindWishesByPriceRange') {
        const priceRange = data.split(';');
    
        wishes.forEach((childWishes, childName) => {
            childWishes.forEach(wish => {
                const wishPrice = parseFloat(wish.price).toFixed(2);
                if (wishPrice >= parseFloat(priceRange[0]) && wishPrice <= parseFloat(priceRange[1])) {
                    print(`{${wish.item};${childName};${wishPrice}}`);
                }
            });
        });
    }
}
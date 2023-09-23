let input = ['10',
    'AddWish Electric Scooter 2000Z;1536.50;Stefan',
    'AddWish Fortnite Skin;3000;Stefan',
    'AddWish AMD Radeon;4099.99;Pesho',
    'AddWish Apple AirPods;200000;Kiril',
    'AddWish Socks;10000;Tosho',
    'AddWish Swater;999;Stefan',
    'FindWishesByChild Stefan',
    'DeleteWishes Stefan',
    'FindWishesByChild Stefan',
    'FindWishesByPriceRange 100000;200000'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets()
const santaList = new Map()

for (let i = 0; i < n; i++) {

    let items = gets().split(/ (.*)/) //Get and split items by command, present, prise and name.

    let command = items[0]  //Holds the command for each wish.
    let data = items[1]  //Holds the present,price and name.

    if (command === 'AddWish') { //The check for the AddWish command, this will let us print the stuff with this command.

        const inputParts = data.split(';') //Split the data into the 3 main stuff we are working with
        const wish = inputParts[0]
        const price = inputParts[1]
        const name = inputParts[2]

        if (!santaList.has(name)) { //Make a set (array) where a one child want 2 presents (eg. Stefan wants scooter and a game skin)
            santaList.set(name, [])
        }

        santaList.get(name).push({ wish, price }) //Push the previously made set (array) in the Map.
        print('Wish added')

    }

    if (command === 'FindWishesByChild') { //The check  for the FindWishesByChild command, this will let us print all the wishes from the same child or "No Wishes Found" if there are none.

        const childName = data

        if (santaList.has(childName)) { //If the map has the name of the child we go through and print the elements(wishes) of that child 
            const childWishes = santaList.get(childName);

            childWishes.sort(); //Sort alphabetically 

            childWishes.forEach(element => { // Take the elements we need to print 
                const price = Number(element.price); //For price to be with two symbols after decimal point
                print(`{${element.wish};${childName};${price.toFixed(2)}}`);
            });

        } else {
            print('No Wishes found')
        }
    }

    if (command === 'DeleteWishes') { //The check for DeleteWishes, with this we can count and delete 

        const childName = data //Get the name from the data 

        if (santaList.has(childName)) { //We set a count from 0 and variable that will get the data
            let count = 0
            const wishToDelete = santaList.get(childName)
            wishToDelete.forEach(() => {
                santaList.delete(childName)
                count++
            })
            print(`${count} Wishes deleted`)
        } else {
            print('No Wishes found')
        }

    }

    if (command === 'FindWishesByPriceRange') {
        const priceForWishes = data.split(';')
        const resultArr = []

        santaList.forEach((childWish, childName) => {
            childWish.forEach(wish => {

                const price = Number(wish.price)

                if (price >= Number(priceForWishes[0]) && price <= Number(priceForWishes[1])) {
                    resultArr.push(`{${wish.wish};${childName};${price.toFixed(2)}}`)
                }
            })
        })

        if (resultArr.length) {
            resultArr.forEach(element => print(element))
        } else {
            print('No Wishes found')
        }

    }
}

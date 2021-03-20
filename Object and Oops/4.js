const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];
const sum = (...arr) => arr.reduce((a ,b)=>a+b , 0);

const getTotalItems = cartItems =>cartItems.length;

const getTotalCartValue = cartItems => {
    let total = 0;
    //find total after deducting discounted value
    cartItems.forEach(({price , discount})=>{
        total = sum(price*(1 - discount) , total);
    })
    return total;
}

const getTotalDiscountValue = cartItems  =>{
    let totalDiscount = 0;
    cartItems.forEach(({price , discount}) =>{
        totalDiscount = sum(price*discount , totalDiscount);
    })
    return totalDiscount;
}

const getTaxValue = total => 0.18 * total;

console.log("Total cart items: ", getTotalItems(cartItems))
console.log("Total cart value: ",getTotalCartValue(cartItems))
console.log("Total Discounted value: ",getTotalDiscountValue(cartItems))
console.log("Total Tax amount: ",getTaxValue(getTotalCartValue(cartItems)))
function placeAnOrder (orderNumber) {
	
	console.log("Customer Order:" + orderNumber);

	cookAndDeliver(function () {
		console.log ("Order delivered:" + orderNumber);
	});
}

function cookAndDeliver(callback){
	
	setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
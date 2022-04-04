//Funciones descuentos
function priceDiscount(value,discount){
    return value*(100-discount)/100;
}

valorFinal=priceDiscount(120,15);
console.log(valorFinal);



const coupons=[
"Discountxd","Discountxd1",
"Discountxd2","Discountxd3",
"Discountxd4","Discountxd5",
"Discountxd6","Discountxd7"
]

for (var i = 0; coupons[i]; i++){

}


 var valorDescuentoCupon=priceCoupons(10000,coupons);
console.log(valorDescuentoCupon);


//funciones para HTML
function onClickPrice(){
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice=inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const valueDiscount=inputCoupon.value;
    const finalPrice=priceDiscount(valuePrice,valueDiscount);
    //Escribir el resultado en la etiqueta p del html
    //obtenemos el acceso y valor de etiqueta mediante los metodos y su id="finalPrice" y asignamos en la variable resultP
    const resultP=document.getElementById("finalPrice");
    //Agregamos atributo innerText y agregamos una string + variable del valor deseado
    resultP.innerText="El precio con descuento es: $"+finalPrice;
}
dineroCofla = prompt("¿Cuánto dinero tienes? Cofla");
dineroRoberto = prompt("¿Cuánto dinero tienes? Roberto");
dineroPedro = prompt("¿Cuánto dinero tienes? Pedro");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1 ){
    alert("Cofla: Compra el helado de agua");
    alert("y te sobran: " + (dineroCofla - 0.6))
}else if (dineroCofla >= 1 && dineroCofla < 1.6 ){
    alert("Cofla: Compra el helado de crema");
    alert("y te sobran: " + ( dineroCofla - 1))
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7 ){
    alert("Cofla: Compra el helado de heladix");
    alert("y te sobran: " + (dineroCofla - 1.6))
}else if (dineroCofla >= 1.7 && dineroCofla < 1.8 ){
    alert("Cofla: Compra el helado de heladovich");
    alert("y te sobran: " + (dineroCofla - 1.7))
}else if (dineroCofla >= 1.8 && dineroCofla < 2.9 ){
    alert("Cofla: Compra el helado de helardo");
    alert("y te sobran: " + (dineroCofla - 1.8))
}else if(dineroCofla >= 2.9){
    alert("Cofla: Compra el helado con conflites o el pote de 1/4kg");
    alert("y te sobran: " + (dineroCofla - 2.9))
}else {
    alert("Cofla: Lo siento no te alcanza para ningun helado");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1 ){
    alert("Roberto: Compra el helado de agua");
}else if (dineroRoberto >= 1 && dineroRoberto < 1.6 ){
    alert("Roberto: Compra el helado de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 ){
    alert("Roberto: Compra el helado de heladix");
}else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8 ){
    alert("Roberto: Compra el helado de heladovich");
}else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9 ){
    alert("Roberto: Compra el helado de helardo");
}else if(dineroRoberto >= 2.9){
    alert("Roberto: Compra el helado con conflites o el pote de 1/4kg");
}else {
    alert("Roberto: Lo siento no te alcanza para ningun helado");
}

if (dineroPedro >= 0.6 && dineroPedro < 1 ){
    alert("Pedro: Compra el helado de agua");
}else if (dineroPedro >= 1 && dineroPedro < 1.6 ){
    alert("Pedro: Compra el helado de crema");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ){
    alert("Pedro: Compra el helado de heladix");
}else if (dineroPedro >= 1.7 && dineroPedro < 1.8 ){
    alert("Pedro: Compra el helado de heladovich");
}else if (dineroPedro >= 1.8 && dineroPedro < 2.9 ){
    alert("Pedro: Compra el helado de helardo");
}else if(dineroPedro >= 2.9){
    alert("Pedro: Compra el helado con conflites o el pote de 1/4kg");
}else {
    alert("Pedro: Lo siento no te alcanza para ningun helado");
}


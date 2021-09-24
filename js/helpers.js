// ACA SE GENERA UN NUMERO RANDOM
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// OBTENGO LA DISTANCIA DE DOS PUNTOS
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}
// DEVOLVER UN STRING DEPENDIENDO DE LAS DISTANCIAS
let getDistanceHint = distance => {
    if(distance < 30){
        return "¡Hirviendo!";
    } else if (distance < 40){
        return "¡Muy caliente!";
    } else if (distance < 60){
        return "Caliente";
    } else if (distance < 100){
        return "Tibio";
    } else if (distance < 180){
        return "Frío";
    } else if (distance < 360){
        return "¡Muy frío!";
    } else {
        return "¡Helado!";
    }
}
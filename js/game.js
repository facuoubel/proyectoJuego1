const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;


$map.addEventListener('click', e =>{
    clicks ++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h2>${distanceHint}</h2>`;
    
    if (distance < 20) {
        let alerta = Swal.fire({
            title: "¡Ganaste!",
            text:(`¡Tesoro encontrado en ${clicks} clicks!`),
            background: 'hsl(var(--hue-color), 29%, 16%)',
            width: '30%',
            backdrop: true,
            timer: 4000,
            timerProgressBar: true,
        });
        setTimeout (() =>{
            location.reload();
    }, 5000);
}
    
})



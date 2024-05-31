let wheel = document.getElementById('wheel');
let pointer = document.getElementById('pointer');

let isPressing = false;
let pressTime = 0;
let animationFrame;

wheel.addEventListener('mousedown', function() {
    isPressing = true;
    pressTime = Date.now();
});

window.addEventListener('mouseup', function() {
    if (isPressing) {
        isPressing = false;
        let duration = Date.now() - pressTime;
        spinWheel(duration);
    }
});

function spinWheel(duration) {
    let spins = duration / 100;
    let degrees = spins * 360;
    let finalDegree = degrees % 360;
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${finalDegree}deg)`;
    setTimeout(() => {
        let prize = determinePrize(finalDegree);
        alert(`Поздравляем! Вы выиграли: ${prize}`);
    }, 3000);
}

function determinePrize(degree) {
    let sectors = [
        '10% скидка',
        'Бесплатный продукт',
        '50 бонусных баллов',
        'Спасибо за участие!',
        '20% скидка',
        'Бесплатный абонемент',
        '100 бонусных баллов',
        'Повторите попытку'
    ];
    let sectorDegree = 360 / sectors.length;
    let index = Math.floor(degree / sectorDegree);
    return sectors[index];
}

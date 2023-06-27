const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); 
const cloud = document.querySelector('.clouds')
const res = document.querySelector('.pontuacao')
const gameOver = document.querySelector('.gameOver')
const bordas = document.querySelector('.card')
const pontuacaoTotal = 0;

const final = document.querySelector('.pontuacaoFinal').innerHTML = "Pontuação: "+ pontuacaoTotal;
document.querySelector('.gameOverPontuacao').innerHTML = "Pontução Final "+ pontuacaoTotal;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => { 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 150 && pipePosition > 0 && marioPosition < 70) {

       pipe.style.animation = 'none';
       cloud.style.animation = 'none';
       mario.style.animation = 'none';

       mario.style.bottom = '${marioPosition}px';
       mario.style.Left = '80px';

       gameOver.style.display = 'block';
       bordas.style.display = 'block';

       clearInterval(loop);
       document.addEventListener('keydown', () => {
        location.reload();
       });
    }
}, 10); 

document.addEventListener('keydown', jump); 

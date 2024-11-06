'use strict';

const eroll = document.querySelector('.btn--roll');
const ehold = document.querySelector('.btn--hold');
const enew = document.querySelector('.btn--new');
const eplayerActivo = document.querySelector('.player--active');
const eplayer0 = document.querySelector('.player--0');
const eplayer1 = document.querySelector('.player--1');
const ecurrent0 = document.querySelector('#current--0');
const ecurrent1 = document.querySelector('#current--1');
const escore0 = document.querySelector('#score--0');
const escore1 = document.querySelector('#score--1');
const edado = document.querySelector('.dice');
const ered0 = document.querySelector('#red--0');
const ered1 = document.querySelector('#red--1');

const Reinicio = function () {
  ecurrent0.textoContent = 0;
  ecurrent1.textContent = 0;
  escore0.textContent = 0;
  escore1.textContent = 0;
  document
    .querySelector(`.player--${activo}`)
    .classList.remove('player--winner');
  edado.classList.remove('hidden');
  eroll.classList.remove('hidden');
  ehold.classList.remove('hidden');
  nAcumulado = 0;
  player[0] = 0;
  player[1] = 0;
  eplayer0.classList.add('player--active');
  eplayer1.classList.remove('player--active');
  activo = 0;
  if (semaforo[activo] == 3) {
    document.querySelector(`#red--0`).classList.remove('green');
    document.querySelector(`#yellow--0`).classList.remove('green');
    document.querySelector(`#green--0`).classList.remove('green');
    document.querySelector(`#red--1`).classList.remove('green');
    document.querySelector(`#yellow--1`).classList.remove('green');
    document.querySelector(`#green--1`).classList.remove('green');
  }
};

const DobleReinicio = function () {
  ecurrent0.textoContent = 0;
  ecurrent1.textContent = 0;
  escore0.textContent = 0;
  escore1.textContent = 0;
  document
    .querySelector(`.player--${activo}`)
    .classList.remove('player--winner');
  edado.classList.remove('hidden');
  eroll.classList.remove('hidden');
  ehold.classList.remove('hidden');
  nAcumulado = 0;
  player[0] = 0;
  player[1] = 0;
  eplayer0.classList.add('player--active');
  eplayer1.classList.remove('player--active');
  activo = 0;
  document.querySelector(`#red--0`).classList.remove('green');
  document.querySelector(`#yellow--0`).classList.remove('green');
  document.querySelector(`#green--0`).classList.remove('green');
  document.querySelector(`#red--1`).classList.remove('green');
  document.querySelector(`#yellow--1`).classList.remove('green');
  document.querySelector(`#green--1`).classList.remove('green');
};

//Reinicio();

edado.classList.add('hidden');

let nAcumulado = 0;
const player = [0, 0];
const semaforo = [0, 0];
let activo = 0;

const CambioJugador = function () {
  document.querySelector(`#score--${activo}`).textContent = player[activo];
  document.querySelector(`#current--${activo}`).textContent = 0;
  eplayer0.classList.toggle('player--active');
  eplayer1.classList.toggle('player--active');
  nAcumulado = 0;
  activo = activo == 0 ? 1 : 0;
};

eroll.addEventListener('click', function () {
  const nAleatorio = Math.trunc(Math.random() * 6) + 1;
  edado.classList.remove('hidden');
  edado.src = `dice-${nAleatorio}.png`;
  if (nAleatorio !== 1) {
    nAcumulado = nAcumulado + nAleatorio;
    document.querySelector(`#current--${activo}`).textContent = nAcumulado;
  } else {
    CambioJugador();
  }
});

ehold.addEventListener('click', function () {
  player[activo] = player[activo] + nAcumulado;
  if (player[activo] < 100) {
    CambioJugador();
  } else {
    semaforo[activo] = semaforo[activo] + 1;
    document.querySelector(`#score--${activo}`).textContent = player[activo];
    document.querySelector(`#current--${activo}`).textContent = 0;
    document
      .querySelector(`.player--${activo}`)
      .classList.add('player--winner');
    if (semaforo[activo] == 1) {
      document.querySelector(`#red--${activo}`).classList.add('green');
    }
    if (semaforo[activo] == 2) {
      document.querySelector(`#yellow--${activo}`).classList.add('green');
    }
    if (semaforo[activo] == 3) {
      document.querySelector(`#green--${activo}`).classList.add('green');
    }
    edado.classList.add('hidden');
    eroll.classList.add('hidden');
    ehold.classList.add('hidden');
  }
});

// la palabra function se cambio por una funcion Reinicio sin parentesis

enew.addEventListener('click', function () {
  Reinicio();
});

enew.addEventListener('dblclick', function () {
  DobleReinicio();
});

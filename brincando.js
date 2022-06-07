let btnMais = document.querySelector("#mais");
let btnMenos = document.querySelector("#menos");
let numerador1 = document.querySelector("#numerador");
let numerador = 0;

btnMais.addEventListener("click", () => {
    numerador++
    numerador1.innerHTML = numerador;
})


btnMenos.addEventListener("click", () => {
    numerador--
    numerador1.innerHTML = numerador;
})

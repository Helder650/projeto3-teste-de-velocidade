let vehicle1 = (prompt("Digite o nome do veiculo 1"))
let vehicle2 = (prompt("Digite o nome do veiculo 2"))
let speed1 = (prompt(`Digite a velocidade do ${vehicle1}`))
let speed2 = (prompt(`Digite a velocidade do ${vehicle2}`))

if (speed1 > speed2){
    alert(`O ${vehicle1} esta a ${speed1}km/h, e está mais rápido que o ${vehicle2}, que está a ${speed2}km/h.`) 
} else if (speed1 < speed2) {
    alert(`O ${vehicle2} esta a ${speed2}km/h, e está mais rapido que o ${vehicle1}, que está a ${speed1}km/h.`)
} else {
    alert(`Tanto o ${vehicle1} quanto ${vehicle2} estão na mesma velocidade de ${speed1}km/h`)
}
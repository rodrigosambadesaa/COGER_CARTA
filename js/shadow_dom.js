// const seleccionCarta = (e) => {
//     //console.log(e.target.dataset.id);
//     const target = baraja.findIndex(
//         element => {
//             return element === e.target.dataset.id;
//         }
//     );
//     baraja.splice(target,1);
//     e.target.parentElement.removeChild(e.target);
//     console.log(baraja);
   
// }

const seleccionCarta = (e) => {
    //console.log(e.target.dataset.id);
    const padre = e.target.parentElement;
    const hijo = e.target;
    const target = baraja.findIndex(
        element => {
            return element === e.target.dataset.id;
        }
    );
    e.target.classList.remove("reverso");
    setTimeout(
        () => {
            baraja.splice(target,1);
            padre.removeChild(hijo);
            console.log(e.target)
            console.log(baraja);
        },
        1500
    );
   
}
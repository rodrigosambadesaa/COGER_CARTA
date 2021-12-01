let parejas=[];
let contador = 0;

const comparar = (carta1,carta2) => {
    const c1 = Number(carta1.dataset.id.match(/\d+/).join(""));
    const c2 = Number(carta2.dataset.id.match(/\d+/).join(""));
    if(c1===c2){
        const padre = carta1.parentElement;
        if(carta1 && carta2){
        padre.removeChild(carta1);
        padre.removeChild(carta2);
        }
    }
    carta1.classList.add("reverso");
    carta2.classList.add("reverso");
    parejas = [];
}
const seleccionCarta = (e) => {
    //console.log(e.target.dataset.id);
    const padre = e.target.parentElement;
    const hijo = e.target;
    if(parejas.length<2){
        const hayado = parejas.includes(e.target
        );
        console.log(hayado)
        if(!hayado){
            parejas.push(e.target);
            e.target.classList.remove("reverso");
        }

        if(parejas.length===2){
            //console.log(parejas)
            const [carta1,carta2] = parejas;
            setTimeout(
                ()=>{
                    comparar(carta1,carta2);
                },
                2000
            );
            
        }
    }   
}
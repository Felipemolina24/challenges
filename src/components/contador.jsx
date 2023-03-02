import { useState } from "react"

const FirstApp = ({value}) =>{

    const [contador, setContador] = useState( value )

    const funcionSumar = () =>{
        setContador(contador + 1)
    }

    const funcionRestar = () =>{
        setContador(contador - 1)
    }

    const funcionRest = () =>{
        setContador(value)
    }

    



    return(
        <>
        <h3> Contador  </h3>
        <span> {contador} </span>
        <button onClick={  () => funcionSumar() }> +1  </button>
        <button onClick={  () => funcionRestar() }> -1  </button>
        <button onClick={  () => funcionRest() }> Valor Inicial  </button>

        </>
    )
        

}

export default FirstApp
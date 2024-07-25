import { useState, useContext } from 'react'
import { createContext } from 'react'

export const ContadorContext = createContext({
    contador: 0,
    incrementar: () => { },
    decrementar: () => { },
})

export function ContadorProvider({ children }) {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(prev => prev + 1)
    }

    function decrementar() {
        setContador(prev => prev - 1)
    }

    return (
        <ContadorContext.Provider value={{ contador, decrementar, incrementar }}>
            {children}
        </ContadorContext.Provider>
    )
}

export function useContador() {
    const contexto = useContext(ContadorContext)

    return contexto
}
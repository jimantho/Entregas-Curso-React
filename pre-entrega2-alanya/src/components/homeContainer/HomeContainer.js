import React from 'react'
import Categorias from '../categorias/Categorias'
import { CategoriasCustom } from '../categorias/CategoriasCustom'
import { Portada } from '../categorias/portada/Portada'

export const HomeContainer = () => {
    return (
        <>
            <Portada />
            <Categorias></Categorias>
        </>
    )
}


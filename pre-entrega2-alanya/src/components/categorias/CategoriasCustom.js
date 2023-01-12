// import Icons from "../../Data/icons"
import "./Categorias.css"

// import { faShirt } from '@fortawesome/free-solid-svg-icons'

export const CategoriasCustom = ({ mostrarEllas,mostrarEllos}) => {
    return (
        <div className='contenedor-categoria'>
            <div className="item-categoria">
                <div className="item">
                    <div className="contenedor-opcion-sexo">
                        <div className="sexo-mujer">
                            <button onClick={mostrarEllas}>Para ellas</button>
                        </div>
                        <div className="sexo-hombre">
                            <button onClick={mostrarEllos}>Para ellos</button>
                        </div>¨
                    </div>

                </div>
            </div>
        </div>
    )
}


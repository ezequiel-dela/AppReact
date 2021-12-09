import './App.css'
import React from "react";
import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
// import ComFilhos from './components/ComFIlhos'
import Card from './components/layout/Card'

export default (props) => {
    <div className="App">
        <Card titulo="Primeiro componente">
            <Primeiro/>
        </Card>
        <Card titulo="Exercicio X">
            Conteudo
        </Card>
        {/* <ComFIlhos>
            <ul>
                <li>Ana</li>
                <li>Carlos</li>
                <li>Ezequiel</li>
                <li>Pâmela</li>
            </ul>
        </ComFIlhos> */}
        {/* <Primeiro/>
        <ComParametro titulo="Esse é o titulo"
            subtitulo="Esse é o subtitulo"/>
        <ComParametro titulo="OPa"
            subtitulo="Epa"/> */}
    </div>
}
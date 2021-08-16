import React from 'react'

function cabecalho() {
return  <header className="cabecalho_propaganda">
            <div class='titulo_cabecalho'>
                <h1>Cafel do <span>ABÉ</span></h1>
            </div>
            <nav class='nav_horizontal'>
                <ul>
                    <li>
                        <button onclick="trocarConteudo('conteudo_sobre','conteudo_busca')" class="sobre_tab">
                            <a href='/'>SOBRE</a>
                        </button>
                    </li>
                    <li>
                        <button onclick="trocarConteudo('conteudo_busca','conteudo_sobre')" class="busca_tab">
                            <a href='/'>BUSCAR</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
}

export default cabecalho
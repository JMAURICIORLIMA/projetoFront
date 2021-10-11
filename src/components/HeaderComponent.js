import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://mv.com.br/solucao/soul-mv-hospitalar" className="navbar-brand">Controle Café da Manhã</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import './styles.css'

const axios = require('axios')

export default function Dashboard() {
    const url = 'https://api.github.com/users/juanjunger'
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`${url}`)
            .then(response => {
                setUser(response.data)
            })
    }, [user.id])
    
    return (
        <main>
            <section className="dashboard">
                <div className="container">
                    <div className="content">
                        <div className="dashboard__head">
                            <h1>Central de Candidatos</h1>
                            <p>Abaixo está o perfil que mais se adequa a vaga de Desenvolvedor Frontend para análise.</p>
                        </div>
                        <div className="dashboard__candidates flex flex--wrap">
                            <Card linkTo="/profile" name={user.name} bio={user.bio} location={user.location} avatar_url={user.avatar_url} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

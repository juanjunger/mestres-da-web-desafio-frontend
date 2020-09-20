import React, { useState, useEffect } from 'react'
import Project from '../../components/Project'
import './styles.css'

const axios = require('axios')

export default function Profile() {
    const url = 'https://api.github.com/users/juanjunger/repos'
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get(`${url}`)
            .then(response => {
                setProjects(response.data)
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="container">
                    <div className="content">
                        <div className="profile__head">
                            <h1>Projetos Públicos</h1>
                        </div>
                        <div className="profile__projects flex flex--wrap">
                            {projects.map(project =>
                                <Project key={project.id} name={project.name} description={project.description} language={project.language} html_url={project.html_url} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
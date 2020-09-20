import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Card(props) {
    const { avatar_url, name, location, bio, linkTo } = props

    return (
        <div className="card">
            <div className="flex">
                <div className="card__avatar">
                    <img src={ avatar_url } alt={ name }/>
                </div>
                <div className="card__info">
                    <h1>{ name }</h1>
                    <h3>{ location }</h3>
                    <h6>{ bio }</h6>
                    <Link className="profileLink" to={linkTo}>
                        <button>Visualizar Projetos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
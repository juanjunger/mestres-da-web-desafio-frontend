import React from 'react'
import './styles.css'

export default function Project(props) {
    const { name, description, language } = props

    return (
        <div className="project">
            <div className="flex">
                <div className="project__info">
                    <h1>{ name }</h1>
                    <h3>{ description }</h3>
                    <h6>{ language }</h6>
                </div>
            </div>
        </div>
    )
}
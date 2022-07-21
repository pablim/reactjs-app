import React from 'react'
import AlphabeticBar from '../components/AlphabeticBar/AlphabeticBarComponent'

const AlphabeticBarPage = () => {

    const list = [
        "Pablo",
        "Diego",
        "Ju"
    ]

    return (
        <div>
            <AlphabeticBar list={list}/>
        </div>
    )
}

export default AlphabeticBarPage
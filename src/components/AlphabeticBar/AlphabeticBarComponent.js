import React from 'react';
import './AlphabeticBar.css'

const AlphabeticBarSearch = (props) => {
    
    console.log(props.list)

    const alphabetcArray = "abcdefghijklmnopqrstuvwxyz".split("")
    const sortedList = props.list.sort()
    const letters = alphabetcArray.map((letter)=> 
        <Letter key={letter} letter={letter} />
    )

    return (
        <div className="container">
            <List list={sortedList}/>
            <div>
                <div className="container" >
                    {letters}
                </div>
            </div>
        </div>
    )
}

const Letter = (props) => {

    const handleClick = (e) => { 
        console.log('clicou')
    }
    
    const letter = props.letter.toUpperCase()

    return (
        <div className="char tooltip" 
                data-letter="{letter}" >
        
            <a href={'#'+letter} className="letter"  
                    onClick={handleClick}>
                {letter}
            </a>
            
            <div className="tooltiptext">
                {letter}
            </div>
        </div>
    )

}

const List = (props) => {

    const list = props.list

    const listItems = list.map((n) => 
        <div id={n.charAt(0)} key={n}>
            {n}
        </div>
    )

    return (
        <div style={{overflowY: 'scroll', width: '100%' }}>
            {listItems}
        </div>
    )

}

export default AlphabeticBarSearch
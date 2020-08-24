import React from 'react';
import {Card} from '../Card/card-component'
 import './Card-List-style.css'
export const CardList = props => {
    return <div className="card-first">
        { props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
        )
     ) } </div>
};
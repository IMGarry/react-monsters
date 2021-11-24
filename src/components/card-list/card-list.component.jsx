import React from 'react'
import './card-list.component.css'
import {Card} from '../card/card.component'


export const CardList = (props) => {
    console.log(props);
    return (<div className="card-list">
        {
          props.monsters.map((monster,id) => <Card key={id} monster={monster} />)
        }
      
        </div>)
}

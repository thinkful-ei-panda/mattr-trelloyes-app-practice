import React from 'react'
import Store from './Store'
import cuid from 'cuid';

export default function Cards(props) {
  console.log(`Cards component is running`)
  const cardObjList = [];
  
    for(let i in Store.allCards){
        cardObjList.push(Store.allCards[i])
    }
    console.log(`This is props.filter: ${props.filter}`)

    const listElementList = cardObjList.map((card) => {
        return (
           <li 
           key={cuid()} >
               <h2 className="List-header" >{card.title}</h2>
                <p> {card.content}</p>
               <button type="button">delete</button>
           </li>
            )
       });

   return (
     <section className="card-list">
       <ul>
        {listElementList}
       </ul>
       </section>
   );
}

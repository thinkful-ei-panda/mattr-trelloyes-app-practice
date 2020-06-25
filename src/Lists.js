import React from 'react'
import Store from './Store'
import Cards from './Cards'


export default function Lists() {
    console.log(`Lists component is running`)
    const listElementList = Store.lists.map((list) => {
     return (
        <li 
        key={list.id} >
            <h2 className="List-header" >{list.header}</h2>
            <Cards filter={list.cardIds} />
            <button type="button" className="list-delete">delete list</button>
        </li>
         )
    });

    return (
      <section className="List">
        <ul>
        {listElementList}
        </ul>
        </section>
        
    )
}

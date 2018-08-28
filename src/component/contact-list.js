import React, { Component } from 'react';


export default function ContactList({contacts}){
    const list = ()=> {
        return contacts.map(contact => {
            return <li key={contact.product}>{contact.product}{contact.quantity}{contact.unitCost}</li>
        })
    }

    return (
        <div>
            <ul>
                {list()}
            </ul>
        </div>
    )
}
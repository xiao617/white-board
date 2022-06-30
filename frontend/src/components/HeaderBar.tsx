import React from 'react'
import './../index.css'

import {Menubar} from 'primereact/menubar'
import { useNavigate } from 'react-router-dom'

export default function HeaderBar(){
    const navigate = useNavigate()
    const items = [
        {
            label:'Home',
            command: () => navigate('/')
        }
    ]
    return (
        <>
            <Menubar model={items} />
        </>
    )
}
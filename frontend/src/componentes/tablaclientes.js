import React from 'react'
import ClientesRow from './ClientesRow.js'
import ClientesCategoryRow from './ClientesCategoryRow.js'
 
export default class tablaclientes extends React.Component {

    constructor(){
        super()
    }

    render() {
        return (
            <div>
                <ClientesCategoryRow/>
                <ClientesRow/>
                <ClientesRow/>
                <ClientesRow/>
                <ClientesCategoryRow/>
                <ClientesRow/>
                <ClientesRow/>
                <ClientesRow/>
                
            </div>
        )
    }
}
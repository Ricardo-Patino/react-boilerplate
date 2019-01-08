import React from 'react'

import './Example.css'

class Example extends React.Component {
    render() {
        return (
            <div>
                <h1 className='h1'>This is an Exaple component</h1>
                <p className='p'>
                    React boilerplate is cool! <i className="user" />
                </p>
            </div>
        )
    }
}

export default Example

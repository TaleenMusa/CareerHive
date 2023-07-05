    import React from 'react'
    import Addjob from '../../components/Form/Addjob'
import './Form.css'
    const Form = (props) => {
        const {user} = props
        const {mood} = props
    return (
        <div style={mood}>
        <h3 style={mood} className='text'>Create a job:</h3>
        <Addjob mood={mood} user={user}/>
    </div>
    )
    }

    export default Form
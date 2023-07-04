    import React from 'react'
    import Addjob from '../../components/Form/Addjob'
import './Form.css'
    const Form = (props) => {
        const {user} = props
    return (
        <div>
        <h3 className='text'>Create a job:</h3>
        <Addjob user={user}/>
    </div>
    )
    }

    export default Form
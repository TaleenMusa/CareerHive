    import React from 'react'
    import Addjob from '../../components/Form/Addjob'

    const Form = (props) => {
        const {user} = props
    return (
        <div>
        <h1>Create a job</h1>
        <Addjob user={user}/>
    </div>
    )
    }

    export default Form
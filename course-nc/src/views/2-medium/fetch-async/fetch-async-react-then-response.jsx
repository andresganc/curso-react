
import React, { Fragment, useState, useEffect } from 'react'

const FetchAsyncReactThenResponse = () => {

    const [data, setData] = useState([])

    
    useEffect(() => {

        apiData()
        
    }, [] )


    const apiData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(dataApi => setData(dataApi))
        
    }

    console.log(data)
    return (
        <Fragment>
            <h3> FETCH ASYNC AWAIT REACT - Mode: .then response </h3>
            { data.map(record => (
                <Fragment>
                    <p key={record.id}> { record.id }, { record.name }, { record.username } </p>
                    <p > { record.email  } </p>
                </Fragment>
                
            )) }
        </Fragment>
    )
}

export default FetchAsyncReactThenResponse

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const ViewUser = () => {
    const [userData, setUserData] = useState(
        { "data": [] }
    )

    const apiLink = "https://reqres.in/api/users?page=1"

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setUserData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View User</h1>
                        </div>
                        {isLoading ? <p>Loading...</p> : <div className="row g-3">
                            {userData.data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <img src={value.avatar} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.first_name},{value.last_name}</h5>
                                                <p class="card-text">{value.id}</p>
                                                <p class="card-text">{value.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
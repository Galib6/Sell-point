import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/requser?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data?.type === "admin") {
                        setIsAdmin(true)
                        setAdminLoading(false)
                    }
                    else {
                        setAdminLoading(false)
                    }
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]

}

export default useAdmin;
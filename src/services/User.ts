
import axios from "axios"

interface UserProps {
    userName: string;
    email: string;
    password: string
}

const createUser = ({userName, email, password}:UserProps) => {

    const res = axios.post("https://webescuela-production.up.railway.app/api/User",{
        userName: userName,
        email: email,
        roleId: 2,
        password: password,

    })

}
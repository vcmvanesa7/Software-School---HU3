
import axios from "axios"

interface UserProps {
    userName: string;
    email: string;
    password: string
}

export const createUser = ({ userName, email, password }: UserProps) => {

    try {
        const res = axios.post("https://webescuela-production.up.railway.app/api/auth/register", {
            userName: userName,
            email: email,
            roleId: 2,
            password: password,

        })

        return res

    } catch (error) {
        return error
    }

}
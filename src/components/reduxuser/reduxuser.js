import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function ReduxUsers() {

    const usersR = useSelector((state) => state.usersR);
    console.log(usersR);
    const dispatch = useDispatch()
    const fetchUsers = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/users/')).json()
        dispatch({
            type: "SET_USERS",
            payload: data
        })
    }
    useEffect(() => {
        fetchUsers()
    }, [])
// ======================

    return (
        <div>
            <div className={'wrap'}>
                <div className={'usersPostsFull CenT'}>
                    <div className={'CenT '}>
                        <div className={'CenT FullPostsTitle '} > ALL USERS </div>
                        {usersR.map(userR => (
                            <div key={userR.id}>
                                <div className={'itemTitle CenT '}>
                                    {userR.name}
                                </div>
                                <div className={'itemBody CenT '}>
                                    {userR.email}
                                </div>
                            </div>))}

                    </div>
                </div>
            </div>

        </div>

    )
}
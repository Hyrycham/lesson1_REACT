import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function ReduxUsers() {
 // export default function ReduxUsers(props) {
// console.log(props)
    const usersR = useSelector((state) => state.usersR);
    // console.log(usersR);
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
                                <div className={' itemTitle usersPosts CenT '}>
                                   <h3>NAME: {userR.name}</h3>
                                </div>
                                <div className={'usersInfo CenT '}>
                                    <h4>Email:  {userR.email}</h4>
                                </div>
                                <div className={'usersPosts CenT '}>
                                    <h4>Website:{userR.website}</h4>
                                </div>

                            </div>))}

                    </div>
                </div>
            </div>

        </div>

    )
}
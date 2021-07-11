import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function ReduxPosts(props) {
    // console.log(props)
    const postsR = useSelector((state) => state.postsR);
       const dispatch = useDispatch()
    const fetchPosts = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts/')).json()
        dispatch({
            type: "SET_POSTS",
            payload: data
        })
    }
    useEffect(() => {
        fetchPosts()
    }, [])
// ======================

    return (
        <div>
            <div className={'wrap'}>
                <div className={'usersPostsFull CenT'}>
                    <div className={'CenT '}>
                        <div className={'CenT FullPostsTitle '}> ALL POSTS</div>
                        {postsR.map(postR => (
                            <div key={postR.id}>
                                <div className={'itemTitle CenT '}>
                                    {postR.title}
                                </div>
                                <div className={'itemBody CenT '}>
                                    {postR.body}
                                </div>
                            </div>))}

                    </div>
                </div>
            </div>

        </div>

    )
}
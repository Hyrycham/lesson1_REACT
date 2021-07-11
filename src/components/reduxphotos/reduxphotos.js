import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function ReduxPhotos(props) {
    // console.log(props)
    const photosR = useSelector((state) => state.photosR);
     const dispatch = useDispatch()
    const fetchPhotos = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/photos/')).json()
        dispatch({
            type: "SET_PHOTOS",
            payload: data
        })
    }
    useEffect(() => {
        fetchPhotos()
    }, [])
// ======================

    return (
        <div>
            <div className={'wrap'}>
                <div className={'usersPostsFull CenT'}>
                    <div className={'CenT '}>
                        <div className={'CenT FullPostsTitle '} > ALL PHOTOS </div>
                        {photosR.map(photoR => (
                            <div key={photoR.id}>
                                <div className={' itemTitle usersPosts CenT '}>
                                    <h3>title: {photoR.title}</h3>
                                    {/*<img src={photoR.url}/>*/}
                                </div>
                                <div className={'usersInfo CenT '}>
                                    <h4>url:  {photoR.url}</h4>
                                </div>

                            </div>))}

                    </div>
                </div>
            </div>

        </div>

    )
}
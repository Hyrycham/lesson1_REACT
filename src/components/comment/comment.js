
export default function Comment ({item}) {
        return(
        <div>

            <div> {item.postId}; {item.id}: <b>{item.name}</b>- {item.email} :{item.body}</div>
        </div>
    )


}





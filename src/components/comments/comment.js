export default function Comment (props) {
    let {item: comment}= props;
    return(
        <div>

            <div> {comment.postId}; {comment.id}: {comment.name}: {comment.email} ;{comment.body}- </div>
        </div>
    )


}





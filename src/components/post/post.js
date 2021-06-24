import './post.css'
export default function Post (props) {
    let {item: post} = props;
    return (
        <div>

            <div> {post.id}- {post.title}: <br></br> <span>{post.body}</span>  </div>

        </div>
    )
}
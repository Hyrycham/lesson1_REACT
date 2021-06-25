import Post from '../post/post';

export default function Posts ({items}) {

    return(
        <div>
            {
                items.map(value => <Post item={value}/>  )

            }
        </div>
    )
}
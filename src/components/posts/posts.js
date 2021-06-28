import Post from '../post/post';

export default function Posts ({items }) {

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value}/>  )

            }
        </div>
    )
}
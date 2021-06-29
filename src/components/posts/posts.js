import Post from '../post/post';

export default function Posts ({items, appFnComments}) {

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value} fnFatherComments={appFnComments}/>  )

            }
        </div>
    )
}
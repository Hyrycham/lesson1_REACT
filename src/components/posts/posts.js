import Post from '../post/post';

export default function Posts ({items, appFnComments,appSh,appShowBtn}) {

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value} fnFatherComments={appFnComments} sh={appSh} fnShowBtn={appShowBtn} />  )

            }
        </div>
    )
}
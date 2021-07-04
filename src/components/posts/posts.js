import Post from '../post/post';

export default function Posts ({items, appFnComments,appsh,appShowBtn}) {

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value} fnFatherComments={appFnComments} sh={appsh} fnShowBtn={appShowBtn} />  )

            }
        </div>
    )
}
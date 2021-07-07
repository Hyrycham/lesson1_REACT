import '../post/post.css'

export default function Divisor ({items}) {
    return(
        <div className={'FullPosts'}>

                <div className={'itemTitle'}><b>PostsID:</b> {items.id}  </div>
            <div className={'itemBody'}> <b>UserID:</b> {items.userId}  </div>
                <div className={'itemTitle'}><b>Title:</b> {items.title}  </div>
                <div className={'itemBody'}> <b>Posts body:</b> {items.body}  </div>


        </div>

    )
}


import './post.css'
export default function Post ({item,fnFatherComments}) {
       return (
        <div>
            <div className={'itemTitle'}><b>Title:</b> {item.title}  </div>
            <div className={'itemBody'}> <b>Posts body:</b> {item.body}  </div>
            <div className={'btn center_center'}>  <button className={'btnComments'} onClick={()=> fnFatherComments(item.id)}>Get all comments:</button> </div>
        </div>
    )
}
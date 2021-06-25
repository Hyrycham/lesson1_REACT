import './post.css'
export default function Post ({item}) {
       return (
        <div>

            <div className={'itemBody'}>  {item.body}  </div>
           <div className={'itemTitle'}>  {item.title}  </div>
        </div>
    )
}
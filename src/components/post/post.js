import './post.css'
export default function Post ({item,fnFatherComments,sh,fnShowBtn}) {
       return (
        <div>
            <div className={'itemTitle'}><b>Title:</b> {item.title}  </div>
            <div className={'itemBody'}> <b>Posts body:</b> {item.body}  </div>
            {/*<div className={'btn center_center'}>  <button className={'btnComments'} onClick={()=> {fnFatherComments((item.id));sh({type:'SHOWSWITCH',payload:['showOff','showOn']})} }>Get all comments:</button> </div>*/}
            {/*<div className={'btn center_center'}>  <button className={'btnComments'} onClick={()=> {fnFatherComments({type:'SHOWCOMMENTS',payload:item.id});sh({type:'SHOWSWITCH',payload:['showOff','showOn']})} }>Get all comments:</button> </div>*/}
            <div className={`btn center_center  ${fnShowBtn[0]}`}>  <button className={'btnComments'} onClick={()=> {fnFatherComments((item.id));sh({type:'SHOWSWITCH',payload:['showOff','showOn']})} }>Get all comments:</button> </div>

        </div>
    )
}
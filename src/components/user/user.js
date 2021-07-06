import  './user.css'
import {Link} from 'react-router-dom'
export default function User ({item , fnFather, fnFatherPost,fnFatherShow,fnShowBtn}) {
        return(
        <div className={'userCard center_center '}>

            <div className={'nameUser center_center'}><b>user name:</b></div>
            <div className={'nameUser center_center'}>{item.name}</div>
            <div className={'center_center'}><b>ID:</b> {item.id}</div>

            <div className={`btn  InfUser center_center  ${fnShowBtn[0]}`}>  <button className={'btnInfUser'} onClick={()=>{ fnFather (item.id); fnFatherShow({type:'SHOWSWITCH',payload:['showOn','showOff']})} }>Get info about USER: {item.name}</button> </div>

            <div className={`btn  InfUser center_center  ${fnShowBtn[0]}`}>   <Link to={'/users/'+item.id}> {item.name} Details </Link> </div>

            <div className={`btn  InfPosts center_center  ${fnShowBtn[1]}`}> <button className={'btnInfPosts'} onClick={()=> fnFatherPost (item.id)}>Get ALL POSTS of User: {item.name}</button> </div>
        </div>
    )
}





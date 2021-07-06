import {Link} from 'react-router-dom'
export default function UserDetails ({item}) {
    return(
        <div>

            <div className={'nameUser center_center'}><b>user name:</b></div>
            <div className={'nameUser center_center'}>{item.name}</div>
            <div className={'center_center'}><b>ID:</b> {item.id}</div>


               </div>
    )
}



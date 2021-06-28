import  './user.css'

export default function User ({item , fnFather, fnFatherPost}) {



        return(
        <div className={'userCard center_center'}>

            <div className={'nameUser center_center'}>{item.name}</div>
            <div className={'btn  InfUser center_center'}>  <button className={'btnInfUser'} onClick={()=> fnFather(item.id)}>Get info about USER: {item.name}</button> </div>
            <div className={'btn  InfPosts center_center'}> <button className={'btnInfPosts'} onClick={()=> fnFatherPost(item.id)}>Get ALL POSTS of User: {item.name}</button> </div>
        </div>
    )


}





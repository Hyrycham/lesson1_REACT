
export default function User ({item , fnFather}) {



        return(
        <div>

            <div>   {item.name} - ID: {item.id} --- <button onClick={()=> fnFather(item.id)}> Get info about USER: {item.name}  </button> </div>
            <div> <button onClick={()=> fnFather(item.id)}> GET ALL POSTS of User:{item.name}</button> </div>
        </div>
    )


}





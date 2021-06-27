import User from "../user/user";
export default function Users ({items}) {

    return(
        <div>
            {
                items.map( (value) => <User  key ={value.id} item={value}/> )
                // items.map( (value,index) => <User  key ={index} item={value}/> )

            }</div>
    )
}
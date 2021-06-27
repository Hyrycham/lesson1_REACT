import User from "../user/user";
export default function Users ({items}) {

    return(
        <div>
            {
                items.map( (value) => <User item={value}/> )
            }</div>
    )
}
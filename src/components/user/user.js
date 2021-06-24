export default function User (props) {
    let {item: user}= props;
    return(
        <div>

            <div> {user.name} - {user.id}</div>
        </div>
    )


}





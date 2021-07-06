
export default function UserDetails2 (props) {
       let {location:{state}}=props;
        return(
        <div>

            <div><b>ID:</b> {state.id}</div>
            { (state &&<div> {state.name}: {JSON.stringify(state)} </div> ) ||<div> no information </div> }
        </div>
    )
}



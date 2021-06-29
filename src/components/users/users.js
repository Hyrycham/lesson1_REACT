import User from "../user/user";
export default function Users ({items, appFn,appFnPost,appFnShow}) {



    return(
        <div>
            {
                items.map( (value) => <User  key ={value.id} item={value} fnFather={appFn} fnFatherPost={appFnPost} fnFatherShow={appFnShow}/> )
                // items.map( (value,index) => <User  key ={index} item={value}/> )

            }</div>
    )
}
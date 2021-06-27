
export default function User ({item , fnFather}) {



        return(
        <div>

         -----------   {item.name} - {item.id}----- <button onClick={
            ()=> fnFather(item.id)

        }> click me</button>

        </div>
    )


}





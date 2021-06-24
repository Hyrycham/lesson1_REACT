import  ''
export default function Menu (props) {
    let {pages} = (props)

    return(
        <div>
            <ul>{
                pages.map(page => <li>{page}</li>)


            }
            </ul>



        </div>
    )
}
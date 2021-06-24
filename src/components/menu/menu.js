import  'menu.css'
export default function Menu (props) {
    let {pages} = (props)

    return(
        <div>
            <ul>{
                pages.map(page => <li className= 'target'>{page}</li>)


            }
            </ul>



        </div>
    )
}
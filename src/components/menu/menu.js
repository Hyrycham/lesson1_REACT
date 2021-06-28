import  './menu.css'
export default function Menu (props) {
    let {pages,classes} = (props)
    return(
        <div>
            <ul>{
                pages.map((page,index) => <li key={index}  className={(classes.join(' '))}>{page}</li>)
            }
            </ul>
        </div>
    )
}
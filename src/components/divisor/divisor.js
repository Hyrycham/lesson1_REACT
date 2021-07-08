import '../post/post.css'

export default function Divisor (props) {

       const items=props;
       if (typeof items === 'object' && !Array.isArray(items)) {
        for (const keyQ in items) {
              Divisor([keyQ,items[keyQ]]);
        }
    return (
        <div>
            !!!!!!!objpbj!!!!!!!
            {JSON.stringify(items)}
        </div>
    )

       }
    else if (Array.isArray(items)) {
        for (const keyArr of items) {
               Divisor(keyArr);
        }
            console.log('wwwwwwwwwwwwwwwwwwwww')
           return (
               <div>
                   !arararar!!!!!
                   {JSON.stringify(items)}
               </div>
           )
    }
    else   if(!!items)     {
        console.log(items);
          return (
                          <div>
                              !!!!!!!strssrtrstrstrs!!!!!!!
                              {JSON.stringify(items)}
            </div>
        )
    }




return (
    <div>
        <div>
            qwqwq111111111111111111111111111111
            {/*{JSON.stringify(items)}*/}
        </div>
        </div>

)


}
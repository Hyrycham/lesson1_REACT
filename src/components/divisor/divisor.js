import '../post/post.css'

export default function Divisor (props) {

       const items=props;
       if (typeof items === 'object' && !Array.isArray(items)) {
        for (const keyQ in items) {
              Divisor([keyQ+':',items[keyQ]]);
        }

       }
    else if (Array.isArray(items)) {
        for (const keyArr of items) {
               Divisor(keyArr);
        }

    }
    else   if(!!items)     {
        console.log(items);

                    }




return (
    <div>

        {JSON.stringify(items)}
            ===================
            {/*{items.map((value,index) => <div key ={index} > {JSON.stringify(value)}  </div>) }*/}
            {/*{JSON.stringify(items)}*/}

        </div>

)


}
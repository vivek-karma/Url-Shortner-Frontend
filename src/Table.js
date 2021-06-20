import React from 'react';

const Table = props => {
    const shortUrls = props.shortUrls;
    // const shortUrls = useSelector(state => state.shortUrls);

    // const [loading, setLoading] = useState(true);

    // if(shortUrls.length()>0) setLoading(false)
    
    return (
            <div>
            <table className="table table-striped table-responsive">
               <thead>
                   <tr>
                   <th>Full URL</th>
                   <th>Short URL</th>
                   <th>Clicks</th>
                   </tr>
               </thead>
               <tbody>
                    {shortUrls.length > 0 && shortUrls.map(ele => {
                            return(
                           <tr key = {ele.shorturl}>
                               <td>{ele.longurl}</td>
                               <td><a href={ele.shorturl}>{ele.shorturl}</a></td>
                               <td>{ele.count}</td>
                           </tr>)
                           }) }
               </tbody>
           </table>
       </div>)
};

export default Table;
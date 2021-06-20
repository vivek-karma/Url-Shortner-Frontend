import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const NewLink = props => {
    const params = props.match.params
    // const [url, setUrl] = useState("");
    // const url = useSelector(state=> state.url);
    // const shortUrls = useSelector(state => state.shortUrls)

    const dispatch = useDispatch();

    useEffect(async ()=>{
        await axios.get(`http://localhost:8080/url/${params.shorturl}`)
            .then(res=>{
                // props.setShortUrls([...props.shortUrls,res.data]);
                dispatch({
                    type:'add',
                    payload:res.data
                })

                const url = res.data.longurl
                if (url != null){
                    window.location.replace(url);
                }
            })
    },[])

    return (
        <div>
        </div>
    );
};

export default NewLink;
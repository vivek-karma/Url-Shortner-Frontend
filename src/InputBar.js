import React from 'react';

const InputBar = props => {

    return (
        <div className="my-4 form-inline">
            <input 
            required 
            type="Url" 
            name="fullUrl"
            className="form-control col mr-2"
            placeholder="Enter URL here" 
            value = {props.url}
            onChange={(e)=>{props.setUrl(e)}}
            />
            <button
            className="btn btn-primary my-2"
            onClick={()=> props.handleSubmit()}
            >Get shortened URL</button>
        </div>
    );
};

export default InputBar;

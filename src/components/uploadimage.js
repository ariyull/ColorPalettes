
import React, { Component } from 'react';
const axios = require("axios");

class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    async onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        await formData.append('avatar',this.state.file);
       const response = await fetch('http://localhost:3001/profile',
            {method: 'POST',
            body: formData});
            
            alert(JSON.stringify(response))
    }

    onChange(e) {
        this.setState({file:e.target.files[0]});
    }   

    render() {
        return (
            
            <form onSubmit={this.onFormSubmit}  enctype="multipart/form-data">
                <h1>File Upload</h1>
                <input type="file" name="avatar" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
            // <div>
            //     <form action="http://localhost:3001/profile" method="post" enctype="multipart/form-data">
            //         <input type="file" name="avatar" />
            //         <input type = 'submit' />
            //     </form>
            // </div>
        )
    }
}



export default UploadImage





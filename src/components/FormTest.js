import React, { Component } from 'react';


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'x',
        col1rgb: 'x',
        col2rgb: 'x',
        col3rgb: 'x',
        col1fam: 'x',
        col2fam: 'x',
        col3fam: 'x',
        image: 'x'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    };
  
    async handleSubmit(event) {
        event.preventDefault();
        const post_object = { 
                              name: this.state.name,
                              col1rgb: this.state.col1rgb,
                              col2rgb: this.state.col2rgb,
                              col3rgb: this.state.col3rgb,
                              col1fam: this.state.col1fam,
                              col2fam: this.state.col2fam,
                              col3fam: this.state.col3fam,
                              image: this.state.image };
        alert(JSON.stringify(post_object));
        const response = await fetch(
            'http://localhost:3001/palettepost', { method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(post_object) },
        )
        alert(JSON.stringify(response))
      };



    render() {
      return (
        <div className= "container">
          <div className= "row">
            <form id="example-form" onSubmit={this.handleSubmit} method="POST" action="https://localhost3001/palettepost">
              <div className="col">
                <label>
                name:
                  <textarea name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
              </div>
              <div className="col">
                <label>
                col1rgb:   
                  <textarea name="col1rgb" value={this.state.col1rgb} onChange={this.handleChange} />
                </label>  
              </div>
              <div className="col">
                <label>
                col2rgb:   
                  <textarea name="col2rgb" value={this.state.col2rgb} onChange={this.handleChange} />
                </label>  
              </div>
              <div className="col">
                <label>
                col3rgb:   
                  <textarea name="col3rgb" value={this.state.col3rgb} onChange={this.handleChange} />
                </label>  
              </div>
              <div className="col">
                <label>
                col1fam:   
                  <textarea name="col1fam" value={this.state.col1fam} onChange={this.handleChange} />
                </label>  
              </div>
              <div className="col">
                <label>
                col2fam:   
                  <textarea name="col2fam" value={this.state.col2fam} onChange={this.handleChange} />
                </label>  
                </div>
                <div className="col">
                <label>
                col3fam:   
                  <textarea name="col3fam" value={this.state.col3fam} onChange={this.handleChange} />
                </label>  
              </div>
              <div className="col">
                <label>
                image:   
                  <textarea name="image" value={this.state.image} onChange={this.handleChange} />
                </label>  
              </div>
              <div>
               <input type="submit" value="Submit" />
              </div>
            </form>
        </div>
        </div>
      );
    }
  }

  export default Form
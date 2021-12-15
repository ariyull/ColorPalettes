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
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    };
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    };

    handleImageChange(e) {
      this.setState({image:e.target.files[0]});
  }
  
    async handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
          await formData.append('image',this.state.image)
            await formData.append('name', this.state.name)
              await formData.append('col1rgb', this.state.col1rgb)
                await formData.append('col2rgb',this.state.col2rgb)
                  await formData.append('col3rgb',  this.state.col3rgb)
                    await formData.append('col1fam', this.state.col1fam)
                      await formData.append('col2fam', this.state.col2fam)
                        await formData.append('col3fam', this.state.col3fam)
                
        const response = await fetch(
            'http://localhost:3001/palettepost', { method: 'POST',
                                                headers: {
                                                 
                                                },
                                                body: formData },
        )
        this.setState({ response: response })
        alert(JSON.stringify('this was submitted as formData ' + 
        JSON.stringify(formData)))
      };



    render() {
      return (
        <div className= "container">
          <div className = "row special-text">
            <h1>Upload Image</h1>
          </div>
          <div className="row ">
            <div className="col "> 
              <div className="form-container">
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
                  <input type="file" name="image" onChange= {this.handleImageChange} />
                  </label>  
                </div>
                <div >
                  <input className="special-text" type="submit" value="Submit" />
                </div>
            </form>
            </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Form
import React, { Component } from 'react';
import palettes from '../shared/Color_Palettes'

class Colors extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedpalid: "id was not changed"
        }
        this.handleClick = this.handleClick.bind(this)
    };

    async handleClick(id) {
        await this.setState({selectedpalid:id})
      };

    render() {
        return (
            <div className="container-fluid boxcontent"> 
                <div className = "row justify-content-center">
                    <h1> Color Pallettes: </h1>
                    
                   {palettes.map((palette)=>
                        <div className="card card-standard-size">
                            <h5 className="card-title"  onClick={() => {
                                const id = palette.id;
                                this.handleClick(id);
                                }}>                                 
                                {palette.name} </h5>
                                <img className="card-img-top image-standard-size" src={palette.image}/>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className={palette.col1style}> <p>1</p></div>
                                    </div>
                                    <div className="col">
                                        <div className={palette.col2style}> <p>2</p></div>
                                    </div>
                                    <div className="col">
                                        <div className={palette.col3style}> <p>3</p></div>
                                    </div>
                                </div>
                                <p className="card-text"> color1: {palette.col1info} </p>
                                <p className="card-text"> color2: {palette.col2info} </p>
                                <p className="card-text"> color3: {palette.col3info} </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
    
        )
        }
};

export default Colors

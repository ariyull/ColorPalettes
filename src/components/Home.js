import React, { Component } from 'react';
import SelectedFam from './selectedfam'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          palettedata: ["placeholder palettedata"],
          selectedpalcolfam: "colfam was not selected"
        }
        this.handleClick = this.handleClick.bind(this)
        this.useLink = this.useLink.bind(this)
    };

    async handleClick(colfam) {
        await this.setState({selectedpalcolfam:colfam})
        alert("the colfam is " + colfam)
      };

    async componentDidMount() {
        const result = await fetch(
            'http://localhost:3001', { method: 'GET' }
            )
        const fetched_info = await result.json();
        this.setState({palettedata:fetched_info.palettes}
        )
    }

    useLink(colfam) {
        let link = `/colfam${colfam}`;
        return null
        // return link;
      };    

    render() {
        let { palettedata } = this.state;

        if (this.state.selectedpalcolfam === "colfam was not selected") {
        return (
            
            <div className="container">


                <div className="row">
                    {
                        palettedata.map(palettedata => 
                            <div className="col-md-3 col-sm-12">
                                <div className="card card-standard-size justify-content-center" id={palettedata.id}>
                                    <div className="row">
                                        <div className="col-12">
                                        <img className="card-img-top image-standard-size" src={palettedata.image}/>
                                        </div>
                                    </div>
                                    <p> ID: {palettedata.id}  name: <strong>{palettedata.name}</strong> </p> 
                                    <div className="container justify-content-center">
                                        <div className="row ">
                                            <div className="col"> 
                                                <a href= {this.useLink(palettedata.col1fam)}>
                                                    <div className="circle" style={ { backgroundColor: palettedata.col1rgb } } 
                                                        onClick={() => {
                                                        const colfam = palettedata.col1fam;
                                                        this.handleClick(colfam);
                                                        }}> 
                                                        <p>1</p>
                                                    </div> 
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a  href= {this.useLink(palettedata.col2fam)}  >
                                                    <div className="circle" style={ { backgroundColor: palettedata.col2rgb } }
                                                    onClick={() => {
                                                        const colfam = palettedata.col2fam;
                                                        this.handleClick(colfam);
                                                        }}> 
                                                            <p>2</p>
                                                    </div> 
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a href= {this.useLink(palettedata.col3fam)} >
                                                    <div className="circle" style={ { backgroundColor: palettedata.col3rgb } }  onClick={() => {
                                                            const colfam = palettedata.col3fam;
                                                            this.handleClick(colfam);
                                                            }}> 
                                                        <p>3</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>color1: {palettedata.col1rgb}</p> 
                                    <p>color2: {palettedata.col2rgb}</p> 
                                    <p>color3: {palettedata.col3rgb} </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )} else { return(<div> <h1> this was selected: {this.state.selectedpalcolfam}</h1>
                    <SelectedFam selected = {this.state.selectedpalcolfam}/>
                    </div>) };

        
    }

}

export default Home
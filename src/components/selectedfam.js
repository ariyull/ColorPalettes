import React, { Component } from 'react';
import getPalettes from './getpalettes'

class SelectedFam extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sampledata: ["placeholder sampledata"],
          palettedata: []
        };
        this.handleClick = this.handleClick.bind(this)
      };

    

    async componentDidMount() {   
        let selectedcolfam = this.props.selectedpalcolfam
        let fetched_info = await getPalettes(selectedcolfam);
        this.setState({sampledata:fetched_info})
    }
    
    async handleClick(colfam) { 
        await this.setState({selectedpalcolfam:colfam});
        alert("this.state.selectedpalcolfam is " + this.state.selectedpalcolfam);
        let newselection = this.state.selectedpalcolfam;
        let fetched_info = await getPalettes(newselection);
        this.setState({sampledata:fetched_info})
      };



render() {
    let { sampledata } = this.state;
    
    return (
        <div>
            <div className="container">
                <h1  className="boxcontent1"> colors that match: {this.state.selectedpalcolfam} </h1>
                <div className = "row">
                {
                    sampledata.map(sampledata => 
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-standard-size justify-content-center" id={sampledata.id}>
                                <div className="row">
                                    <div className="col-12">
                                <img className="card-img-top image-standard-size" src={sampledata.image}/>
                                    </div>
                                </div>
                                <div className="container-fluid justify-content-center">
                                    <div className="row"> 
                                        <div className="col">
                                         
                                                <div className="circle" style={ { backgroundColor: sampledata.col1rgb } } 
                                                onClick={() => {
                                                    const colfam = sampledata.col1fam;
                                                    this.handleClick(colfam);
                                                    }}> <p>1</p> </div>
                                           
                                        </div>
                                        <div className="col">
                              
                                                <div className="circle" style={ { backgroundColor: sampledata.col2rgb } } 
                                                onClick={() => {
                                                        const colfam = sampledata.col2fam;
                                                        this.handleClick(colfam);
                                                        }}> <p>2</p>  </div>
                                         
                                        </div>
                                        <div className="col">
                                       
                                                <div className="circle" style={ { backgroundColor: sampledata.col3rgb } } 
                                                onClick={() => {
                                                    const colfam = sampledata.col3fam;
                                                    this.handleClick(colfam);
                                                    }}> <p>3</p>  </div>
                                   
                                        </div>
                                    </div>
                                </div>
                                    <p> id: {sampledata.id} </p> <p> name: {sampledata.name} </p> <p>col1fam: {sampledata.col1fam} </p>
                                    <p>col2fam: {sampledata.col2fam} </p> <p>col3fam: {sampledata.col3fam} </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
    }
}

export default SelectedFam


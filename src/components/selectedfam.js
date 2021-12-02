import React, { Component } from 'react';

class SelectedFam extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedpalcolfam: this.props.selected,
          sampledata: ["placeholder sampledata"],
          palettedata: []
        };
        this.handleClick = this.handleClick.bind(this)
        this.useLink = this.useLink.bind(this)
      };

    async componentDidMount() {
        const result = await fetch(
            `http://localhost:3001/palettes/${this.props.selected}`, { method: 'GET' }
            )
        const fetched_info = await result.json();
        await this.setState({sampledata:fetched_info},
        )
        const colfamresult = await fetch(
            'http://localhost:3001', { method: 'GET' }
            )
        const colfamfetchedinfo = await colfamresult.json();
        this.setState({palettedata:colfamfetchedinfo.palettes}
        )
    }
    
    async handleClick(colfam) {
        await this.setState({selectedpalcolfam:colfam})
        alert("the colfam is " + colfam)
      };

      useLink(colfam) {
        let link = `/colfam${colfam}`;
        return null;
      };    

render() {
    let { sampledata } = this.state;
    return (
        
        <div>
            <div className="container">
                <h1  className="boxcontent1"> colors that match: {this.props.selected} </h1>
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


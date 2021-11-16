import React, { Component } from 'react';


class ColFamGreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sampledata: ["placeholder sampledata"]
        };
      }

    async componentDidMount() {
        const result = await fetch(
            'http://localhost:3001/palettes/green', { method: 'GET' }
            )
        const fetched_info = await result.json();
        this.setState({sampledata:fetched_info}
        )
    }
    


render() {
    let { sampledata } = this.state;
    return (
        <div>
            <div className="container">
                <h1  className="boxcontent1"> colors that match: </h1>
                <div className = "row">
                    {
                    sampledata.map(sampledata => 
                        <div className="col-md-3 col-sm-12">
                        <div className="card card-standard-size justify-content-center" id={sampledata.id}>
                            <div className="row">
                                <div className="col-12">
                            <img className="card-img-top image-standard-size" src={sampledata.image}/>
                                </div>
                            <div className="col">
                                <div className="circle" style={ { backgroundColor: sampledata.col1rgb } } > </div>
                            </div>
                            <div className="col">
                                <div className="circle" style={ { backgroundColor: sampledata.col2rgb } } > </div>
                            </div>
                            <div className="col">
                                <div className="circle" style={ { backgroundColor: sampledata.col3rgb } } > </div>
                            </div>
                                <p> id: {sampledata.id} </p> <p> name: {sampledata.name} </p> <p>col1fam: {sampledata.col1fam} </p>
                                <p>col2fam: {sampledata.col2fam} </p> <p>col3fam: {sampledata.col3fam} </p>
                            
                            </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
    }
}
export default ColFamGreen

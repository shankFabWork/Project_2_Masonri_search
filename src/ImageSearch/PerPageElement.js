import React,{Fragment} from 'react'

import './PerPageElement.css'

class PerPageElement extends React.Component  {

  
  state={picCount:0}

  render()
      {
            return (

            <Fragment>

                <h1 style={{textAlign:"center"}}>
                  Search For Image Number
                </h1>
                <br />
                <div className="per_page_center">
                  
                  <div 
                    className="select"
                    onChange={(e)=>
                      {
                        this.setState({picCount:parseInt(e.target.value)});
                        this.props.getImagePerPage(e.target.value);
                      }}
                      value={this.state.picCount}
                  >

                    <select name="slct" id="slct">
                        <option value="10">Select Images Per Page</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                  </div>
                </div>
            </Fragment>        
            
            )

      }//render

    }//component

export default PerPageElement




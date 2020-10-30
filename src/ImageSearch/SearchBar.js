import React, { Component, Fragment } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {

    state={val:''}

    getInput(e)
    {
        console.log(e.target.value);
    }

    //TypeError: Cannot read property 'state' of undefined
    // submitForm(e)
    // {
    //     e.preventDefault();
    //     console.log(this.state.val);
    // }

    //can bind in the contructor
    //this.state.bind=this.state.bind(submitForm);
    //else use arrow function
    
    submitForm=(e)=>
    {
        e.preventDefault();
        this.props.getUserData(this.state.val);
        console.log(this.state.val);
    }

    //https://unsplash.com/oauth/applications

    
    render() {
        return (
            <Fragment>
                
                <h1 className="heading"> Masonry  Search Gallary</h1>

                <form className="ui form" onSubmit={(e)=>this.submitForm(e)}>
                    <div className="wrap">
                        <div className="search">
                            <input 
                                type="text" 
                                className="searchTerm" 
                                value={this.state.val} 
                                onChange={
                                    (e)=>{
                                        this.setState({val:e.target.value});
                                    }}     
                                placeholder="What are you looking for?"
                            />

                            <input type="submit" className="searchButton" />
                        </div>
                    </div>       
                </form>

    </Fragment>

        )
    }
}

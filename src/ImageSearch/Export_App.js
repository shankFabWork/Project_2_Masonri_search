import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Unsplash from './Unsplash'
import ImageList from './ImageList';
import WatingLoader from './WatingLoader';
import PerPageElement from './PerPageElement';

export default class Export_App extends Component {

    state={images:[],pageCount:10}

    // async getUserData(data)
    getUserData=async (data)=>
    {  
        //using create() in seperate component
        const res=await Unsplash.get('/search/photos',
        {
            params:{query:data,per_page:this.state.pageCount},
        })
        this.setState({images:res.data.results})
        console.log(res.data.results)
    }

    getImagePerPage=(pageCount)=>
    {
        this.setState({pageCount:pageCount})
        console.log(pageCount);
    }

        

        //using async and await
        // const res=await axios.get('https://api.unsplash.com/search/photos',
        //         {
        //             params:{query:data},
        //             headers:{Authorization: 'Client-ID fNS7oF8w70JdTWaNR-e-kcpmJRmS4rC1uYsEYm5ZPXU'}
        //         })
        // console.log(res.data.results)

        // this.setState({images:res.data.results})

        //using promise
        // axios.get('https://api.unsplash.com/search/photos',
        // {
        //     params:{query:data},
        //     headers:{Authorization: 'Client-ID fNS7oF8w70JdTWaNR-e-kcpmJRmS4rC1uYsEYm5ZPXU'}
        // }).then( (res)=>
        // {
        //     console.log(res.data.results)
        // })

    render() {



        return (
            // <div style={{maxWidth:"800px",margin:"auto"}}>
            <div> 
                <SearchBar getUserData={this.getUserData} />
                <br />            
                <br />            
                <PerPageElement  getImagePerPage={this.getImagePerPage} />
            
            {
            (this.state.images.length == 0)?
                (                    
                    <WatingLoader />
                ):
                (
                    <div>
                        <br />
                            <h3 style={{textAlign:"center"}}>
                                Found {this.state.pageCount} Images
                            </h3>
                        <br />

                        <ImageList 
                            images={this.state.images}  
                            getImagePerPage={this.getImagePerPage} 
                        />
                    </div>
                )
            }       

            



            </div>
        )
    }
}


// 
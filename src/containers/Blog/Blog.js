import React,{Component} from 'react'
import Post from '../../components/Posts/Post'
import './Blog.css'
class Blog extends Component{
    render(){
        return(
           
            <div className="mainBlog">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            
        )
    }
}

export default Blog
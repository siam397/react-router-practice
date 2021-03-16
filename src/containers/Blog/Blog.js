import axios from 'axios'
import React,{Component} from 'react'
import { Redirect } from 'react-router'
import Post from '../../components/Posts/Post'
import InfiniteScroll from 'react-infinite-scroll-component'


import './Blog.css'
class Blog extends Component{
    state={
        posts:[],
        redirect:null
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                this.setState({posts:response.data})
            })
            .catch(err=>{
                console.log(err)
            })
    }
    postClicked(id){
        const url="/fullPost/" + id
        this.setState(
            {
                redirect: <Redirect
                    to={url}
                />
            }
        )
    }
    

    render(){
        const state=this.state
        const posts=state.posts.map(post=>{
            return(
                <Post 
                key={post.id}
                title={post.title}
                click={this.postClicked.bind(this,post.id)}
                author="poopoo"
                />
            )
        })
        return(
            
            <div className="mainPost">
            {this.state.redirect}
                
                <InfiniteScroll
                    className="mainPost"
                    dataLength={this.state.posts.length}
                    loader={<h4>Loading...</h4>}
                >
                    {posts}
                </InfiniteScroll>


            </div>
            
            
        )
    }
}

export default Blog
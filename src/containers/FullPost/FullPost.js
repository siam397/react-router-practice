import axios from 'axios'
import React,{Component} from 'react'
import './FullPost.css'



class FullPost extends Component{
    state={
        title:"",
        content:"",
        author:""
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id
        axios.get(url)
            .then(response=>{
                const data=response.data
                this.setState({
                    title:data.title,
                    content:data.body,
                    author:"poopoo"
                })
            })
    }
    render(){
        console.log(this.props.match.params.id)

        return(
            <div className="fullpost">
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <p> {this.state.author} </p>
            </div>
        )
    }
}

export default FullPost;
import axios from 'axios'
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './NewPost.css'
class NewPost extends Component{
    state={
        title:"",
        content:"",
        author:"",
        isClicked:false,
        onError:null,
    }
    postButtonClicked(){
        if(this.state.title!=="" && this.state.content!=="" && this.state.author!==""){
            axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
                .then(response=>{
                    console.log(response)
                    this.setState({isClicked:true})
                })
            }else if(this.state.title==="" && this.state.content==="" && this.state.author===""){
                this.setState({onError:<p style={{textAlign:'center',color:"red"}}>Nothing to post!</p>})
            }else{
                this.setState({onError:<p style={{textAlign:'center',color:"red"}}>Please fill out all fields</p>})
            }
    }
    render(){
        console.log(this.state);
        var redirect=null;
        if(this.state.isClicked){
            redirect=<Redirect to="/"/>
        }
        return(
            <div className="mainInput">
                {redirect}
                <input 
                    className="title" 
                    placeholder="TITLE"
                    onChange={event=>{
                        this.setState({title:event.target.value})
                    }}
                    /> 
                    <br/>
                <textarea 
                    placeholder="DESCRIPTION"
                    onChange={event=>{
                        this.setState({content:event.target.value})
                    }}
                />

                <br/>
                <input 
                    className="author" 
                    placeholder="NAME" 
                    onChange={event=>{
                        this.setState({author:event.target.value})
                    }}/>

                <br/>
                <button onClick={this.postButtonClicked.bind(this)}>Post</button>
                {this.state.onError}
            </div>
        )
    }
}

export default NewPost
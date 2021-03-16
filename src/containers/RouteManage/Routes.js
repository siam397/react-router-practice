import React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import './Routes.css'
import Blog from '../Blog/Blog'
import NewPost from '../NewPost/NewPost'
import FullPost from "../FullPost/FullPost"

class Routes extends Component{
    render(){
        return(
            <div>
            <div className="mainDiv">
            <ul>
                <li> <NavLink to="/" exact> Posts </NavLink></li>
                <li> <NavLink to="/new-post" exact> New Post </NavLink></li>
            </ul>
            </div>
            <Route path="/" exact component={Blog}/>
            <Route path='/new-post' exact component={NewPost}/>
            <Route path='/fullPost/:id' exact component={FullPost}/>
            </div>
        )
    }
}

export default Routes
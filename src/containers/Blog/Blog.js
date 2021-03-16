import axios from 'axios'
import React,{Component} from 'react'
import { Redirect } from 'react-router'
import Post from '../../components/Posts/Post'


import './Blog.css'
class Blog extends Component{
    state={
        posts:[],
        redirect:null,
        loading: false,
        page: 0,
        prevY: 0
    }
    getPosts(page){
        const url="https://jsonplaceholder.typicode.com/posts?_page=$"+page+"&_limit=40"
        //create a link like this in backend
        axios.get(url)
            .then(response=>{
                this.setState({ posts: [...this.state.posts, ...response.data] });
                this.setState({ loading: false });
            })
            .catch(err=>{
                console.log(err)
            })
    }
    componentDidMount(){
        this.getPosts(this.state.page)
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
          
          this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
          );
          this.observer.observe(this.loadingRef);
        }
    

        handleObserver(entities, observer) {
            const y = entities[0].boundingClientRect.y;
            if (this.state.prevY > y) {
              const lastPhoto = this.state.posts[this.state.posts.length - 1];
              const curPage = lastPhoto.id;
              this.getPosts(curPage);
              this.setState({ page: curPage });
            }
            this.setState({ prevY: y });
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
    const loadingCSS = {
        height: "100px",
        margin: "30px"
      };
      const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
        return(
            
            <div className="mainPost">
                {this.state.redirect}
                {posts}
                <div
                ref={loadingRef => (this.loadingRef = loadingRef)}
                style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
            </div>
            
            
        )
    }
}

export default Blog
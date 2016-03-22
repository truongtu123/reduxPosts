/**
 * Created by truongtu on 3/20/2016.
 */
import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePosts} from '../actions/index.js';
import {Link} from 'react-router';

class PostShow extends Component{
    static contextTypes={
        router:PropTypes.object
    }

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(id){
        this.props.deletePosts(id);
    }

    render(){
        const {post} = this.props;
        if(!post){
            return <div>Loading....</div>
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick(post.id)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>);
    }
}

function mapStateToProps(state){
    return {post:state.posts.post};
}

export default connect(mapStateToProps,{fetchPost})(PostShow);
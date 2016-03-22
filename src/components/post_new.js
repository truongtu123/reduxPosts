/**
 * Created by truongtu on 3/19/2016.
 */
import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPosts} from '../actions/index.js';
import {Link} from 'react-router'
class PostNew extends Component{
    static contextTypes={
        router:PropTypes.object
    }

    omSubmit(props){
        this.props.createPosts(props)
        .then(()=>{
                //blog post has been creted, navigate the user to the index
                this.context.router.push('/');
            });
    }

    render() {
        const {fields:{title,categories,content},handleSubmit} = this.props;
        console.log({title})
        return (
            <form onSubmit={handleSubmit(this.omSubmit.bind(this))}>
                <h3>Create A New Post</h3>

                <div className={`form-group ${title.touched&&title.invalid?'has-danger':''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" id="title" {...title}/>
                    <div className="text-help">
                        {title.touched?title.error:''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched&&categories.invalid?'has-danger':''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" id="categories" {...categories}/>
                    <div className="text-help">
                        {categories.touched?categories.error:''}
                    </div>
                </div>

                <div className={`form-group ${content.touched&&content.invalid?'has-danger':''}`}>
                    <label>Categories</label>
                    <textarea type="text" className="form-control" id="content" {...content}/>
                    <div className="text-help">
                        {content.touched?content.error:''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" {...content}>Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = 'Enter a username';
    }
    if(!values.categories){
        errors.categories = 'Enter a categories';
    }
    if(!values.content){
        errors.content = 'Enter a content';
    }
    return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form:'PostsNewForm',
    fields:['title', 'categories','content'],
    validate
},null,{createPosts})(PostNew);


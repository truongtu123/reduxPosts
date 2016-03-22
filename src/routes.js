/**
 * Created by truongtu on 3/17/2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import PostIndex from './components/post_index.js';
import PostNew from './components/post_new.js';
import PostShow from './components/post_show.js';

export default (
<Route path='/' component={App}>
    <IndexRoute component={PostIndex}></IndexRoute>
    <Route path="posts_new" component={PostNew}/>
    <Route path="post_show/:id" component={PostShow}/>
</Route>
);
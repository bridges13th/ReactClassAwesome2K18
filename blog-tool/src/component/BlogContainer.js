import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BlogTool } from './BlogTool'

//Add import actoins hree
import { loadAllBlogs } from '../actions/load-all-blogs';
import { changeBlogView, changePreview} from '../actions/change-blog-mode';

//One container to rule them all
const mapStateToPropsForBlogTool = state => {
    return {
        //Shared Workflow: loading blogs
        entries: state.entries,
        mode: state.mode,
        id: state.id,
        
        //Add state props here
    };
}

const mapDispatchToPropsForBlogTool = dispatch => bindActionCreators({

    //Shared Workflow: loading blogs
    loadAllBlogs,
    changeBlogView,
    changePreview,
}, dispatch);

export const BlogToolContainer = connect(
    mapStateToPropsForBlogTool,
    mapDispatchToPropsForBlogTool
)(BlogTool);
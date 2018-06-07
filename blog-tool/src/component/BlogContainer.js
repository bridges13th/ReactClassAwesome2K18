import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BlogTool } from './BlogTool'

//Add import actoins hree
import { loadAllBlogs } from '../actions/load-all-blogs'

//One container to rule them all
const mapStateToPropsForBlogTool = state => {
    return {
        //Shared Workflow: loading blogs
        entries: state.entries,
        //Add state props here
    };
}

const mapDispatchToPropsForBlogTool = dispatch => bindActionCreators({

    //Shared Workflow: loading blogs
    loadAllBlogs,
}, dispatch);

export const BlogToolContainer = connect(
    mapStateToPropsForBlogTool,
    mapDispatchToPropsForBlogTool
)(BlogTool);
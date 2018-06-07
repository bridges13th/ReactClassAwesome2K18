import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BlogTool } from './BlogTool'

//Add import actoins hree
import { loadAllBlogs } from '../actions/load-all-blogs';
import { saveBlog, editBlogActionCreator } from '../actions/edit-blog';
import { addBlog } from '../actions/add-blog';
import { removeBlog } from '../actions/delete-blog';

//One container to rule them all
const mapStateToPropsForBlogTool = state => {
    return {
        //Shared Workflow: loading blogs
        entries: state.entries,
        //Add state props here

        //WorkFlow 1 props:
        blogEntryToEdit: state.blogEntryToEdit,
        
    };
}

const mapDispatchToPropsForBlogTool = dispatch => bindActionCreators({

    //Workflow1:
    onSaveBlog: saveBlog,
    onEditBlogEntry: editBlogActionCreator,
    onDeleteBlogEntry: removeBlog,
    addBlog: addBlog, 

    

    //Shared Workflow: loading blogs
    loadAllBlogs,
}, dispatch);

export const BlogToolContainer = connect(
    mapStateToPropsForBlogTool,
    mapDispatchToPropsForBlogTool
)(BlogTool);
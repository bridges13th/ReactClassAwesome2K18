import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BlogTool } from './BlogTool'

//Add import actoins hree
import { loadAllBlogs } from '../actions/load-all-blogs'
import * as PreviewActions from '../actions/preview-actions'
import * as ModeActions from '../actions/change-blog-mode';

//One container to rule them all
const mapStateToPropsForBlogTool = state => {
    console.log("mapStateToPropsForBlogTool", state);
    return {
        //Shared Workflow: loading blogs
        entries: state.entries,
        page: state.page,
        mode: state.mode,
        id: state.id,
        
        //Add state props here
    };
}

const mapDispatchToPropsForBlogTool = dispatch => bindActionCreators({

    //Shared Workflow: loading blogs
    loadAllBlogs,

    //workflow 2: Display Logs
    prevPage: PreviewActions.prevPage,
    nextPage: PreviewActions.nextPage,
    changeBlogView: ModeActions.enterBlogViewActionCreator,
    changePreview: ModeActions.enterPreviewActionCreator,
    changeAdmin: ModeActions.enterAdminActionCreator,
}, dispatch);

export const BlogToolContainer = connect(
    mapStateToPropsForBlogTool,
    mapDispatchToPropsForBlogTool
)(BlogTool);
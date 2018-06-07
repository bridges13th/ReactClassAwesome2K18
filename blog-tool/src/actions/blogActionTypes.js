import KeyMirror from 'key-mirror'

export const actionTypes = KeyMirror({
    //Init
    LOAD_ALL_BLOGS_REQUEST: null,
    LOAD_ALL_BLOGS_DONE: null,
    ADD_BLOG_REQUEST: null,
    ADD_BLOG_DONE: null,
    EDIT_BLOG_REQUEST: null,
    EDIT_BLOG_DONE: null,

    //Blog View Actoins (Workflow 2)
    ENTER_BLOG_VIEW: null,
    ENTER_PREVIEW: null,

    CHANGE_PAGE: null,
});
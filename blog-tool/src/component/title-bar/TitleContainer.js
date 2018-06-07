import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { TitleTool } from './title-bar/TitleTool'
import * as TitleActions from '../actions/title-actions'

const mapStateToPropsForTitle = state => {
    return { title: state.event , edit: state.editingEvent};
}

const mapDispatchToPropsForTitle = dispatch => bindActionCreators({
    refreshTitle: TitleActions.refreshTitle,
    saveTitle: TitleActions.saveTitle,
    editTitle: TitleActions.editTitleActionCreator,
 }, dispatch);

export const TitleToolContainer = connect(
    mapStateToPropsForTitle,
    mapDispatchToPropsForTitle
)(TitleTool);
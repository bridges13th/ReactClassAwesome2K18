// import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GiftList } from './gift-registry/GiftList'
import { GiftForm } from './gift-registry/GiftForm'

import * as GiftActions from '../actions/gift-actions'

const mapStateToPropsForGiftList = state => {
    return { items: state.gifts };
}

const mapDispatchToPropsForGift = dispatch => bindActionCreators({
    refresh: GiftActions.refreshGifts,
    add: GiftActions.addGift,
    del: GiftActions.deleteGift,
}, dispatch);

export const GiftListContainer = connect(
    mapStateToPropsForGiftList,
    mapDispatchToPropsForGift
)(GiftList);

export const GiftFormContainer = connect(
    mapStateToPropsForGiftList,
    mapDispatchToPropsForGift
)(GiftForm);

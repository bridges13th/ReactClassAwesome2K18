// import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GiftTool } from './GiftTool'
import { GiftToolOptions } from '../models/GiftToolOptions'

import * as LoadActions from '../actions/load-actions'
import * as TitleActions from '../actions/title-actions'
import * as GiftActions from '../actions/gift-actions'

const getSortedGifts = (gifts, sortMethod) => {
    switch (sortMethod) {
        case 'price':
            return gifts.sort((giftA, giftB) => {return giftA.price > giftB.price});
        default:
            return gifts;
    }
}

//One container to rule them all
const mapStateToPropsForGiftTool = state => {
    const options = new GiftToolOptions(state.options);

    return {
        title: options.getGiftListName(),
        editMode: state.editingEvent,
        gifts: state.gifts,
        // gifts: getSortedGifts(state.gifts, options.getDefaultSort()),
        currency: options.getCurrencySymbol(),
    };
}

const mapDispatchToPropsForTool = dispatch => bindActionCreators({
    refreshTitle: TitleActions.refreshTitle,
    saveTitle: TitleActions.saveTitle,
    editTitle: TitleActions.editTitleActionCreator,
    refresh: GiftActions.refreshGifts,
    addGift: GiftActions.addGift,
    deleteGift: GiftActions.deleteGift,
    loadAllOptions: LoadActions.loadAllOptions,
    loadAllGifts: LoadActions.loadAllGifts,
}, dispatch);

export const GiftToolContainer = connect(
    mapStateToPropsForGiftTool,
    mapDispatchToPropsForTool
)(GiftTool);
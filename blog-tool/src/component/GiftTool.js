import * as React from 'react';

import { TitleTool } from './title-bar/TitleTool'
import { GiftList } from './gift-registry/GiftList'
import { GiftForm } from './gift-registry/GiftForm'

export class GiftTool extends React.Component {
    componentDidMount() {
        this.props.loadAllOptions()
            .then(() => { this.props.loadAllGifts() });
    }

    render() {
        return <React.Fragment>            
            <TitleTool
                title={this.props.title}
                editMode={this.props.editMode}
                editTitle={this.props.editTitle}
                saveTitle={this.props.saveTitle}
            />
            <GiftList
                gifts={this.props.gifts}
                currency={this.props.currency}
                deleteGift={this.props.deleteGift}
            />
            <GiftForm addGift={this.props.addGift} />
        </React.Fragment>;
    }
};
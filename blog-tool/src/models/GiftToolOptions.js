const OPTION_TITLE_INDEX = 1;
const OPTION_SORT_INDEX = 2;
const OPTION_CURRENCY_INDEX = 3;


export class GiftToolOptions {
    constructor(options) {        
        this._options = options;
    }

    _findOptionalValue(optionId) {
        if(!this._options) return;

        const option = this._options.find(o => o.id === optionId);
        if(!option) return;

        return this._options.find(o => o.id === optionId).option_value;
    }

    getGiftListName() {
        return this._findOptionalValue(OPTION_TITLE_INDEX);
    }

    getDefaultSort() {
        return this._findOptionalValue(OPTION_SORT_INDEX);
    }

    getCurrencySymbol()  {
        return this._findOptionalValue(OPTION_CURRENCY_INDEX);
    }
}
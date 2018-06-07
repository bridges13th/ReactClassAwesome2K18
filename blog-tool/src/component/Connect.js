import * as React from 'react'

export const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
    return (PresentationComponent) => {
        return class ContainerComponent extends React.Component {
            constructor(props) {
                super(props);
                this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);

            }

            componentDidMount() {
                this.unsubscribeStore = this.props.store.subscribe(() => {
                    this.forceUpdate();
                })
            }

            componentWillUnmount() {
                this.unsubscribeStore();
            }

            render() {
                const dataProps = mapStateToPropsFn(this.props.store.getState());
                
                return <PresentationComponent
                    {...this.dispatchProps} {...dataProps}
                />
            }
        }
    };
};
import React, { Fragment } from 'react'

export default function toggleOpen (Component){

  return class extends React.Component {

    static displayName =  `toggleOpen(${ Component.displayName })`;

    state = {
      isOpen: this.props.isOpen
    };

    toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    };

    render(){
      return (
        <Fragment>
          <Component {...this.props} {...this.state} toggleOpen = { this.toggleOpen } />
        </Fragment>
      );
    }

  }
}

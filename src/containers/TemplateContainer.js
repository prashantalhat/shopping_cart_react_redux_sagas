import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';
import TemplateComponent from '../components/TemplateComponent/TemplateComponent';

// This is the main connector between your state and your components

class TemplateContainer extends React.Component {
    render() {
        return (
            <div>
                <TemplateComponent />
            </div>
        );
    }
}

export default TemplateContainer;

import React from 'react';
import {Link} from 'react-router-dom';
export default class Project extends React.Component {

state = {
    id: this.props.id,
    title: this.props.title,
    source: this.props.source,
    description: this.props.description
}

    render() {
        return (
            <div className="project">
                <h2>{this.state.title}</h2>
                
            </div>
        )
    }
};
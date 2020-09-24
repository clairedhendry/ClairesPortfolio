import React from 'react';
import {Link} from 'react-router-dom';
import './Project.css'


export default class Project extends React.Component {

state = {
    id: this.props.id,
    title: this.props.title,
    url: this.props.url,
    img: this.props.img,
    description: this.props.description,
    client_repo: this.props.client_repo,
    api_repo: this.props.api_repo,
}



    render() {


        return (
            <div className="project">
                <a href={this.state.url} target="_blank" rel="noopener" ><h2>{this.state.title}</h2></a>
                <div className="project-img"
                style={{backgroundImage: `url('${this.state.img}')`}}>
                </div>
                <div className="description">{this.state.description}</div>
                <div className="repos">
                    <a href={this.state.client_repo} target="_blank" rel="noopener">Client Repo</a>
                    {this.props.api_repo !== undefined 
                    ? <a href={this.state.api_repo} target="_blank" rel="noopener">API Repo</a>
                    : <></>}
                    </div>
            </div>
        )
    }
};
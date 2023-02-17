import React, { Component } from 'react';
import './HeaderComponent.css';

export default class Newproj extends Component {

    render() {
        return (

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="divStyles">
                    <a href="https://github.com/sriramalavanya" target="_blank"><img className="gitImgStyles"
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" /></a>
                    <a className="header" href=''><h1 className="headerStyles" >Bark<span>Nova</span></h1></a>
                </div>
            </div>
        )
    }
}
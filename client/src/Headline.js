import React, { Component } from 'react';
import App from './App.js';
class Headline extends Component {
    constuctor(props) {
        super(props);
        this.state = {
            user: {
            name: "Beavis",
            email: "thegreatcornholio@teepee.bm",
            brandingStatement: "Hey, Butt-head, this website kicks ass.",
            unicornJob: "Whoa, unicorns are cool.  Heh heh."
            },
        };
    }
    componentDidMount() {
        fetch('/routes/jobs')
            .then((response) => {
                return response.json()
            }).then((json) => {
                console.log('credits to chad',json)
            }).catch((ex) => {
                console.log('i hate errors', ex)
            })
        }
    render() {
        
        return(
            <div id="sidebar">
                <ul class="nav list-group">
                    <li>
                        <a class="list-group-item" href="#"><i class="icon-home icon-1x"></i> <username obj = "name" /> </a>
                    </li>
                    <li>
                        <a class="list-group-item" href="#"><i class="icon-home icon-1x"></i> <unicorn obj = "unicorn" /> </a>
                    </li>
                    <li>
                        <a class="list-group-item" href="#"><i class="icon-home icon-1x"></i>Sidebar Item 9</a>
                    </li>
                </ul>
            </div>
        )    
    }   
}



export default Headline;
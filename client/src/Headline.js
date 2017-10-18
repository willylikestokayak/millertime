import React, { Component } from 'react';
import App from './App.js';
class Headline extends Component {
    constructor(props) {
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
<<<<<<< HEAD
        
=======

>>>>>>> 9c28275fa68d0bba830e068e76e5e3941fe67eac
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
<<<<<<< HEAD
        )    
    }   
=======
        )
    }
>>>>>>> 9c28275fa68d0bba830e068e76e5e3941fe67eac
}

export default Headline;

import React, { Component } from 'react';
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
        // fetch('/routes/jobs')
        //     .then((response) => {
        //         return response.json()
        //     }).then((json) => {
        //         console.log('credits to chad',json)
        //     }).catch((ex) => {
        //         console.log('i hate errors', ex)
        //     })
        }
    render() {
        return(
            //Tony don't change the className of the DIV....let's talk in the morning
            <div>
                HEADER GONNA GO HERE

            </div>

        )    
    }   
}

export default Headline;

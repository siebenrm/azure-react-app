import React from "react";

export class Message extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            value: null
        }
    }

    async getMessage () {
        return (await fetch(`/api/message`)).json()
    }

    componentDidMount () {
        (async () => {
            const { value } = await (this.getMessage());
            this.setState ({
                value: value
            })
        })();
    }
    render () {
        return (
            <div>
                <div>
                    Welcome to Sieb's Azure app
                </div>
                <div>
                    {this.state.value}
                </div>
            </div>)
    }
}


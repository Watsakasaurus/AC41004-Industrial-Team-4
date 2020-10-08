import React, { Component } from 'react'

class QuestionTimer extends Component {
    constructor (props) {
        super(props)
        this.state = {count: props.startCount}
    }

    render () {
        const {count} = this.state;
        var showtimer = 1;
       
        return (
        <div>
            <h1>{showtimer && count}</h1>
        </div>
        )
    }

    componentDidMount () {
        this.doIntervalChange()
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))

        if(this.state.count<0){
            this.props.timeFinished(this.props.parent);
            this.setState({count: this.props.startCount});
            // showtimer = 0
        }}, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}

export default QuestionTimer
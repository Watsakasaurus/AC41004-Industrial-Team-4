import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

var _isMounted;
class QuestionTimer extends Component {
    constructor (props) {
        super(props)
        this.state = {count: props.startCount}
    }

    

    render () {
        const now = 60;
        const {count} = this.state;
        const progressInstance = <ProgressBar className="Question-timerbar" max={10} min={0} now={count} label={`${count}s`}/>;
        var showtimer = 1;
       
        return (
            
        <div>
            {progressInstance}
            <h1>{showtimer && count}</h1>
        </div>
        )
    }

    componentDidMount () {
        _isMounted = true;
        this.doIntervalChange()
    }

    doIntervalChange = () => {
        if(_isMounted){
        this.myInterval = setInterval(() => {
            
                if(this.state.count<1){
                    _isMounted = false;
                    this.setState({count: this.props.startCount});
                    this.props.timeFinished(this.props.parent);
                    // showtimer = 0
                }

                this.setState(prevState => ({
                    count: prevState.count - 1
                }))
            
            

        }, 1000)}
    }

    componentWillUnmount () {
        _isMounted = false;
        clearInterval(this.myInterval)
    }
}

export default QuestionTimer
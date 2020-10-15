import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row'
import ProgressBar from 'react-bootstrap/ProgressBar'
// import math;
// import 'bootstrap/dist/css/bootstrap.min.css';

const interval = 50;

var _isMounted;
class QuestionTimer extends Component {
    constructor (props) {
        super(props)
        this.state = {count: props.startCount}
    }

    

    render () {
        const {count} = this.state;
        // label={`${count}s`}
        const progressInstance = <ProgressBar className="Question-timerbar" max={this.props.startCount} min={0} now={Math.floor(count)}/>;
        var showtimer = 1;
       
        return (
            
        <div>

            <Row className="Question-row">
            <Col sm={true}>{progressInstance}</Col>
            <Col sm={1}><h3 className="Question-showTimer">{showtimer && Math.floor(count)}</h3></Col>
            </Row>
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
                this.props.updateTime(this.state.count);
                if(this.state.count<=0.01){
                    _isMounted = false;
                    this.setState({count: this.props.startCount});
                    this.props.timeFinished(this.props.parent);
                    // showtimer = 0
                }

                this.setState(prevState => ({
                    count: prevState.count - interval/1000
                }))
            
            

        }, interval)}
    }

    componentWillUnmount () {
        _isMounted = false;
        clearInterval(this.myInterval)
    }
}

export default QuestionTimer
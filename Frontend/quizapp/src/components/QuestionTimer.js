import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row'
import ProgressBar from 'react-bootstrap/ProgressBar'
// import 'bootstrap/dist/css/bootstrap.min.css';

var _isMounted;
class QuestionTimer extends Component {
    constructor (props) {
        super(props)
        this.state = {count: props.startCount}
    }

    

    render () {
        const now = 60;
        const {count} = this.state;
        // label={`${count}s`}
        const progressInstance = <ProgressBar className="Question-timerbar" max={10} min={0} now={count} />;
        var showtimer = 1;
       
        return (
            
        <div>

            <Row className="Question-row">
            <Col sm={true}>{progressInstance}</Col>
            <Col sm={1}><h3 className="Question-showTimer">{showtimer && count}</h3></Col>
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
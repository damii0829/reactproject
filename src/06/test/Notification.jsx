import React from "react";

class Notification extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="notification-wrapper">
                <span className="notification-text">
                    {this.props.message}
                </span>
            </div>
        );
    }

    componentDidMount(){
        console.log(`${this.props.id}: componentDidMount called`);
    }

    componentDidUpdate(){
        console.log(`${this.props.id}: componentDidUpdate called`);
    }

    // 리액트 생명주기 메서드 오타 수정: componentWillUnmount
    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount called`);
    }
}

export default Notification;
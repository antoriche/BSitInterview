import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

class List extends React.Component{
    render(){
        const {Component} = this.props;
        return (
            <div className="list">
                {this.props.array.map((elt, i) => (<Component data={elt} key={i} />))}
            </div>
        );
    }
}

List.propTypes = {
    array: PropTypes.array,
    Component: PropTypes.func
};

List.defaultProps = {
    array: [],
    Component: (props)=>(props.children)
};

export default List;
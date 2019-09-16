import React from 'react';
import PropTypes from 'prop-types';
import './championSummary.css';

class ChampionSummary extends React.Component{
    render(){
        const {id, icon, name, title, onClick, selected } = this.props;
        return (
            <button className="champion_summary" style={{backgroundColor:selected?'rgba(255,255,255,0.3)':undefined}} onClick={_=>onClick(id)}>
                <img src={icon} alt={name+" icon"} className="champion_summary_img" />
                <div className="hide-mobile" style={{padding: 5, flexGrow:1, textAlign:'left'}}>
                    <big><b>{name}</b></big><br/>
                    <i>{title}</i>
                </div>
            </button>
        );
    }
}

ChampionSummary.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ChampionSummary;
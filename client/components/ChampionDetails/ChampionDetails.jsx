import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import * as ChampionService from '../../services/championService';

class ChampionDetails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {details : null};

        this.statsData = this.statsData.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState({details: null})
        if(props.id){
            ChampionService.fetchChampion(props.id).then(details=>this.setState({details}))
        }
    }

    /**
     * Data to display in the stats table
     * @return {[[String|Number]]}
     */
    statsData(){
        const genLine = (title, varName, customFn) => {
            const varNamePerLevel = varName+'perlevel';
            return [title, ...[...Array(18).keys()].map(i=>customFn?customFn(i):Math.round(this.state.details.stats[varName]+this.state.details.stats[varNamePerLevel]*i))];
        };

        return [
            genLine('HP','hp'),
            genLine('MP','mp'),
            genLine('Armor','armor'),
            genLine('Spell Block','spellblock'),
            genLine('HP Regeneration','hpregen'),
            genLine('MP Regeneration','mpregen'),
            genLine('Critical','crit'),
            genLine('Attack Damage','attackdamage'),
            genLine('Attack Speed',null, (level) =>
                Math.round((0.625/(1+this.state.details.stats.attackspeedoffset)) + level * this.state.details.stats.attackspeedperlevel )),
                // In the game, attack speed base calculation is 0.625/(1+attackspeedoffset)
        ];
    }

    render(){
        const {details} = this.state;
        if(details == null)return this.props.id?'Loading...':null;
        const statsData = this.statsData();
        return (
            <div className="screendetails details vertical" >
                <div className="details wrap" >
                    <img style={{minWidth: 200, height: 200, display: 'block'}} src={details.icon} alt={details.name+" icon"} />
                    <div style={{ marginLeft: 10 }}>
                        <h1>{details.name}</h1>
                        <i>{details.title}</i>
                        <p>{details.tags.join(', ')}</p>
                        <p>{details.description}</p>
                    </div>
                </div>
                <div style={{maxWidth:"100%"}} >
                <h2>Stats</h2>
                <p>
                    Move Speed : {this.state.details.stats.movespeed} <br/>
                    Attack Range : {this.state.details.stats.attackrange}
                </p>
                <div className="scrollable">
                    <table className="stats" >
                        <thead>
                            <tr>
                                <th/>
                                {[...Array(18).keys()].map(i=>(<th key={i} >{i+1}</th>))}
                            </tr>
                        </thead>
                        <tbody>
                            {statsData.map((line,i) => (<tr key={i} >{line.map((elt,i)=>(<td key={i}>{elt}</td>))}</tr>))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        );
    }
}

ChampionDetails.propTypes = {
    id: PropTypes.string
}

export default ChampionDetails;
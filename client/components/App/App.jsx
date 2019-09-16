import React from 'react';
import './style.css';
import List from '../List';
import ChampionSummary from '../ChampionSummary';
import ChampionDetails from '../ChampionDetails';
import * as ChampionService from '../../services/championService';

const mock = [{"id":"aatrox","name":"Aatrox","key":"266","title":"the Darkin Blade","icon":"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Aatrox.png"},{"id":"ahri","name":"Ahri","key":"103","title":"the Nine-Tailed Fox","icon":"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ahri.png"},{"id":"akali","name":"Akali","key":"84","title":"the Fist of Shadow","icon":"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Akali.png"},{"id":"alistar","name":"Alistar","key":"12","title":"the Minotaur","icon":"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Alistar.png"}];

export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = { list : [], selection : null };

        this.selectChampion = this.selectChampion.bind(this);
    }

    componentDidMount(){
        ChampionService.fetchAllChampions().then(list=>this.setState({list}))
    }

    selectChampion(id){
        this.setState({ selection: id });
    }

    render(){
        const {selection} = this.state;
        return (
            <div className="body" >
                <List
                    array={this.state.list}
                    Component={({data})=>(<ChampionSummary {...data} selected={selection==data.id} onClick={this.selectChampion} />)}
                />
                <ChampionDetails id={this.state.selection} />
            </div>
        );
    }
}
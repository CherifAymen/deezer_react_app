import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import DetailsAlbum from './components/DetailsAlbum';
import FavoritesAlbums from './components/FavoritesAlbums';
import Home from './components/Home';
import App from './App';

class Routes extends Component{
   render(){
       return(
            <Switch>
               <Route path="/" exact component={App}/>
               <Route path="/details/:id" exact component={DetailsAlbum}/>
               <Route path="/favorites" exact component={FavoritesAlbums}/>
            </Switch>
       )
   }
}


export default Routes;

import React,{Component} from 'react'
import './Home.css';
import Search from './widgets/searchField/Search';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';
import swal from 'sweetalert';


class Home extends Component{

    state = {
        albums : [],
        term : '',
        show : false,
    }

    componentDidMount(){
        actions.getAlbums().then(item => this.setState({albums:item}));
    }
    searchAlbums = (term) => {
        actions.getAlbums(term).then(item => this.setState({albums:item}));
    }
    toggleSideBar = event => {
       // use our 'ref' to the sidebar component
       // to open it
       this.sidebar.toggle()
   }
    addToFavorites = (album) => {
        //console.log(album.album.id);
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkAlbum(oldFavorites,album)){
            swal({
                title: "Album Existe!",
                text: "Album déja ajouté à vos favoris!",
                icon: "warning",
            });
            return false;
        }
        oldFavorites.push(album);
        let favorites = oldFavorites;
        localStorage.setItem('favorites',JSON.stringify(favorites));
        swal({
            title: "Album Ajouté!",
            text: "Album ajouté à vos favoris!",
            icon: "success",
        });
    }

    renderFav = (album) => {
        //console.log(album.album.id);
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkAlbum(oldFavorites,album)){

            return <i className="fas fa-heart text-danger display-4 p-0 pt-4"></i> ;
        }
        else {
          return <i className="fas fa-heart text-secondary display-4 p-0 pt-4"></i> ;
        }
    }

    checkAlbum = (albums,album) => {
        var found = albums.some(function (item) {
            return item.album.id === album.album.id;
        });
        return found;
    }
    renderAlbums = () => {
        // console.log(this.state);
        const {albums} = this.state;
        return albums && albums.length ?
            albums.map((item,index) => (


            <div key={index} className="card col-3 my-3 p-2">
              <Link to={`/details/${item.album.id}`} className="link">
              <img className="card-img-top" src={item.album.cover_big} alt="Card image cap" />
              </Link>
              <div className="d-flex flex-row">
                <div className="card-body ">
                  <h5 className=" display-4">{item.artist.name}</h5>
                  <h4 className="card-title pt-2 text-secondary">{item.title}</h4>
                </div>
                <div className="card-body">
                  <h3>
                    <a onClick={() => this.addToFavorites(item)} className="link" style={{cursor: 'pointer'}}>{this.renderFav(item)}</a>
                  </h3>
                </div>
              </div>
            </div>
        ))
        : null;
    }
    render(){
        return(
            <div className="row bg-light">

            <div className="col-1" style={{position: 'sticky', top: '0', height: '100vh' ,width:'100px', zIndex:"333"}}>
                <Header />
              </div>

                <div className="col-11 mt-4"  >
                    <div className="">
                        <Search searchAlbums = {this.searchAlbums}/>
                          	<div className="content mx-4 px-4">
                              <div className="row">
                                  {this.renderAlbums()}
                                  </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

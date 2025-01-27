import React,{Component} from 'react'
import './Home.css';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom';
import Header2 from '../components/widgets/header/Header2';
import Footer from '../components/widgets/footer/Footer';
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css';



class FavoritesAlbums extends Component{
    state = {
        albums : [],
    }
    componentWillMount(){
        let favorites = actions.getFavoritesAlbums();
        this.setState({
            albums : JSON.parse(favorites)
        })
        // console.log(this.state);
    }

    renderTracks = () => {
            const {albums} = this.state ;
            var song ;
            var array = [] ;
            albums.forEach(track => {
              song ={
                cover :track.album.cover_big ,
                musicSrc: track.preview ,
                name : track.title ,
                singer : track.artist.name ,
              } ;

              array.push(song);

            })

            console.log(array);
            return(
            <div className="container m-4">
            <ReactJkMusicPlayer audioLists={array} autoplay={true} toggleMode={true} mode="full" />
            </div> );
        }

    renderAlbums = () => {
         console.log(this.state);
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
                </div>
              </div>

        ))
        : null;
    }
    render(){
        return(

                    <div className="row bg-light">

                    <div className="col-1" style={{position: 'sticky', top: '0', height: '100vh' ,width:'100px', zIndex:"333"}}>
                        <Header2 />
                      </div>

                        <div className="col-11 mt-4"  >
                            <div className="">
                                    <div className="content mx-4 px-4">
                                      <div className="row">
                                      {this.renderAlbums()}
                                          {this.renderTracks()}
                                          </div>
                                    </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default FavoritesAlbums;

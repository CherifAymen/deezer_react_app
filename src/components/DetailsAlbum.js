//DetailsAlbum.js
 
import React,{Component} from 'react';
import * as actions from '../actions/index';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css'

class DetailsAlbum extends Component{
 
    state = {
        album : '',
        tracks : [] ,
        songs : []
    }
 
    componentDidMount = () =>{
        actions.getAlbum(this.props.match.params.id).then(album =>{
            this.setState({album,tracks : album.tracks.data});
        });
    }
    renderTracks = () => {
        const {tracks} = this.state;
        const {album} = this.state ;
        var song ;
        var array = [] ;
        tracks.forEach(track => {
          song ={
            cover :album.cover_big ,
            musicSrc: track.preview ,
            name : track.title ,
            singer : album.artist.name ,
          } ;

          array.push(song);

        })

        console.log(array);
        return(
        <div className="container m-4">
        <ReactJkMusicPlayer audioLists={array} autoplay={true} toggleMode={true} mode="full" />
        </div> );
        /*return tracks && tracks.length ?
            tracks.map((track,index) => (
                  /*song ={
                    cover :"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjDvYa4_trmAhU87uAKHc4aBvAQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.gettyimages.fr%2Fphotos%2Fimage-en-couleur&psig=AOvVaw03hL7x9DZ3l3z29giXcx9r&ust=1577713367308897" ,
                    musicSrc: track.preview ,
                    name : track.title ,
                    singer : "xxx" ,
                  } ;*/
                /*<figure className="col-md-6" key={index}>
                    <figcaption>Ecouter {track.title}</figcaption>
                    <audio
                        controls
                        src={track.preview}>
                            Votre navigateur ne supportes pas
                            <code>audio</code> elemens.
                    </audio>
                </figure>      

            ))
        :
        null; */
 
    }
    renderAlbum = () =>{
        const {album} = this.state;
        console.log(album.artist);
        return(
            <div className="">

                <div className=" mb-3">
                    <div className="col-md-3 "></div>

                    <div className="col-md-6 ">
                        <div class="card">
                          <img class="card-img-top" src={album.cover_xl} width="90%" alt="Card image" />
                          <div class="card-img-overlay">
                            <h4 class="display-3 bg-light d-block p-2 text-center" style={{opacity: "0.8"}}>{album.title}<span className="display-4 text-secondary" > ({album.release_date})</span></h4>
                          </div>
                        </div>

                      </div>
                        <div className="col-md-3">
                                
                        </div>
       
                </div> 
                <div className=" mb-3">
                     {this.renderTracks()}
                </div>
            </div>
        )
    }
 
    render(){
       console.log(this.state);
       return(
          <div className="row bg-light">

          <div className="col-1" style={{position: 'sticky', top: '0', height: '100vh' ,width:'100px', zIndex:"333"}}>
              <Header />
            </div>

              <div className="col-11"  >
                  <div className="">
                          <div className="">
                                {this.renderAlbum()}

                          </div>
                  </div>
              </div>
          </div>
       )
    }
}
 
 
export default DetailsAlbum;

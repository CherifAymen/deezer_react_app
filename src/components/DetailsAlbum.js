//DetailsAlbum.js
 
import React,{Component} from 'react';
import * as actions from '../actions/index';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';
 
class DetailsAlbum extends Component{
 
    state = {
        album : '',
        tracks : []
    }
 
    componentDidMount = () =>{
        actions.getAlbum(this.props.match.params.id).then(album =>{
            this.setState({album,tracks : album.tracks.data});
        });
    }
    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ?
            tracks.map((track,index) => (
                <figure key={index}>
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
        null;
 
    }
    renderAlbum = () =>{
        const {album} = this.state;
        return(
            <div className="col-md-12 mb-3">
                <div className="card border-danger">
                    <img src={album.cover_big} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <div className="card-title">
                            <h5 class="text-success">{album.release_date}</h5>
                            <h3 class="text-info">{album.title}</h3>
                        </div>
                    </div>
                    <div className="card-footer">
                        {this.renderTracks()}
                    </div>
                </div>
            </div> 
        )
    }
 
    render(){
       console.log(this.state);
       return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-8 mx-auto">
                    <Header/>
                    <div className="row">
                        {this.renderAlbum()}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
       )
    }
}
 
 
export default DetailsAlbum;

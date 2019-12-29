import React,{Component} from 'react'

class Search extends Component{

    state = {
        term : ''
    }

    handleInputChange = (event) => {
        this.setState({term : event.target.value})
    }

    submitSearch = (event) =>{
        event.preventDefault();
        let {term} = this.state;
        this.props.searchAlbums(term);
    }

    render(){
        return(
            <div className="search mb-2 ml-4">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <div className="row">
                        <div className="col-md-11">
                            <div className="form-group">
                                <input
                                    value={this.state.term}
                                    onChange={(event) => this.handleInputChange(event)}
                                    type="text"
                                    className="form-control p-4"
                                    placeholder="Recherche"/>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="form-group">
                                <button className="btn btn-light"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;

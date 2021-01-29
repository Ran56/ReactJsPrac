import React from 'react';
import Movie from './Movie';
import axios from '../axios';


export default class Movies extends React.Component{
 
    state = {
        name:'',
        rating: '',
        movies:[],
    };

    // getMovies = () => {
    //     axios.get('/movies.json').then((response)=>{
    //         console.log('response ',response.data);
    //         const data = 
    //     })
    // }
    handleRatingChange = (event) =>{
        this.setState({rating:event.target.value});
    };

    handleNameChange = (event) =>{
        this.setState({name: event.target.value});
    }
    
    
    handleAdd = async () => {
        const updatedMovies = this.state.movies;

        const movie = {name:this.state.name,rating:this.state.rating};

        let key; 
        await axios
        .post('/movies.json',movie)
        .then((response) => {
            console.log('response',response);
            key = response.data.name;
            movie.key = key;
            movie.ssss = 1;
            console.log(movie);
            
        })
        .catch((error)=>console.log('error ',error));


        updatedMovies.push(movie);

        this.setState({movies:updatedMovies, name:'',rating:''});
    }


    handleDelete = (deleteMovie) => {
        console.log('handleDelete => delete a movie from here',deleteMovie);

        const movies = this.state.movies;

        this.setState({movies:movies.filter(movie => movie.name !== deleteMovie.name)});
    }



    componentDidMount = () => {
        console.log('componentDidMount...');
    }
    render(){
        return(
            <div>
                <div className='movies'>
                    <input type="text" placeholder='Enter movie name' onChange={this.handleNameChange} value={this.state.name}/>
                    <input type="text" placeholder='Enter movie rating'onChange={this.handleRatingChange} value={this.state.rating} />
                    <button onClick={this.handleAdd}>Add</button>
                </div>
                <div>
                    {
                        // this.state.movies.map(movie => <Movie movie={movie} deleteMovie={this.handleDelete} key={movie.name}/>)//if no key to specify unique element, may cause some warnings 
                                                                        //deleteMovie method will first tranmit into Moive props
                                                                        //then in Movie pass value into handleDelete method
                        this.state.movies.map((movie,index) => <Movie movie={movie} deleteMovie={this.handleDelete} key={index}/>)

                    }
                </div>
            </div>
        );
        
    }
}
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Movie from "./Movie";
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux'
import { listing } from '../reducers/listSlice'

const Movies = props => {
    const [totalPages, setTotalPages] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const movieType =props.match.params.movieType;
    const [movieTypeAnt, setMovietypeAnt] = useState('');

    const listMovies = useSelector((state) => state.list.value)
    const dispatch = useDispatch()

    const apikey = '1a328f10e026656d2ac01c360720f5f9';
    var title = '';

    const [text,setText] = useState('');
      
    switch (movieType) {
        case "popular":
            title = 'Populares';
            break;
        case "upcoming":
            title = 'Próximamente';
            break;
        case "search":
            title = 'Búsqueda';
            break;
        default:
            title = 'Más votadas';
            break;
    }

    useEffect(() => {
        if (movieType != movieTypeAnt)
        {
            setMovietypeAnt(movieType);
            setActivePage(1);
        }
        searchMovies();
           
    }, [movieType,activePage]);

    const handlePageChange = (e) => {
        const selectedPage = e.selected;

        setActivePage(selectedPage+1);
    }

    const searchMovies = () => {
       
        if (movieType == 'search') {
            setText(props.location.state.text);
            if(props.location.state.text.length > 0) {
                axios.get('https://api.themoviedb.org/3/search/movie?api_key='
                +apikey+'&query='+props.location.state.text
                +'&language=es-ES&page='+activePage)
                .then(res => { 
                    dispatch(listing({payload: res.data.results}))
                    setTotalPages(res.data.total_pages);
                })
                .catch(console.error);
            }
        }
        else {
            setText('');
            axios.get('https://api.themoviedb.org/3/movie/'
            +movieType+'?api_key='+apikey+'&language=es-ES&page='+activePage)
            .then(res => { 
                dispatch(listing({payload: res.data.results}))
                setTotalPages(res.data.total_pages); 
            })
            .catch(console.error);
        }
    }

    return (
        <div class="container">
            <h2>{title} {text}</h2>
            <div class="row">
                <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Siguiente"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        forcePage={activePage-1}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
            </div>
            <div class="row">
                {listMovies.payload&&listMovies.payload.map( function(movie){
                   if(movie.poster_path != null) { return <Movie key={movie.id} movie={movie}/>; }
                })}
            </div>
            <div class="row">
                <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Siguiente"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        forcePage={activePage-1}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
            </div>
        </div>
    );
};


export default Movies;
/*

*/
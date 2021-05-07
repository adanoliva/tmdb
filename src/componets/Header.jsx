import React, {useState} from 'react';
import { NavLink, useHistory  } from 'react-router-dom';

const Header = props => {
    const history = useHistory();
    const [textSearch,setTextSearch] = useState('');
    const search = event  => {
        console.log(textSearch.length );
        if(textSearch.length > 0) {
            history.push('/search',{text: textSearch});
        }
    }

    const changeText = event => {
        setTextSearch(event.target.value);
    }

    return (<header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <p class="navbar-brand">TMDB</p>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <NavLink to="/popular" className="nav-link">Películas populares</NavLink>
                        </li>
                        <li class="nav-item ">
                            <NavLink to="/upcoming" className="nav-link">Próximas películas</NavLink>
                        </li>        
                        <li class="nav-item ">
                            <NavLink to="/top_rated" className="nav-link">Películas más votadas</NavLink>
                        </li>                                      
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search"
                            placeholder="Buscar película" aria-label="Buscar"
                            onChange={changeText}/>
                            <button class="btn btn-outline-info my-2 my-sm-0" 
                            onClick={search}
                            type="button">Buscar</button>
                        </form>
                    </div>
                </nav>
            </header>)
    
}

export default Header;
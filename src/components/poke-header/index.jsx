import './style.css'
import searchIcon from '../../assets/icons/magnifier.png'

function PokeHeader({handleOnChange}) {

    return (
        <nav className="pokemon__header">
            <h1 className="pokemon__pokedex-title">Pokédex</h1>
            <div className="input-search-container">
                <input className="input-search" onChange={handleOnChange} type="text" placeholder="Search pokemon"></input>
                <img src={searchIcon} className="search-icon"></img>
                
            </div>
           
        </nav>
    )
}

export default PokeHeader;
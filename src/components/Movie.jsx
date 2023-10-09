function Movie(props) {
    const {
        Title: title, 
        Year: year,
        imdbID: id, 
        Type: type,
        Poster: poster,
    } = props;
    
    return <div id={id} className="card movie">
            <div className="card-image">
                {
                    poster === 'N/A' 
                    ? <img src="https://placehold.co/400x480/cecece/ce?text=Opps" alt="#"/>
                    : <img src={poster} alt='#'/>
                }
            </div>
            <div className="card-content">
            <span className="card-title">{title}</span>
                <p className="left">{year}</p>
                <p className="right">{type}</p>
            </div>
    </div>
}

export {Movie}
import PropTypes from 'prop-types';

export const GifItem = ( { title, url } ) => {

    return (
        <div className="card">
            <img data-testid='gif-image' src={ url } alt={ title }/>
            <p data-testid='gif-title'>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
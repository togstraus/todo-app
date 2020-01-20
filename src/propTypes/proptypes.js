import PropTypes from 'prop-types'

export const todoProps = PropTypes.shape({
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })
});
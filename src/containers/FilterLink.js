import React from 'react'
import PropTypes from 'prop-types'
import { setVisibilityFilter } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const Link = ({ children, filter }) => {
  const filterState = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  return <button
    onClick={() => dispatch(setVisibilityFilter(filter))}
    disabled={filter === filterState}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
};

Link.propType = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Link

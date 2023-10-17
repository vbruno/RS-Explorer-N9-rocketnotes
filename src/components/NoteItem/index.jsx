import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from "./styled";

import PropTypes from 'prop-types'

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $is-new={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

NoteItem.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
}

import React from 'react';
import PropTypes from 'prop-types';

class DeleteBtn extends React.Component {
  render() {
    const { delCard, cardName } = this.props;
    return (
      <button
        cardName={ cardName }
        data-testid="delete-button"
        className="delele-button"
        type="button"
        onClick={ delCard }
      >
        Excluir
      </button>
    );
  }
}

DeleteBtn.propTypes = {
  delCard: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default DeleteBtn;

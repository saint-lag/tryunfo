import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form id="trunfo-form">
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="name-input"
            id="name-input"
            type="text"
            onChange={ onInputChange }
            placeholder="placeholder"
            value={ cardName }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            data-testid="description-input"
            id="description-input"
            type="textarea"
            onChange={ onInputChange }
            placeholder="description"
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1-input">
          attr1
          <input
            id="attr1-input"
            data-testid="attr1-input"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2-input">
          attr2
          <input
            id="attr2-input"
            data-testid="attr2-input"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3-input">
          attr3
          <input
            id="attr3-input"
            data-testid="attr3-input"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            data-testid="rare-input"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            id="trunfo-input"
            onChange={ onInputChange }
            type="checkbox"
          />
        </label>
        <button
          className="btn"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: 'no card name',
  cardDescription: 'no description',
  cardAttr1: 'no attr1',
  cardAttr2: 'no attr2',
  cardAttr3: 'no attr3',
  cardImage: 'no image',
  cardRare: 'no rare card',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: null,
  onSaveButtonClick: null,
};

export default Form;

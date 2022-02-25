import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardVisualizer from './components/CardVisualizer';
import exampleData from './example/data';

class App extends React.Component {
  constructor() {
    super();
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.areAllNumbers = this.areAllNumbers.bind(this);
    this.attributesChecker = this.attributesChecker.bind(this);
    this.inputChecker = this.inputChecker.bind(this);
    this.resetPreview = this.resetPreview.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      data: exampleData,
      optionalEmoji: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      optionalEmoji,
      data,
    } = this.state;

    data.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      optionalEmoji,
    });

    this.setState(
      () => ({
        data,
      }),
      () => this.resetPreview(),
    );
  }

  areAllNumbers() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const rawLst = [cardAttr1, cardAttr2, cardAttr3];
    return rawLst.every((item) => item !== '') === true
      ? rawLst.map((item) => Number(item))
      : undefined;
  }

  resetPreview() {
    const { data } = this.state;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      data,
      optionalEmoji: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  inputHandler({ target }) {
    const { name, value, checked } = target;
    console.log(name, checked);
    if (checked) {
      this.setState({
        [name]: this.cardTrunfo !== true,
      });
    } else {
      this.setState(
        () => ({
          [name]: value,
        }),
        () => this.inputChecker(),
      );
    }
  }

  attributesChecker() {
    const lst = this.areAllNumbers();
    if (lst) {
      const minValue = 0;
      const maxValue = 210;
      const reducer = (total, curr) => total + curr;
      const attrSum = lst.reduce(reducer, 0);
      if (attrSum <= maxValue && attrSum >= minValue) {
        const maxIndividualValue = 90;
        const minIndividualValue = 0;
        const attrsLimit = lst.every(
          (attr) => attr <= maxIndividualValue && attr >= minIndividualValue,
        );
        if (attrsLimit === true) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  inputChecker() {
    const attributesPermition = this.attributesChecker();
    if (attributesPermition === true) {
      const { cardName, cardImage, cardDescription, cardRare } = this.state;
      const lst = [cardName, cardImage, cardDescription, cardRare];
      if (lst.every((item) => item !== '') !== false) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState(() => ({
          isSaveButtonDisabled: true,
        }));
      }
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const { state } = this;
    return (
      <>
        <main id="main-container">
          <div id="form-container">
            <h1>Adicionar carta</h1>
            <Form
              cardName={ state.cardName }
              cardDescription={ state.cardDescription }
              cardAttr1={ String(state.cardAttr1) }
              cardAttr2={ String(state.cardAttr2) }
              cardAttr3={ String(state.cardAttr3) }
              cardImage={ state.cardImage }
              cardRare={ state.cardRare }
              cardTrunfo={ Boolean(state.cardTrunfo) }
              hasTrunfo={ Boolean(state.hasTrunfo) }
              onSaveButtonClick={ this.onSaveButtonClick }
              isSaveButtonDisabled={ state.isSaveButtonDisabled }
              onInputChange={ this.inputHandler }
            />
          </div>
          <div id="card-super-container">
            <h1>Pré-visualização</h1>
            <Card
              cardName={ state.cardName }
              cardDescription={ state.cardDescription }
              cardAttr1={ Number(state.cardAttr1) }
              cardAttr2={ Number(state.cardAttr2) }
              cardAttr3={ Number(state.cardAttr3) }
              cardImage={ state.cardImage }
              cardRare={ state.cardRare }
              cardTrunfo={ Boolean(state.cardTrunfo) }
              optionalEmoji={ state.optionalEmoji }
            />
          </div>
        </main>
        <section id="card-visualizer-container">
          <h1>Todas as Cartas</h1>
          <CardVisualizer data={ state.data } />
        </section>
      </>
    );
  }
}

export default App;

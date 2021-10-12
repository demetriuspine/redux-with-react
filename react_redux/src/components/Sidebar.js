import React from 'react';
import { connect } from 'react-redux';

import * as movieActions from '../actions/movieActions'; // importando TUDO como movieActions 

export default connect(mapStateToProps, mapDispatchToProps)(class Sidebar extends React.Component {

  render() {
    const { categoriesInGlobalState, dispararAcaoSelecionarFilme } = this.props; // a chave categoriesInGlobalState do mapStateToProps, vira uma prop

    return (
      <aside>
        {
          categoriesInGlobalState.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>
                      <button
                        type="button"
                        onClick={()=> dispararAcaoSelecionarFilme()}
                      >
                        {movie.title} was released in {movie.released}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
})

function mapStateToProps(state) { //recebe como parâmetro o estado global
  return {
    categoriesInGlobalState: state.categories // aqui eu crio um nome da chave, e recebo o estado que faz sentido pra mim
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispararAcaoSelecionarFilme: () => dispatch(movieActions.selectedMovie())// agora é uma função
  }
}

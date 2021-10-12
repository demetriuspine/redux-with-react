import React from 'react'
import { connect } from 'react-redux';

class Sidebar extends React.Component {

  render() {
    const { categories } = this.props;

    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
}

export default connect()(Sidebar)
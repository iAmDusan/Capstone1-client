import React, { Component } from 'react';
import ResultsContext from '../../contexts/ResultsContext';

class UserFavoriteList extends Component {
  static contextType = ResultsContext;

  getFavorites() {
    const { user, UserFavoriteList } = this.context;

    return (
      <div className="user-favorites-list">
        <h3> User: {user} </h3>
        <h4> FavoritesList: {UserFavoriteList} </h4>
      </div>
    );
  }
}

export default UserFavoriteList;

import { getAllArticles } from '../../services/articles';
import * as types from './actionTypes'

export function fetchAllArticles() {
  return dispatch => {
    const articles = getAllArticles(); // in real life, this will be a async call
    const articlesById = _.keyBy(articles
        .map(article => _.assignIn({ date: article.date.trim() }, article)),
        'id');

    dispatch({type: types.ARTICLES_FETCHED, articlesById})
  }
}
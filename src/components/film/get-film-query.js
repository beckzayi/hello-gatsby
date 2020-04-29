const query = `query getFilm($id: ID!) {
  Film(id: $id) {
    id
    title
    director
  }
}`;

export default query;
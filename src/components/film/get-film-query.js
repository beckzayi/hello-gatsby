const query = `{
  Film(id: $id) {
    id
    title
    director
  }
}`;

export default query;
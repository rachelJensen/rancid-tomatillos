export const formatMovieDetails = (data) => {
  data.genres = data.genres.join(', ')
  data.average_rating = data.average_rating.toFixed(1)
  data.release_date = data.release_date.split('-').shift();
  data.revenue = data.revenue  ? `Revenue: $${data.revenue}` : ''
  data.budget = data.budget  ? `Budget: $${data.budget}` : ''
  data.genres = data.genres  ? `Genre(s): ${data.genres}` : ''
  data.runtime = data.runtime  ? `Runtime: ${data.runtime} min` : ''
  return data
}
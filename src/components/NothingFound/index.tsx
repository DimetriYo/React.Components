import nothingFoundImg from '../../assets/nothingFound.png';

export function NothingFound() {
  return (
    <div>
      <img src={nothingFoundImg} alt="Sorry, but nothing has been found." />
      <h4>Sorry,</h4>
      <p>we couldn&rsquo;t find anything fitting the search term.</p>
    </div>
  );
}

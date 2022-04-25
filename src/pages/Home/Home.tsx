import Search from '../../components/Search/Search';
import Countries from '../../components/Countries/Countries';
import './Home.css';

const Home: React.FC = () => {
  return (
    <main className="container__content--main">
      <Search />
      <Countries />
    </main>
  );
};

export default Home;

import style from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import About from '../About/About';
import Items from '../Items/Items';

const App = () => {
  return (
    <div className={style.app}>
      <Header/>
      <div className={style.content}>
        <About/>
        <Items/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

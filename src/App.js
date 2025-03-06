import "./App.css";
import Header from "./components/Header";
import HeaderOfContent from "./components/HeaderOfContent";
import OurPartners from "./components/OurPartners";
import AuctionsOfSlider from "./components/AuctionsOfSlider";
import AboutOfWorks from "./components/AboutOfWorks";
import PopularCollectionsSlider from "./components/PopularCollectionsSlider";
import ExploreOfCategoriesSlider from "./components/ExploreOfCategoriesSlider";
import TopOfCreators from "./components/TopOfCreators";
import FormOfNft from "./components/FormOfNft";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderOfContent />
      <OurPartners />
      <AuctionsOfSlider />
      <AboutOfWorks />
      <PopularCollectionsSlider />
      <ExploreOfCategoriesSlider />
      <TopOfCreators />
      <FormOfNft />
    </div>
  );
}

export default App;

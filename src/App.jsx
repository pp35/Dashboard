import Navbar from "./components/Navbar"
import PieChart from "./components/PieChart"
import FDMaturityTimeline from "./components/FDMaturityTimeline"
import Cards from "./components/Cards"
import Card1 from "./components/Card1"
import SideCards from "./components/SideCards"

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-9 border  shadow-md">
        <h1 className="justify-between items-center font-bold text-2xl p-2">Welcome, Johan Paul</h1>
        <div className="lg:flex grid grid-cols-1 gap-3  ">
          <div>
          <PieChart />
          </div>
          <div className="">
          <FDMaturityTimeline  />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-3 p-2">
          <div className="col-span-2">
            <Cards />
            <h1 className="font-bold text-2xl p-1">Get Answer</h1>
            <h3 className="font-bold">to all your questions</h3>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 ">
              <Card1 />
              <Card1 />
              <Card1 />
            </div>
          </div>
          <SideCards />
        </div>
      </div>
    </>
  )
}

export default App
import Main_Title from "../../Shared-Components/Main_Title";
import Banner from "./Banner";
import Graduates from "./Graduates";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Graduates></Graduates>
            <Main_Title text={'The Edzorb Law Difference'}></Main_Title>
        </div>
    )
}
export default Home;
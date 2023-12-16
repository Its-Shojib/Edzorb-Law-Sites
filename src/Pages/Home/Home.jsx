import Cards from "../../Shared-Components/Cards";
import Main_Title from "../../Shared-Components/Main_Title";
import Banner from "./Banner";
import Graduates from "./Graduates";

import one from './../../assets/Slider1/1.png'
import two from './../../assets/Slider1/2.png'
import three from './../../assets/Slider1/3.png'
import four from './../../assets/Slider2/4.png'
import five from './../../assets/Slider2/5.png'
import six from './../../assets/Slider2/6.png'
import seven from './../../assets/Slider3/7.png'
import eight from './../../assets/Slider3/8.png'
import nine from './../../assets/Slider3/9.png'
import ten from './../../assets/Slider4/10.png'
import eleven from './../../assets/Slider4/11.png'
import twielve from './../../assets/Slider4/12.png'
import thirteen from './../../assets/Slider5/13.png'
import fourteen from './../../assets/Slider5/14.png'
import fifteen from './../../assets/Slider5/15.png'
import sixteen from './../../assets/Slider6/16.png'
import seventeen from './../../assets/Slider6/17.png'
import eightteen from './../../assets/Slider6/18.png'
import nineteen from './../../assets/Slider7/19.png'
import twintee from './../../assets/Slider7/20.png'
import twintiOne from './../../assets/Slider7/21.png'
import Mentorship from "./Mentorship";
import Award from "./Award";
import SocialLinks from "../../Social/SocialLinks";
import Testimonials from "./Testimonials";
import UniqueLaw from "./UniqueLaw";
import LatestVideos from "./LatestVideos";
import Premium from "./Premium";
import FooterUp from "./FooterUp";

const Home = () => {
    let texts1 = [
        "High Yield Prelims Questions with Mains Explanations",
        "Visual Learning Format, Stories, Animations",
        'Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States',
        'Extensive Subject Wise Coverage of Questions',
        'Goldmine for Your Success in Judiciary Exams'
    ];
    let texts2 = [
        "20 State Specific Mains Test Series with Detailed Evaluation",
        "Personalized Guidance with Line to Line Feedback",
        'Major Subjects, Criminal Law, Civil Law, Judgment Writing, Essay Writing, Translation, Precis Writing',
        'Mains QBank in Q & A Format',
        'Mains Oriented Notes, Case Law Notes'
    ];
    let texts3 = [
        "Extensive Coverage of CrPC, CPC, IEA, Constitution etc.",
        "Coverage of Minor Subjects – SOGA, TPA, Admin Law",
        'Notes Inclusive of Case Laws & Recent Legal Updates',
        'Exhaustive & Complete Section to Section Coverage',
    ];
    let texts4 = [
        "Bare Act Revolution is a LUXURY, a Concept like NEVER BEFORE",
        "Revolutionary Way to Understand Legal Concepts",
        'Storyboard, Visual Illustrations, Interactive Learning',
        'Nuanced Coverage of Important Legal Concepts',
    ];
    let texts5 = [
        "Holistic Coverage – History, Polity, Geography, Economics, Environment, Static GK & GS topics",
        "Lucid, Visual Flashcards, Flow Charts",
        'Complete Coverage of NCERT in Question Answer Format',
        'Retainable & Fun to Learn',
    ];
    let texts6 = [
        "Up to date Legal Updates with Summaries and Citations",
        "Frequently Asked Case Laws from Past Year Question Papers",
        'Well Structured Flashcards in Visual Learning Format',
        'Easy to Revise & Keep You Exam Ready',
    ];
    let texts7 = [
        "Personalized One to One Mentorship Session",
        "Soulspeak Podcast to Help You Relief Stress & Anxiety",
        "Right Content, Right Mindset & Right Guidance",
        "Free Consultation Related to Judiciary Preparation",
        "Edzorb Study Space to Increase Productivity"
    ];

    return (
        <div className="relative">
            <Banner></Banner>
            <Graduates></Graduates>
            <Main_Title text={'The Edzorb Law Difference'}></Main_Title>
            {/* Card-1 */}
            <Cards texts={texts1} title='Prelims QBank with Explanations in Visual Learning Format' img1={one} img2={two} img3={three} classT={"md:flex-row"}></Cards>

            {/* Card-2 */}
            <Cards texts={texts2} title='Mains Test Series & Evaluation Like Never Before' img1={four} img2={five} img3={six} classT={"md:flex-row-reverse"}></Cards>

            {/* Card-3 */}
            <Cards texts={texts3} title='Simplified Notes in Visual Learning Format' img1={seven} img2={eight} img3={nine} classT={"md:flex-row"}></Cards>

            {/* Card-4 */}
            <Cards texts={texts4} title='Bare Act Revolution' img1={ten} img2={eleven} img3={twielve} classT={"md:flex-row-reverse"}></Cards>

            {/* Card-5 */}
            <Cards texts={texts5} title='General Knowledge & Current Affairs' img1={thirteen} img2={fourteen} img3={fifteen} classT={"md:flex-row"}></Cards>

            {/* Card-6 */}
            <Cards texts={texts6} title='Flashcards – Case Laws, Legal Maxims, Legal Updates & One Liners' img1={sixteen} img2={seventeen} img3={eightteen} classT={"md:flex-row-reverse"}></Cards>
            {/* Card-7 */}
            <Cards texts={texts7} title='Best Doubt Support & Peer Guidance' img1={nineteen} img2={twintee} img3={twintiOne} classT={"md:flex-row"}></Cards>


            <Mentorship></Mentorship>
            <Main_Title text={"Strike Rate"}></Main_Title>

            <Award></Award>

            <SocialLinks></SocialLinks>
            
            <Main_Title text={"Testimonials"}></Main_Title>
            <Testimonials></Testimonials>

            <Main_Title text={"What makes Edzorb Law unique"}></Main_Title>
            <UniqueLaw></UniqueLaw>

            <Main_Title text={"Latest Videos"}></Main_Title>
            <LatestVideos></LatestVideos>

            <Main_Title text={"Get Started Today"}></Main_Title>
            <Premium></Premium>

            <FooterUp></FooterUp>

        </div>
    )
}
export default Home;
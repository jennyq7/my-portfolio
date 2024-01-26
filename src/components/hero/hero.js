import HeroIcon from '../../assets/girl-in-front-of-coding.jpg';

function Hero () {


    return (
        <div className="hero bg-greyColor p-2 flex flex-col pt-5">
            <section className="mx-auto">Frontend/Full Stack Developer</section>
            <p className="mx-auto pb-3">I am a puzzle loving software developer who designs and develop solutions of benefit to others.</p>
            <img className="object-contain w-2/4 max-h-56 mx-auto" src={HeroIcon} alt="girl in front of code"/>
        </div>
    )
};

export default Hero;



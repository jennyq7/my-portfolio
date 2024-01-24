import HeroIcon from '../../assets/girl-in-front-of-coding.jpg';

function Hero () {

    return (
        <div className="hero bg-greyColor p-2 flex flex-col flex-wrap items-center">
            <section>Frontend/Full Stack Developer</section>
            <p className="self-center">I am a puzzle loving software developer who designs and develop solutions of benefit to others.</p>
            <img src={HeroIcon} alt="girl in front of code"/>
        </div>

    )
};

export default Hero;
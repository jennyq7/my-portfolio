
function Header () {
    return (
        <header className="bg-primary flex justify-between p-2">
            <h1 className="ml-2 font-semibold text-lg self-center text-textColor">Jenny Quan</h1>
            <ul className="md:flex">
                <a href="#about"><li className="mr-2">About</li></a>
                <a href="#projects"><li className="mr-2">Projects</li></a>
                <a href="#contact"><li className="mr-2">Contact</li></a>
            </ul>
        </header>
    )
};

export default Header;
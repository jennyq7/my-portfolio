import Calc from '../../assets/calc-app.png';
import Unit from '../../assets/unit-converter-pic.png';
import RecipeBox from '../../assets/recipe-short.png';

function Projects ()  {
    return (
        <div className="projects p-2 pt-3 pl-3 bg-greyColor">
            <h2 className="font-semibold pb-4">Projects</h2>
            <section className="md:flex md:flex-wrap xl:gap-y-px">
                <div className="pb-3 md:flex md:gap-2 xl:w-2/4">
                   <div className="w-full md:w-80w h-auto">
                      <img className="pb-2 mx-auto h-30v md:h-40v md:w-full object-center md:object-contain" src={RecipeBox} alt="screenshot of recipe box main page"/>
                   </div>
                   <div className="mx-auto md:self-center">
                        <p>Recipe Box is my capstone with BrainStation and it is a full stack web app that allows you to sort and find recipes and save and add recipes with ease. 
                        One notable feature is the ability to sort recipes by number of ingredients allowing users who do not have many ingredients at home to find a recipe with fewer ingredients
                        so they do not have to buy items they cannot use up and would have expired otherwise. It uses HTML, CSS, SASS, JavaScript, Axios, React JS, Express JS, MySQL and Node JS and Knex JS. 
                        The site is hosted on Azure Static Web App with auto-generated url. In the backend it uses Azure App Service and MySQL database.</p>                       
                        <aside>Click <a className="text-blue-600" href="https://brave-grass-0f08f400f.3.azurestaticapps.net/recipes">here</a> to go to my recipe site</aside> 
                    </div>
                </div>
                <div className="md:flex md:gap-1 xl:w-2/4">
                   <div className="w-full md:w-3/12 h-auto">
                      <img className="pb-2 mx-auto md:m-0 h-30v md:h-40v md:w-full object-center md:object-contain" src={Unit} alt="screenshot of unit converter"/>
                   </div>
                   <div className="mx-auto md:self-center">
                        <p>Unit converter is a tool I created to help people convert from ounces to millimeters, 
                        inspired by local juice store. It uses React, Typescript, Javascript, HTML, CSS and SASS.</p>                       
                        <aside>Click <a className="text-blue-600" href="https://jenny-unit-converter.netlify.app/">here</a> to go to my unit site</aside> 
                   </div>
                </div>
                <div className="pb-3 md:flex xl:w-2/4">
                   <div className="w-full md:w-25w h-auto">
                      <img className="mx-auto md:m-0 h-20v md:h-40v md:w-full object-center md:object-contain" src={Calc} alt="screenshot of calculator"/>
                   </div>
                   <div className="mx-auto md:self-center md:pr-10 xl:pr-20">
                        <p>Calculator-app is a calculator I created with React, JavaScript and TypeScript. It can perform the different operations, delete entries and showcase the result.</p>                                           
                        <aside>Click <a className="text-blue-600" href="https://calculator-app-typescript-react.netlify.app/">here</a> to go to my calculator site</aside> 
                   </div>
                </div>
            </section>
        </div>
    )
};

export default Projects;
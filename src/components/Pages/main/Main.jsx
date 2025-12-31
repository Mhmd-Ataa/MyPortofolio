import React, { useState } from 'react';
import './Main.css';
import img1 from '../../../Asset/crudre.jpeg';
import img2 from '../../../Asset/Azkar.jpeg';
import img3 from '../../../Asset/Crudjs.jpeg';
import img4 from '../../../Asset/filter.jpeg';
import img5 from '../../../Asset/port.jpeg';
import img6 from '../../../Asset/features (1).jpeg';
import img7 from '../../../Asset/Clothes.jpeg';
import img8 from '../../../Asset/movies.png';
import img9 from '../../../Asset/eco.png';
import img10 from '../../../Asset/edu.png';
import img11 from '../../../Asset/foodjs.png';
import img12 from '../../../Asset/dash.png';
import img13 from '../../../Asset/dom.png';
import img14 from '../../../Asset/cart.png';
import img15 from '../../../Asset/portjs.png';
import img16 from '../../../Asset/age.png';
import img17 from '../../../Asset/quizjs.png';
import img18 from '../../../Asset/passjs.png';
import img19 from '../../../Asset/wethear.png';
import img20 from '../../../Asset/todo.png';
import img21 from '../../../Asset/passjs.png';
import img22 from '../../../Asset/passjs.png';





import { AnimatePresence, motion } from 'framer-motion';

let Projects = [
    { id: 1, title: "Crud Operations (JS)", imgPath:`${img3}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/CrudOperations/", gitHub: "https://github.com/Palaestine/CrudOperations.git" },
    { id: 2, title: "Azkkar", imgPath:`${img2}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/AZKAR-1/", gitHub: "https://github.com/Palaestine/AZKAR-1.git" },
    { id: 3, title: "Clothes", imgPath:`${img7}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/CloseStore/", gitHub: "https://palaestine.github.io/CloseStore/" },
    { id: 4, title: "Food__1", imgPath:`${img11}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/fooddd/", gitHub: "https://github.com/Palaestine/fooddd.git" },
    { id: 5, title: "DashBoard", imgPath:`${img12}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/dashh/", gitHub: "https://github.com/Palaestine/dashh.git" },
    { id: 6, title: "Slider", imgPath:`${img13}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/Slider/", gitHub: "https://github.com/Palaestine/Slider.git" },
    { id: 7, title: "Advanced Food Cart", imgPath:`${img14}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/cartFood/", gitHub: "https://github.com/Palaestine/cartFood.git" },
    { id: 8, title: "Portofolio_", imgPath:`${img15}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://mhmd-ataa.github.io/portofolio_1/", gitHub: "https://github.com/Mhmd-Ataa/portofolio_1.git" },
    { id: 9, title: "Age Calculator", imgPath:`${img16}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/ageCalculator/", gitHub: "https://github.com/Palaestine/ageCalculator.git" },
    { id: 10, title: "Quiz", imgPath:`${img17}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/quiz/", gitHub: "https://github.com/Palaestine/quiz.git" },
    { id: 11, title: "Rondom Password", imgPath:`${img18}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/random_pass/", gitHub: "https://github.com/Palaestine/random_pass.git" },
    { id: 12, title: "Wethear   ", imgPath:`${img19}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/Weather/", gitHub: "https://github.com/Palaestine/Weather.git" },
    { id: 13, title: "To Do List", imgPath:`${img20}`, category: ["js"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://palaestine.github.io/toDoList/", gitHub: "https://github.com/Palaestine/toDoList.git" },









    
    { id: 40, title: "Crud Operations", imgPath:`${img1}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://mhmd-ataa.github.io/Crud/", gitHub: "https://github.com/Mhmd-Ataa/Crud.git" },
    { id: 41, title: "Serach Movies", imgPath:`${img8}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://mhmd-ataa.github.io/Movies/", gitHub: "https://github.com/Mhmd-Ataa/Movies.git" },
    { id: 42, title: "AdvancedFilter", imgPath:`${img4}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://mhmd-ataa.github.io/AdvancedFilter/", gitHub: "https://github.com/Mhmd-Ataa/AdvancedFilter.git" },
    { id: 43, title: "Features", imgPath:`${img6}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://mhmd-ataa.github.io/featuressss/", gitHub: "https://github.com/Mhmd-Ataa/featuressss.git" },
    { id: 44, title: "Portofolio", imgPath:`${img5}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://mhmd-ataa.github.io/Portofoliooo/", gitHub: "https://github.com/Mhmd-Ataa/Portofoliooo.git" },
    { id: 45, title: "E-commerece", imgPath:`${img9}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https://ahmedhassan1920.github.io/React-E-commerce/", gitHub: "https://github.com/Palaestine/Ecommereceeee.git" },
    { id: 46, title: "Edusity", imgPath:`${img10}`, category: ["react"], about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quisquam quia laboriosam consectetur dolores voluptatum.", link: "https:https://mhmd-ataa.github.io/Edusity/", gitHub: "https://github.com/Mhmd-Ataa/Edusity.git" },


]
const Main = () => {

    const [active, setActive] = useState("all");
    const [array, setArray] = useState(Projects);

    function filterArray(projectCategory) {

        setActive(projectCategory);

        let newArr = Projects.filter((item) => {
            let smallArr = item.category.filter((myItem) => { return myItem === projectCategory })
            return smallArr[0] === projectCategory
        });
        setArray(newArr)
    }


    return <>
        <section className="main my-4 px-5">
            <div className="row roww">
                <div className="col-md-3  ">
                    <ul className="p-0 ">
                        <li onClick={() => { setActive("all"); setArray(Projects) }} className={`my-3 p-3 text-center ${active === "all" ? "active" : "null"}`}>
                            All Projects
                        </li>
                        <li onClick={() => { filterArray("js") }} className={`my-3 p-3 text-center ${active === "js" ? "active" : "null"}`}>
                            Java Script
                        </li>

                        <li onClick={() => { filterArray("react") }} className={`my-3 p-3 text-center ${active === "react" ? "active" : "null"}`}>
                            React
                        </li>

                        <li onClick={() => { filterArray("mui") }} className={`my-3 p-3 text-center ${active === "mui" ? "active" : "null"}`}>
                            Material UI 
                        </li>
                    </ul>
                </div>
                <div className="col-md-8  ">
                    <div className="row ">

                        <AnimatePresence>

                            {array.map((item, index) => (
                                <motion.div
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ type: "spring", damping: 10, stiffness: 50 }}
                                    className="col-xl-4 col-md-6 col-sm-6  p-0" key={index}>
                                    <div className="carrd m-2 ">
                                        <img src={item.imgPath} alt="" className="w-100" />
                                        <div className="info p-2">
                                            <h4>{item.title} </h4>
                                            {/* <p>{item.about}</p> */}
                                            <div className="icons d-flex align-items-center justify-content-between">
                                                <div className="links1 d-flex align-items-center gap-3">
                                                    <a href={item.link}><i className="fa-solid fa-link"></i></a>
                                                    <a href={item.gitHub}><i className="fab fa-github"></i></a>
                                                </div>
                                                {/* <a href="" className="  d-flex align-items-center ">
                                                    More <i className="fa-solid fa-arrow-right mt-1 ms-1"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            ))}

                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </section>
    </>
}


export default Main;
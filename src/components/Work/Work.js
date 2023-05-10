
import React from 'react'
import { Link } from "react-router-dom";
import  OmniFood  from "../../sources/projects/OmniFood.JPG";

const Work = () => {
  return (
    <section id="work">
      <h2>
        <ul class="meal-showcase clearfix">
          <li>
            <Link
              to="https://spandana888.github.io/OmniFood/"
              class="work-photo"
            >
              <img src={OmniFood} alt="Omni Food Project" />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img
                src="resources/images/2.jpg"
                alt="Simple italian pizza with cherry tomatoes"
              />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img
                src="resources/images/3.jpg"
                alt="Chicken breast steak with vegetables "
              />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img src="resources/images/4.jpg" alt="Autumn pumpkin soup" />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img
                src="resources/images/5.jpg"
                alt="Paleo beef steak with vegetables"
              />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img
                src="resources/images/6.jpg"
                alt="Healthy baguette with egg and vegetables"
              />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img
                src="resources/images/7.jpg"
                alt="Burger with cheddar and bacon"
              />
            </Link>
          </li>
          <li>
            <Link to="" class="work-photo">
              <img
                src="resources/images/8.jpg"
                alt="Granola with cherries and strawberries"
              />
            </Link>
          </li>
        </ul>
      </h2>
    </section>
  );
}

export default Work
import React from 'react'
import AboutCard from './AboutCard'
import ContactPage from './ContactPage'
import netflixImage from '../../ImageFolder/Images/netflix.jpg'
import cookpadImage from '../../ImageFolder/Images/cookpad-app.jpg'
import dropTheName from '../../ImageFolder/Images/drop-the-name-app.jpg'
import pokehubImage from '../../ImageFolder/Images/pokehub.jpg';
import portfolioImage from '../../ImageFolder/Images/portfolio.jpg';
import typelabImage from '../../ImageFolder/Images/typelab.jpg'

function About() {
  return (
    <section style={{ backgroundColor: "#283618", color:"#fb8500" }}>
      <div className='container' >
        <ContactPage />
        <div style={{ display: 'flex', flexDirection: 'row' }} >

          <AboutCard
            image={netflixImage}
            title="Netflix Clone"
            description="The clone of Netflix application. It contains basic layout of Netflix made of React Js and contains 
            external API from TMDB movies."
            link="https://arjunraveendran1997.github.io/Netflix/" />

          <AboutCard
            image={cookpadImage}
            title="Cookpad App"
            description="The app which made with React JS, have food order system."
            link="https://arjunraveendran1997.github.io/CookpadApp/" />

          <AboutCard
            image={dropTheName}
            title="Drop The Name App"
            description="It is web application that helps us to find a name from a single keyword. It contains more than
            500 suggestedHtml names. The project is made using React Js."
            link="https://arjunraveendran1997.github.io/dropthenameapp/" />

          <AboutCard
            image={pokehubImage}
            title="Pokehub App"
            description="This is a simple web application about Pokemon characters, which contains a lot of animations."
            link="https://arjunraveendran1997.github.io/Pokehub/" />

          <AboutCard
            image={portfolioImage}
            title="Portfolio"
            description="This project contains my personal information and skills."
            link="https://arjunraveendran1997.github.io/Myportfolio/" />

          <AboutCard
            image={typelabImage}
            title="TypeLab App"
            description="This web application helps to understand your typing speed and you can improve it."
            link="https://arjunraveendran1997.github.io/typelabapp/" />
        </div>
      </div>
    </section>
  )
}

export default About
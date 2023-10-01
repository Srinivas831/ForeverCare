import { List, ListIcon, ListItem } from "@chakra-ui/layout"
import styled from "styled-components";
import { MdCheckCircle } from 'react-icons/md';

export const About = ()=>{
   
   
    return (
        <DIV>
            <h1>About Us</h1>
            <div className="about">
            
                <div className="abouttxt">
                
                <p>Welcome to Forever Care, where compassionate care meets advanced medical expertise. At Forever Care, we are committed to providing exceptional healthcare services that prioritize your well-being and comfort. Our mission is to deliver accessible, compassionate, and high-quality healthcare to our community, placing your health at the forefront of everything we do.</p>
                </div>
            <div className="aboutimg">
                <img src="https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment1.jpg" alt="" />
            </div>
            </div>
<hr />
        <div className="mission">
            <h1>Our Misson & Visson</h1>
            <p>"To provide accessible, compassionate, and high-quality healthcare, meeting diverse needs and promoting well-being through innovation and excellence." <br />
            "To be a beacon of healthcare excellence, advancing innovations, and fostering a culture of wellness for a healthier community. These condensed statements capture the essence of the hospital's mission and vision, conveying the commitment to quality care, innovation, and community well-being in a succinct manner. Feel free to tailor them to suit your hospital's unique values and goals.</p>
            <img src="https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment2.jpg" alt="" />
            </div>
<hr />
            <div className="facilities">
                <h1>Facilities and Technology</h1>
                <p>At Forever Care, we prioritize delivering healthcare in a state-of-the-art environment, equipped with the latest advancements in medical technology and a range of specialized facilities. Our commitment to providing exceptional patient care is reflected in our modern infrastructure and investment in cutting-edge medical equipment.</p>
               
                <List spacing={3} >
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Advanced Medical Equipment
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Comfortable Patient Rooms
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Specialized Departments
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Modern Surgical Suites
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Emergency Care
            </ListItem>
          
            </List>
            <img src="https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment3.jpg" alt="" />
            </div>
        </DIV>
    )
}

const DIV= styled.div`

     margin-top: 80px;
     align-items: center;
     font-family: 'Poppins', sans-serif;
 
    h1{
        font-size: 30px;
        font-weight: bold;
        margin-top: 30px;
        text-align: center
        
    }
    p {
        margin-top: 10px;
        font-size: 20px;
        justify-content: center;
        padding: 5%;
    }

    .about{
        display: flex;
        width: 90%;
        margin: auto;
        padding: 2%;
        gap: 3%;
        flex-direction: row;
        @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
       
    }
    .abouttxt{
         
         width: 70%;   
         text-justify: ce
     }
     .abouttxt p{
         margin-top: 10px;
         font-size: 20px;
     }
     .aboutimg{
         margin-top: 70px;
         width: 90%;
         margin: auto;
         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     }

     .mission{
        padding: 2%;
     }
   .mission img{
        width: 85%;
        padding: 3%;
       margin: auto;
       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    
.facilities{
    text-align: center;
    padding: 2%;
}
.facilities img{
    width: 80%;
    margin: auto;
    padding: 2%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
   
`
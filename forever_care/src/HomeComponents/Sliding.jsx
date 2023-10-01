import React from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';


// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Sliding() {
  
  const [slider, setSlider] = React.useState (null);

  //  images used in the slide
  const cards = [
    'https://www.lek.com/sites/default/files/hero-images/insights/latam-digital-healthcare_hero.jpg',
    'https://cdn.expresshealthcare.in/wp-content/uploads/2020/01/22122412/Doctors-consultation.jpg',
    'https://www.baby-chick.com/wp-content/uploads/2021/06/She-makes-sure-that-I-have-the-healthiest-pregnancy-possible-1171061920_2122x1416-1024x683.jpeg',
    'https://blog.dentalchat.com/server/images/cms/Free-Dentist-Consult-Online.jpg',
    'https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/mental-health-wellness/adult/images/outpatient_consult_130531736.jpg'
  ];

  return (
    <Box
      position={'relative'}
      height={'800px'}
      width={'full'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box
             position="absolute"
           />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />

        ))}
      </Slider>
    </Box>
  );
}
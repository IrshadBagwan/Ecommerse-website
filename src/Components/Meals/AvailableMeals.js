import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import { Row,Container,Col } from "react-bootstrap";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 20,
//   },
//   {
//     id: "m2",
//     name: "Vadapav",
//     description: "Finest fish and veggies",
//     price: 15,
//   },
//   {
//     id: "m3",
//     name: "pavbhaji",
//     description: "Finest fish and veggies",
//     price: 12,
//   },
//   {
//     id: "m3",
//     name: "pavbhaji",
//     description: "Finest fish and veggies",
//     price: 12,
//   },
//   {
//     id: "m3",
//     name: "pavbhaji",
//     description: "Finest fish and veggies",
//     price: 12,
//   },
//   {
//     id: "m3",
//     name: "pavbhaji",
//     description: "Finest fish and veggies",
//     price: 12,
//   },
// ];

const productsArr = [

  {
  
  title: 'Colors',

  id:'m1',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',

  id:'m2',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',

  id:'m3',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',

  id:'m4',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ];
const AvailableMeals = () => {
  const mealsList = productsArr.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.title}
      image={meal.imageUrl}
      price={meal.price}
      id={meal.id}
      
    />
  ));
  return (
    
        
      <section className={classes.meals} >
       
        <Container style={{margin:'30px'}}>
         
          <Row>{mealsList}</Row>
          
          
          
            
            
            
        
        </Container>
        
   
   
      
      
 </section>
  
    
    
  );
};

export default AvailableMeals;

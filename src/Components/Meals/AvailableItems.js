import Card from "../UI/Card";
import classes from "./AvailableItems.module.css";
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

 export const productsArr = [

  {
  
  title: 'Colors',

  id:'1',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',

  id:'2',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',

  id:'3',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',

  id:'4',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ];
const AvailableItems = () => {
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

export default AvailableItems;

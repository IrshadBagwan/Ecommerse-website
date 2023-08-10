
import classes from "./AvailableItems.module.css";
import StoreItems from "./StoreItems";
import { Row,Container,Col } from "react-bootstrap";

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
  
  },

  {
  
    title: 'Blue Color',
  
    id:'5',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    },

    {
  
      title: 'Blue Color',
    
      id:'6',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      
      },

     
  
  ];
const AvailableItems = () => {
  const mealsList = productsArr.map((meal) => (
    <StoreItems
      key={meal.id}
      name={meal.title}
      image={meal.imageUrl}
      price={meal.price}
      id={meal.id}
      
    />
  ));
  return (
    
        
      <section className={classes.meals} >
       
        <Container style={{margin:'50px'}} className="mycontainer">
         
          <Row>{mealsList}</Row>
          
          
          
            
            
            
        
        </Container>
        
   
   
      
      
 </section>
  
    
    
  );
};

export default AvailableItems;

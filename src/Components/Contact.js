import '../Components/Contact.css';

const Contact = () =>{
    return(
        <section id="contact" class="contact">
        <div class="main-text scroll-scale">
          
          <h2>Contact Us</h2>
        </div>
    
        <form action="#" class="scroll-bottom control">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <input type="text" placeholder="Your Address"/>
          <input type="number" placeholder="Your PhoneNumber"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <div class="btn-box formBtn">
            <button type="submit" class="btn">Send Message</button>
          </div>
          
    
        </form>
       </section>
    );
}

export default Contact;
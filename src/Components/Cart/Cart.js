import React from "react";

import {Card,Row,Col,Container, Table} from 'react-bootstrap';
// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCol,
//     MDBContainer,
//     MDBIcon,
//     MDBInput,
//     MDBRow,
//     MDBTypography,
//     } from "mdb-react-ui-kit";
//     import {detectOverflow} from '@popperjs/core';
    

function Cart(props) {

    const cartElements = [
        {
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,
        },

        {
            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,
        },

        {
            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,
        }
    ];

    return (<>

        {/* <Container className="mt-3">
          <Row md={3}>
              {cartElements.map((e)=>{
                  return (
                      <Col sm={4}>
                          <div className="holder" style={{margin:'10px'}}>
                  <Card>
                  <Card.Img src={e.imageUrl} alt="hel"></Card.Img>
                  <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                  <p>{e.price}</p>
                  </Card.Body>
                  </Card>
                  </div>
                  </Col>)
              })}
              </Row>
              </Container> */}





        {/* <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <MDBTypography tag="h5">
                                            <a href="#!" className="text-body">
                                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                                                shopping
                                            </a>
                                        </MDBTypography>

                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have 4 items in your cart</p>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="text-muted">Sort by:</span>
                                                    <a href="#!" className="text-body">
                                                        price
                                                        <MDBIcon fas icon="angle-down mt-1" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                       
                                      
                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Iphone 11 pro
                                                            </MDBTypography>
                                                            <p className="small mb-0">256GB, Navy Blue</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                2
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                $900
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>

                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Samsung galaxy Note 10
                                                            </MDBTypography>
                                                            <p className="small mb-0">256GB, Navy Blue</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                2
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                $900
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>

                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Canon EOS M50
                                                            </MDBTypography>
                                                            <p className="small mb-0">Onyx Black</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                1
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                $1199
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>

                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                MacBook Pro
                                                            </MDBTypography>
                                                            <p className="small mb-0">1TB, Graphite</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                1
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                $1799
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                       
                                    </MDBCol>

                                    <MDBCol lg="5">
                                        <MDBCard className="bg-primary text-white rounded-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Card details
                                                    </MDBTypography>
                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                </div>

                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-visa fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-amex fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                                                </a>

                                                <form className="mt-4">
                                                    <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                                                        placeholder="Cardholder's Name" contrast />

                                                    <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                    <MDBRow className="mb-4">
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                        </MDBCol>
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>

                                                <hr />

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">$4798.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">$20.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">$4818.00</p>
                                                </div>

                                                <MDBBtn color="info" block size="lg">
                                                    <div className="d-flex justify-content-between">
                                                        <span>$4818.00</span>
                                                        <span>
                                                            Checkout{" "}
                                                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                                        </span>
                                                    </div>
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section> */}

        <Container>
            <Card>
                <Card.Header style={{justifyContent:'center'}}>Cart</Card.Header>
                <div>
                <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </tr>
            </thead>
            <tbody>
                
                    {cartElements.map((e)=>{
                    return(
                        <>
                    <tr>
                        <td><img src={e.imageUrl}></img></td>
                        <td><p>{e.price}</p></td>
                        <td><h1>{e.title}</h1></td>
</tr>
                        </>
                    )
                    })}
                      
            </tbody>
            </table>
                </div>
            </Card>
        </Container>


    </>

    );
}

export default Cart;
import React from 'react';
import ReactDom from 'react-dom/client';
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {

    // const styleObj = { color: 'red', fontSize: '30px', textTransform: 'uppercase' }
    const styleObj = {}

    return (
        <header className='header'>
            <h1 style={styleObj} >Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            {
                numPizzas > 0 ?

                    <React.Fragment key={"1234"}>
                        <p>
                            Menu Special: Bread with italian olive oil and rosemary &
                            Tomato, mozarella, ham, aragula, and burrata cheese
                        </p>

                        <ul className='pizzas'>
                            {pizzaData.map((pizza) =>
                            (<Pizza
                                pizzaObj={pizza} />)
                            )}
                        </ul>
                    </React.Fragment>
                    : <p>
                        We're still working on our menu. Please come back later.
                    </p>
            }


            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/margherita.jpg"
                price="100" />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                photoName="pizzas/funghi.jpg"
                price="120" /> */}


            {/* directly */}
            {/* 
            <div>
                {pizzaData.map((pizza) =>
                (<Pizza
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    photoName={pizza.photoName}
                    price={pizza.price} />)
                )}
            </div> 
            
            
            numPizzas > 0 &&
                <ul className='pizzas'>
                    {pizzaData.map((pizza) =>
                    (<Pizza
                        pizzaObj={pizza} />)
                    )}
                </ul>
            */
            }

        </main>

    );
}

function Pizza({ pizzaObj }) {
    console.log(pizzaObj);

    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}
            </div>
        </li>);
}


function Footer() {
    const hour = new Date().getHours();
    console.log(hour);

    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    /* if (!isOpen) {
        return (
            <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>
        );
    } */

    /* if (isOpen) {
        alert("we're currently open!!");
    } else {
        alert("we're currently close!!");
    } */

    return <footer>
        {
            isOpen ?
                <Order closeHour={closeHour} openHour={openHour} />
                : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>
        }
    </footer>;
}


function Order({ closeHour, openHour }) {

    return (<div className='order'>
        <p>We're open form {openHour}:00 to {closeHour}:00. come visit us or order online.</p>
        <button className='btn'>Order</button>
    </div>);
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

// React before 18 - old version
// React.render(<App />,document.getElementById("root"));
import { useState } from 'react';
import './App.css';
import Cart from './Cart';
import prods from './MyData';

function App() {
    const [myProds, setmyProds] = useState([])
    const [price, setprice] = useState(0)
    const [desc, setdesc] = useState("")
    const [myCart, setmyCart] = useState([])
    const SERVER ="http://localhost:3004/prods"
    const addProd = (ind) => {
        console.log(ind)
        setmyCart([...myCart, myProds[ind]])
    }
    const delProd = (i) => {
        console.log(i)
    }
    const getDataFromServer = async () => {
        setmyProds(await fetch(SERVER).
            then(response => response.json()))
    }


    const addData2Server = () => {
        const data =  {
            "desc":desc,
            "price":price
        };
        console.log( JSON.stringify(data))
        fetch(SERVER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div >
            <button onClick={() => getDataFromServer()}>Get data</button>
            <button onClick={() => addData2Server()}>add data</button>
            Desc:<input value={desc} onChange={(e) => setdesc(e.target.value)} />
            Price:<input value={price} onChange={(e) => setprice(e.target.value)} /> 
            <Cart cartLst={myCart} delc={delProd} style={{ display: "inline" }}></Cart>
            <hr></hr>
            <div style={{ display: "inline" }}>
                {myProds.map((item, ind) =>
                    <div key={ind}> {item.desc}{" "}{item.price}
                        <button onClick={() => addProd(ind)}>Buy</button>
                    </div>)}
            </div>
            <hr></hr>

        </div>
    );
}



{/* <button onClick={() => addProd()}>Add</button> */ }
{/* Desc:<input value={desc} onChange={(e) => setdesc(e.target.value)} />
                    Price:<input value={price} onChange={(e) => setprice(e.target.value)} /> */}
export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
function App() {
    const [posts, setPosts] = useState([]);
    const [color, setColor] = useState('#ffff53');
    const fetchPost = (() => {
        const RodomColor = "#" + Math.floor(Math.random() * 16777215).toString();
        setColor(RodomColor)
        axios.get("https://api.quotable.io/random")
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    })
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-light " href="#">Rondom</a>
                </div>
            </nav >
            <div className="container">
                <div className="row">
                    <p className="col-sm-3"></p>
                    <div className="col-sm-6">
                        <div class="card text-center card1" style={{ backgroundColor: `${color}` }}>
                            <div class="card-body ">
                                <p>🥰 🤩</p>
                                <p className="content">{posts.content}</p>
                                <hr className="hr"></hr>
                                <p className="heading">Frederick Douglass</p>
                                <div className="container-fluid">
                                    <div className="row">
                                        <img src="tweter.png" className="tweter col-sm-3"></img>
                                        <div className="text-center col-sm-9">
                                            <Button variant="contained" className="Button text-light" onClick={fetchPost}>new_quote</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default App;














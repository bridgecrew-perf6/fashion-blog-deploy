import { useState } from "react";
import Article from "./components/Article";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";


export default function App(){

    return (
        <div className="App">
            <Header />
            <Article />
            <Footer />
            <Nav />
        </div>
    )
} 
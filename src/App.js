import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroGrid from "./components/HeroGrid";
import "./index.css";
import Sidebar from "./components/Sidebar";
import NoticeBoard from "./components/NoticeBoard";
import Bottom from "./components/Bottom";

// Function to fetch JSON data with error handling
const fetchData = async () => {
    try {
        const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
};

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchData();
            setData(fetchedData);
        };
        getData();
    }, []);

    return (
        <Router>
            <Header />
            <div className="flex">
                <Sidebar>
                    <Routes>
                        <Route path="/" />
                        <Route path="/dashboard" />
                        <Route path="/about" />
                        <Route path="/comment" />
                        <Route path="/analytics" />
                        <Route path="/product" />
                        <Route path="/productList" />
                    </Routes>
                </Sidebar>
                <div className="flex-1 ml-32"> {/* Adjust the margin-left to make space for the sidebar */}
                    <Hero />
                    <NoticeBoard data={data} /> {/* Pass data to NoticeBoard component */}
                    <HeroGrid />
                </div>
            </div>
            <Bottom />
        </Router>
    );
};

export default App;

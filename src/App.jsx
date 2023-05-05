import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/Navbar/NavBar";
import Search from "./components/SearchCountry/Search";

const App = () => {
	return (
		<div className="px-5 lg:px-36 md:px-20">
			<NavBar />
			<Outlet />
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default App;

// "use server"
"use client";
// import { BackgroundGrid } from './components/grid'
import './App.css'
import Navigation from "./components/nav"
import Hero from './components/hero'
import Features from './components/features'
import Docs from './components/docs'

export default function App() {
	return (
		<>
			<main className="w-full m-auto h-fit pt-20 overflow-hidden bg-white dark:bg-black text-black dark:text-white">
				<Navigation />
				<div className='m-auto w-full h-full flex flex-col items-center justify-center text-center'>
					<Hero />
				</div>
				<Features />
				<Docs />
			</main>
		</>
	)
}

/**
 * 
 * 1 - Install blazze
 * 2 - blazze-init
 * 3 - Create your API routes in the root-endpoint directory
 * 4 - Each route can have 5 http method files viz: GET, POST, PUT, PATCH, DELETE
 * 5 - Each files handles specific API request methods
 * 6 - You need to export a default normal function from each file
 * 7 - These functions get Express Request and Response objects as parameters
 * 8 - ex: ....
 * 9 - For nested routes use "@" symbol ex: new/subs/ppl will be -> new@subs@ppl which will have its respective logic
 * 10 - This is to avoid deep recursive file watching and being more performent for the system
 * 11 - Dynamic routes start with a underscore "_" ex: api/v1/_users 
 * 12 - That's it you are ready to blazze ...
 * 
 */
//import { Link } from "gatsby"
import React from "react"




function Footer() {
  return (
    <footer className="bg-black text-white py-[10px] text-center">
        <div className="container mx-auto">
            <p className="text-xs">Copyright &copy; {new Date().getFullYear()} | <a href="/">jabercrombia</a></p>  
        </div>
    </footer>
  )
}


export default Footer

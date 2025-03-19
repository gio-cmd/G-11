import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h2>My Portfolio</h2>
            <div>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/projects" style={styles.link}>Projects</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
                <Link to="/blog" style={styles.link}>Blog</Link>
            </div>
        </nav>
    );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "15px", background: "#333", color: "#fff" },
  link: { margin: "0 10px", color: "#fff", textDecoration: "none" }
};

export default Navbar;

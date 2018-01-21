import React from 'react';

const Footer = (props) => (
    <footer style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        textAlign: "center",
    }}>
        <div>
            Paid for by <b>Joseph Sinfield</b>
        </div>
        <a href="https://github.com/js-jslog">
            <img height="24" src="/images/GitHub-Mark-Light-32px.png" style={{margin: "5px"}} />
        </a>
    </footer>
);

export default Footer;

import React from "react";

const today = new Date();

function Header() {
    return (
        <footer>
            <p>All rights reserved to Lifshitz Productions © {today.getFullYear()}</p>
        </footer>
    );
}

export default Header;

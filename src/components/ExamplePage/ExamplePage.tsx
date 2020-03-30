import React from "react";
import { Link } from "react-router-dom";

const ExamplePage: React.FC = () => {
    return (
        <section>
            <Link to = "/Login/" className="href">
                <div className="general_title">Hi</div>
            </Link>
            <h1>dfbsbfb</h1>
        </section>
    )
}

export default ExamplePage
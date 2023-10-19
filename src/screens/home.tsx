import * as React from "react";
import { Helmet } from "react-helmet";

export default function Home(): React.JSX.Element {
    return (
        <>
            <Helmet>
                <title>Trang chu ne con</title>
            </Helmet>
            <p>Home</p>
        </>
    );
}

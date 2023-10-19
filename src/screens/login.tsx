import * as React from "react";
import { Helmet } from "react-helmet";
export default function Login(): React.JSX.Element {
    return (
        <>
            <Helmet>
                <title>Đăng nhập CodePTIT</title>
            </Helmet>
            <div className="w-screen h-screen bg-white"></div>
        </>
    );
}

import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const err = useRouteError();

    console.log(err);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-700">
            <h1 className="text-9xl">404 OOPS!!!</h1>
            <h2 className="text-2xl">Something went wrong!!</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    );
};

export default NotFound;
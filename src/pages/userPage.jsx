import { useParams } from "react-router-dom"
import useFetch from "../data/useFetch";


const UserPage = () => {
    const { id } = useParams();
    const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    return (
        <div className="container mt-4">
            <h1 className="display-4">{user?.name}</h1>
            <div className="row">
                <div className="col-md-6">
                    <h5>Email</h5>
                    <p>{user?.email}</p>
                </div>
                <div className="col-md-6">
                    <h5>Phone</h5>
                    <p>{user?.phone}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>Website</h5>
                    <p><a href={`http://${user?.website}`} target="_blank" rel="noopener noreferrer">{user?.website}</a></p>
                </div>
                <div className="col-md-6">
                    <h5>Username</h5>
                    <p>{user?.username}</p>
                </div>
            </div>
            <div className="mt-4">
                <h4>Address</h4>
                <p>{user?.address?.suite}, {user?.address?.street}, {user?.address?.city}, {user?.address?.zipcode}</p>
                <p><strong>Geo:</strong> {user?.address?.geo?.lat}, {user?.address?.geo?.lng}</p>
            </div>
            <div className="mt-4">
                <h4>Company</h4>
                <p><strong>{user?.company?.name}</strong></p>
                <p>{user?.company?.catchPhrase}</p>
                <p>{user?.company?.bs}</p>
            </div>
        </div>
    );
};

export default UserPage;

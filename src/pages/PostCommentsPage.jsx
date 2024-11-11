import { useParams } from "react-router-dom";
import useFetch from "../data/useFetch";

const PostCommentsPage=()=>{
    const {id}=useParams()
        // Using the useFetch hook to fetch comments for the given postId
        const [data] = useFetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);

        
        
        // Display the comments
        return (
            <div className="container mt-4">
                <h2 className="mb-4">Comments for Post {id}</h2>
                <ul className="list-group">
                    {data.map(comment => (
                        <li key={comment.id} className="list-group-item">
                            <h5 className="mb-1">{comment.name}</h5>
                            <small className="text-muted">{comment.email}</small>
                            <p className="mt-2">{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
};

export default PostCommentsPage;
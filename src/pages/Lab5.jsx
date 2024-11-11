import useFetch from "../data/useFetch";
import Dropdown from 'react-bootstrap/Dropdown';
import TableDataReducer from "../components/TableDataReducer";
import { useState, useEffect,useReducer } from "react";
import TButton from "../components/TButton"; 
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

const Lab5 = () => {
    

    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    const initData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    }));
    

    const [sortedData,dispatch]=useReducer(TableDataReducer,initData);

    useEffect(() => {
        
        dispatch({type:"RESET", payload:initData})
    }, [posts, users, comments]); // Dependencies to avoid re-render loop
    
    const handleSort=(order,column)=>{
        if(order==="asc"){
            dispatch({type:"ASC_SORT",column})
        }else if(order==="dsc"){
            dispatch({type:"DSC_SORT",column})
        }else if(order==="natural"){
            dispatch({type:"RESET", payload:initData})
        }
    }
    return (
        <>
            <table className="table table-bordered">
                <thead className="thead">
                    <tr>
                        <th>
                            <TButton handleSort={handleSort} part="User"/>
                        </th>
                        <th>
                        <TButton handleSort={handleSort} part="Post Title"/>
                        </th>
                        <th>
                        <TButton handleSort={handleSort} part="Comments Count"/>
                        </th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {sortedData.map((row, index) => (
                        <tr key={index}>
                            <td><Link className="btn" to={`/Lab5/users/${row.user?.id}`}>
                            {row.user?.name}
                            </Link></td>
                            <td><Accordion title={row.post.title} content={row.post.body}></Accordion></td>
                            <td><Link className="btn btn-primary" to={`/Lab5/posts/${row.post.id}/comments`}>
                            {row.comments.length}
                            </Link></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Lab5;
import { useEffect } from "react";
import { getUserRequest } from "../api/services/Users";

export default function Home() {

    const list = [] 

    useEffect(() => {
      getUserRequest().then((response) => {
        console.log(response)
      })
    }, [])

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Home</h2>
        <h4>{process.env.REACT_APP_TESTE}</h4>
        <h4>{process.env.NODE_ENV}</h4>
        
      </main>
    );
  }
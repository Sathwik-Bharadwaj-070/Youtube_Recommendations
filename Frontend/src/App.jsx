import { useState } from "react";
import axios from "axios";
import "./App.css";

function App(){
    const[text,setText]=useState("Sanjeeth Hegde");
    const[video,setVideo]=useState([]);

    const getVideo=async()=>{
    const res=await axios.post("http://localhost:5001/mood",
    {text:text});
    setVideo(res.data);
    };
    return(
        <div className="app">
            <h1>Mood based video Recommender</h1>
            <input placeholder="How is your Mood Today"
            onChange={(e)=>setText(e.target.value)} />
            <button onClick={getVideo}>Predict</button>
            <div className="video">
                {video.map(v=>(
                    <iframe width="1521" 
                    key={v.id.videoId}
                    height="566"
                    src ={`https://www.youtube.com/embed/${v.id.videoId}`}
                    title="video"
                    />
                ))}

            </div>


        </div> 
            
    )
      
        }
        export default App;
    

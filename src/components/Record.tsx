import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { BiVideoRecording } from 'react-icons/bi';
import { AiOutlineStop } from 'react-icons/ai';


const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <>
      <p>{status}</p>
      <video 
        style={{width:'40rem',height:'25rem'}} 
        src={mediaBlobUrl} controls  
        />
       <div>
        <button 
            onClick={startRecording}
            style={{fontSize: 30, color: 'green'}}
            title="Start Recording"
        >
            <BiVideoRecording />
        </button>
        <button 
            style={{marginLeft:'1rem',fontSize: 30, color: 'red'}} 
            onClick={stopRecording}
            title="Stop Recording"
        >
            <AiOutlineStop />
        </button>
      </div>
    </>
  );
};

export default RecordView;
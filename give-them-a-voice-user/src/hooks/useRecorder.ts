import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioUrl, setaudioUrl] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    // if (recorder === null) {
    //   if (isRecording) {
    //     requestRecorder().then(setRecorder, console.error);
    //   }
    //   return;
    // }

    // // Manage recorder state.
    // if (isRecording) {
    //   recorder.start();
    // } else {
    //   recorder.stop();
    // }

    // // Obtain the audio when ready.
    // const handleData = e => {
    //   setaudioUrl(URL.createObjectURL(e.data));
    // };

    // recorder.addEventListener("dataavailable", handleData);
    // return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setaudioUrl('https://firebasestorage.googleapis.com/v0/b/give-them-a-voice.appspot.com/o/demo-message.wav?alt=media&token=7743a09c-7392-4efc-be8e-f0efdb697e5f');
  };

  return [audioUrl, isRecording, startRecording, stopRecording];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}

export default useRecorder;

import { useRef, forwardRef, useImperativeHandle } from "react";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
}

interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, autoPlay = false }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
      play: () => videoRef.current?.play(),
      pause: () => videoRef.current?.pause(),
      setVolume: (volume: number) => {
        if (videoRef.current) {
          videoRef.current.volume = volume;
        }
      },
    }));

    return <video ref={videoRef} src={src} autoPlay={autoPlay} controls />;
  }
);

function App() {
  const playerRef = useRef<VideoPlayerRef>(null);

  const handlePlay = () => {
    console.log(playerRef);
    playerRef.current?.play();
    playerRef.current?.setVolume(0.5);
  };

  return (
    <div>
      <VideoPlayer ref={playerRef} src="/Am I Wrong - Nico .mp4" />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

interface VideoData {
  id: number;
  url: string;
  image: string;
  width: number;
  height: number;
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const VideoText = styled(Typography)`
  color: white;
  font-size: 48px;
  font-weight: bold;
  opacity: 0.7;
  animation: moveText 10s linear infinite;
  @keyframes moveText {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Video: React.FC = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const apiKey = 'pTUp7QEDZxWbWoOD92YO5YwU8NdDtZ4wscIINIq0CasMhqJqggYY37UB';
  const videoId = 13193796;

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://api.pexels.com/videos/videos/${videoId}`, {
          headers: {
            Authorization: apiKey,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setVideoData({
            id: data.id,
            url: data.video_files[0].link,
            image: data.image,
            width: data.width,
            height: data.height,
          });
        } else {
          console.error('Failed to fetch video');
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <VideoContainer>
      <video autoPlay loop muted playsInline width={videoData.width} height={videoData.height} style={{ objectFit: 'cover' }}>
        <source src={videoData.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <VideoOverlay>
        <VideoText variant="h2">Hello World!</VideoText>
      </VideoOverlay>
    </VideoContainer>
  );
};

export default Video;

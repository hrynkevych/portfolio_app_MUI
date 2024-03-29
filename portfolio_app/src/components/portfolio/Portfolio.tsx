import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Paper, Typography } from '@material-ui/core';

interface Project {
  name: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    name: 'Phone Store React Application',
    description: 'The App serves as an engaging and informative online platform for the store, showcasing various headphone models, electronic devices, and accessories, along with their unique features.',
    demoUrl: 'https://hrynkevych.github.io/react_phone_app/',
    githubUrl: 'https://github.com/hrynkevych/react_phone_app'
  },
  {
    name: 'E-commerce store landing page',
    description: 'An engaging E-Commerce landing page for a headphones store, implementing the BEM methodology for structured CSS classes. The project showcases proficiency in HTML and CSS (SCSS).',
    demoUrl: 'https://hrynkevych.github.io/layout_miami/',
    githubUrl: 'https://github.com/hrynkevych/headphones'
  },
  {
    name: 'Cosmetics brand landing page',
    description: 'A landing page for a cosmetics brand. The project is built on HTML and CSS (SCSS) with BEM methodology.',
    demoUrl: 'https://hrynkevych.github.io/Eco_cosmetics/',
    githubUrl: 'https://github.com/hrynkevych/eco_cosm'
  },
  {
    name: 'Interactive to-do notes application in React',
    description: 'An interactive notes application, offering an intuitive platform for task management. Technologies utilized include React, TypeScript (TSX), CSS (SCSS) for styling, and state management using React Context. In addition, the project implemented a client for interaction with a backend API.',
    demoUrl: 'https://hrynkevych.github.io/react_todo-app-with-api/',
    githubUrl: 'https://github.com/hrynkevych/react_todo_app'
  },
  {
    name: '2048 game in JavaScript',
    description: 'Web-based implementation of the 2048 popular game, serving as a testament to expertise in JavaScript (working with 2D arrays, interacting with a DOM tree).',
    demoUrl: 'https://hrynkevych.github.io/js_2048_game/',
    githubUrl: 'https://github.com/hrynkevych/2048_js_game'
  }
];

const PortfolioContainer = styled.div`
  padding: 20px;
`;

const ProjectCard = styled(Paper)`
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Portfolio: React.FC = () => {
  const [liveImages, setLiveImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchLiveImages = async () => {
      try {
        const imageRequests = projects.map(project =>
          axios.get(`https://api.microlink.io?url=${project.demoUrl}&screenshot=true`)
        );
        const responses = await Promise.all(imageRequests);
        const imageUrls = responses.reduce((acc, response, index) => {
          const projectDemoUrl = projects[index].demoUrl as string;
          acc[projectDemoUrl] = response.data.data.screenshot.url;
          return acc;
        }, {} as { [key: string]: string });
        setLiveImages(imageUrls);
      } catch (error) {
        console.error('Error fetching live images:', error);
      }
    };

    fetchLiveImages();
  }, []);

  return (
    <PortfolioContainer>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard elevation={3}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ProjectImage src={liveImages[project.demoUrl]} alt={project.name} />
              </a>
              <Typography variant="h5" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {project.description}
              </Typography>
              <Typography variant="body2" color="primary" gutterBottom>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a> | 
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </Typography>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </PortfolioContainer>
  );
};

export default Portfolio;

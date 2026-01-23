import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and inventory management.",
    image: "/projects/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/projects/project2.jpg",
    tags: ["React Native", "TypeScript", "Firebase"],
    link: "#"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Analytics dashboard with machine learning insights and data visualization.",
    image: "/projects/project3.jpg",
    tags: ["Python", "TensorFlow", "D3.js"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Community-driven platform with real-time messaging and content sharing.",
    image: "/projects/project4.jpg",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    link: "#"
  }
];

const PreviousWork: React.FC = () => {
  return (
    <section id="previous-work" className="previous-work">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Previous Work</h2>
          <p className="section-subtitle">
            Explore some of the projects I've delivered for clients worldwide
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-overlay">
                  <a href={project.link} className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .previous-work {
          padding: 100px 0;
          background: linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }

        .previous-work::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100px;
          background: linear-gradient(180deg, transparent, #6366f1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          color: #6366f1;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff 0%, #a5a5a5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 18px;
          color: #888888;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                      0 0 60px rgba(99, 102, 241, 0.1);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder span {
          font-size: 64px;
          font-weight: 700;
          color: rgba(99, 102, 241, 0.3);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .view-project {
          padding: 12px 24px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .project-card:hover .view-project {
          transform: translateY(0);
        }

        .view-project:hover {
          background: linear-gradient(135deg, #7c7ff2 0%, #6366f1 100%);
        }

        .project-content {
          padding: 24px;
        }

        .project-title {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 14px;
          color: #888888;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          padding: 4px 12px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          font-size: 12px;
          color: #6366f1;
        }

        @media (max-width: 768px) {
          .previous-work {
            padding: 60px 0;
          }

          .section-title {
            font-size: 32px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default PreviousWork;

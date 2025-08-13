import '../styles/projectcomponent.css'
import { Project } from '../content/projectContent';
import { techColors } from '../content/projectContent';

interface Props {
    project: Project;
}

const ProjectComponent = ({ project }: Props) => {
    return (
        <div className="project-item" style={{backgroundColor: project.backgroundColor}}>
        <article className="case-tile">
            <div className="case-tile__controls">
                <a href={project.tileCta.href} className="case-tile__cta" aria-label={project.tileCta.ariaLabel} title={project.tileCta.title}>
                    <project.tileCta.icon /> {project.tileCta.platform}
                </a>
                <a href={project.tileIcon.href} className="case-tile__icon" aria-label={project.tileIcon.ariaLabel} title={project.tileIcon.title}>
                    <project.tileIcon.icon />
                </a>
            </div>

            <div className="case-tile__bg">
                <div className="case-tile__thumb" 
                     style={{
                        backgroundImage: `url("${project.featuredImage}")`
                      }}>
                    <div className="case-tile__overlay"></div>
                </div>
            </div>

            <div className="case-tile__content">
                <h2>{project.title}</h2>
                <span className="tech-badges">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge" style={{ borderColor: techColors[tech] }}>
                <span className="dot" style={{ backgroundColor: techColors[tech] }}></span> {tech}
              </span>
            ))}
          </span>
                <h3>{project.description}</h3>
            </div>
        </article>
    </div>
    );
}
export default ProjectComponent;
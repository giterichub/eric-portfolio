import '../styles/projectcomponent.css'
import { Project } from '../content/projectContent';

interface Props {
    project: Project;
}

const ProjectComponent = ({ project }: Props) => {
    return (
        <div className="project-item" style={{backgroundColor: project.backgroundColor}}>
        <article className="case-tile">
            <div className="case-tile__controls">
                <a href="#" className="case-tile__cta">Open Case Study</a>
                <a href="#" className="case-tile__icon" aria-label="Open case study">↗</a>
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
                <h3>{project.description}</h3>
            </div>
        </article>
    </div>
    );
}
export default ProjectComponent;
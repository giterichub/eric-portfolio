import '../styles/projectcomponent.css'
const ProjectComponent = () => {
    return (
        <div className="project-item">
        <article className="case-tile">
            <div className="case-tile__controls">
                <a href="#" className="case-tile__cta">Open Case Study</a>
                <a href="#" className="case-tile__icon" aria-label="Open case study">↗</a>
            </div>

            <div className="case-tile__bg">
                <div className="case-tile__thumb" 
                     style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                      }}>
                    <div className="case-tile__overlay"></div>
                </div>
            </div>

            <div className="case-tile__content">
                <h2>Squarespace Expressiblity</h2>
                <h3>Providing our users with content ready solutions</h3>
            </div>
        </article>
    </div>
    );
}
export default ProjectComponent;
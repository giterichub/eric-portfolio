import "./OverlappingTriangles.css";
const OverlappingTriangles = () => {
    return (
        <svg width="200" height="200" viewBox="0 0 100 200">
          <g transform="rotate(20, 50, 80)">
            <polygon points="50,10 10,80 90,80" stroke="red" fill="none" strokeWidth="2" />
            <polygon points="50,20 15,85 85,85" stroke="red" fill="none" strokeWidth="2" />
            <polygon points="50,30 20,90 80,90" stroke="red" fill="none" strokeWidth="2" />
            <polygon points="50,40 25,95 75,95" stroke="red" fill="none" strokeWidth="2" />
            <polygon points="50,50 30,100 70,100" stroke="red" fill="none" strokeWidth="2" />
          </g>
        </svg>
    );
}
export default OverlappingTriangles;
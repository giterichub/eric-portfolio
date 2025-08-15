const OverlappingCircles = () => {
    return (
        <div className="ov-circle-container">
            <svg width="200" height="200" viewBox="0 0 200 200">
                <g transform="rotate(-20, 100, 100)">
                    <circle className="overlap-circle" cx="50" cy="100" r="30" stroke="#d21338" fill="none" stroke-width="2" />
                    <circle className="overlap-circle" cx="65" cy="95" r="30" stroke="#d21338" fill="none" stroke-width="2" />
                    <circle className="overlap-circle" cx="80" cy="90" r="30" stroke="#d21338" fill="none" stroke-width="2" />
                    <circle className="overlap-circle" cx="95" cy="85" r="30" stroke="#d21338" fill="none" stroke-width="2" />
                    <circle className="overlap-circle" cx="110" cy="80" r="30" stroke="#d21338" fill="none" stroke-width="2" />
                </g>
            </svg>
      </div>
    );
}
export default OverlappingCircles;
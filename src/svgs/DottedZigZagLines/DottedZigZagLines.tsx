import "./DottedZigZagLines.css";
const DottedZigZagLines = () => {
    return (
        <svg className="zigzag-line" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="120,50 40,200 280,90 120,240 400,180 300,250"
            stroke="black" fill="none" stroke-width="3" stroke-dasharray="5,5">
            <animate
              attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
          </polyline>

          <circle className="zig-zag-circle" cx="120" cy="50" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" repeatCount="indefinite" />
          </circle>

          <circle className="zig-zag-circle" cx="40" cy="200" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.2s" repeatCount="indefinite"/>
          </circle>

          <circle className="zig-zag-circle" cx="280" cy="90" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.4s" repeatCount="indefinite" />
          </circle>

          <circle className="zig-zag-circle" cx="120" cy="240" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.6s" repeatCount="indefinite"/>
          </circle>

          <circle className="zig-zag-circle" cx="400" cy="180" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.8s" repeatCount="indefinite" />
          </circle>

          <circle className="zig-zag-circle" cx="300" cy="250" r="8" fill="black" >
            <animate attributeName="r" values="8;5;8" dur="1s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>
    );
}
export default DottedZigZagLines;
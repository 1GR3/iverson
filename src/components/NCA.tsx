import * as React from "react";
import { useSpring, animated } from '@react-spring/web';

interface NCAgraphicProps {
    scrollY: number;
}

const NCAgraphic: React.FC<NCAgraphicProps> = ({ scrollY }) => {
    // Handle scaling and transformation logic for motion
    const [{ scale }, api] = useSpring(() => ({ scale: 0.08 })); // Start div at scale 0.08

    React.useEffect(() => {
        const newScale = Math.min(0.08 + scrollY / 1250, 1); // Scale the div from 0.08 to 1 based on scroll
        api.start({ scale: newScale });
    }, [scrollY, api]);

    // SVG initial scale remains 12.5 and doesn't change
    const svgScale = 12.5;

    // Calculate stroke width dynamically based on the scroll position
    const baseStrokeWidth = 5; // Initial stroke width
    const minStrokeWidth = 0.5; // Minimum stroke width
    const scaleForStroke = Math.min(1 + scrollY / 100, 50); // Example scaling based on scroll
    const strokeWidth = Math.max(baseStrokeWidth / scaleForStroke, minStrokeWidth);

    // Hide the content after 1250px scroll
    if (scrollY > 1250) {
        return null;
    }

    return (
        <animated.div
            style={{
                width: '100vw',
                height: '100vh',
                scale, // The enclosing div scales from 0.08 to 1 based on scroll
                transformOrigin: '0% 0%',
                position: 'fixed',
                top: '50%',
                left: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1642 580"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    strokeMiterlimit: 10,
                    transform: `scale(${svgScale})`, // Fixed scale for the SVG at 12.5
                }}
                strokeWidth={strokeWidth}
            >

                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M437.397,5.736L509.073,57.812" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.074,29.78L479.979,5.736" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M479.979,5.736L509.074,29.78" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,313.064L210.481,370.001" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M236.349,401.452L509.073,331.41" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,331.41L236.349,401.452" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M260.733,431.08L509.072,350.402" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M173.069,503.173L146.252,513.771" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M146.252,513.771L173.069,503.173" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,461.846L173.067,417.671" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M173.067,377.142L1,409.96" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,409.96L173.067,377.142" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,295.136L1,359.291" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M210.481,370.001L509.073,313.064" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,513.77L173.067,459.567" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M173.067,417.671L1,461.846" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.072,350.402L260.733,431.08" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M283.98,459.264L509.073,370.154" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.072,462.151L437.966,513.771" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M480.509,513.771L509.073,490.183" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,490.183L480.509,513.771" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.072,436.55L387.372,513.772" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M437.966,513.771L509.072,462.151" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,370.154L283.98,459.264" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M306.276,486.347L509.072,390.893" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.072,412.961L328.876,513.77" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M387.372,513.772L509.072,436.55" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.072,390.893L306.276,486.347" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M328.876,513.77L509.072,412.961" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,5.736L256.062,87.363" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M209.912,31.337L145.149,5.736" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M344.601,146.277L509.071,188.515" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.071,169.561L344.601,116.117" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M344.601,116.117L509.071,169.561" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.071,149.808L344.601,84.666" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,359.291L509.073,295.136" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,277.472L1,309.455" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M344.601,16.561L509.071,107.001" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,83.375L386.688,5.736" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M344.601,84.666L509.071,149.808" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.071,129.032L344.601,51.621" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,58.078L293.894,133.286" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M256.062,87.363L1,5.736" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M344.601,51.621L509.071,129.032" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.071,107.001L344.601,16.561" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,109.963L509.073,206.898" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M293.894,133.286L1,58.078" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.071,188.515L344.601,146.277" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M386.688,5.736L509.073,83.375" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,57.812L437.397,5.736" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,259.962L509.073,259.962" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,242.452L1,210.507" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,309.455L509.073,277.472" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,259.962L1,259.962" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,210.507L509.073,242.452" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,224.827L1,160.634" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1,160.634L509.073,224.827" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M509.073,206.898L1,109.963" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M145.149,5.736L209.912,31.337" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M794.238,347.895L794.238,520" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M826.827,517.91L805.252,347.173" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M816.079,345.16L858.887,511.909" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M889.918,501.73L826.561,341.704" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M919.47,487.865L836.551,337.031" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M947.009,470.316L845.857,331.105" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M972.154,449.501L854.366,324.078" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M783.223,172.826L761.648,2.089" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M729.55,8.092L772.358,174.841" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M698.518,18.27L761.875,178.297" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M794.238,172.105L794.238,0" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M719.979,212.938L574.69,120.713" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M558.889,149.315L714.623,222.586" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M742.543,188.893L641.392,49.682" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M616.244,70.498L734.032,195.921" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M726.473,203.974L593.871,94.276" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M751.847,182.967L668.928,32.133" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M994.527,425.761L861.925,316.064" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M868.418,212.976L1013.71,120.752" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M994.561,94.314L861.959,204.011" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M972.154,70.573L854.366,195.996" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M873.737,222.624L1029.47,149.353" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M947.047,49.721L845.896,188.931" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M816.114,174.878L858.922,8.129" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M826.827,2.127L805.252,172.865" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M919.509,32.172L836.59,183.006" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M826.601,178.297L889.958,18.27" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M783.223,347.211L761.648,517.949" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M742.581,331.145L641.43,470.356" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M668.967,487.903L751.886,337.069" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M726.511,316.064L593.909,425.761" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M616.284,449.54L734.072,324.117" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M546.887,179.663L710.597,232.84" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M761.875,341.74L698.518,501.766" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M729.55,511.909L772.358,345.16" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M877.803,232.879L1041.51,179.702" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M706.495,265.545L534.731,276.332" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M538.797,308.772L707.863,276.523" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M707.863,243.553L538.797,211.304" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M534.731,243.705L706.457,254.493" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M720.019,307.137L574.73,399.362" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M714.662,297.489L558.928,370.76" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M546.887,340.412L710.597,287.234" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M877.762,287.196L1041.47,340.373" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1013.67,399.325L868.385,307.101" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1029.47,370.723L873.737,297.452" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1120.31,178.144L1447.09,94.199" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1434.4,54.317L1127.83,153.949" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1040.05,514.148L1021.67,494.625" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1113.32,200.516L1459.93,134.386" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1447.09,94.199L1120.31,178.144" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1072,514.149L1028.35,473.164" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1021.67,494.625L1040.05,514.148" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1187.35,504.957L1046.36,415.467" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1040.62,433.851L1151.04,514.073" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1151.04,514.073L1040.62,433.851" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1034.66,452.995L1108.5,514.112" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1108.5,514.112L1034.66,452.995" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1028.35,473.164L1072,514.149" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1155.45,65.37L1263.74,5.849" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1201.9,5.849L1167.11,27.918" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1195.18,476.507L1051.87,397.728" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1046.36,415.467L1187.35,504.957" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1127.83,153.949L1434.4,54.317" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1421.68,14.433L1136.08,127.473" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1136.08,127.473L1421.68,14.433" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1341.53,5.849L1145.19,98.226" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1145.19,98.226L1341.53,5.849" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1263.74,5.849L1155.45,65.37" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1167.11,27.918L1201.9,5.849" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1202.74,448.893L1057.26,380.408" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1051.87,397.728L1195.18,476.507" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1562.25,455.388L1073.06,329.775" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1062.58,363.429L1440.97,513.238" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1580.71,513.237L1067.82,346.564" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1073.06,329.775L1562.25,455.388" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1545.2,401.906L1078.34,312.834" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1242.66,287.766L1089.13,278.118" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1083.66,295.666L1234.53,314.734" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1057.26,380.408L1202.74,448.893" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1440.97,513.238L1062.58,363.429" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1339.67,328.029L1529.28,351.959" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1514.28,304.857L1328.96,293.196" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1328.96,293.196L1514.28,304.857" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1499.96,259.999L1318.78,259.999" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1318.78,259.999L1499.96,259.999" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1486.25,216.924L1308.94,228.092" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1308.94,228.092L1486.25,216.924" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1472.92,175.181L1299.44,197.097" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1299.44,197.097L1472.92,175.181" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1106.83,221.408L1268.83,200.972" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1459.93,134.386L1113.32,200.516" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1268.83,200.972L1106.83,221.408" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1100.67,241.197L1259.71,231.169" className="logo-lines" />
                </g>
                <g transform="matrix(1,0,0,1,30,30)">
                    <path d="M1094.79,259.999L1251.01,259.999" className="logo-lines" />
                </g>
            </svg>
        </animated.div>
    );
};

export default NCAgraphic;
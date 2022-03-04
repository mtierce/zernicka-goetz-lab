import React, { useEffect, useRef, useState } from 'react';
import styles from './LloydRelaxation.module.scss';
import { Delaunay } from 'd3-delaunay';
import { polygonCentroid } from 'd3-polygon';

const LloydRelaxation = ({}) => {
    const canvasRef = useRef();
    const container = useRef();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        setHeight(container.current.offsetWidth);
        setHeight(container.current.offsetHeight);



        const n = 500 << 1;
        const points = Float64Array.from({length: n}, (_, i) => Math.random() + (i & 1 ? height : width) / 2);
        const delaunay = new Delaunay(points);
        console.log(canvasRef.current);
        const context = canvasRef.current.getContext('2d');
        context.lineCap = "square";
        const voronoi = delaunay.voronoi([0, 0, width, height]);
        for (let i = 0; i < 1200; ++i) {
            context.clearRect(0, 0, width, height);
            context.beginPath();
            voronoi.render(context);
            context.strokeStyle = "red";
            context.stroke();

            context.beginPath();
            for (let i = 0; i < n; i += 2) {
                const cell = voronoi.cellPolygon(i >> 1);
                if (cell === null) continue;
                const x0 = points[i], y0 = points[i + 1];
                const [x1, y1] = polygonCentroid(cell);
                context.moveTo(x0, y0);
                context.lineTo(points[i] = x0 + (x1 - x0), points[i + 1] = y0 + (y1 - y0));
            }
            context.strokeStyle = "black";
            context.stroke();
            
            voronoi.update();
        }
    }, [])

    return (
        <div className={styles.LloydRelaxation} ref={container}>
            <canvas ref={canvasRef} width={width} height={height}>

            </canvas>
        </div>
    );
};

export default LloydRelaxation;
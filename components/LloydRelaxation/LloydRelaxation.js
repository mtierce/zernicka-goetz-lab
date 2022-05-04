import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './LloydRelaxation.module.scss';
import { Delaunay } from 'd3-delaunay';
import { polygonCentroid } from 'd3-polygon';
import useInterval from '../../utils/useInterval';
import classNames from 'classnames/bind';
import RichBlocks from '../RichBlocks/RichBlocks';

const cx = classNames.bind(styles);

const colorSet = [
    "#F8B9C9",
    "#F99CB5",
    "#F6D6DE",
    "#FF326B"
]

const LloydRelaxation = ({finishedScrolling, setFinishedScrolling, tagLine}) => {
    const [animating, setAnimating] = useState(true);

    
    useInterval(() => {
        setFrame( frame + 10 );
        window.scrollTo(0, window.innerHeight * frame / 1200);
        if (window.scrollY > window.innerHeight * 0.6) {
            setAnimating(false);
        }
    }, animating ? 60 : null )

    // track scroll position
    const [scrollPos, _setScrollPos] = useState(0);
    const scrollPosRef = useRef(scrollPos);
    const setScrollPos = (position) => {
        scrollPosRef.current = position;
        _setScrollPos(position);
    }

    // add listener for scroll and get height of page on mount
    useEffect(() => {
        if( !animating ) {
            window.addEventListener('scroll', watchScroll);
            return () => {
                window.removeEventListener('scroll', watchScroll)
            }
        }
    }, [animating]);

    useEffect(() => {
        if (animating) {
            window.addEventListener('wheel', () => {
                setAnimating(false);
            });
            window.addEventListener('touchstart', () => {
                setAnimating(false);
            });
        }
    }, [])

    function watchScroll(event) {
        if (window.scrollY > scrollPosRef.current) {
            setFrame(window.scrollY / window.innerHeight * 1200);
        } else {
            setReverseFrame(window.scrollY / window.innerHeight * 1200);
        }
        if (window.scrollY > (window.innerHeight * 0.6)) {
            setFinishedScrolling(true);
        }
        setScrollPos(window.scrollY);
    }

    useEffect(() => {
        if (finishedScrolling) window.scrollTo(0, 0);
    }, [finishedScrolling])

    const canvasRef = useRef();
    const container = useRef();

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [frame, setFrame] = useState(0);
    const [reverseFrame, setReverseFrame] = useState(0);

    const points = useRef(null);
    const voronoi = useRef(null);
    const context = useRef(null);

    const pointArrays = useRef([]);

    useEffect(() => {
        setWidth(container.current.offsetWidth);
        setHeight(window.innerHeight);
        setup();
    }, []);

    useEffect(() => {
        draw();
    }, [frame]);

    useEffect(() => {
        reverseDraw();
    }, [reverseFrame]);

    const setup = () => {
        let tempWidth = window.innerWidth;
        let tempHeight = window.innerHeight;

        const n = 500 << 1;
        points.current = Float64Array.from({length: n}, (_, i) => Math.random() + (i & 1 ? tempHeight : tempWidth) / 2);
        const delaunay = new Delaunay(points.current);
        context.current = canvasRef.current.getContext('2d');
        context.current.lineCap = "square";
        voronoi.current = delaunay.voronoi([0, 0, tempWidth, tempHeight]);

        for (let j = 0; j < 10; j++) {
            for (let i = 0; i < points.current.length; i += 2) {
                const cell = voronoi.current.cellPolygon(i >> 1);
                if (cell === null) continue;
                const x0 = points.current[i], y0 = points.current[i + 1];
                const [x1, y1] = polygonCentroid(cell);
                points.current[i] = x0 + (x1 - x0);
                points.current[i + 1] = y0 + (y1 - y0);
            }
        }
        voronoi.current.update();
    }

    const draw = () => {
        pointArrays.current.push([...points.current]);

        context.current.clearRect(0, 0, width, height);
        context.current.beginPath();
        voronoi.current.render(context.current);
        context.current.strokeStyle = "#EB2D63";
        context.current.stroke();
        context.current.closePath();

        for (let i = 0; i < points.current.length; i += 2) {
            const cell = voronoi.current.cellPolygon(i >> 1);
            if (cell === null) continue;

            const x0 = points.current[i];
            const y0 = points.current[i + 1];
            const [x1, y1] = polygonCentroid(cell);
            points.current[i] = x0 + (x1 - x0);
            points.current[i + 1] = y0 + (y1 - y0);
        }     
        voronoi.current.update();
    }

    const reverseDraw = () => {
        
        if (pointArrays.current && pointArrays.current.length > 0) {
            let prevPoints = pointArrays.current.pop();

            context.current.clearRect(0, 0, width, height);
            context.current.beginPath();
            voronoi.current.render(context.current);
            context.current.strokeStyle = "#EB2D63";
            context.current.stroke();

            for (let i = 0; i < prevPoints.length; i += 2) {
                const cell = voronoi.current.cellPolygon(i >> 1);
                if (cell === null) continue;
                
                const x0 = prevPoints[i];
                const y0 = prevPoints[i + 1];
                const [x1, y1] = polygonCentroid(cell);
                context.current.moveTo(x0, y0);
                context.current.lineTo(points.current[i] = prevPoints[i], points.current[i+1] = prevPoints[i + 1]);
            }           
            voronoi.current.update();
        }
    }

    let overlayStyles = cx({
        overlay: true,
        absolute: finishedScrolling
    });

    let LloydRelaxationStyles = cx({
        LloydRelaxation: true,
        finished: finishedScrolling
    })

    return (
        <div className={LloydRelaxationStyles} ref={container}>
            <div className={overlayStyles} >
                {tagLine && <RichBlocks blocks={tagLine} />}
                <div className={styles.chevron} />
            </div>
            <div className={styles.canvasContainer}><canvas ref={canvasRef} width={width} height={height} /></div>
        </div>
    );
};

export default LloydRelaxation;
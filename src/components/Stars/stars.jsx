import React, { useEffect } from 'react';
import anime from 'animejs';
import './stars.css'

const StarrySky = () => {
    const numStars = 90;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    useEffect(() => {
        const starryNight = () => {
            anime({
                targets: "#sky .star",
                opacity: [{ duration: 700, value: "0" }, { duration: 700, value: "1" }],
                easing: "linear",
                loop: true,
                delay: (el, i) => 50 * i
            });
        };

         const shootingStars = () => {
                anime({
                    targets: "#shootingstars .wish",
                    easing: "linear",
                    loop: true,
                    delay: (el, i) => 1000 * i,
                    opacity: [{ duration: 700, value: "1" }],
                    width: [{ value: "150px" }, { value: "0px" }],
                    translateX: 350
                });
            };



        starryNight();
        shootingStars();
    }, [vw, vh]);

    return (
        <div id="starry-sky" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
            <svg
                id="sky"
                width={vw}
                height={vh}
                style={{ overflow: 'hidden', margin: 0, padding: 0, top: 0, left: 0, zIndex: 1 }}
            >
                {Array.from({ length: numStars }, (_, index) => (
                    <circle
                        cx={Math.random() * vw}
                        cy={Math.random() * vh}
                        r={Math.random() * 0.7 + 0.6}
                        stroke="none"
                        strokeWidth="0"
                        fill="white"
                        key={index}
                        className="star"
                    />
                ))}
            </svg>
            <div
                id="shootingstars"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: vw,
                    height: vh,
                    zIndex: 1,
                    overflow: 'hidden'
                }}
            >
                {Array.from({ length: numStars }, (_, index) => (
                    <div
                        key={index}
                        className="wish"
                        style={{
                            position: 'absolute',
                            width: '2px',
                            height: '2px',
                            backgroundColor: 'white',
                            top: `${Math.random() * vh}px`,
                            left: `${Math.random() * vw}px`,
                            opacity: 0,
                            zIndex: 1
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StarrySky;

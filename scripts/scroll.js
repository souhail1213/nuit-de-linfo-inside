const zSpacing = -1000;
let lastPosition = zSpacing / 5;
const frames = Array.from(document.getElementsByClassName('frame'));
const zVals = [];
const scrollSpeed = -5;

window.onscroll = function() {
    const top = document.documentElement.scrollTop;
    const delta = lastPosition - top;

    lastPosition = top;
    frames.forEach((frame, i) => {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * scrollSpeed;

        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
}

window.scrollTo(0, 1);
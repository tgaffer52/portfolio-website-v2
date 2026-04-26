/**
 * Creates an animated bubble background
 * Refactored for modern ES6+, GPU acceleration, and SPA compatibility.
 */

const config = {
  maxBubbles: 250,
  ratio: 45000,
  hue: 148,
  hueRand: 20,
  saturation: 23,
  saturationRand: 10,
  light: 10,
  lightRand: 10,
  opacityFactor: 3,
  minOpacity: 0.1,
};

class Bubble {
  constructor(container) {
    this.time = 0;
    this.diam = 0;
    this.x = 0;
    this.y = 0;
    this.xVel = 0;
    this.yVel = 0;

    // Create the DOM element
    this.element = document.createElement("div");

    // Apply base styles needed for bubbles
    Object.assign(this.element.style, {
      position: "absolute",
      borderRadius: "50%",
      top: "0",
      left: "0",
      pointerEvents: "none",
      willChange: "transform, opacity", // Hints to the browser for better performance
    });

    container.appendChild(this.element);
    this.reset();
  }

  reset() {
    this.time = 0;

    // Position & Velocity
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.xVel = Math.random();
    this.yVel = Math.random();

    // Size
    this.diam = Math.floor(Math.random() * 160) + 40;

    // Color & Styling
    const hue = Math.floor(Math.random() * config.hueRand) + config.hue;
    const saturation =
      Math.floor(Math.random() * config.saturationRand) + config.saturation;
    const light = Math.floor(Math.random() * config.lightRand) + config.light;
    const opacity = Math.min(
      Math.max(Math.random() / config.opacityFactor, config.minOpacity),
      1,
    );

    const hsla = `hsla(${hue}, ${saturation}%, ${light}%, ${opacity})`;
    const glow = Math.floor(Math.random() * 10) + 5;

    // Apply specific styles
    Object.assign(this.element.style, {
      width: `${this.diam}px`,
      height: `${this.diam}px`,
      backgroundColor: hsla,
      boxShadow: `0 0 ${glow}px ${hsla}`,
      opacity: "0",
      transform: `translate3d(${this.x}px, ${this.y}px, 0)`,
    });
  }

  move() {
    // If out of bounds, reset the bubble
    if (
      this.x + this.diam < 0 ||
      this.x > window.innerWidth ||
      this.y + this.diam < 0 ||
      this.y - this.diam > window.innerHeight
    ) {
      this.reset();
    } else {
      // Fade in over the first 10 ticks
      if (this.time < 11) {
        this.element.style.opacity = (this.time / 10).toString();
      }

      this.x += this.xVel;
      this.y += this.yVel;

      // Use GPU-accelerated translate3d instead of top/left
      this.element.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
      this.time++;
    }
  }

  destroy() {
    this.element.remove();
  }
}

/**
 * Initializes the bubble animation.
 * @returns {Function} A cleanup function to stop the animation and destroy the DOM elements.
 */
export default function initBubbles() {
  // Setup or find the container
  let container = document.getElementById("bubbleContainer");
  let isNewContainer = false;

  if (!container) {
    container = document.createElement("div");
    container.id = "bubbleContainer";
    Object.assign(container.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "-1",
      overflow: "hidden",
      pointerEvents: "none",
    });
    document.body.appendChild(container);
    isNewContainer = true;
  }

  // Calculate bubble count
  const targetBubbles = Math.floor(
    (window.innerWidth * window.innerHeight) / config.ratio,
  );
  const bubbleLength = Math.min(targetBubbles, config.maxBubbles);

  // Create bubbles
  const bubbles = Array.from(
    { length: bubbleLength },
    () => new Bubble(container),
  );

  // Animation Loop
  let animationFrameId;
  function render() {
    for (const bubble of bubbles) {
      bubble.move();
    }
    animationFrameId = requestAnimationFrame(render);
  }

  // Start the animation
  render();

  // === THE KILL SWITCH ===
  // This executes when `stopBubbles()` is called from your Vue file's onBeforeUnmount hook
  return function destroy() {
    cancelAnimationFrame(animationFrameId);

    for (const bubble of bubbles) {
      bubble.destroy();
    }

    // Only remove the container if this script created it
    if (isNewContainer) {
      container.remove();
    } else {
      container.innerHTML = "";
    }
  };
}

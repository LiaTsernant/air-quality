const cursorModule = () => {
  const innerCursor = document.querySelector(".cursor");
  const canvas = document.querySelector(".cursor__canvas");
  let polygon;
  let clientX = -100;
  let clientY = -100;
  const initCursor = () => {
    document.addEventListener("mousemove", (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
    });
  };
  initCursor();
  let lastX = 0;
  let lastY = 0;
  let isStuck = false;
  let showCursor = false;
  let group;
  let stuckX;
  let stuckY;
  let fillOuterCursor;
  const initCanvas = () => {
    const shapeBounds = {
      width: 35,
      height: 35
    };
    paper.setup(canvas);
    const strokeColor = "rgba(60, 74, 83, 0.5)";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;
    const noiseScale = 130;
    const noiseRange = 3;
    let isNoisy = false;
    polygon = new paper.Path.RegularPolygon(
      new paper.Point(0, 0),
      segments,
      radius
    );
    polygon.fillColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();
    group = new paper.Group([polygon]);
    group.applyMatrix = false;
    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];
    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b;
    };
    const map = (value, in_min, in_max, out_min, out_max) => {
      return (
        ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };
    paper.view.onFrame = (event) => {
      // move circle around normally
      if (!isStuck) {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      }
      if (polygon.bounds.width < shapeBounds.width) {
        // scale up the shape
        polygon.scale(1.15);
      } else if (polygon.bounds.width > 30) {
        // remove noise
        polygon.segments.forEach((segment, i) => {
          segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
        });
        bigCoordinates = [];
      }

      if (isStuck) {
        lastX = lerp(lastX, stuckX, 0.2);
        lastY = lerp(lastY, stuckY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      }

      // while stuck and big, apply simplex noise
      if (polygon.bounds.width >= shapeBounds.width) {
        // first get coordinates of large circle
        if (bigCoordinates.length === 0) {
          polygon.segments.forEach((segment, i) => {
            bigCoordinates[i] = [segment.point.x, segment.point.y];
          });
        }
        // loop over all points of the polygon
        polygon.segments.forEach((segment, i) => {
          // get new noise value
          // we divide event.count by noiseScale to get a very smooth value
          const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
          const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
          // map the noise value to our defined range
          const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
          const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
          // apply distortion to coordinates
          const newX = bigCoordinates[i][0] + distortionX;
          const newY = bigCoordinates[i][1] + distortionY;
          // set new (noisy) coordindate of point
          segment.point.set(newX, newY);
        });
      }
      polygon.smooth();
    };
  };
  initCanvas();
  const initCursorHovers = (polygon) => {
    const handleCanvasCursorMouseEnter = (e) => {
      const navItem = e.currentTarget;
      const navItemBox = navItem.getBoundingClientRect();
      stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
      stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
      isStuck = true;
    };
    const handleCanvasCursorMouseLeave = () => {
      isStuck = false;
    };
    const $links = document.querySelectorAll(".menu");
    $links.forEach((link) => {
      link.addEventListener("mouseenter", handleCanvasCursorMouseEnter);
      link.addEventListener("mouseleave", handleCanvasCursorMouseLeave);
    });
  };
  initCursorHovers();
};

const waveCircle = () => {
  const canvas = document.querySelector("#waveCircle");
  let polygon;
  let group;
  const initCanvas = () => {
    const shapeBounds = {
      width: 200,
      height: 200
    };
    paper.setup(canvas);
    const strokeColor = "blue";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;
    const noiseScale = 150;
    const noiseRange = 8;
    polygon = new paper.Path.RegularPolygon(
      new paper.Point(0, 0),
      segments,
      radius
    );
    polygon.fillColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();
    group = new paper.Group([polygon]);
    group.position = paper.view.center;
    group.applyMatrix = false;
    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];
    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b;
    };
    const map = (value, in_min, in_max, out_min, out_max) => {
      return (
        ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };
    paper.view.onFrame = (event) => {
      if (polygon.bounds.width < shapeBounds.width) {
        // scale up the shape
        polygon.scale(1.15);
      } else if (polygon.bounds.width > 30) {
        // remove noise
        polygon.segments.forEach((segment, i) => {
          segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
        });
        bigCoordinates = [];
      }

      // while stuck and big, apply simplex noise
      if (polygon.bounds.width >= shapeBounds.width) {
        // first get coordinates of large circle
        if (bigCoordinates.length === 0) {
          polygon.segments.forEach((segment, i) => {
            bigCoordinates[i] = [segment.point.x, segment.point.y];
          });
        }
        // loop over all points of the polygon
        polygon.segments.forEach((segment, i) => {
          // get new noise value
          // we divide event.count by noiseScale to get a very smooth value
          const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
          const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
          // map the noise value to our defined range
          const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
          const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
          // apply distortion to coordinates
          const newX = bigCoordinates[i][0] + distortionX;
          const newY = bigCoordinates[i][1] + distortionY;
          // set new (noisy) coordindate of point
          segment.point.set(newX, newY);
        });
      }
      polygon.smooth();
    };
  };
  initCanvas();
};
window.onload = () => {
  cursorModule();
  waveCircle();
};

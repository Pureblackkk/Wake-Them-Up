import { Canvas } from '../core/view-layer/canvas';
import { Sleeper } from '../core/data-layer/sleeper/sleeper';

// Init Canvas
var myCanvas = Canvas.getInstance();

// Add a sleeper
new Sleeper();
new Sleeper(
    false,
    {
        drawType: 'circle',
        x: 600,
        y: 600,
        radius: 30,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        isFilled: true,
        fillColor: '#FFCC33',
    }
);

new Sleeper(
    false,
    {
        drawType: 'circle',
        x: 700,
        y: 700,
        radius: 30,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        isFilled: true,
        fillColor: '#FFCC33',
    }
);

new Sleeper(
    false,
    {
        drawType: 'circle',
        x: 500,
        y: 600,
        radius: 30,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        isFilled: true,
        fillColor: '#FFCC33',
    }
);


new Sleeper(
    false,
    {
        drawType: 'circle',
        x: 600,
        y: 700,
        radius: 30,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        isFilled: true,
        fillColor: '#FFCC33',
    }
);

new Sleeper(
    false,
    {
        drawType: 'circle',
        x: 700,
        y: 800,
        radius: 30,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        isFilled: true,
        fillColor: '#FFCC33',
    }
);


// Enable hot updating
if (module.hot) {
    module.hot.accept('../core/view-layer/canvas', function() {
        return;
    })
}

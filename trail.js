// One of my first <canvas> experiments, woop! :D

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var RADIUS = 100;

var RADIUS_SCALE = 1;
var RADIUS_SCALE_MIN = 1;
var RADIUS_SCALE_MAX = 1.5;

var QUANTITY = 60;

var canvas;
var context;
var particles;

var mouseX = SCREEN_WIDTH * 0.5;
var mouseY = SCREEN_HEIGHT * 0.5;
var mouseIsDown = false;

function init() {
  canvas = document.getElementById("world");

  if (canvas && canvas.getContext) {
    context = canvas.getContext("2d");

    // Register event listeners
    window.addEventListener("mousemove", documentMouseMoveHandler, false);
    window.addEventListener("mousedown", documentMouseDownHandler, false);
    window.addEventListener("mouseup", documentMouseUpHandler, false);
    document.addEventListener("touchstart", documentTouchStartHandler, false);
    document.addEventListener("touchmove", documentTouchMoveHandler, false);
    window.addEventListener("resize", windowResizeHandler, false);

    createParticles();

    windowResizeHandler();

    setInterval(loop, 1000 / 60);
  }
}

function createParticles() {
  particles = [];

  for (var i = 0; i < QUANTITY; i++) {
    var particle = {
      size: 1,
      position: { x: mouseX, y: mouseY },
      offset: { x: 0, y: 0 },
      shift: { x: mouseX, y: mouseY },
      speed: 0.01 + Math.random() * 0.04,
      targetSize: 1,
      fillColor: "#ff000042",
      orbit: RADIUS * 0.5 + RADIUS * 0.5 * Math.random(),
    };

    particles.push(particle);
  }
}

function documentMouseMoveHandler(event) {
  mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
  mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
}

function documentMouseDownHandler(event) {
  mouseIsDown = true;
}

function documentMouseUpHandler(event) {
  mouseIsDown = false;
}

function documentTouchStartHandler(event) {
  if (event.touches.length == 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
    mouseY =
      event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
  }
}

function documentTouchMoveHandler(event) {
  if (event.touches.length == 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
    mouseY =
      event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
  }
}

function windowResizeHandler() {
  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;

  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;
}
function loop() {
  if (mouseIsDown) {
    RADIUS_SCALE += (RADIUS_SCALE_MAX - RADIUS_SCALE) * 0.02;
  } else {
    RADIUS_SCALE -= (RADIUS_SCALE - RADIUS_SCALE_MIN) * 0.02;
  }

  RADIUS_SCALE = Math.min(RADIUS_SCALE, RADIUS_SCALE_MAX);

  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  for (i = 0, len = particles.length; i < len; i++) {
    var particle = particles[i];

    var lp = { x: particle.position.x, y: particle.position.y };

    // Rotation
    particle.offset.x += particle.speed;
    particle.offset.y += particle.speed;

    // Follow mouse with some lag
    particle.shift.x += (mouseX - particle.shift.x) * particle.speed;
    particle.shift.y += (mouseY - particle.shift.y) * particle.speed;

    // Apply position
    particle.position.x =
      particle.shift.x +
      Math.cos(i + particle.offset.x) * (particle.orbit * RADIUS_SCALE);
    particle.position.y =
      particle.shift.y +
      Math.sin(i + particle.offset.y) * (particle.orbit * RADIUS_SCALE);

    // Limit to screen bounds
    particle.position.x = Math.max(
      Math.min(particle.position.x, SCREEN_WIDTH),
      0
    );
    particle.position.y = Math.max(
      Math.min(particle.position.y, SCREEN_HEIGHT),
      0
    );

    particle.size += (particle.targetSize - particle.size) * 0.0005;

    if (Math.round(particle.size) == Math.round(particle.targetSize)) {
      particle.targetSize = 1 + Math.random() * 7;
    }

    context.beginPath();
    context.fillStyle = particle.fillColor;
    context.strokeStyle = particle.fillColor;
    context.lineWidth = particle.size;
    context.moveTo(lp.x, lp.y);
    context.lineTo(particle.position.x, particle.position.y);
    context.stroke();
    // context.globalAlpha = 0.5;
    context.arc(
      particle.position.x,
      particle.position.y,
      particle.size / 2,
      0,
      Math.PI * 2,
      true
    );
    context.fill();
  }
}

mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
if (!mobileAndTabletCheck()) {
  window.onload = init;
}

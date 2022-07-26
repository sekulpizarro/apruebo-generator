import apruebaimg from "./assets/apruebafeliz.png";
import Criolla from "./assets/CriollaSansv0.7-MediumStd.otf";
import Lubasans from "./assets/LubaSans-Black.otf";
export const handler = ({ inputs, mechanic, sketch }) => {
  const { comuna, persona } = inputs;

  const center = [540, 540];
  const pi = Math.PI;
  //new FontFace('LubaSans-Black', 'url(/assets/LubaSans-Black.otf)');
  //new FontFace('Criolla', 'url(/assets/CriollaSansv0.7-MediumStd)');
  let apruebafeliz;
  let Criollafont;
  let Lubafont;

  sketch.preload = () => {
    apruebafeliz = sketch.loadImage(apruebaimg);
    Criollafont = sketch.loadFont(Criolla);
    Lubafont = sketch.loadFont(Lubasans);

  };
  sketch.setup = () => {
    sketch.createCanvas(1080, 1080);
  };

  sketch.draw = () => {
    sketch.background("#481a6f");
    sketch.noStroke();
    //Formas
    sketch.fill("#1a7fd3");
    sketch.circle(371.4,271.6,304);
    sketch.fill("FFFFFF");
    sketch.circle(708.6,271.6, 304);
    sketch.fill("#f64752");
    sketch.arc(371.4, 608, 304, 304, pi / 2, 1.5 * pi);
    sketch.arc(708.6, 608, 304, 304, 1.5 * pi, pi / 2);
    sketch.rect(371,456,338,304);
    //Texto ApruebaFeliz
    sketch.fill("#dad1e2");
    sketch.textAlign(sketch.CENTER, sketch.BOTTOM);
    sketch.textFont(Criollafont);
    sketch.textSize(80);
    sketch.text("#ApruebaFeliz", 540, 988);

    //Texto Comunas
    sketch.fill("FFFFFF");
    sketch.textAlign(sketch.CENTER, sketch.BOTTOM);
    sketch.textFont(Lubafont);
    sketch.textSize(98);
    sketch.text(comuna.toUpperCase(), 540, 904);
    //imgs
    // apruebafeliz.resize(600, 0);
    sketch.image(apruebafeliz, 240, 928);


    mechanic.done();
  };
};

export const inputs = {
  comuna: {
    type: "text",
    default: "comuna",
    options: ["comuna","Antofagasta", "San Bernardo", "San Pedro de la Paz", "Quinta de Tilcoco"],
    label: "Tu comuna"
  },

  persona: {
    type: "text",
    default: "Abuela y niño",
    options: ["Abuela y niño","Niño y abuela"],
    label: "Personaliza"
  },

};

export const presets = {

};

export const settings = {
  engine: require("@mechanic-design/engine-p5"),
};

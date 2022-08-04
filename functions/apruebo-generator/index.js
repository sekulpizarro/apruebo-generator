import React, { useEffect } from "react";
import * as css from "./styles.module.css";

import { comunas } from "../../assets/comunas";

import a from "../../assets/caras/a";

import b from "../../assets/caras/b";

//const largo = {};

function factor (largo) {

  if ( largo > 15 ) {

    return 11;

  } else {
    return 9;
  }
}

const colores = {
  azul: "#1a7fd3",
  negro: "#1d1d1b",
  rojo: "#f64752",
  blanco: "#ffffff",
  gris: "#dad1e2"
};



export const handler = ({ inputs, mechanic }) => {
  const { width, height, apruebista1, apruebista2, comuna } = inputs;

  useEffect(() => {
    mechanic.done();
  }, []);


  return (
    <svg width={width} height={height} className={css.root}>
      <svg
        width={width}
        viewBox="0 0 1080 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M371.42 423.98C455.583 423.98 523.81 355.753 523.81 271.59C523.81 187.427 455.583 119.2 371.42 119.2C287.257 119.2 219.03 187.427 219.03 271.59C219.03 355.753 287.257 423.98 371.42 423.98Z" fill="#1A7FD3"/>
      <path d="M708.58 423.98C792.743 423.98 860.97 355.753 860.97 271.59C860.97 187.427 792.743 119.2 708.58 119.2C624.417 119.2 556.19 187.427 556.19 271.59C556.19 355.753 624.417 423.98 708.58 423.98Z" fill="white"/>
      <path d="M708.58 456.36C699.08 456.36 424.51 456.36 371.41 456.36C287.25 456.36 219.02 524.59 219.02 608.75C219.02 692.91 287.25 761.14 371.41 761.14H708.58C792.74 761.14 860.97 692.91 860.97 608.75C860.97 524.59 792.74 456.36 708.58 456.36Z" fill="#F64752"/>
      <path d="M776.65 627L875.37 612.41L877.43 632.3L777.8 638.16L776.65 627Z" fill="#1D1D1B"/>
      <path d="M869.42 675.19L769.99 682.9L768.25 666.05L867.16 653.31L869.42 675.19Z" fill="#1D1D1B"/>
      <path d="M747.42 705.83L846.23 692.01L848.28 711.91L748.73 718.53L747.42 705.83Z" fill="#1D1D1B"/>
      <path d="M212.46 551.3L313.82 545.01L314.94 555.06L214.67 571.18L212.46 551.3Z" fill="#1D1D1B"/>
      <path d="M206.9 587.04L293.6 585.26L294.39 595.35L208.45 606.98L206.9 587.04Z" fill="#1D1D1B"/>
      <path d="M871.83 563.16L782.91 575.4L784.39 571.76L788.4 561.92L789.4 559.46L789.9 558.23L790.15 557.61L790.44 556.8C790.82 555.72 791.23 554.64 791.56 553.54L792.41 550.19C794.3 541.15 793.2 531.55 789.36 523.17C785.5 514.8 778.86 507.74 770.8 503.3L758.51 505.46L732.94 533.95L720.15 548.2L713.76 555.32L710.56 558.88L709.76 559.77L709.03 560.55L707.59 562.08C703.71 566.12 699.32 569.66 694.65 572.73C689.97 575.78 684.97 578.37 679.73 580.3C674.5 582.25 669.07 583.64 663.55 584.43C662.16 584.62 660.8 584.74 659.38 584.91L654.61 585.33L645.07 586.17L492.51 599.56L187.38 626.34L190.19 655.77L494.86 624.23L647.2 608.46L656.72 607.47L661.48 606.98C663.22 606.76 665.04 606.56 666.81 606.28C673.91 605.15 680.89 603.26 687.57 600.64C700.93 595.39 713.09 587.15 722.9 576.73L724.71 574.75L725.59 573.77L726.38 572.87L729.52 569.26L735.8 562.04L748.36 547.6L767.34 525.78C768.89 527.5 770.2 529.43 771.18 531.55C773.24 536.08 773.81 541.23 772.82 546.07C772.66 546.67 772.51 547.27 772.37 547.87C772.18 548.46 771.95 549.04 771.75 549.63L771.6 550.07L771.35 550.68L770.85 551.91L769.85 554.37L765.84 564.21L757.81 583.89L751.27 599.94L768.44 597.58L874.52 582.98L871.79 563.17L871.83 563.16Z" fill="#1D1D1B"/>
      <path d="M307.17 522.68L311.84 522.31L314.18 522.13C315 522.06 315.61 522.04 316.77 521.88C320.96 521.41 325.12 520.12 328.85 518.04C336.35 513.91 342.1 506.78 344.55 498.48C345.79 494.34 346.2 489.93 345.77 485.63L345.57 484.02L345.46 483.22L345.36 482.62L344.97 480.31L344.19 475.69L342.62 466.39L349.86 464.45L375.53 511.26L400.34 494.93L363.17 447.27L358.6 441.4L352.24 443.1L328.66 449.41L319.48 451.87L321.42 460.95L325.34 479.29L326.32 483.87L326.81 486.16L326.93 486.72L326.98 487.08L327.1 487.79C327.38 489.69 327.3 491.62 326.85 493.49C325.96 497.24 323.47 500.7 320.11 502.78C318.43 503.83 316.53 504.51 314.53 504.84C314.16 504.95 313.21 505.04 312.47 505.13L310.14 505.41L305.49 505.98L231.05 515.06L232.4 528.56L307.17 522.68V522.68Z" fill="#1D1D1B"/>
      <path d="M313.75 944.77L312.26 953.78H325.81L327.3 944.77H334.82L333.33 953.78H340.71V962.18H331.9L329.39 977.22H336.3V985.69H327.97L326.48 994.63H318.96L320.45 985.69H306.9L305.41 994.63H297.89L299.38 985.69H292V977.22H300.81L303.32 962.18H296.34V953.78H304.74L306.23 944.77H313.75ZM321.88 977.22L324.39 962.18H310.84L308.33 977.22H321.88Z" fill="#DAD1E2"/>
      <path d="M355.14 944.77H380.95L391.72 994.62H383.18L380.54 981.95H355.54L352.9 994.62H344.37L355.14 944.77ZM378.65 972.54L374.86 954.18H361.31L357.52 972.54H378.65V972.54Z" fill="#DAD1E2"/>
      <path d="M405.74 955.27V971.05H406.28C407.23 961.57 412.51 954.39 422.2 954.39C432.43 954.39 438.8 962.45 438.8 974.92C438.8 987.39 432.43 995.51 422.2 995.51C412.58 995.51 407.3 988.47 406.28 979.19H405.74V1007.23H397.95V955.28H405.74V955.27ZM420.3 986.36C427.07 986.36 431 981.62 431 974.91C431 968.2 427.07 963.53 420.3 963.53C413.53 963.53 409.53 968.2 409.53 974.91C409.53 981.62 413.46 986.36 420.3 986.36Z" fill="#DAD1E2"/>
      <path d="M466.7 955.27V964.55L453.42 964.28V994.63H445.5V955.27H466.7Z" fill="#DAD1E2"/>
      <path d="M491.49 995.17C479.36 995.17 472.86 989.01 472.86 977.49V955.27H480.85V976.34C480.85 982.23 484.91 985.62 491.49 985.62C498.07 985.62 502.12 982.23 502.12 976.34V955.27H510.11V977.49C510.11 989 503.61 995.17 491.48 995.17H491.49Z" fill="#DAD1E2"/>
      <path d="M517.3 974.71C517.3 962.99 524.14 954.39 536.27 954.39C547.18 954.39 553.61 961.37 553.61 973.29V976.81H525.36C526.24 982.7 530.71 986.5 538.98 986.5C544.67 986.5 549.21 984.74 551.51 982.78V991.99C548.39 994.16 543.18 995.51 537.9 995.51C524.62 995.51 517.31 986.98 517.31 974.71H517.3ZM545.75 972.34C545.14 966.38 541.55 963.53 535.86 963.53C529.7 963.53 526.04 966.92 525.29 972.34H545.75Z" fill="#DAD1E2"/>
      <path d="M560.31 941.39H568.1V971.06H568.64C569.59 961.58 574.87 954.4 584.56 954.4C594.79 954.4 601.16 962.46 601.16 974.93C601.16 987.4 594.79 995.52 584.56 995.52C574.94 995.52 569.66 988.48 568.64 979.2H568.1V994.64H560.31V941.4V941.39ZM582.66 986.37C589.43 986.37 593.36 981.63 593.36 974.92C593.36 968.21 589.43 963.54 582.66 963.54C575.89 963.54 571.89 968.21 571.89 974.92C571.89 981.63 575.82 986.37 582.66 986.37Z" fill="#DAD1E2"/>
      <path d="M618.22 971.8C625.54 971.8 629.8 975.86 630.55 981.62H630.96V964.41L606.64 964V955.26H638.75V994.62H630.96V985.27H630.55C629.81 991.1 625.4 995.29 618.29 995.29C610.64 995.29 606.1 990.41 606.1 983.5C606.1 976.59 610.5 971.78 618.23 971.78L618.22 971.8ZM620.73 989.68C624.66 989.68 627.3 987.24 627.3 983.52C627.3 979.8 624.66 977.15 620.73 977.15C616.8 977.15 614.23 979.79 614.23 983.52C614.23 987.25 616.8 989.68 620.73 989.68Z" fill="#DAD1E2"/>
      <path d="M649.92 944.77H685.28V954.19H658.12V966.72H683.86V974.17H658.12V994.63H649.92V944.78V944.77Z" fill="#DAD1E2"/>
      <path d="M689.95 974.71C689.95 962.99 696.79 954.39 708.92 954.39C719.83 954.39 726.26 961.37 726.26 973.29V976.81H698.01C698.89 982.7 703.36 986.5 711.63 986.5C717.32 986.5 721.86 984.74 724.16 982.78V991.99C721.04 994.16 715.83 995.51 710.55 995.51C697.27 995.51 689.96 986.98 689.96 974.71H689.95ZM718.4 972.34C717.79 966.38 714.2 963.53 708.51 963.53C702.35 963.53 698.69 966.92 697.94 972.34H718.4Z" fill="#DAD1E2"/>
      <path d="M739.87 941.39V994.63H732.08V941.39H739.87Z" fill="#DAD1E2"/>
      <path d="M752.34 941.52C756.68 941.52 758.37 943.48 758.37 946.47C758.37 949.46 756.68 951.35 752.34 951.35C748 951.35 746.24 949.39 746.24 946.47C746.24 943.55 748 941.52 752.34 941.52ZM756.27 955.27V994.63H748.48V955.27H756.27Z" fill="#DAD1E2"/>
      <path d="M763.17 955.27H797.99V970.71L772.25 982.36V985.61L797.38 985.75V994.62H764.53V978.84L790.27 967.26V964.28L763.17 964.14V955.27Z" fill="#DAD1E2"/>
        {a[apruebista1]}
        {b[apruebista2]}
      </svg>
      {comuna == "comuna" ? (
        <text
          x={width/2}
          y={4.08*height/5}
          textAnchor="middle"
          className={css.comuna}
          fill={colores.blanco}
          style={{ fontSize: width / 12 }}
        >
          Elige tu comuna
        </text>
      ) : (
        <text
          x={width/2}
          y={4.14*height/5}
          textAnchor="middle"
          className={css.comuna}
          style={{ fontSize: width / factor (inputs.comuna.length) }}
        >
          {comuna}
        </text>
      )}

    </svg>
  );
};


export const inputs = {
  width: {
    type: "number",
    default: 1080,
  },
  height: {
    type: "number",
    default: 1080,
  },
  comuna: {
    type: "text",
    default: "comuna",
    options: ["comuna", ...comunas],
    label: "Tu comuna",
  },

  apruebista1: {
    type: "text",
    default: Object.keys(a)[0],
    options: Object.keys(a),
    label: "Apruebista 1",
  },

  apruebista2: {
    type: "text",
    default: Object.keys(b)[0],
    options: Object.keys(b),
    label: "Apruebista 2",
  },
};


export const settings = {
  engine: require("@mechanic-design/engine-react"),
  showMultipleExports: true,
};

import React from "react";
import { Button, OptionInput } from "@mechanic-design/ui-components";
import sample from "lodash/sample";
import * as css from "./index.module.css";

export const typeName = "apruebo-ui";

import carasA from "../../assets/caras/a";
import carasB from "../../assets/caras/b";
import { comunas } from "../../assets/comunas";

const a = Object.keys(carasA);
const b = Object.keys(carasB);

const initial = {
  caraA: sample(a),
  caraB: sample(b),
  comuna: sample(comunas),
};

export const initValue = () => ({ ...initial });

export const prepareValue = (value, input) => {
  const v =
    value === undefined ||
    value === null ||
    !Object.keys(initial).every((k) => value.hasOwnProperty(k))
      ? initValue()
      : value;
  return v;
};
export const Input = (props) => {
  const { name, values, onChange } = props;
  const value = values[name] ?? initValue();

  const onInputChange = (e, inputName, inputValue) => {
    onChange(e, name, {
      ...value,
      [inputName]: inputValue,
    });
  };

  const onRandomize = (e) => {
    onChange(e, name, {
      ...value,
      caraA: sample(a),
      caraB: sample(b),
    });
  };

  return (
    <div className={css.root}>
      <OptionInput
        className={css.input}
        name="caraA"
        onChange={onInputChange}
        options={a}
        value={value.caraA}
      />
      <OptionInput
        className={css.input}
        name="caraB"
        onChange={onInputChange}
        options={b}
        value={value.caraB}
      />

      <OptionInput
        className={css.input}
        name="comuna"
        onChange={onInputChange}
        options={comunas}
        value={value.comuna}
      />
      <Button className={css.input} onClick={onRandomize}>
        Generar
      </Button>
    </div>
  );
};

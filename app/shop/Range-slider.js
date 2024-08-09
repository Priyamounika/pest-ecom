"use client";
import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from "react-range";

const RangeSlider = ({ min, max, step, data, handler, resetPrice }) => {
  const [values, setValues] = useState(data);

  useEffect(() => {
    setValues([min, max]);
  }, [resetPrice]);

  const handleFinalChange = (values) => {
    setValues(values);
    handler(values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "85%",
        margin: "10px",
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values) => setValues(values)}
        onFinalChange={handleFinalChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props?.onMouseDown}
            onTouchStart={props?.onTouchStart}
            style={{
              ...props.style,
              height: "0px",
              display: "flex",
              width: "100%",
              marginTop: "46px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "50px",
                background: getTrackBackground({
                  values,
                  colors: ["#FFC2CD", "#FFC2CD", "#FFC2CD"],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged, index }) => (
          <div
            {...props}
            key={index}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#FF3F35",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
            className="rounded-full"
          >
            <div
              style={{
                height: "10px",
                width: "5px",
                backgroundColor: isDragged ? "#Fff" : "#fff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-40px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
              }}
              className="bg-primary"
            >
              {values[index]}
            </div>
          </div>
        )}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <output style={{ marginTop: "10px" }}>
          <span className="font-serif">₹</span>
          {values[0]}
        </output>
        <output style={{ marginTop: "10px" }}>
          <span className="font-serif">₹</span>
          {values[1]}
        </output>
      </div>
    </div>
  );
};

export default RangeSlider;

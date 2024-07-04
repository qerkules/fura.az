import React, { useState } from "react";
import ReactSlider from "react-slider";

function RangeSlider({ title }) {
    const [value, setValue] = useState([17000, 24000]);

    const renderThumb = (props, state) => (
        <div {...props}>{state.valueNow}</div>
    );

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="group-form">
            <ReactSlider
                ariaLabelledby="slider-label"
                className="horizontal-slider st2"
                min={0}
                max={50000}
                defaultValue={[17000, 24000]}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={renderThumb}
                onChange={handleChange}
            />

            <div className="group-range-title mt-2">
                <label className="d-flex justify-content-between mb-0">
                    <span>{value[0]}$ </span>
                    <span>{value[1]}$</span>
                </label>
            </div>
        </div>
    );
}

export default RangeSlider;

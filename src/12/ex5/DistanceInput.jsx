import React from 'react';

const unitNames = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return (
        <div>
            <label>
                {unitNames[props.unit]} 입력:
                <input
                    value={props.distance}
                    onChange={handleChange}
                    placeholder={`${unitNames[props.unit]}를 입력하세요`}
                />
            </label>
        </div>
    );
}

export default DistanceInput;
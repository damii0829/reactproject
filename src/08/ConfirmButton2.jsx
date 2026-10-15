import React, {useState} from "react";

function ConfirmButton2() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirmed() {
        setIsConfirmed((prevState) => !prevState);
    }

    return (
        <button
            onClick={handleConfirmed}
            disabled={isConfirmed}
        >
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton2;

import React from "react";

function WarningBanner({ warning }) {
    if (!warning) {
        return null;
    }

    return <div className="warning">⚠️ 경고!</div>;
}

export default WarningBanner;
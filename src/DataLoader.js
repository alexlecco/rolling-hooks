import React, { useState, useEffect } from 'react';

export default function DataLoader(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://167.99.228.107/api/stores")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return props.render(data)
}
import {useEffect, useState} from "react";

function useAddress() {
    const [address, setAddress] = useState<string | undefined>();

    useEffect(() => {
        fetch('https://geolocation-db.com/json/')
            .then(res => res.json())
            .then(data => {
                setAddress(data.IPv4);
            })
            .catch(error => console.log(error));
    }, []);

    return address;
}

export default useAddress;

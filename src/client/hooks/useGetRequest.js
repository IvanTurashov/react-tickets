/**
 * Created by turashov on 20.02.2019
 */

import { useState, useEffect } from 'react';
import axios from "axios";

function useGetRequest(initData = null, url, params = null) {
    const [request, setRequest] = useState(false);
    const [data, setData] = useState(initData);

    async function send(cancelToken) {
        setRequest(true);

        try {
            const { data } = await axios.get(url, { params }, cancelToken);

            setData(data);
            setRequest(false);
        } catch (e) {
            setRequest(false);
        }
    }

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        send(source.token);

        return () => {
            source.cancel();
        };
    }, []);

    return [
        request,
        data
    ]
}

export default useGetRequest;
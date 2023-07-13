import { useState, useEffect } from 'react';

//Custom hook

export const useFetch = (url, items) => {
    const [data,setData] = useState(null);

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //loading
    const[loading, setLoading] = useState(false);
    //try catch
    const [error,setError] = useState(null)
    //url
    const [itemId, setItemId] = useState(url)

    const httpConfig = (data, method) => {
        if(method === "POST")
        {
            setConfig({
                method,
                headers: {
                    "Content-type":"application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
        else if(method === "DELETE")
        {
            setConfig({
                method,
                headers: {
                    "Content-type":"application/json",
                }
            });
            setItemId(data)
            setMethod(method);
        }
    };;
    
    useEffect(() => {
        const fetchData = async () => {
            //loading
            try {
                setLoading(true)
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
                setLoading(false)
            }
        };
        fetchData()
    }, [url, callFetch]);
    
    //Refactoring post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST")
            {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
            else if(method === "DELETE")
            {
                const deleteUrl = `${url}/${itemId}`;
                let fetchOptions = [deleteUrl, config];
                console.log(fetchOptions)
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        };

        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}
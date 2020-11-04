import { useEffect, useState } from 'react';
import axios from "axios";
import {APIURL} from "../config";
import {toast} from "react-toastify";

const useQuestionsFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(APIURL + '/api/questions');

                setTimeout(() => {
                    setData(response.data)
                    setLoading(false);
                }, 3000)


            } catch (error) {
                if (error.message) {
                    toast.error(error.message)
                }
                setLoading(false);
            }
        };

        fetchData()
    }, []);

    return { loading, setLoading, data, setData };
};

export default useQuestionsFetch;

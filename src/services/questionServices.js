import axios from 'axios';
import { APIURL } from '../config';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {extractLaravelErrors} from "../utils";

export default class QuestionServices {
    static async create(article) {
        const response = await axios.post(
            `${APIURL}/api/question-form`,
            article,
        ).then(resp => {
            toast.success('Created')

            return resp;
        }).catch(resp => {
            // const errors = resp.response.data.errors;
            const errorStr = extractLaravelErrors(resp)
            toast.error(errorStr)
        });

        return response;
    }
}

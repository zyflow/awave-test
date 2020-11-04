import axios from 'axios';
import { APIURL } from '../config';

export default class QuestionServices {
    static async create(article) {
        const response = await axios.post(
            `${APIURL}/functions/admin/article`,
            article,
        );

        return response;
    }
}

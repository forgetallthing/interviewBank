export declare class QuestionService {
    getClass(): {
        code: string;
        name: string;
        items: ({
            code: string;
            name: string;
            items: {
                code: string;
                name: string;
            }[];
        } | {
            code: string;
            name: string;
            items?: undefined;
        })[];
    }[];
    getQuestion(): {
        question: string;
        class: string;
        level: number;
        answer: string;
    }[];
}

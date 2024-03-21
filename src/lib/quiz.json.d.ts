

declare module "$lib/quiz.json" {
    interface loc {
        lat: string;
        lng: string;
    }
    
    interface step {
        step: number;
        question: string;
        details?: string;
        audioClip?: string;
        questionImg: string;
        answers: string[];
        answerImg: string;
        loc: loc;
        answerText: string;
        
    }
    const Steps: step[];
    export const Step: step;
    
    export default steps;
    
}
export const ssr = false;
import steps from '$lib/quiz.json';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    // make sure the step is valid and in range
    const step = parseInt(params.step);
    const nSteps = steps.length;
    if (isNaN(step) || step < 1) {
        return {
            step: -1,
            prev: 1,
            count: nSteps,
            oob: false,
        };
    }

    if (step > nSteps) {
        return {
            step: -1,
            prev: nSteps,
            count: nSteps,
            oob: true,
        };
    }

    // get the question for the step
    const question = steps[step - 1];
    // send it!
	return {
        step: step,
        prev: step - 1,
        question: question,
        count: nSteps,
        oob: false
	};
}

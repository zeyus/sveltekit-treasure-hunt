export const ssr = false;
// import { get } from 'svelte/store';
import steps from '$lib/quiz.json';
// import { stepIndex } from "$lib/store";

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    if (params.step === undefined || params.step > steps.length || params.step < 1) {
        return {
            step: -1
        };
    }
    const step = parseInt(params.step);
    const question = steps[step - 1];

	return {
        step: step,
        question: question
	};
}

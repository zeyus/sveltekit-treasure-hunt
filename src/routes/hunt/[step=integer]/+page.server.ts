/** @type {import('./$types').PageLoad} */
import steps from '$lib/quiz.json';
export function load({ cookies, params }) {
	const visited = cookies.get('visited');
    const step = cookies.get('step');
    if (step === undefined) {
        cookies.set('step', '1', { path: '/' });
    }
    const curStep = undefined === params.step ? 1 : parseInt(params.step);
    const storedStep = undefined === step ? 1 : parseInt(step);
    if (curStep !== storedStep || curStep > steps.length || curStep < 1) {
        return {
            visited: visited === 'true',
            step: -1
        };
    }

    const question = steps[curStep - 1];

	return {
		visited: visited === 'true',
        step: storedStep,
        question: question
	};
}

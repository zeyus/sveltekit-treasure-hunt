
<script lang="ts">
    import type Step from '$lib/quiz.json';
	import { createEventDispatcher } from 'svelte';
    import { Form, FormGroup, Button, Input } from '@sveltestrap/sveltestrap';

    const dispatch = createEventDispatcher();
    export let question: Step;
    let validated = false;
    let feedback = '';
    let src = question.questionImg;
    let answer = '';
    let showMsg = false;

    $: showMsg = answer.length > 0;
    $: src = question.questionImg || src;
    $: feedback = validated ? 'Korrekt!' : 'Nej, prøv igen!';
    function validate(a: string) {
        question.answers.forEach((o: string) => {
            if (o.toLowerCase() === a.toLowerCase()) {
                validated = true;
            }
        });
    }

    function updateStoreAndMove() {
        if (validated) {
            dispatch('next', { step: true });
        }
    }

    $: validate(answer);
</script>
<h2>{question.question}</h2>
{#if question.details}
    <p>{question.details}</p>
{/if}
<Form {validated} on:submit={(e) => e.preventDefault()}>
<FormGroup>
    Hvad siger du? <Input type="text" placeholder="Svar" feedback="{feedback}" bind:value={answer} valid={validated && showMsg} invalid={!validated && showMsg} />
</FormGroup>
<Button type="submit" on:click={updateStoreAndMove}>checke</Button>
</Form>
<img {src} alt="..." width="50%" />


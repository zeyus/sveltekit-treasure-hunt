<script lang="ts">
    let src="/pirate.jpg"
    import { get } from 'svelte/store';
    import type { PageData } from './$types';
    import { stepIndex } from "$lib/store";
    import { Icon, Button } from '@sveltestrap/sveltestrap';
    import Question from '../../../components/Question.svelte';
    import Answer from '../../../components/Answer.svelte';
    export let data: PageData;
    let step: number;
    src = data.question?.questionImg || src;
    step = parseInt(get(stepIndex));
    console.log('Step:', step);
    console.log('Data Step:', data.step);
    if (step < data.step || data.step === -1) {
        step = -1;
    }
    let answered = step > data.step;
    const check = !answered;
    function showAnswer(e: CustomEvent<{ step: boolean }>) {
        console.log('Showing the answer');
        if (e.detail.step) {
            stepIndex.set(step + 1);
            answered = true;
        }
    }

    function moveToNextStep() {
        console.log('Moving to next step');
        window.location.href = `/hunt/${parseInt(get(stepIndex))}`;
    }

    function clearStoreAndMove() {
        console.log('Clearing store and moving');
        stepIndex.set(1);
        window.location.href = '/hunt/1';
    }
</script>
<style>

</style>
<h1>Skattejagt</h1>
<p><Button color="danger" on:click={clearStoreAndMove} outline><Icon name="trash" /> Nulstil</Button></p>
{#if step === -1}
    <h1>Naughty naughty!</h1>
    <p>Det er ikke tilladt at gå direkte til en side i skattejagten!</p>
    <p>Klik på knappen for at gå tilbage. <Button color="primary" on:click={moveToNextStep}>tilbage</Button></p>
    <img {src} alt="Pirate" width="50%" />
    
{:else if answered !== true}
    <p>Questioner { step }</p>
    <Question question={data.question} on:next={showAnswer} />
{:else}
    <Answer question={data.question} check={check} on:next={moveToNextStep} />
{/if}


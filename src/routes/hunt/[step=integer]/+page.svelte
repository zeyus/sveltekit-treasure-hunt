<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
    let src="/pirate.jpg"
    import { get } from 'svelte/store';
    import type { PageData } from './$types';
    import { stepIndex } from "$lib/store";
    import { Icon, Button, Row, Col, Container } from '@sveltestrap/sveltestrap';
    import Question from '../../../components/Question.svelte';
    import Answer from '../../../components/Answer.svelte';
    export let data: PageData;
    let step: number;

    onMount(() => {
		const interval = setInterval(() => {
			invalidate('/hunt/1');
            invalidate('/hunt/2');
            invalidate('/hunt/3');
            invalidate('/hunt/4');
            invalidate('/hunt/5');
            invalidate('/hunt/6');
            invalidate('/hunt/7');
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

    src = data.question?.questionImg || src;
    step = parseInt(get(stepIndex));
    console.log('Step:', step);
    console.log('Data Step:', data.step);
    let completed = step > data.count && data.oob;
    src = completed ? '/congrats.jpg' : src;
    let showPrevious = (step > 1 && data.step > 1) || (step > data.count && data.oob);
    if (step < data.step || data.step === -1) {
        step = -1;
    }
    
    console.log(data)
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
        completed = false;
        step = parseInt(get(stepIndex));
        goto(base+`/hunt/${parseInt(get(stepIndex))}`, { replaceState: true, invalidateAll: true });
    }

    function moveToPrevStep() {
        console.log('Moving to previous step');
        step = data.prev;
        goto(base+`/hunt/${data.prev}`, { replaceState: true, invalidateAll: true });
    }

    function clearStoreAndMove() {
        console.log('Clearing store and moving');
        completed = false;
        step = 1;
        stepIndex.set(1);
        goto(base+'/hunt/1', { replaceState: true, invalidateAll: true });
    }
</script>
<style>
    h1 {
        font-size: 3.5rem;
        background: -webkit-linear-gradient(#ff00ee, #31b4ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 4.7rem;
        text-align: center;
    }
</style>
<Container fluid>
    <h1>Legegruppens Skattejagt</h1>
</Container>
<Container fluid>
    <Row>
        <Col xs="6" style="text-align: left;">
            {#if showPrevious}
                <Button color="primary" on:click={moveToPrevStep} outline><Icon name="arrow-left" /> Forrige</Button>
            {:else}
                &nbsp;
            {/if}
        </Col>
        <Col xs="6" style="text-align: right;"><Button class="mb-1 mx-auto" color="danger" on:click={clearStoreAndMove} outline><Icon name="trash" /> Nulstil</Button></Col>
    </Row>
</Container>
{#if completed}
    <Container fluid>
        <Row><h2>Tillykke, du har gennemført skattejagten med succes!!</h2></Row>
        <Row><p>Tak fordi du spiller!</p></Row>
        <Row><img src={base + src} alt="Tak" class="img-fluid" /></Row>
    </Container>
{:else if step === -1}
    <Container fluid>
        <Row><h2>Naughty naughty!</h2></Row>
        <Row><p>Det er ikke tilladt at gå direkte til en side i skattejagten!</p></Row>
        <Row><p>Klik på knappen for at gå tilbage.</p></Row>
        <Row><Button color="primary" on:click={moveToNextStep}>tilbage</Button></Row>
        <Row><img src={base + src} alt="Pirate" class="img-fluid" /></Row>
    </Container>
{:else if answered !== true}
    <Container fluid><h2 class="mt-4">Questioner { step }</h2></Container>
    <Question question={data.question} on:next={showAnswer} />
{:else}
    <Answer question={data.question} check={check} on:next={moveToNextStep} />
{/if}


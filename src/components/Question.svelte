
<script lang="ts">
    import type Step from '$lib/quiz.json';
	import { createEventDispatcher } from 'svelte';
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
        Form,
        FormGroup,
        Button,
        Input,
        Icon
    } from '@sveltestrap/sveltestrap';

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
        validate(answer);
        if (validated) {
            dispatch('next', { step: true });
        }
    }

    // $: validate(answer);
</script>
<style>
    .quizimg {
        text-align: center;
        margin: 10px auto;
    }
</style>
<Card>
    <CardHeader>
        <CardTitle style="text-align:center;">➡️<span style="color: #FFAAFF;">{question.question}</span>⬅️</CardTitle>
    </CardHeader>
    <CardBody>
        {#if question.details}
            <p>{question.details}</p>
        {/if}
        <Form {validated} on:submit={(e) => e.preventDefault()}>
            <FormGroup>
                Hvad siger du? <Input type="text" placeholder="Svar" feedback="{feedback}" bind:value={answer} valid={validated && showMsg} invalid={!validated && showMsg} />
            </FormGroup>
        </Form>
    </CardBody>
    <CardFooter>
        <Button type="submit" on:click={updateStoreAndMove}>checke</Button>
    </CardFooter>
</Card>
<div class="quizimg">
    <img {src} alt="..." width="50%" />
</div>


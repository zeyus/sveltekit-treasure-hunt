
<script lang="ts">
    import { base } from '$app/paths';
    import type Step from '$lib/quiz.json';
	import { createEventDispatcher } from 'svelte';
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Container,
        CardTitle,
        Form,
        FormGroup,
        Button,
        Input,
        Row,
    } from '@sveltestrap/sveltestrap';

    const dispatch = createEventDispatcher();
    export let question: Step;
    let validated = false;
    let feedback = '';
    let src = question.questionImg;
    let answer = '';
    let showMsg = false;

    // $: showMsg = answer.length > 0;
    $: src = question.questionImg || src;
    $: feedback = validated ? 'Korrekt!' : 'Nej, prøv igen!';
    function validate(a: string) {
        showMsg = true;
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
<Container fluid>
    <Container class="mb-3" fluid>Besvar venligst følgende spørgsmål for at finde ud af, hvor du skal henvende dig</Container>
    <Card class="mb-5">
        <CardHeader class="bg-primary">
            <CardTitle style="text-align:center;"><span style="color: #FFFFFF;">{question.question}</span></CardTitle>
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
            <Button type="submit" color="success" on:click={updateStoreAndMove}>Checke</Button>
        </CardFooter>
    </Card>
</Container>
<Container fluid>
    <img src={base + src} alt="..." class="img-fluid" />
</Container>


<script lang="ts">
    let src="/pirate.jpg"
    import type { PageData } from './$types';
    import { Button } from '@sveltestrap/sveltestrap';
    export let data: PageData;

    if (data.visited) {
        console.log('Visited!');
    } else {
        console.log('Not visited!');
        // redirect to the start page
        window.location.href = '/';
    }

</script>
<style>

</style>
{#if data.step === -1}
    <h1>Naughty naughty!</h1>
    <p>Det er ikke tilladt at gå direkte til en side i skattejagten!</p>
    <p>Klik på knappen for at gå tilbage. <Button color="primary" on:click="{() => window.location.href = '/hunt/1'}">tilbage</Button></p>
    <img {src} alt="Pirate" width="50%" />
    
{:else}
    <h1>Skattejagt</h1>
    <p>Questioner { data.step }</p>
    <h2>{data.question?.question}</h2>
    {#if data.question?.details}
        <p>{data.question?.details}</p>
    {/if}
{/if}


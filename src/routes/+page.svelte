<script lang="ts">
    import { Button } from '@sveltestrap/sveltestrap';

    function startHunt() {
        console.log('Starting the hunt!');
        window.location.href = '/hunt/1';
    }
</script>
<style>
    h1 {
        font-size: 4rem;
        background: -webkit-linear-gradient(#ff00ee, #31b4ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 7rem;
    }
</style>
<h1>Skattejagt</h1>
<p>Tryk på knappen for at starte!</p>

<Button color="primary" on:click="{startHunt}">Begynde at jage!</Button>

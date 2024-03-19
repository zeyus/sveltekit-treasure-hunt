<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { Button, Row, Col } from '@sveltestrap/sveltestrap';
    let src = base + "/hunt.jpg";
    function startHunt() {
        console.log('Starting the hunt!');
        goto(base + '/hunt/1');
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
        text-align: center;
    }
</style>
<Row>
    <Col style="text-align: center;"><h1>Legegruppens Skattejagt</h1></Col>
</Row>
<Row>
    <Col style="text-align: center;">Tryk på knappen for at starte!</Col>
</Row>
<Row>
    <Col style="text-align: center;">
        <Button color="primary" on:click="{startHunt}">Begynde at jage!</Button>
    </Col>
</Row>
<Row>
    <Col style="text-align: center;"><img {src} alt="treasure hunt" width="50%" style="margin: 10px auto;" /></Col>
</Row>

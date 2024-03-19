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
        FormGroup,
        Button,
        Icon,
        Row,
        Col,
        Container
    } from '@sveltestrap/sveltestrap';

    const dispatch = createEventDispatcher();
    export let question: Step;
    export let check: boolean;
    let src = question.answerImg;

    let curLocation = { lat: 0, lng: 0 };
    let closeEnough: boolean = false;

    function measure(lat1: number, lon1: number, lat2: number, lon2: number){  // generally used geo measurement function
        var R = 6378.137; // Radius of earth in KM
        var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
        var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d * 1000; // meters
    }
    
    // navigator.geolocation.getCurrentPosition((position) => {
    //         curLocation.lat = position.coords.latitude;
    //         curLocation.lng = position.coords.longitude;
    //         closeEnough = !check || canProceed();
    //     },
    //     (error) => {
    //         console.log(error);
    //     },
    //     {maximumAge:10000, timeout:5000, enableHighAccuracy: true}
    // );

    function nextStep() {
        dispatch('next', { step: true });
    }

    function canProceed() {
        return measure(curLocation.lat, curLocation.lng, question.loc.lat, question.loc.lng) < 10;
    }
    
    function getPos() {
        navigator.geolocation.getCurrentPosition((position) => {
            curLocation.lat = position.coords.latitude;
            curLocation.lng = position.coords.longitude;
            closeEnough = !check || canProceed();
        },
        (error) => {
            console.log(error);
            // who cares, if they don't allow gps just let them go
            closeEnough = true;
        },
        {maximumAge:5000, timeout:5000, enableHighAccuracy: true}
        );
    }

</script>
<style>
    .quizimg {
        text-align: center;
        margin: 10px auto;
    }
</style>
<Card>
    <CardHeader>
        <CardTitle style="text-align:center;">🌟 sPerfekt! 🌟</CardTitle>
        <CardText>{question.answerText}</CardText>
    </CardHeader>
    <CardBody>
        <Row>
            <Col><CardSubtitle>din næste placering er</CardSubtitle></Col>
            <Col><CardText>{question.loc.lat}, {question.loc.lng}</CardText></Col>
        </Row>
        <Row>
            <Col><CardSubtitle>du er her</CardSubtitle></Col>
            <Col><CardText>{curLocation.lat}, {curLocation.lng} <Button on:click={getPos} color="success"><Icon name="recycle"/></Button></CardText></Col>
        </Row>
    </CardBody>
    <CardFooter>
        <Row>
            <Col><Icon name="pin-map-fill" /> åbne kortet: <Button href="http://maps.apple.com/maps?q={question.loc.lat},{question.loc.lng}"><Icon name="apple" /></Button>
            <Button href="http://maps.google.com/maps?q={question.loc.lat},{question.loc.lng}"><Icon name="android" /></Button></Col>
            <Col style="text-align: right;"><Button color="primary" on:click={nextStep} disabled={!closeEnough}>Næste</Button></Col>
        </Row>
    </CardFooter>
</Card>
<div class="quizimg">
    <img {src} alt="..." width="50%" />
</div>
<script lang="ts">
    import { base } from '$app/paths';
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
        Container,
        Button,
        Icon,
        Row,
        Col,
        Toast,
        Spinner
    } from '@sveltestrap/sveltestrap';

    const dispatch = createEventDispatcher();
    export let question: Step;
    export let check: boolean;
    let src = question.answerImg;

    let curLocation = { lat: 0, lng: 0 };
    let closeEnough: boolean = false;
    let isOpen = false;

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

    function nextStep() {
        dispatch('next', { step: true });
    }

    function canProceed() {
        return measure(curLocation.lat, curLocation.lng, question.loc.lat, question.loc.lng) < 10;
    }
    function round(num: number, fractionDigits: number): number {
        return Number(num.toFixed(fractionDigits));
    }
    let distance = 0.0;
    function getPos() {
        isOpen = true;
        navigator.geolocation.getCurrentPosition((position) => {
            curLocation.lat = position.coords.latitude;
            curLocation.lng = position.coords.longitude;
            distance = round(measure(curLocation.lat, curLocation.lng, question.loc.lat, question.loc.lng), 2);
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
    
    function onload(el: HTMLElement) {
        getPos();
    };

</script>
<Container fluid>
    <Card class="mb-5">
        <CardHeader>
            <CardTitle style="text-align:center;">🌟 Perfekt! 🌟</CardTitle>
            <CardText>{question.answerText}</CardText>
        </CardHeader>
        <CardBody class="py-0">
            <Row class="border-bottom py-2">
                <Col xs="6" class="align-self-center"><b>næste sted</b></Col>
                <Col xs="auto"><CardText><Row>{question.loc.lat}</Row><Row>{question.loc.lng}</Row></CardText></Col>
            </Row>
            <Row class="py-2">
                <Col xs="6">
                        <Row>
                            <b>du er her</b>
                        </Row>
                        <Row>
                            <span use:onload>
                                ({distance} m)
                            </span>
                        </Row>
                </Col>
                <Col xs="3">
                    <CardText>
                        <Row>{curLocation.lat}</Row>
                        <Row>{curLocation.lng}</Row>
                    </CardText>
                </Col>
                <Col xs="2" class="align-self-center"><!-- autohide -->
                    <Button on:click={getPos} color="success"><Icon name="recycle"/></Button>
                </Col>
                <Col xs="1" class="align-self-center">
                    <Toast class="border-0 shadow-none" color="info" autohide delay={2000} fade {isOpen} on:close={() => (isOpen = false)}>
                        <Spinner size="sm" color="info" />
                    </Toast>
                </Col>
            </Row>
        </CardBody>
        <CardFooter>
            <Row>
                <Col xs="8">
                    <Icon name="pin-map-fill" /> åbne kortet: 
                    <Button href="http://maps.apple.com/maps?q={question.loc.lat},{question.loc.lng}" target="_blank">
                        <Icon name="apple" />
                    </Button>
                    <Button href="http://maps.google.com/maps?q={question.loc.lat},{question.loc.lng}" target="_blank">
                        <Icon name="android" />
                    </Button>
                </Col>
                <Col xs="4" style="text-align: right;"><Button color="primary" on:click={nextStep} disabled={!closeEnough}>Næste</Button></Col>
            </Row>
        </CardFooter>
    </Card>
</Container>
<Container fluid>
    <img src={base + src} alt="..." class="img-fluid" />
</Container>
<svelte:head>
    <title>Arts By Lehwa</title>
</svelte:head>

<script lang="ts">
    import Nav from "../components/nav.svelte";
    import Header from "../components/header.svelte";
    import Portfolio from "../components/portfolio.svelte";

    let painting = $$props.painting;
</script>

<Nav/>
<Header/>
<main>
    <Portfolio painting={painting} />
</main>




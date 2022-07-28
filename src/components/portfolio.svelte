<script lang="ts">
    import { urlFor } from "../routes/index"
    export let painting: any;
    //console.log("from port: " + JSON.stringify(painting[0]));
</script>

<section>
    <div class="wrapper">
        <h1>My Works</h1>
    </div>
    <div class="image-gallery">
        {#if painting}
            {#each painting[0].images as image}
            <img class="gallery-img" src={urlFor(image).auto('format').url()} alt="" />
            {/each}
        {/if}
    </div>
</section>

<style>
    section {
        background-color: #1B1D21;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        background-color: #1B1D21;
        color: #FEF8F5;
        padding: 1rem 2rem;
    }

    h1 {
        font-family: 'Playfair Display';
        font-size: 2rem;
        width: 14.375rem;
        border-bottom: 1px solid #ECAF1C;
        }
    .image-gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.2rem;
    }
    .gallery-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
<script lang="ts">
    import { urlFor } from "../routes/index"
    export let painting: any;
</script>

<section>
    <div class="wrapper">
        <h1>My Works</h1>
    </div>
    <div class="image-gallery">
        {#if painting}
        <img src={urlFor(painting.image).url()} alt="" />
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
</style>
<script>
    import lehwaWebP from '../lib/lehwa.webp';
    import lehwaPNG from '../lib/lehwa.png';
</script>

<header>
    <div class="header-text-container">
        <h1>MABUHAY!<br>I'M LEHWA <span class="text-gold">GOLD</span></h1>
        <h2>painter <span class="text-red">/</span> digital artist</h2>
    </div>

    <picture>
        <source srcset="{lehwaWebP}" type="image/webp">
        <source srcset="{lehwaPNG}" type="image/png">
        <img src="{lehwaPNG}" alt="The artist Lehwa Gold">
    </picture>
</header>

<style>
    header {
        display: flex;
        justify-content: space-around;
        height: 31.25rem;
        background-color: #1B1D21;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
    }

    header h1 {
        font-size: 2.25rem;
        color: #FEF8F5;
    }

    header h2 {
        font-size: 1.25rem;
        color: #FEF8F5;
    }

    .header-text-container {
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    picture {
        align-self: flex-end;
    }

    picture img {
        width: 25rem;
        height: 25rem;
    }

    .text-gold {
        color: #ECAF1C;
    }

    .text-red {
        color: #FF5858;
    }

</style>
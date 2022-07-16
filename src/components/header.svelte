<script>
    import lehwaWebP from '../lib/lehwa.webp';
    import lehwaPNG from '../lib/lehwa.png';
</script>

<header class="wrapper">
    <span id="span-grid-position">
        <h1>MABUHAY!<br>I'M LEHWA <span id="text-gold">GOLD</span></h1>
        <h2>painter <span id="text-red">/</span> digital artist</h2>
    </span>

    <picture>
        <source srcset="{lehwaWebP}" type="image/webp">
        <source srcset="{lehwaPNG}" type="image/png">
        <img src="{lehwaPNG}" alt="The artist Lehwa Gold">
    </picture>
</header>

<style>
    header {
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

    picture {
        align-self: end;
        grid-column: 10/13;
    }

    #span-grid-position {
        grid-column: 2/8;
    }

    #text-gold {
        color: #ECAF1C;
    }

    #text-red {
        color: #FF5858;

    }

</style>
<header>
    <nav class="wrapper">
        <h1>Arts By Lehwa</h1>

        <ul>
            <li>
            <a href="/#">Portfolio</a>
            </li>
            <li>
            <a class="marginLeft" href="/#about">About Me</a>
            </li>
            <li>
            <a class="marginLeft" href="/#contact">Contact</a>
            </li>
        </ul>
    </nav>
</header>

    <style>
        nav {
            align-items: center;
            background-color: #202020;
            height: 64px;
            font-family: 'Playfair Display', serif;
            filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
        }

        nav h1 {
            grid-column: 1/5;
            font-size: 24px;
            color: #FEF8F5;
        }

        nav ul {
            grid-column: 5/13;
            justify-self: end;
            display: flex;
        }
        
        nav ul li a {
            color: #FEF8F5;
            font-size: 18px;
            text-decoration: none;
        }
        nav ul li a:hover {
            color: #ECAF1C;
        }

        .marginLeft {
            margin-left: 1rem;
        }
    </style>
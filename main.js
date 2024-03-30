const btnTheme = document.querySelector('.switch-theme-btn');
        const iconTheme = document.querySelector('.switch-theme-icon');
        const body = document.querySelector('body');
        const logo = document.querySelector('.logo');

        //to save the dark  mode use the object "local storage"
        //function that stores the value true if the dark mode is activated or false if it is not
        function store(value) {
            localStorage.setItem('dark-theme', value);
        }

        //function that indicates if the dark mode property exists. It loads the page as we had left it
        function load() {
            const darkTheme = localStorage.getItem('dark-theme');

            //if the dark mode was never activated
            if (!darkTheme) {
                store(false);
                iconTheme.src = "img/sun.png";
            } else if (darkTheme == 'true') { //if the dark mode is activated
                body.classList.add('dark-theme');
                iconTheme.src = "img/moon.png";
                logo.src = "img/logo-white.png";
            } else { //if the dark mode exists but is disabled
                iconTheme.src = "img/sun.png";
                logo.src = "img/logo.png";
            }
        }

        load();

        btnTheme.addEventListener('click', () => {
            body.classList.toggle("dark-theme");
            // iconTheme.classList.add('animated');

            //save true or false
            store(body.classList.contains('dark-theme'));

            if (body.classList.contains("dark-theme")) {
                iconTheme.src = "img/moon.png";
                logo.src = "img/logo-white.png";
            } else {
                iconTheme.src = "img/sun.png";
                logo.src = "img/logo.png";
            }

            // setTimeout( () => {
            //     iconTheme.classList.remove('animated');
            // }, 500)
        });
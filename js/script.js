
    const menuButton = document.querySelector('.nav-menu__button');
    const menu = document.querySelector('.nav-menu');
    const menuList = document.querySelector('.nav-menu__list');
    const lock = document.querySelector('html');
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.nav-logo');

        menuButton.addEventListener('click', function(){
            menuButton.classList.toggle('is-active')
            menu.classList.toggle('is-active')

            if (menu.classList.contains('is-active')){
                menuButton.classList.add('color')
                menuList.classList.add('is-active')
                lock.classList.add('locked')
                nav.classList.remove("scrolled")
            }

            else {
                menuButton.classList.remove('color')
                menuList.classList.remove('is-active')
                lock.classList.remove('locked')
            }

        });

        const onScroll = () => {
        
          const scroll = document.documentElement.scrollTop
        
          if (scroll > 0) {
            nav.classList.add("scrolled");
            logo.classList.add("colored");


          } else {
            nav.classList.remove("scrolled");
            logo.classList.remove("colored");
          }
        }
        
        window.addEventListener('scroll', onScroll);

        if (nav.classList.contains("scrolled")){
            menuButton.addEventListener('click', function(){
                nav.classList.toggle("scrolled")
            })
            
        }

        else {
            nav.classList.remove("changed")
        }

        let links = document.querySelectorAll('body a[href*="#"]');

        for (link of links){

            if(link){
                link.addEventListener('click', function(e){

                    menuButton.classList.contains('is-active')
                        menu.classList.toggle('is-active')
                        menuList.classList.toggle('is-active')
                        nav.classList.remove("scrolled")
                        lock.classList.remove('locked')
                    

                    e.preventDefault();
                    linkId = this.getAttribute('href');
                    console.log(linkId)
                    document.querySelector(linkId).scrollIntoView({
                        
                        behavior: "smooth",
                        block: "start"
                    });

                });
            }

        }

        function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show');
              }
              else{
                change.target.classList.remove('element-show')
              }
            });
          }
          
          let options = {
            threshold: [0.5] };
          let observer = new IntersectionObserver(onEntry, options);
          let elements = document.querySelectorAll('.element-animation');
          
          for (let elm of elements) {
            observer.observe(elm);
          }
        
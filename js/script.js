

function tabsFun(){
    const tabParent = document.querySelector('.tabheader__items'),
    tabs = tabParent.querySelectorAll('.tabheader__item')
    tabContent = document.querySelectorAll('.tabcontent')

    function hideContent (){
        tabContent.forEach((item ) =>{
            item.classList.add('hide')
            item.classList.remove('show')
        })

        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active')
        })
    }

    function showContent (i = 0){
        tabContent[i].classList.add('show')
        tabContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')

    }
    
    hideContent()
    showContent()

    tabParent.addEventListener('click',(e) =>{
        const target = e.target

        if (target && target.classList.contains('tabheader__item'))
        {
            tabs.forEach((item, idx) =>{
                if(target == item){
                    hideContent()
                    showContent(idx)
                }
            })
        }
    })
}
tabsFun()
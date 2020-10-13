
        document.querySelector('#open').addEventListener('click',()=>{
            document.querySelector('.Navbar').style.width='150px'
        })
        document.querySelector('#close').addEventListener('click',()=>{
            document.querySelector('.Navbar').style.width='0px'
        })
        document.querySelector('#btn').addEventListener('click',()=>{
            document.querySelector('.Learn-More').style.display = 'flex';
            document.querySelector('.Learn-More').style.flexDirection = 'column';
            document.querySelector('.Learn-More').style.justifyContent = 'center';
            document.querySelector('.Learn-More').scrollIntoView();
        });
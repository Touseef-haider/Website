
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
images = [];
images[0] = './Images/image1.jpg';
images[1] = './Images/image2.jpg';
images[2] = './Images/image3.jpg';
images[3] = './Images/image4.jpg';
images[4] = './Images/image5.jpg';
images[5] = './Images/image6.jpg';
let i = 0;
setInterval(() => {
    if ( i < images.length ) {
        document.querySelector('#image').src = images[i];
        i = i + 1;
        if (i==5) {
            i=0;
        }
    }
}, 2000);

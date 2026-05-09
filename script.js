const contentPage = document.getElementById('contentPage');
contentPage.className = "flex justify-center items-center h-screen";


function render(id){
    if(id === 'loginPage'){
        contentPage.innerHTML = getLoginPage();
    }   
}

render('loginPage');
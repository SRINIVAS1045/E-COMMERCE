const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `        <div class="nav">
        <a href="index.html"> <img src="./ASSETS/logo1.png" class="site-logo"  alt="Logo"></a>
            <div class="nav-items">
                <div class="search">
                <input type="text" class="search-box" placeholder="search brand, products">
                <button class="search-btn">search</button></div>
                <a href="#"><img src="./ASSETS/user.png"></a>
                <a href="#"><img src="./ASSETS/shopcart.png" width=50px id="cart"></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Mobiles</a></li>
        <li class="link-item"><a href="#" class="link">Fashion</a></li>
        <li class="link-item"><a href="#" class="link">Electronics</a></li>
        <li class="link-item"><a href="#" class="link">Home needs</a></li>
    </ul>`;
}
createNav();
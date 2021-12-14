const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
            <img src="ASSETS/footer.png" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Top selling</li><br>
                    <li><a href="#" class="footer-link">Mobiles</a></li><br>
                    <li><a href="#" class="footer-link">Clothing</a></li><br>
                    <li><a href="#" class="footer-link">Home needs</a></li><br>
                    <li><a href="#" class="footer-link">Appliances</a></li><br>
                    <li><a href="#" class="footer-link">Shoes</a></li><br>
                    <li><a href="#" class="footer-link">Accesories</a></li><br>
                </ul>
                <ul class="category">
                    <li class="category-title">Payment Methods</li><br>
                    <li><a href="#" class="footer-link"><pre>Master  <i class="fab fa-cc-mastercard"></i></pre></a></li><br>
                    <li><a href="#" class="footer-link"><pre>PayPal  <i class="fab fa-paypal"></i></pre></a></li><br>
                    <li><a href="#" class="footer-link"><pre>American Express  <i class="fab fa-cc-amex"></i></pre></a></li><br>
                    <li><a href="#" class="footer-link"><pre>Visa  <i class="fab fa-cc-visa"></i></pre></a></li><br>
                    <li><a href="#" class="footer-link"><pre>Discover  <i class="fab fa-cc-discover"></i></pre></a></li><br>
                    <li><a href="#" class="footer-link"><pre>Secure Payments  <i class="fas fa-lock"></i></pre></a></li><br>
                </ul>
            </div>
        </div>
            <p class="footer-title">About company</p>
            <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quae soluta corporis laboriosam omnis a provident est reiciendis quisquam, maiores, hic eaque! Dolorum reiciendis qui veniam rerum, rem vero dignissimos! Obcaecati a, ad mollitia officia quas corrupti vero delectus labore porro. Facilis accusamus corrupti inventore quis laudantium, eum ab, necessitatibus quod dicta, maxime earum placeat quia sequi ipsam totam! Aut nihil quis velit ab, minus cupiditate perspiciatis itaque enim doloremque? Nihil recusandae magnam quibusdam voluptas molestias maxime dolores minima iure nobis perferendis! Veritatis eligendi quos facere possimus nam praesentium quisquam voluptatum sapiente magni! Quia dolorem, error voluptatibus obcaecati consequuntur placeat.</p>
            <p class="info">support emails - help@byit.com , customersupport@byit.com</p>
            <p class="info">telephone - 180 00 00 001 , 180 00 00 002</p>
            <div class="footer-social-container">
                <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">Privacy Policy</a>
                </div>
                <div>
                <a href="#" class="social-link">Instagram  <i class="fab fa-instagram"></i></a>
                <a href="#" class="social-link">Facebook<i class="fab fa-facebook"></i></a>
                <a href="#" class="social-link">Twitter<i class="fab fa-twitter-square"></i></a>
                </div>
            </div>
            <p class="footer-credit"><a href="#sliders">BY-IT : JUST BUY IT</a></p>`;
}
createFooter();
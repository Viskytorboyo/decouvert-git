const menu = `
<a class="navbar-brand" href="#">Git</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
    <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
    <li class="nav-item"><a class="nav-link" href="presentation.html">Presentation</a></li>
    <li class="nav-item"><a class="nav-link" href="emmet.html">Emmet</a></li>
</ul>
</div>
`;
document.getElementById("navigation").innerHTML = menu;
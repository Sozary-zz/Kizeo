<div class="jumbotron">
  <h1 class="display-3">Allokizeo</h1>
  <p class="lead">Liste des films</p>
  <p>
    <div class="button-group sort-by-button-group">
      <button type="button" data-sort-value="title,rate,year" class="btn btn-primary">Trier par titre</button>
      <button type="button" data-sort-value="year,rate,title" class="btn btn-primary">Trier par année</button>
      <button type="button" data-sort-value="rate,title,year" class="btn btn-primary">Trier par notation</button>
    </div>
  </p>
  <hr class="my-4">
  <p class="lead">
    <div id="grid">
      <div id="loader"></div>
    </div>
  </p>
</div>

<div class="modal fade" id="selectedMovie" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title"></h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-pic">
          <img class="_pic" src="" alt="">
        </div>
        <h5 class="modal-directors text-primary">Créé par <span class="directors"></span></h5>
        <h5 class="modal-stars text-primary">Avec <span class="stars"></span><h5>
        <h5 class="modal-writters text-primary">Écris par <span class="writters"></span></h5>
        <hr>
        <h6 class="modal-year text-muted">Sorti en <span class="_year"></span></h6>
        <h6 class="modal-rate text-muted">Avec une notation de <span class="_rate"></span>/5</h6>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>

<script src="js/welcome.js">
</script>
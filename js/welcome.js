var qsRegex;
let createContent = (array) => {
  let grid = document.querySelector('#grid')

  for (let i = 0; i < array.length; i++) {
    let div = []
    let p = document.createElement("p")
    let img = document.createElement("img")

    img.setAttribute('src', array[i].pic)

    div.push(document.createElement("div"))
    div.push(document.createElement("div"))
    div.push(document.createElement("div"))
    div.push(document.createElement("div"))
    div.push(document.createElement("div"))

    div[0].classList.add('movie')
    div[0].setAttribute('data-rate', array[i].rate)
    div[0].setAttribute('onclick', 'displayMovie(this)')
    div[1].classList.add('pic')
    div[1].appendChild(img)

    div[2].classList.add('title')
    div[2].appendChild(document.createTextNode(array[i].title))

    div[3].classList.add('year')
    div[3].appendChild(document.createTextNode(array[i].year))

    div[4].classList.add('rate')

    p.appendChild(document.createTextNode(array[i].rate + '/5'))
    div[4].appendChild(p)

    div[0].appendChild(div[4])
    div[0].appendChild(div[1])
    div[0].appendChild(div[2])
    div[0].appendChild(document.createElement("hr"))
    div[0].appendChild(div[3])

    grid.appendChild(div[0])
  }
}
let debounce = (fn, threshold) => { // sinon ca va checker toutes les millisecondes c est pas ce qu on veut
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout(timeout);
    var args = arguments;
    var _this = this;

    function delayed() {
      fn.apply(_this, args);
    }
    timeout = setTimeout(delayed, threshold);
  };
}
let createGridDisplay = () => {
  var $grid = $('#grid').isotope({
    itemSelector: '.movie',
    getSortData: {
      title: '.title',
      year: '.year parseInt',
      rate: '[data-rate] parseInt'
    },
    filter: function() {
      return qsRegex ? $(this).text().match(qsRegex) : true;
    }
  })
  $('.sort-by-button-group').on('click', 'button', function() {
    var sortValue = $(this).attr('data-sort-value');

    sortValue = sortValue.split(',');
    $grid.isotope({
      sortBy: sortValue
    });
  })
  var quicksearch = $('#search').keyup(debounce(function() {
    qsRegex = new RegExp(quicksearch.val(), 'gi');
    $grid.isotope();
  }, 200));

  setTimeout(() => {
    $('#grid').fadeIn()
  }, 500)

  setTimeout(() => {
    $('#loader').fadeOut()
    $grid.isotope({
      sortBy: 'random'
    });
  }, 500)

}
let displayMovie = (item) => {
  $.ajax({
    url: "?action=getMovie&title=" + item.children[2].innerText,
    success: function(result) {
      if (result != "0x0") {
        let res = JSON.parse(result)
        $('.modal-title').text(res.title)
        $('._pic').attr('src', res.pic)
        $('._rate').text(res.rate)
        $('._year').text(res.year)
        $('.directors').text(res.directors.toString())
        $('.stars').text(res.stars.toString())
        $('.writters').text(res.writters.toString())

        $('#selectedMovie').modal('show');
      }
    }
  })
}
$.ajax({
  url: "?action=getMovies",
  success: function(result) {
    $('#grid').hide()
    createContent(JSON.parse(result))
    createGridDisplay()
  }
})
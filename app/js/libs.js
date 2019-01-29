const context = {
  title: 'Welcome to Musicon',
  button: 'Shop now',
  body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
  instruments:
    [{
      image: 'img/electronic-keyboard.png',
      name: 'Electronic Keyboard',
      description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
      price: '$1,999.00',
      sale: '$1,699.89',
      moreInfoClick: 'click_piano',
      moreInfo: 'more_info_piano',
      icon: 'img/synthesizer-icon.png'
    },
    {
      image: 'img/electric-guitar.png',
      name: 'Electric Guitar',
      description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
      price: '$599.99',
      moreInfoClick: 'click_elguitar',
      moreInfo: 'more_info_elguitar',
      icon: 'img/electric-guitar-icon.png'
    },
    {
      image: 'img/bass-guitar.jpg',
      name: 'Bass Guitar',
      description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
      price: '$624.99',
      moreInfoClick: 'click_bassguitar',
      moreInfo: 'more_info_bassguitar',
      icon: 'img/bass-guitar-icon.png'
    },
    {
      image: 'img/drum-kit.png',
      name: 'Drum Kit',
      description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: '$649.00',
      sale: '$349.00',
      moreInfoClick: 'click_drumkit',
      moreInfo: 'more_info_drumkit',
      icon: 'img/snare-drum-icon.png'
    },
    {
      image: 'img/violin.png',
      name: 'Violin',
      description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
      price: '$245.00',
      sale: '$210.00',
      moreInfoClick: 'click_violin',
      moreInfo: 'more_info_violin',
      icon: 'img/violin-icon.png'
    },
    {
      image: 'img/custom-guitar.png',
      name: 'Custom guitar',
      description: 'Unique and incredibly hight-quality gutar for great sound and style.',
      price: '$2500.00',
      moreInfoClick: 'click_custom_guitar',
      moreInfo: 'more_info_custom_gutar',
      icon: 'img/electric-guitar-icon.png'
    }
  ]
};

//берем скрипт handlebars
const source = document.getElementById('templateHB').innerHTML;

//создаем шаблон с помощью функции шаблонирования
const template = Handlebars.compile(source);

//передаем наш объект context в шаблон
const compiledHTML = template(context);

//берем элемент к которому мы хотим прменить шаблон
const mainContent = document.querySelector('.main_content');

//закидываем туда шаблон
mainContent.innerHTML = compiledHTML;

///jQuery effects

$(document).ready(()=>{
// button shadow
  $('.button').on('mouseenter', event=>{
    $(event.currentTarget).addClass('button_active');
  }).on('mouseleave', event=>{
    $(event.currentTarget).removeClass('button_active');
  });

  //more information toggle
  context.instruments.forEach(e=>{
    $(`#${e.moreInfoClick}`).on('click', ()=>{
      $(`#${e.moreInfo}`).slideToggle('slow');
    });
  });

//for ready
let $headerHeightRd = $('header').innerHeight();
$('section').css('margin-top', $headerHeightRd);
console.log($headerHeightRd);

//for resize
$(window).resize(()=>{
  let $headerHeightRs = $('header').innerHeight();
  $('section').css('margin-top', $headerHeightRs);
  console.log($headerHeightRs);
})

//toggler click & margin top for section in store.html when button toggle
$('.fas').on('click',()=>{
  $('.container').slideToggle('slow', ()=>{
    let $headerHeightCl = $('header').innerHeight();
    $('section').css('margin-top', $headerHeightCl);
    console.log($headerHeightCl);
  });
});

});
